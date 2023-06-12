import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

// pages and components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {

  // Need to declare this state here for lifting up from NAV and passing to HOME
  const [ searchTerm, setSearchTerm ] = useState("")
  const [ hotDealsActive, setHotDealsActive ] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setSearchTerm={setSearchTerm} setHotDealsActive={setHotDealsActive}/>
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home searchTerm={searchTerm} hotDealsActive={hotDealsActive} />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
