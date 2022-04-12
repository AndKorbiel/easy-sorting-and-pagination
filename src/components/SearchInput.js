function SearchInput({ keywordSearch }) {
  return (
    <input
      type="text"
      placeholder="Search product..."
      onChange={(e) => keywordSearch(e)}
    />
  );
}

export default SearchInput;
