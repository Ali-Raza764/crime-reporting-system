import { useState } from "react";

const CreateCriminal = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.criminalName.value;
    const gender = e.target.gender.value;
    const offence = e.target.offences.value;
    const wanted_level = e.target.wanted_level.value;
    const status = e.target.status.value;
    const description = e.target.criminalDescription.value;
    const imageUrl = "";
    // Perform any additional logic or API calls here
  };

  return (
    <div className="w-full h-full flex-props-c flex-col px-4 py-2 sm:p-6">
      <h1 className="text-3xl font-bold w-full text-center">
        Add New Criminals
      </h1>

      <div className="Form-Wrapper h-auto bg-gray-300 shadow-lg rounded-lg p-6">
        <form className="flex-props-c flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <label htmlFor="criminalName">Name</label>
            <input
              type="text"
              name="criminalName"
              id="criminalName"
              className="border border-gray-300 px-3 py-2 focus:outline-none w-full"
              required
              disabled={loading}
            />
          </div>

          <div className="gender flex flex-col w-full">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
              required
              disabled={loading}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="criminalImage">Image</label>
            <input
              type="file"
              name="criminalImage"
              id="criminalImage"
              className="border border-gray-300 w-full"
              required
              disabled={loading}
            />
          </div>

          <div className="wanted flex flex-col w-full">
            <label htmlFor="wanted_level">Wanted Level</label>
            <select
              name="wanted_level"
              id="wanted_level"
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
              required
              disabled={loading}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="Crimes-charged flex flex-col w-full">
            <div className="flex flex-col">
              <label htmlFor="offences">Offences</label>
              <input
                type="text"
                name="offences"
                id="offences"
                className="border border-gray-300 px-3 py-2 focus:outline-none w-full"
                required
                disabled={loading}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                name="status"
                id="status"
                className="border border-gray-300 px-3 py-2 focus:outline-none w-full"
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="summary flex flex-col w-fulls">
            <label htmlFor="criminalDescription">Criminal Description</label>
            <textarea
              name="criminalDescription"
              id="criminalDescription"
              cols="30"
              rows="10"
              className="border border-gray-300 px-3 py-2 focus:outline-none w-full"
              required
              disabled={loading}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Criminal"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCriminal;
