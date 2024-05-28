
import { Link, useParams } from 'react-router-dom'
import PlaningTable from '../../../components/admin/planing/planing/PlaningTable'


const StadiumPlaning = () => {
    const {idS}=useParams()
    return (
        <div className="w-[100%]">
            <div className="p-10 flex justify-around items-center flex-col md:flex-row w-[95%]">
                <h1 className="mb-4 text-lg break-words  font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white line-clamp-5">
                    This is the list of all your Plannings  to the stadium :
                </h1>
                <div className="flex justify-center mt-3">
                    <Link className={`p-3 border border-transparent text-white txt-center text-bold  bg-[#ff1744] rounded-md hover:bg-white hover:text-[#ff1744] hover:border-black hover:border-opacity-50`} to={`/admin/stadium/planing/add/${idS}`}>
                        Add Next WeekPlaning
                    </Link>
                </div>
            </div>
            <div className="w-[100%] m-auto">
                <PlaningTable />
            </div>
        </div>
    )
}

export default StadiumPlaning