import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import { useParams } from "react-router-dom";
import { Criminal } from "../components";
import CriminalLoading from "../components/CriminalLoadiong";

const CriminalDetails = () => {
  const { id } = useParams();
  const [criminalData, setCriminalData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (id) => {
    setLoading(true);
    setTimeout(() => {
      const fetchedCriminalData = {
        id: 451245,
        name: "Gotham Chess",
        gender: "neutral",
        age: 30,
        criminal_records: {
          offences: "Theft, Assault",
          status: "Incarcerated",
        },
        criminal_description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt erat sit amet mauris tristique, vel aliquam estconsectetur",
      };
      setCriminalData(fetchedCriminalData);
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    handleSearch(id);
  }, [id]);

  return (
    <div className="container mx-auto">
      {loading ? (
        <CriminalLoading />
      ) : (
        criminalData && (
          <div>
            <Criminal criminalData={criminalData} />
          </div>
        )
      )}
    </div>
  );
};

export default CriminalDetails;
