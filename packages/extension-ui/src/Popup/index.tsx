import React, { lazy, useCallback } from 'react';
import { Route, Switch } from 'react-router';

import { ErrorBoundary, LoadingContainer, ActionContext } from '../components';
import ToastProvider from '../components/toast/ToastProvider';

const ImportSeed = lazy(() => import('./Account/ImportSeed'));
const CreateAccount = lazy(() => import('./Account/New'));
const Home = lazy(() => import('./Home'));
const Lock = lazy(() => import('./Lock'));
const Welcome = lazy(() => import('./Welcome'));

const Popup = () => {

  const _onAction = useCallback(
    (to?: string): void => {

      if (to) {
        window.location.hash = to;
      }
    },
    []
  );

  function wrapWithErrorBoundary(component: React.ReactElement, trigger?: string): React.ReactElement {
    return <ErrorBoundary trigger={trigger}>{component}</ErrorBoundary>;
  }

  const isWelcomeDone = window.localStorage.getItem('welcome_read') === 'ok';
  const isLogin = window.localStorage.getItem('auth') === 'true';


  const Root = isWelcomeDone && isLogin
    ? wrapWithErrorBoundary(<Home />, 'Home')
    : wrapWithErrorBoundary(<Welcome />, 'welcome');

  return <LoadingContainer>
    <ActionContext.Provider value={_onAction}>
      <ToastProvider>
        <Switch>
          <Route path='/account/create'>{wrapWithErrorBoundary(<CreateAccount />, 'account-creation')}</Route>
          <Route path='/account/import-seed'>{wrapWithErrorBoundary(<ImportSeed />, 'import-seed')}</Route>
          <Route path='/account/locked'>{wrapWithErrorBoundary(<Lock />, 'locked')}</Route>
          <Route exact path='/' > {Root} </Route>
        </Switch>
      </ToastProvider>
    </ActionContext.Provider>
  </LoadingContainer>;
};

export default Popup;
