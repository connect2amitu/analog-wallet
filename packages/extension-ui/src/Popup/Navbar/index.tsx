import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0 }}>
        <li style={{ marginRight: 5 }}>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li style={{ marginRight: 5 }}>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </li>
        <li style={{ marginRight: 5 }}>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li style={{ marginRight: 5 }}>
          <NavLink to='/users'>Users</NavLink>
        </li>
        <li style={{ marginRight: 5 }}>
          <a target={'_blank'} href={chrome.extension.getURL('index.html')} rel='noreferrer'>
            <img
              alt='Expand Icon'
              src='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE1IDQuNUgxOS41VjkiIHN0cm9rZT0iIzg4ODg4OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0xNC4yNSA5Ljc1TDE5LjUgNC41IiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cGF0aCBkPSJNOSAxOS41SDQuNVYxNSIgc3Ryb2tlPSIjODg4ODg4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgPHBhdGggZD0iTTkuNzUgMTQuMjVMNC41IDE5LjUiIHN0cm9rZT0iIzg4ODg4OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K'
              height={20}
            />
            Full Screen
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar