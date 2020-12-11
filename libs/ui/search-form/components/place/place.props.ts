import { Dispatch } from '@reduxjs/toolkit';
import { WlaCountry } from '@white-label-airline/services/countries';
import { WlaCurrency } from '@white-label-airline/services/currencies';
import { WlaPlace } from '@white-label-airline/services/places';
import {
  WlaRootState,
  placesSelectors,
  placesSlice,
} from '@white-label-airline/store';

import { FormFieldProps } from '../../../models/form-field-props.interface';

export const mapStateToProps = (state: WlaRootState) => {
  return {
    places: placesSelectors.getPlaces(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getPlaces({
      country,
      currency,
      query,
    }: {
      country: WlaCountry;
      currency: WlaCurrency;
      query: string;
    }) {
      dispatch(
        placesSlice.actions.getPlaces({
          country: country.Code,
          currency: currency.Code,
          query,
        })
      );
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type PlaceProps = mapStateToPropsType &
  mapDispatchToPropsType &
  FormFieldProps & {
    country: WlaCountry;
    currency: WlaCurrency;
    invalidPlaces?: WlaPlace[];
  };
