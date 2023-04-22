import PropTypes from 'prop-types';
import css from './ContactList.module.css';
export function ContactList({ contacts, deleteContact, filter }) {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={css.contactsList}>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button
                type="button"
                onClick={() => deleteContact(contact.id, contact.name)}
              >
                Remove contact
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
};
