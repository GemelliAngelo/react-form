import { useState } from "react";

function App() {
  const [addTitles, setAddTitles] = useState("");
  const [posts, setPosts] = useState([]);

  const handleInputChange = (e) => {
    setAddTitles(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!addTitles) {
      alert("Inserisci un titolo valido");
      return;
    }

    setPosts([...posts, { name: addTitles }]);
    setAddTitles("");
    console.log(addTitles);
  };

  return (
    <>
      <header>
        <h1>REACT BLOG FORM</h1>
      </header>
      <main>
        <div className="container">
          <div className="d-flex">
            <form onSubmit={handleFormSubmit}>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-input"
                name="blog-title"
                value={addTitles}
              />
              <button className="form-button">AGGIUNGI</button>
            </form>
            <div className="d-flex">
              <ul className="titles-list">
                {posts.map((post) => (
                  <li className="titles-list-item" key={post.name}>
                    {post.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
