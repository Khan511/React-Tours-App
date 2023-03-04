import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoad, setIsLoad] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();

      setIsLoad(false);
      setTours(tours);
    } catch (error) {
      setIsLoad(false);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    setTours(
      tours.filter((tour) => {
        return tour.id !== id;
      })
    );
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoad) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button onClick={fetchTours} className="btn">
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} onClick={removeTour} />
    </main>
  );
}
export default App;
