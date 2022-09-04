import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    dispatch(logOut());
  };

  return (
    <div className="flex align-center ">
      <p className="inline-block px-6 py-2.5 text-white font-medium text-m leading-tight uppercase ">
        Hi, <span>{userName}</span>
      </p>
      <br />
      <button
        className=" inline-block px-6 py-2.5  text-red-700 font-medium text-m leading-tight uppercase rounded  hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out "
        type="button"
        onClick={handleBtnClick}
      >
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;
