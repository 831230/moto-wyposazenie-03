import buttonStyles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ loadMore, items }) => {
  return (
    <>
      {items.length > 0 ? (
        <button className={buttonStyles.moreButton} onClick={loadMore}>
          Load more
        </button>
      ) : null}
    </>
  );
};

Button.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      description: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
  loadMore: PropTypes.func,
};

export default Button;
