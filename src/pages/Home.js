import useFetch from '../hooks/useFetch'

// Components
import MerchDetails from "../components/MerchDetails";

const Home = ({ searchTerm, hotDealsActive }) => {

  const { data: unitedMerchs, isPending, error } = useFetch('http://localhost:3001/united/')

  const isHotDeal = (arr) => {

    const numDays = 3
    const current = arr[arr.length - 1].price
    const previous = arr[arr.length - 4].price
    
    return current > previous
  }

  return (

    <div className="merch-cards">
      { error && <div className='error'>{ error }</div> }
      { isPending && <h3 className="loading">Loading...</h3> }
      { unitedMerchs &&
          unitedMerchs/*.filter((vendor) => (hotDealsActive ? isHotDeal(vendor.prices) : true))*/.filter((merc) => (merc.merchName.toLowerCase()
                                                      .includes(searchTerm.toLowerCase())))
                      .map((merch) => (
                        <MerchDetails merch={merch} key={merch._id}/>
      ))}
    </div>
  )
}

export default Home;


