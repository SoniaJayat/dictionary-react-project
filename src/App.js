import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <header className="App-header"></header>

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
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/sonia-jayatheesan-9b928b268/?originalSubdomain=uk"
              target="_blank"
              rel="noreferrer"
            >
              Sonia Jayatheesan
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/SoniaJayat/dictionary-react-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
