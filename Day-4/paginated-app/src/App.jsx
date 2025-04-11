import { useEffect, useState } from 'react';
import './App.css';

const ITEMS_PER_PAGE = 10;

function App() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Total items and pages
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await res.json();
        setItems(data);
        setTotalItems(data.length);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <h1>Paginated Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {currentItems.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '1rem' }}>
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
              Prev
            </button>

            {[...Array(totalPages)].map((_, idx) => {
              const page = idx + 1;
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  style={{
                    fontWeight: currentPage === page ? 'bold' : 'normal',
                    margin: '0 4px',
                  }}
                >
                  {page}
                </button>
              );
            })}

            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
