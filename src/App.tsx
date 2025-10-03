import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const location = useLocation();

  const getLinkClassHome = () =>
    classNames('navbar-item', {
      'is-active': location.pathname === '/',
    });

  const getLinkClassTabs = () =>
    classNames('navbar-item', {
      'is-active': location.pathname.startsWith('/tabs'),
    });

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getLinkClassHome}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getLinkClassTabs}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
