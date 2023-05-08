import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

// pages and components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {

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
