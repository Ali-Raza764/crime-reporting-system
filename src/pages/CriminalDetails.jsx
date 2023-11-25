import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Criminal, CriminalLoading } from "../components";
import { AuthUser } from "../utils/AuthUser"; // our custom hook for getting user auth property in realtime
import { getCriminalDetails } from "../utils/getCriminalDetails";

const CriminalDetails = () => {
  const { id } = useParams();
  const user = AuthUser();
  // const user = true;
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
    // getCriminalDetails().then(doc=>setCriminalData(doc));
  }, [id]);

  if (!user) {
    return (
      <div className="w-full h-[90%] flex-props-c flex-col">
        <h1>Please Log in first</h1>
        <Link to={"/login"}>
          <button className="p-2 text-xl font-semibold">LogIn</button>
        </Link>
      </div>
    );
  }
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
