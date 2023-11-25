import { FaSearch } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { AuthUser } from "../utils/AuthUser"; // our custom hook for getting user auth property in realtime

const Search = () => {
  const navigate = useNavigate();
  const user = AuthUser();
  // const user = true;
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/criminaldetails/${e.target.criminalId.value}`);
  };

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
    <div className="container mx-auto mt-8 flex-props-c h-[85%]">
      <div className="bg-white p-8 rounded-md shadow-xl flex-props-c flex-col">
        <h2 className="text-3xl font-bold mb-6">Search Criminal</h2>

        <form className="flex items-center mb-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Criminal ID"
            className="w-full px-4 py-2 border rounded outline-none focus:border-blue-400"
            name="criminalId"
            id="criminalId"
            required
          />

          <button
            className="bg-blue-500 text-white px-4 py-3 rounded ml-2"
            type="submit"
          >
            <FaSearch />
          </button>
        </form>

        <p className="text-gray-600 mb-4">
          Enter the Criminal ID to view details.
        </p>

        <div className="flex justify-end">
          <button className="text-blue-500 hover:underline">
            Advanced Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
