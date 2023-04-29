import { useEffect, useState } from "react";

// Components
import MerchDetails from "../components/MerchDetails";

const Home = () => {
  const [unitedMerchs, setUnitedMerchs] = useState(null);

  useEffect(() => {
    const fetchUnitedMerchs = async () => {
      const response = await fetch("http://localhost:3001/united/");
      const json = await response.json();

      if (response.ok) {
        setUnitedMerchs(json);
      }
    };

    fetchUnitedMerchs();
  }, []);

  return (
    <div className="home">
      <h2>United Rewards Data</h2>
      <div className="merchs">
        {unitedMerchs &&
          unitedMerchs.map((merch) => (
            <MerchDetails merch={merch} key={merch._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
