import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div className="flex flex-wrap justify-end">
      <NavLink to="/register">
        <button
          type="button"
          className=" mr-1 inline-block px-6  md:px-1,5 py-2.5  text-white font-medium text-m leading-tight uppercase rounded  hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out"
        >
          Sign Up
        </button>
      </NavLink>
      <NavLink to="/login">
        <button
          className="  inline-block px-6 md:px-1,5 py-2.5  text-white font-medium text-m leading-tight uppercase rounded  hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out"
          type="button"
        >
          Log In
        </button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
