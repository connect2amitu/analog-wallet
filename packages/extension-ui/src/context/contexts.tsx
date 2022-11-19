import React from 'react';
import type { AvailableThemes } from '../components/themes';

const noop = (): void => undefined;

const ThemeSwitchContext = React.createContext<(theme: AvailableThemes) => void>(noop);
const ToastContext = React.createContext<({ show: (message: string) => void })>({ show: noop });
const ActionContext = React.createContext<(to?: string) => void>(noop);


export {
  ThemeSwitchContext,
  ToastContext,
  ActionContext
};
