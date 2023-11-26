import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Criminal, CriminalLoading, LoggedOut, CriminalNotFound } from "../components";
import { AuthUser } from "../utils/AuthUser";
import { getCriminalDetails } from "../utils/getCriminalDetails";

const CriminalDetails = () => {
  const { id } = useParams();
  const user = AuthUser();
  const [criminalData, setCriminalData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const doc = await getCriminalDetails(id);
        setCriminalData(doc);
      } catch (error) {
        console.error("Error fetching criminal details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [id, user]);

  if (!user) {
    return <LoggedOut />;
  }

  if (loading) {
    return <CriminalLoading />;
  }

  if (!criminalData) {
    return <CriminalNotFound />;
  }

  return (
    <div className="container mx-auto">
      <Criminal criminalData={criminalData} />
    </div>
  );
};

export default CriminalDetails;
