import HomePage from "./pages/HomePage";
import OpenWeatherPage from "./pages/OpenWeatherPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/weather" element={<OpenWeatherPage />} />
      </Routes>
    </>
  );
}

export default App;
