import { Divider, List } from '@material-ui/core';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';
import React from 'react';
import { connect } from 'react-redux';

import Loading from '../loading';
import Quote from '../quote/quote';
import { searchFormDataTransform } from '../search-form/search-form.data-transform';

import SelectedQuoteHeader from './selected-quote-header/selected-quote-header';
import { SelectedQuotesProps, mapStateToProps } from './selected-quotes.props';

const SelectedQuotes: React.FunctionComponent<SelectedQuotesProps> = ({
  selectedQuotes,
  queryParams,
  modifyOutboundQuote,
  modifyInboundQuote,
}: SelectedQuotesProps) => {
  const language = getCurrentLanguage();
  return queryParams && selectedQuotes ? (
    <List>
      {selectedQuotes.outbound && (
        <>
          <Quote
            quote={selectedQuotes.outbound}
            header={
              <SelectedQuoteHeader
                quote={selectedQuotes.outbound}
                language={language}
                currency={queryParams?.currency}
                date={searchFormDataTransform.parseQueryParamsDate(
                  queryParams?.departDate
                )}
                buttonClick={modifyOutboundQuote}
              />
            }
          />
          <Divider />
        </>
      )}
      {selectedQuotes.inbound && (
        <>
          <Quote
            quote={selectedQuotes.inbound}
            header={
              <SelectedQuoteHeader
                quote={selectedQuotes.inbound}
                language={language}
                currency={queryParams?.currency}
                date={searchFormDataTransform.parseQueryParamsDate(
                  queryParams?.returnDate
                )}
                buttonClick={modifyInboundQuote}
              />
            }
          />
          <Divider />
        </>
      )}
    </List>
  ) : (
    <Loading />
  );
};

export default connect(mapStateToProps, null)(SelectedQuotes);