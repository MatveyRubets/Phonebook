import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { filter } from 'redux/contacts/contactsActions';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const inputChange = event => {
    const changeValue = event.target.value;
    dispatch(filter(changeValue));
  };

  return (
    <div>
      <label className="flex flex-col mb-3 sm:block">
        <p className="mb-1">Find contacts by name</p>
        <input
          className="form-control block  px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          name="number"
          value={value}
          onChange={inputChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  inputChange: PropTypes.func,
};

export default Filter;
