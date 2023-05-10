import { useEffect, useState } from "react";

// Components
import MerchDetails from "../components/MerchDetails";

const Home = ({ searchTerm }) => {
  const [unitedMerchs, setUnitedMerchs] = useState(null);

  useEffect(() => {
    const fetchUnitedMerchs = async () => {
      const response = await fetch("http://myliltestserver.com/api/united/");
      const json = await response.json();

      if (response.ok) {
        setUnitedMerchs(json);
      }
    };

    fetchUnitedMerchs();
  }, []);

  return (
    <div className="home">
      <div className="merch-cards">
        {unitedMerchs &&
          unitedMerchs.filter(merch => merch.merchName.toLowerCase().includes(searchTerm.toLowerCase())).map((merch) => (
            <MerchDetails merch={merch} key={merch._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
