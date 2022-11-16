import React, { useCallback, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// FIXME We should not import from index when this one is imported there as well
import { AvailableThemes, chooseTheme, Main, themes, ThemeSwitchContext, Theme } from '.';
import ToastProvider from './toast/ToastProvider';

interface ThemeProps {
  theme: Theme;
}

interface Props {
  children: React.ReactNode;
  className?: string;
}

function View({ children, className }: Props): React.ReactElement<Props> {
  const [theme, setTheme] = useState(chooseTheme())

  const switchTheme = useCallback(
    (theme: AvailableThemes): void => {
      localStorage.setItem('theme', theme)
      setTheme(theme);
    },
    []
  );

  const _theme = themes[theme];

  return (
    <ThemeSwitchContext.Provider value={switchTheme}>
      <ToastProvider>
        <ThemeProvider theme={_theme}>
          <BodyTheme theme={_theme} />
          <Main className={className}>
            {children}
          </Main>
        </ThemeProvider>
      </ToastProvider>
    </ThemeSwitchContext.Provider>
  );
}

const BodyTheme = createGlobalStyle<ThemeProps>`
  body {
    /* background-color: ${({ theme }: ThemeProps): string => theme.bodyColor}; */
    background: #000;
  }

  html {
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default View;
