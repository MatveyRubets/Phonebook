import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className="flex align-center">
      <NavLink
        className=" inline-block px-6 py-2.5 text-white font-medium text-m leading-tight uppercase "
        to="/"
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          className=" inline-block px-6 py-2.5 text-white font-medium text-m leading-tight uppercase"
          to="/contacts"
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
