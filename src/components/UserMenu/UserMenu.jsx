import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    dispatch(logOut());
  };

  return (
    <div className="flex align-center ">
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
