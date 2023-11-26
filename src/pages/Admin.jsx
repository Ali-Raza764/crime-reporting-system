import { toast } from "react-toastify";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { AuthUser } from "../utils/AuthUser";
import { LoggedOut } from "../components";

const Admin = () => {
  const user = AuthUser();
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Error logging out: ${error.message}`);
      });
  };

  if (!user) {
    return <LoggedOut />;
  }

  return (
    <div className="w-full h-screen flex-props-c flex-col py-14">
      <h1 className="text-3xl font-bold mb-6">Admin</h1>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default Admin;
