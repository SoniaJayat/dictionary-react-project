import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <header className="App-header"></header>
          <h1>
            Dictionary{" "}
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/140/380/original/blue_book.png?1724248649"
              className="dictionary-logo img-fluid"
              alt="dictionary-book-logo"
            />
          </h1>
        </div>

        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Sonia Jayatheesan and is open-sourced on
            GitHub
          </small>
        </footer>
      </div>
    </div>
  );
}
