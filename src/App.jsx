import { Component } from 'react';
import axios from 'axios';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItems from 'components/ImageGalleryItem/ImageGalleryItem';

const FETCH_API_URL = "https://pixabay.com/api/";
const API_KEY = "26135070-3e729b9e8c0999352fd85e768";
const IMAGES_PER_PAGE = 12;

class App extends Component {
  state = {
    inputValue: "",
    items: [],
  };

  addCurrentValue = event => {
    event.preventDefault();
    console.log(event);
    const name = event.target[1].name;
    const value = event.target[1].value;
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value,
    },()=>{console.log(this.state.inputValue);});
  };

  fetchApi = async () => {
try {
  const searchText = this.state.inputValue.split(" ").join('+');
  const params = new URLSearchParams({
  key: API_KEY,
  q: searchText,
  lang: "pl",
  lang: "en",
  image_type: "photo",
  orientation: "horizontal",
  safesearch: true,
  page: 1,
  per_page: IMAGES_PER_PAGE
});
const responce = await axios(FETCH_API_URL + "?" + params);
console.log(responce.data.hits);
const photos = responce.data.hits.map(photo => {
  return {
    id: photo.id,
    largeImageURL: photo.largeImageURL,
    webformatURL: photo.webformatURL
  }
})
console.log(photos);
this.setState({
  items: photos
},()=>{console.log(this.state);})
} catch (error) {
  console.log(error);
}
  }

  componentDidMount() {
    
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     this.state.inputValue.length === nextState.inputValue.length 
  //   ) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue.length !== this.state.inputValue.length) {
      console.log("componentDidUpdate");
      this.fetchApi();
    }
  };

  render() {
    return (
      <>
        <h1>Hello</h1>
        <Searchbar onSubmit={this.addCurrentValue}/>
        <ImageGallery>
          <ImageGalleryItems items={this.state.items}/>
        </ImageGallery>
      </>
    );
  }
}

export default App;
