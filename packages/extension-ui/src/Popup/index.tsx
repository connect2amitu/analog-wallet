import React, { lazy, useState, useCallback } from 'react';
import { Route, Switch } from 'react-router';

import { ErrorBoundary, LoadingContainer, ActionContext } from '../components';
import ToastProvider from '../components/toast/ToastProvider';
import ImportSeed from './Account/ImportSeed';
import CreateAccount from './Account/New';
import Home from './Home';
import Welcome from './Welcome';

const Authorize = () => {
  return <div>Authorize</div>
}

const Metadata = () => {
  return <div>Metadata</div>
}

const Signing = () => {
  return <div>Signing</div>
}

const Popup = () => {
  const [isWelcomeDone, setWelcomeDone] = useState(false);

  const _onAction = useCallback(
    (to?: string): void => {
      setWelcomeDone(window.localStorage.getItem('welcome_read') === 'ok');

      if (to) {
        window.location.hash = to;
      }
    },
    []
  );

  function wrapWithErrorBoundary(component: React.ReactElement, trigger?: string): React.ReactElement {
    return <ErrorBoundary trigger={trigger}>{component}</ErrorBoundary>;
  }

  const Root = isWelcomeDone
    ? wrapWithErrorBoundary(<Home />, 'Home')
    : wrapWithErrorBoundary(<Welcome />, 'welcome');

  return <LoadingContainer>
    <ActionContext.Provider value={_onAction}>
      <ToastProvider>
        <Switch>
          <Route path='/account/create'>{wrapWithErrorBoundary(<CreateAccount />, 'account-creation')}</Route>
          <Route path='/account/import-seed'>{wrapWithErrorBoundary(<ImportSeed />, 'import-seed')}</Route>
          <Route exact path='/' > {Root} </Route>
        </Switch>
      </ToastProvider>
    </ActionContext.Provider>
  </LoadingContainer>;
};

export default Popup;
