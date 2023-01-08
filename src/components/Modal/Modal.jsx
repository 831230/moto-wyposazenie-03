// import SimpleLightbox from "simplelightbox";

// const Modal = ({ imgObject }) => {
  
//   return (
//     <div className="overlay">
//       <a href={imgObject.large}> 
//       {imgObject.large && new SimpleLightbox(".overlay a").on("show.simplelightbox")}
//       </a>
//     </div>
//   );
// };

// export default Modal;


import * as basicLightbox from 'basiclightbox';
basicLightbox = require('basiclightbox');

const Modal = ({ imgObject }) => {

  return (
    <div className="overlay">
      <div className="modal">
        {imgObject.large &&
          basicLightbox
            .create(`<img src=${imgObject.large} width="800" height="600">`)
            .show()}
      </div>
    </div>
  );
};

export default Modal;