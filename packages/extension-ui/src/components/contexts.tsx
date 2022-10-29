import React from 'react';
import type { AvailableThemes } from './themes';

const noop = (): void => undefined;

const ThemeSwitchContext = React.createContext<(theme: AvailableThemes) => void>(noop);

export {
  ThemeSwitchContext,
};
