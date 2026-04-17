import { NavLink } from 'react-router';

export default function Navigation() {
  return (
    <nav className="">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/">
            Össues kérdés
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
