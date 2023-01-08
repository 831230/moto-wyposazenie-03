const ImageGalleryItems = ({items, getData}) => {
  return (
    <>
      {items &&
        items.map(item => {
          return (
            <li key={item.id} className="gallery-item">
              <img src={item.webformatURL} alt={item.description} data-large={item.largeImageURL} onClick={getData}/>
            </li>
          );
        })}
    </>
  );
};

export default ImageGalleryItems;
