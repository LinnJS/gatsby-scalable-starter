import PropTypes from 'prop-types';

const truncate = (string, maxLength) => (string.length > maxLength ? string.slice(0, maxLength - 1) + '…' : string);

truncate.propTypes = {
  maxLength: PropTypes.number,
  string: PropTypes.string,
};

export default truncate;
