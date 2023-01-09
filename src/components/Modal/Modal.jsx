import modalStyles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ imgObject, closeModal }) => {
  return (
    <>
      {imgObject.large && (
        <div className={modalStyles.overlay} onClick={closeModal}>
          <div className={modalStyles.modal}>
            <img src={imgObject.large} alt={imgObject.alt} />
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  imgObject: PropTypes.objectOf(PropTypes.string),
  closeModal: PropTypes.func,
};

export default Modal;
