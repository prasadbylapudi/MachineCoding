import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const pageSize = 10;
  const noOfPages = Math.ceil(data.length / pageSize);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageData = data.slice(startIndex, endIndex);
    setPageData(pageData);
  }, [currentPage, data]);

  const handlePrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    if (currentPage < 0) {
      setCurrentPage(endIndex);
    }
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const hadnleNext = () => {
    if (currentPage < noOfPages) setCurrentPage(currentPage + 1);
    setCurrentPage((prevPage) => prevPage + 1);
    if (currentPage > noOfPages) {
      setCurrentPage(1);
    }
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Pagination Machine Coding</h1>
      <div
        className="pagination-container"
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div className="pages-container">
          <button
            className="btn"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {/* loop through the pages and display the page numbers */}
          {[...Array(noOfPages)].map((_, i) => (
            <span
              className={`pages ${currentPage === i + 1 ? "active" : ""}`}
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </span>
          ))}
        </div>
        <button
          className="btn"
          onClick={hadnleNext}
          disabled={currentPage === noOfPages}
        >
          Next
        </button>
      </div>
      <div className="data-container">
        {pageData.map((item, i) => {
          return (
            <div className="data-item" key={i}>
              <h3>{item.title}</h3>
              <h5>{item.body}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
