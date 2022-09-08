import Navigation from 'components/Navigations/Navigations';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { authSelectors } from 'redux/auth';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header
      className=" bg-blue-300 justify-between
    py-5 flex lg:justify-around"
    >
      {isLoggedIn ? (
        <Navigation />
      ) : (
        <NavLink
          className=" inline-block px-6 py-2.5 text-white font-medium text-m leading-tight uppercase "
          to="/"
        >
          Home
        </NavLink>
      )}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
