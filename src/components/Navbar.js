import { Link } from "react-router-dom"

const Navbar = ({ setSearchTerm, setHotDealsActive }) => {

  const toggleDeals = () => {
    let hotDealsBtn = document.querySelector('#hot-deals')
    hotDealsBtn.classList.toggle("hot-deals-active")
    return (hotDealsBtn.classList.contains("hot-deals-active")) ? setHotDealsActive(true) : setHotDealsActive(false)
  }

  return (
    <header>
      <div className="banner">
        <h1 className="title">
          <Link to="/">TRAKSTR</Link>
        </h1>
        <nav></nav>
      </div>
      <div className="search">
        <input 
          id="hot-deals"
          className="hot-deals"
          type="button"
          value="HOT DEALS"
          onClick={toggleDeals}
        />
        <input
          type="text"
          className="search-box"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Navbar
