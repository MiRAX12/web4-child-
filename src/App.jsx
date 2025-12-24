import "./App.css";
import { Header } from "./header/Header.jsx";
import { Login } from "./login/Login.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Header
          name="Нагорный Николай Викторович"
          group="P3217"
          variant="6431"
        />
        <Login />
      </div>
    </>
  );
}

export default App;
