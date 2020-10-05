import { PayloadAction } from '@reduxjs/toolkit';
import {
  ofType,
  ActionsObservable,
  Epic,
  StateObservable,
} from 'redux-observable';
import {
  map,
  catchError,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  withLatestFrom,
} from 'rxjs/operators';
import { from, of } from 'rxjs';
import {
  placesService,
  PlacesResponseInterface,
} from '@white-label-airline/services/places';
import { equals } from 'ramda';

import { errorSlice } from '../error/error.slice';
import { RootStateInterface } from '../root/root-state.interface';
import { languageSelectors } from '../language/language.selectors';

import { placesSlice, GetPlacesPayload } from './places.slice';

const getPlacesEpic: Epic = (
  action$: ActionsObservable<PayloadAction<GetPlacesPayload>>,
  states$: StateObservable<RootStateInterface>
) =>
  action$.pipe(
    ofType(placesSlice.actions.getPlaces.type),
    debounceTime(500),
    distinctUntilChanged(equals),
    withLatestFrom(states$.pipe(map(languageSelectors.getLanguage))),
    switchMap(([action, language]) => {
      const { payload } = action as PayloadAction<GetPlacesPayload>;
      return from(
        placesService.getPlaces(
          payload.country,
          payload.currency,
          language,
          payload.query
        )
      ).pipe(
        map((response: PlacesResponseInterface) =>
          placesSlice.actions.getPlacesSuccess(response.Places)
        ),
        catchError((error) => of(errorSlice.actions.handleError(error)))
      );
    })
  );

export const placesEpics = [getPlacesEpic];