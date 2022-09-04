import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const ContactsPage = () => {
  return (
    <div className="px-6 py-12 h-full flex justify-center align-middle flex-col">
      <Filter />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
