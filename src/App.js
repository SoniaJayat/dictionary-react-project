import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <header className="App-header"></header> <h1></h1>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/144/164/original/blue_dictionary.png?1726683649"
            className="dictionary-logo img-fluid"
            alt="dictionary-book-logo"
            width="400px"
          />
        </div>

        <main>
          <Dictionary defaultKeyword="sunset" />
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
