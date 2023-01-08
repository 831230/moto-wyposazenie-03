import { Audio } from 'react-loader-spinner';
const Loader = ({ visually, visuallySecond }) => {
  if (visually) {
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
  if (visuallySecond) {
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

export default Loader;
