import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AlgorithmList from "./components/Algorithm/AlgorithmList";
import AlgorithmDetail from "./components/Algorithm/AlgorithmDetail";
import { categories, getAllAlgorithms } from "./data";

function Home() {
  return (
    <div className="home">
      <h1>📚 DSA Playbook</h1>
      <p className="subtitle">
        A curated collection of data structures and algorithms in JavaScript.
      </p>
      <div className="home-stats">
        <div className="stat">
          <strong>{categories.length}</strong>
          <span>Categories</span>
        </div>
        <div className="stat">
          <strong>{getAllAlgorithms().length}</strong>
          <span>Algorithms</span>
        </div>
        <div className="stat">
          <strong>
            {getAllAlgorithms().reduce((s, a) => s + a.programs.length, 0)}
          </strong>
          <span>Programs</span>
        </div>
      </div>
    </div>
  );
}
function App() {
  
return (
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:categoryId" element={<AlgorithmList />} />
        <Route path="algorithm/:algoId" element={<AlgorithmDetail />} />
        <Route path="search" element={<AlgorithmList />} />
      </Route>
    </Routes>
  );

}

export default App;
