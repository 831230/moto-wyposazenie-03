import buttonStyles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ loadMore, items, totalHits, currentPage }) => {
  return (
    <>
      {items.length > 0 && currentPage<=(totalHits/12) ? (
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
  totalHits: PropTypes.number,
  currentPage: PropTypes.number,
};

export default Button;
