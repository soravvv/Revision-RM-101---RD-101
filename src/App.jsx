import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8080/scroll?page=${page}&size=25`)
      .then((res) => res.json())
      .then((json) => setData([...data, json]));
  }, [page]);

  const scrollToEnd = () => {
    setPage(page + 1);
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  var count = 0;

  return (
    <div className="App">
      {data?.map((el) =>
        el.map((el) => (
          <div className="container">
            {el.name} {(count = count + 1)}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
