import { Component } from 'react';
import { fetchPictures } from 'components/fetchPictures/fetchPictures';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItems from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    nextPage: 1,
    inputValue: '',
    items: [],
    totalHits: 0,
    currentPage: 1,
    loader: false,
    loaderSecond: false,
    dataLargeImg: {},
  };

  addCurrentValue = event => {
    event.preventDefault();
    const name = event.target[1].name;
    const value = event.target[1].value;
    this.setState({
      [name]: value,
    });
  };

  fetchApi = async page => {
    this.setState({
      loader: true,
    });
    const searchText = this.state.inputValue.split(' ').join('+');

    fetchPictures(searchText, page).then(response => {
      this.setState({
        loader: false,
        loaderSecond: false,
      });
      const totalHits = response.data.totalHits;
      const photos = response.data.hits.map(photo => {
        return {
          id: photo.id,
          largeImageURL: photo.largeImageURL,
          webformatURL: photo.webformatURL,
          description: photo.tags,
        };
      });
      this.setState(prevState => {
        return {
          items: [...prevState.items, ...photos],
          totalHits: totalHits,
        };
      });
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      nextPage: prevState.nextPage + 1,
      currentPage: this.state.nextPage,
      loaderSecond: true,
    }));
  };

  resetItems = () => {
    this.setState({
      items: [],
      currentPage: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      this.resetItems();
      this.fetchApi();
    }
    if (
      prevState.currentPage < this.state.currentPage &&
      prevState.inputValue === this.state.inputValue
    ) {
      this.fetchApi(this.state.nextPage);
    }
  }

  setDataToLargeImg = evt => {
    this.setState({
      dataLargeImg: {
        large: evt.target.dataset.large,
        alt: evt.target.alt,
      },
    });
  };

  closeModal = event => {
    if (event.target.nodeName !== 'IMG' || event.keyCode === 'Escape') {
      this.setState({
        dataLargeImg: {
          large: '',
          alt: '',
        },
      });
    }
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.addCurrentValue} />
        <Loader visually={this.state.loader} />
        <ImageGallery closeModal={this.closeModal}>
          <ImageGalleryItems
            items={this.state.items}
            getData={this.setDataToLargeImg}
          />
        </ImageGallery>
        <Modal
          imgObject={this.state.dataLargeImg}
          closeModal={this.closeModal}
        />
        <Loader visuallySecond={this.state.loaderSecond} />
        <Button
          loadMore={this.loadMoreImages}
          items={this.state.items}
          totalHits={this.state.totalHits}
          currentPage={this.state.currentPage}
        />
      </>
    );
  }
}

export default App;
