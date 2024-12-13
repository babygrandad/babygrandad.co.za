import { useState } from "react";
import viteLogo from "/vite.svg";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo bg-slate-900" alt="Vite logo" />
      </a>
    </>
  );
}

export default App;
