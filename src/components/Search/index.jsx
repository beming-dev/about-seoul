import "./style.scss";

const Search = ({ setSearch }) => {
  return (
    <div className="search">
      <span className="explain">검색어를 입력하세요</span>
      <input type="text" />
      <div className="hashtag">#abc #cdf #dsf</div>
      <div
        className="exit"
        onClick={() => {
          setSearch(false);
        }}
      >
        X
      </div>
    </div>
  );
};

export default Search;
