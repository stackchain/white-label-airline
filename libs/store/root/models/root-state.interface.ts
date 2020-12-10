import { RouterState } from 'connected-react-router';

import { WlaCountriesState } from '../../countries/models/countries-state.interface';
import { WlaCurrenciesState } from '../../currencies/models/currencies-state.interface';
import { PlacesStateInterface } from '../../places/models/places-state.interface';
import { WlaQuotesState } from '../../quotes/models/quotes-state.interface';
import { WlaSearchForm } from '../../search-form/models/search-form.interface';
import { WlaSelectedQuotesState } from '../../selected-quotes/models/selected-quotes-state.interface';

export interface WlaRootState {
  router: RouterState;
  countries?: WlaCountriesState;
  currencies?: WlaCurrenciesState;
  error?: string | Error;
  places?: PlacesStateInterface;
  quotes: WlaQuotesState;
  searchForm: WlaSearchForm;
  selectedQuotes: WlaSelectedQuotesState;
}