import { useState } from "react";

function App() {
  return (
    <>
      <header>
        <h1>REACT BLOG FORM</h1>
      </header>
      <main>
        <div className="container">
          <div className="d-flex">
            <form>
              <input type="text" className="form-input" />
              <button className="form-button">AGGIUNGI</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
