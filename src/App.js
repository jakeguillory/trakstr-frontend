import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

// pages and components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {

  // Need to declare this state here for lifting up from NAV and passing to HOME
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
