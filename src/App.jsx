import { useState } from "react";

function App() {
  const [titles, setTitles] = useState();

  const handleInputTitles = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <header>
        <h1>REACT BLOG FORM</h1>
      </header>
      <main>
        <div className="container">
          <div className="d-flex">
            <form onChange={handleInputTitles}>
              <input type="text" className="form-input" />
              <button className="form-button">AGGIUNGI</button>
            </form>
            <ul></ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
