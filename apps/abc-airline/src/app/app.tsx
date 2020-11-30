import { Container, Box, ThemeProvider } from '@material-ui/core';
import { initI18n } from '@white-label-airline/services/i18n';
import { configureAppStore } from '@white-label-airline/store';
import Header from '@white-label-airline/ui/header';
import Loading from '@white-label-airline/ui/loading';
import WhiteLabelRoutes from '@white-label-airline/ui/white-label-routes';
import { createHashHistory, History } from 'history';
import React, { Suspense } from 'react';
import { FeatureToggleProvider } from 'react-feature-toggles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { initSearchForm } from '../models/search-form-init.const';

import { features } from './features.const';
import { theme } from './theme';

initI18n('./assets/i18n/{{lng}}.json', 'zh-CN');

const history: History = createHashHistory();

const { store, persistor } = configureAppStore(history);

export const App: React.FunctionComponent = () => {
  return (
    <Suspense fallback={<Loading />}>
      <FeatureToggleProvider featureToggleList={features}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <PersistGate loading={<Loading />} persistor={persistor}>
              <Header />
              <Box mt={3} component={Container}>
                <WhiteLabelRoutes
                  initSearchForm={initSearchForm}
                  history={history}
                />
              </Box>
            </PersistGate>
          </ThemeProvider>
        </Provider>
      </FeatureToggleProvider>
    </Suspense>
  );
};

export default App;