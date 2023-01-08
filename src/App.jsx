import { Component } from 'react';
import axios from 'axios';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItems from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

const FETCH_API_URL = 'https://pixabay.com/api/';
const API_KEY = '26135070-3e729b9e8c0999352fd85e768';
const IMAGES_PER_PAGE = 12;
let nextPage = 1;
let sumOfLoadedImages = IMAGES_PER_PAGE;

class App extends Component {
  state = {
    inputValue: '',
    items: [],
    totalImages: 0,
    currentPage: 1,
    loader: false,
    loaderSecond: false,
    dataLargeImg: {}
  };

  addCurrentValue = event => {
    event.preventDefault();
    console.log(event);
    const name = event.target[1].name;
    const value = event.target[1].value;
    this.setState(
      {
        [name]: value,
      }
    );
  };

  fetchApi = async (page) => {
    try {
      this.setState({
        loader: true
      });
      const searchText = this.state.inputValue.split(' ').join('+');
      const params = new URLSearchParams({
        key: API_KEY,
        q: searchText,
        lang: 'pl',
        lang: 'en',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: IMAGES_PER_PAGE,
      });
      const responce = await axios(FETCH_API_URL + '?' + params);
      console.log(responce.data.hits);
      console.log(responce);
      this.setState({
        loader: false,
        loaderSecond: false
      });
      const photos = responce.data.hits.map(photo => {
        return {
          id: photo.id,
          largeImageURL: photo.largeImageURL,
          webformatURL: photo.webformatURL,
          description: photo.tags,
        };
      });

      console.log(photos);
      this.setState(prevState => 
        {
          return {
            items: [...prevState.items, ...photos],
          totalImages: responce.data.totalHits,
          }
          
        },
        () => {
          console.log(this.state);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  loadMoreImages = () => {
    nextPage+=1;
    sumOfLoadedImages+=IMAGES_PER_PAGE;
    this.setState({
      currentPage: nextPage,
      loaderSecond: true,
    })
    console.log(nextPage);
    console.log(sumOfLoadedImages);
  };

  resetItems = () => {
    nextPage=1;
    sumOfLoadedImages= IMAGES_PER_PAGE;
    this.setState({
      items:[],
      totalImages: 0,
      currentPage: nextPage
    })
    console.log(nextPage);
    console.log(sumOfLoadedImages);
  };

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      console.log('componentDidUpdate 1');
      this.resetItems();
      this.fetchApi();
    };
    if(prevState.currentPage < this.state.currentPage && prevState.inputValue === this.state.inputValue){
      // this.loadMoreImages();
      console.log('componentDidUpdate 2');
      this.fetchApi(nextPage);
    }
  };

  setDataToLargeImg = (evt) => {
    console.log("setDataToLargeImg");
    console.log(evt);
    console.log(evt.target.dataset.large);
    this.setState({
      dataLargeImg: {
        large:evt.target.dataset.large,
        alt: evt.target.alt,
      },
    }, () => {console.log(this.state);})
  }

  render() {
    return (
      <>
        <h1>Hello</h1>
        <Searchbar onSubmit={this.addCurrentValue} />
        <Loader visually={this.state.loader}/>
        <ImageGallery>
          <ImageGalleryItems items={this.state.items} getData={this.setDataToLargeImg}/>
        </ImageGallery>
        <Modal imgObject={this.state.dataLargeImg}/>
        <Loader visuallySecond={this.state.loaderSecond}/>
        <Button loadMore={this.loadMoreImages} items={this.state.items}/>
      </>
    );
  }
}

export default App;