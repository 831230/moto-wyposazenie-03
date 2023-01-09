import { Audio } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ visually, visuallySecond }) => {
  if (visually || visuallySecond) {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    );
  }
};

Loader.propTypes = {
  visually: PropTypes.bool,
  visuallySecond: PropTypes.bool,
};

export default Loader;
