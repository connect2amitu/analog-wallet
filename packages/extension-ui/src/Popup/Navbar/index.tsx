import { useCallback, useContext, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled, { ThemeContext } from "styled-components";

import i18next from "../../i18n/i18n"
import { Theme, ThemeSwitchContext } from "../../components";
import { LANGUAGES } from "@analog/extension-services/common/constants";

interface ThemeProps {
  theme: Theme;
}

const MainNav = styled.ul`
  list-style-type: none;
  flex-direction: column;
  display: flex !important;
  flex-direction: row;
  justify-content: start;
  margin: 0;
  padding: 0 !important;
  flex-wrap: wrap;
`

const NavLi = styled.li(({ theme }: ThemeProps) => `
  text-align: center;
  margin-right: 15px;
  a{
  text-decoration: none;
  color: ${theme.textColor};
 }
`);

const NavBar = () => {

  const { t } = useTranslation();

  const setTheme = useContext(ThemeSwitchContext);
  const themeContext = useContext(ThemeContext as React.Context<Theme>);

  const languageOptions = useMemo(() => LANGUAGES, []);
  const onChange = (value: string): void => {
    i18next.changeLanguage(value)
    localStorage.setItem("lang", value)
  }

  const lang = localStorage.getItem("lang") ?? "en"

  const _onChangeTheme = useCallback(
    (val: "dark" | "light"): void => setTheme(val),
    [setTheme]
  );

  return (
    <div>
      <MainNav>
        <NavLi>
          <NavLink to='/'>{t("Home")}</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to='/dashboard'>{t("Dashboard")}</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to='/about'>{t("About")}</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to='/users'>{t("Users")}</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to='/counter'>{t("Counter")}</NavLink>
        </NavLi>
        <NavLi>
          <select
            onChange={(e) => onChange(e.target.value)}
            value={lang}

          >
            {languageOptions.map(({ text, value }): React.ReactNode => (
              <option
                key={value}
                value={value}
              >
                {text}
              </option>
            ))}
          </select>
        </NavLi>
        <NavLi>
          <a target={'_blank'} href={chrome.runtime.getURL('index.html')} rel='noreferrer'>
            <img
              alt='Expand Icon'
              src='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE1IDQuNUgxOS41VjkiIHN0cm9rZT0iIzg4ODg4OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0xNC4yNSA5Ljc1TDE5LjUgNC41IiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cGF0aCBkPSJNOSAxOS41SDQuNVYxNSIgc3Ryb2tlPSIjODg4ODg4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgPHBhdGggZD0iTTkuNzUgMTQuMjVMNC41IDE5LjUiIHN0cm9rZT0iIzg4ODg4OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K'
              height={20}
            />
          </a>
        </NavLi>
        <NavLi>
          <div>
            {themeContext.id === "dark" ? <div style={{ cursor: "pointer" }} onClick={() => _onChangeTheme("light")}>
              <svg viewBox="0 0 24 24" width="24" height="24" className="lightToggleIcon_pyhR"><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>
            </div> :
              <div style={{ cursor: "pointer" }} onClick={() => _onChangeTheme("dark")}>
                <svg viewBox="0 0 24 24" width="24" height="24" className="darkToggleIcon_wfgR"><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>
              </div>}
          </div>
        </NavLi>
      </MainNav>

    </div>
  );
};

export default NavBar