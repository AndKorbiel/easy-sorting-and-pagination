function Pagination({ pages, action, active }) {
  return (
    <div className="pagination">
      {pages.length > 0 &&
        pages.map((page, index) => (
          <button
            onClick={() => action(index)}
            className={index === active ? "active" : ""}
            key={index + 1}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
}

export default Pagination;
