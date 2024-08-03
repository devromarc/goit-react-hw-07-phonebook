import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// ============================
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selector';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error ? (
        <h1>Loading.....</h1>
      ) : filteredContacts.length === 0 && !error ? (
        <p>No Results</p>
      ) : (
        filteredContacts.map(contact => (
          <ContactListItem key={contact.id} filteredContact={contact} />
        ))
      )}
    </ul>
  );
};
