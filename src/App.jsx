import "./App.css";
function App() {
  const Movies = [
    { name: "Conan", watched: true },
    { name: "The thife", watched: false },
    { name: "Quite Place", watched: true },
  ];

  return (
    <>
      <h1>Movie List</h1>
      <ul>
        {Movies.map((movie, index) => (
          <li key={index} className={movie.watched ? "watched" : "not-watched"}>
            {movie.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
