import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuotePerLegInterface } from '@white-label-airline/services/quotes';

import { initialSelectedQuotesState } from './models/selected-quotes-state.initial';

export const selectedQuotesSlice = createSlice({
  name: 'quotes',
  initialState: initialSelectedQuotesState,
  reducers: {
    selectOutboundQuote: {
      reducer(state, action: PayloadAction<QuotePerLegInterface>) {
        state.outbound = action.payload;
      },
      prepare(payload: QuotePerLegInterface) {
        return {
          payload,
        };
      },
    },
    selectInboundQuote: {
      reducer(state, action: PayloadAction<QuotePerLegInterface>) {
        state.inbound = action.payload;
      },
      prepare(payload: QuotePerLegInterface) {
        return {
          payload,
        };
      },
    },
    reset() {
      return initialSelectedQuotesState;
    },
  },
});