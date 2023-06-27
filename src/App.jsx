import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styles from "./App.module.css";

function App() {
  const [style, setStyle] = useState({ background: "black", color: "white" });
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <p style={style}>css modules</p>
      <button
        onClick={() => {
          setToggle(!toggle);
          toggle
            ? setStyle({ ...style, color: "blue", border: "10px solid yellow" })
            : setStyle({
                ...style,
                color: "yellow",
                border: "10px solid grey",
              });

          console.log(toggle);
        }}
      >
        Change style
      </button>
    </>
  );
}

export default App;
