import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`) 
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error("Error fetching movie:", err));
  }, [id]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>Duration: {movie.time} minutes</p>
            <section>
              {movie.genres?.map((genre, index) => ( 
                <span key={index}>{genre}</span>
              ))}
            </section>
          </>
        ) : (
          <p>Loading movie details...</p>
        )}
      </main>
    </>
  );
}

export default Movie;
