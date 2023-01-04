const ImageGalleryItems = ({items}) => {
  return (
    <>
    <h2>Hello</h2>
      {items &&
        items.map(item => {
          return (
            <li key={item.id} className="gallery-item">
              <img src={item.webformatURL} alt="" />
            </li>
          );
        })}
    </>
  );
};

export default ImageGalleryItems;
