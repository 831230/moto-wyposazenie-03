import galleryStyles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ children, closeModal }) => {
  return (
    <ul className={galleryStyles.gallery} onClick={closeModal}>
      {children}
    </ul>
  );
};

ImageGallery.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func,
};

export default ImageGallery;
