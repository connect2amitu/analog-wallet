import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import i18next from "../../i18n/i18n"
import getLanguageOptions from "../../utils/getLanguageOptions";


const MainNav = styled.ul`
  list-style-type: none;
  flex-direction: column;
  display: flex !important;
  flex-direction: row;
  justify-content: start;
  margin: 0;
  padding: 0 !important;
`

const NavLi = styled.li`
  text-align: center;
  margin-right: 15px;
`

const NavBar = () => {

  const { t } = useTranslation();

  const languageOptions = useMemo(() => getLanguageOptions(), []);
  const onChange = (value: string): void => {
    // console.info('value=>', value);
    i18next.changeLanguage(value)
    localStorage.setItem("lang", value)
  }

  const lang = localStorage.getItem("lang") ?? "en"


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
          <a target={'_blank'} href={chrome.extension.getURL('index.html')} rel='noreferrer'>
            <img
              alt='Expand Icon'
              src='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE1IDQuNUgxOS41VjkiIHN0cm9rZT0iIzg4ODg4OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0xNC4yNSA5Ljc1TDE5LjUgNC41IiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cGF0aCBkPSJNOSAxOS41SDQuNVYxNSIgc3Ryb2tlPSIjODg4ODg4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgPHBhdGggZD0iTTkuNzUgMTQuMjVMNC41IDE5LjUiIHN0cm9rZT0iIzg4ODg4OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K'
              height={20}
            />
          </a>
        </NavLi>
      </MainNav>

    </div>
  );
};

export default NavBar