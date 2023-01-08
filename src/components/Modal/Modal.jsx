const Modal = ({ imgObject }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <img src={imgObject.large} alt={imgObject.alt} />
      </div>
    </div>
  );
};

export default Modal;

// import * as basicLightbox from 'basiclightbox';
// basicLightbox = require('basiclightbox');

// const Modal = ({ imgObject }) => {

//   return (
//     <div className="overlay">
//       <div className="modal">
//         {imgObject.large &&
//           basicLightbox
//             .create(`<img src=${imgObject.large} width="800" height="600">`)
//             .show()}
//       </div>
//     </div>
//   );
// };

// export default Modal;
