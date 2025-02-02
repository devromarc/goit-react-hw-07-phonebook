import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.containerContacts}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
