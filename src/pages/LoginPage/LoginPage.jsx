import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className=" px-6 py-12 h-full">
      <form
        className="flex justify-center items-center flex-wrap  g-6 text-gray-800"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 ">
          <label>
            <span>Your e-mail</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            />
          </label>

          <button
            className=" mr-3 inline-block px-6 py-2.5  text-black font-medium text-m leading-tight uppercase rounded  hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out mt-4 "
            type="submit"
          >
            log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
