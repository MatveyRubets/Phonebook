import React from 'react';
import ContactListItem from 'components/ContactListItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const getFilteredNames = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  let searchContact = filter === '' ? contacts : getFilteredNames();

  return (
    <div className="py-4">
      {searchContact &&
        searchContact.map(({ id, number, name }) => {
          return (
            <ContactListItem key={id} id={id} name={name} number={number} />
          );
        })}
    </div>
  );
};

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
