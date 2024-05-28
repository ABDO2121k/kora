import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar2 from '../../components/admin/sidebar/Sidebar';
import { useContext, useEffect } from 'react';
import { myContext } from '../../context/GlobalContext';

const AdminP = () => {
    const context=useContext(myContext)
    const navigate=useNavigate()
    useEffect(()=>{
        if(!context?.isLo||context?.currentUser?.role!="admin") navigate('/')
    },[])
    return (
        <div className="">
            <div className="flex h-screen overflow-hidden">
                <Sidebar2/>
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            <Outlet/>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AdminP;
