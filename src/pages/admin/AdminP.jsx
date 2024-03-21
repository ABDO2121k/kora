import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/admin/sidebare/SideBare';
import Header from '../../components/admin/header/Index';
import Sidebar2 from '../../components/admin/sidebar/Sidebar';

const AdminP = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="bg-red-300">
            <div className="flex h-screen overflow-hidden">
                {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
                <Sidebar2/>
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
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
