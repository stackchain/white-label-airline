import { SearchFormInterface } from '@white-label-airline/ui/search-form';
import { TripTypeEnum } from '@white-label-airline/ui/search-form/types/trip-type.enum';

export const initSearchForm: SearchFormInterface = {
  tripType: TripTypeEnum.RoundTrip,
  currency: {
    Code: 'CAD',
    DecimalDigits: 2,
    DecimalSeparator: '.',
    RoundingCoefficient: 0,
    SpaceBetweenAmountAndSymbol: false,
    Symbol: 'C$',
    SymbolOnLeft: true,
    ThousandsSeparator: ',',
  },
  from: {
    date: new Date(),
    place: null,
  },
  to: {
    date: null,
    place: null,
  },
};