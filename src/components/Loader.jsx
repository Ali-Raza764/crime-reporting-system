import { FiLoader } from "react-icons/fi";

const Loader = () => {
  return (
    <div className="h-[84vh] w-full flex-props-c flex-col gap-y-14">
      {/* <img src={Icon} className="h-14 w-14" />

      <div className="animate-spin flex-props-c flex-col">
        <div className="flex">
          <div className="border-2 bg-blue-500 w-[2rem] h-8 "></div>
          <div className="border-2 bg-blue-500 w-[2rem] h-8"></div>
        </div>
        <div className="flex">
          <div className="border-2 bg-blue-500 w-[2rem] h-8"></div>
          <div className="border-2 bg-blue-500 w-[2rem] h-8"></div>
        </div>
      </div> */}
      <FiLoader className="text-blue-500 text-7xl font-extrabold animate-spin" />
    </div>
  );
};

export default Loader;
