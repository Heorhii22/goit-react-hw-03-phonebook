import PropTypes from 'prop-types';
export function Title({ title }) {
  return <h2>{title}</h2>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
