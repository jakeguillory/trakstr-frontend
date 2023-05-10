import useFetch from '../hooks/useFetch'

// Components
import MerchDetails from "../components/MerchDetails";

const Home = ({ searchTerm }) => {

  const { data: unitedMerchs, isPending, error } = useFetch('http://164.92.193.179/api/united/');

  return (
    <div className="home">
      <div className="merch-cards">
        { error && <div>{ error }</div> }
        { isPending && <h3 className="loading">Loading...</h3> }
        {unitedMerchs &&
          unitedMerchs.filter(merch => merch.merchName.toLowerCase().includes(searchTerm.toLowerCase())).map((merch) => (
            <MerchDetails merch={merch} key={merch._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
