import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <>  
        <header>
            <h1 className='title'><Link to='/'>TRAKSTR</Link></h1>
            <nav></nav>
        </header>
        <div className="search-box">
            <div className="label-search">
                <h3 className="btn-united">UNITED</h3>
                <form action="" className="search"><input type="text" className="input" placeholder="Search" /></form>
            </div>
        </div>
        </>
    
    )
}

export default Navbar