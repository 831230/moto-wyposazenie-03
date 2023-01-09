import galleryItemsStyle from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItems = ({ items, getData }) => {
  return (
    <>
      {items &&
        items.map(item => {
          return (
            <li key={item.id} className={galleryItemsStyle.item}>
              <img
                className={galleryItemsStyle.image}
                src={item.webformatURL}
                alt={item.description}
                data-large={item.largeImageURL}
                onClick={getData}
              />
            </li>
          );
        })}
    </>
  );
};

ImageGalleryItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      description: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
  getData: PropTypes.func,
};

export default ImageGalleryItems;
