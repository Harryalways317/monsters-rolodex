import "./search-box.styles.css"
const SearchBox = ({placeholder,className,onChangeHandler}) => {

    return (
      <input
        type="search-box"
        placeholder={placeholder}
        className= {`search-box ${className}`}
        onChange={onChangeHandler}
      ></input>
    );

}

export default SearchBox