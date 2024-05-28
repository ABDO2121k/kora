import {Link} from 'react-router-dom'
import StadiumTable from '../../../components/admin/stadium/StadiumTable';

const Stadium = () => {
  return (
    <div>
      <div className="w-[100%]">
        <div className="p-10 flex justify-around items-center flex-col md:flex-row w-[95%]">
        <h1 className="mb-4 text-lg break-words  font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white line-clamp-5">
            This is the list of all your Stadiums , You can add one by click :
          </h1>
          <div className="flex justify-center mt-3">
            <Link className={`p-3 border border-transparent text-white txt-center text-bold  bg-[#ff1744] rounded-md hover:bg-white hover:text-[#ff1744] hover:border-black hover:border-opacity-50`} to={"/admin/stadium/add"}>
              Add Stadium
            </Link>
          </div>
        </div>
        <div className="w-[100%] m-auto">
          <StadiumTable />
        </div>
      </div>
    </div>
  );
};

export default Stadium;
