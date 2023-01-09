import searchbarStyles from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={searchbarStyles.searchbar}>
      <form className={searchbarStyles.form} onSubmit={onSubmit}>
        <button type="submit" className={searchbarStyles.button}>
          <span className="button-label">Search</span>
        </button>
        <input
          name="inputValue"
          className={searchbarStyles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
