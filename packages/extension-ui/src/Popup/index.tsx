import React, { lazy, useState, useCallback } from 'react';
import { Route, Switch } from 'react-router';

import { ErrorBoundary, LoadingContainer, ActionContext } from '../components';
import ToastProvider from '../components/toast/ToastProvider';

const ImportSeed = lazy(() => import('./Account/ImportSeed'));
const CreateAccount = lazy(() => import('./Account/New'));
const Home = lazy(() => import('./Home'));
const Lock = lazy(() => import('./Lock'));
const Welcome = lazy(() => import('./Welcome'));

const Popup = () => {
  const [isWelcomeDone, setWelcomeDone] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const _onAction = useCallback(
    (to?: string): void => {
      setWelcomeDone(window.localStorage.getItem('welcome_read') === 'ok');
      setIsLogin(window.localStorage.getItem('auth') === 'true');

      if (to) {
        window.location.hash = to;
      }
    },
    []
  );

  function wrapWithErrorBoundary(component: React.ReactElement, trigger?: string): React.ReactElement {
    return <ErrorBoundary trigger={trigger}>{component}</ErrorBoundary>;
  }

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
