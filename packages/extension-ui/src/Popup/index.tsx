import React, { lazy, useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';

import { ErrorBoundary, LoadingContainer, ActionContext } from '../components';
import ToastProvider from '../components/toast/ToastProvider';

import ImportSeed from "./Account/ImportSeed"
import CreateAccount from "./Account/New"
import Components from './Components';
import Home from "./Home"
import Lock from "./Lock"
import Welcome from "./Welcome"

const Popup = () => {

  const [isWelcomeDone, setWelcomeDone] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const _onAction = useCallback(
    (to?: string): void => {
      const _isWelcomeDone = window.localStorage.getItem('welcome_read') === 'ok';
      const _isLogin = window.localStorage.getItem('auth') === 'ok';
      setWelcomeDone(_isWelcomeDone);
      setIsLogin(_isLogin);

      if (to) {
        window.location.hash = to;
      }
    },
    []
  );

  useEffect((): void => {
    const _isWelcomeDone = window.localStorage.getItem('welcome_read') === 'ok';
    const _isLogin = window.localStorage.getItem('auth') === 'ok';

    setWelcomeDone(_isWelcomeDone);
    setIsLogin(_isLogin);
    const beforeNav = window.localStorage.getItem('popupNavigation');

    if (_isWelcomeDone && _isLogin) {
      window.location.hash = '/';
    } else if (beforeNav) {
      window.location.hash = beforeNav;
    }
  }, []);

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
          <Route exact path='/' > {Root} </Route>
          <Route path='/account/create'>{wrapWithErrorBoundary(<CreateAccount />, 'account-creation')}</Route>
          <Route path='/account/import-seed'>{wrapWithErrorBoundary(<ImportSeed />, 'import-seed')}</Route>
          <Route path='/account/locked'>{wrapWithErrorBoundary(<Lock />, 'locked')}</Route>
          <Route path='/components'>{wrapWithErrorBoundary(<Components />, 'components')}</Route>
          <Route path='*'>{wrapWithErrorBoundary(<h1>404</h1>, 'page not found')}</Route>
        </Switch>
      </ToastProvider>
    </ActionContext.Provider>
  </LoadingContainer>;
};

export default Popup;
