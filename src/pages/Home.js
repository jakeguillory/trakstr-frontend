import { useEffect, useState } from "react";

// Components
import MerchDetails from "../components/MerchDetails";

const Home = () => {
  const [unitedMerchs, setUnitedMerchs] = useState(null);

  useEffect(() => {
    const fetchUnitedMerchs = async () => {
      const response = await fetch("http://64.226.85.122/united/");
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
          unitedMerchs.map((merch) => (
            <MerchDetails merch={merch} key={merch._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
