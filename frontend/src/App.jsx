import "./App.css";
import Login from "./components/Login";
import Error from "./components/404Error";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}
import Home from "./components/Home";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
