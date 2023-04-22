import PropTypes from 'prop-types';
import css from './Filter.module.css';
export function FilterContacts({ filter, onSearchContact }) {
  return (
    <>
      <input
        className={css.searchInput}
        type="text"
        name="search"
        value={filter}
        onChange={onSearchContact}
      />
    </>
  );
}

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onSearchContact: PropTypes.func.isRequired,
};
