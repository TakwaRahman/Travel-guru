import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar/NavBar";


const HomeLayouts = () => {
    return (
        <div>
            <div className="min-h-screen">

                <header>
                    <NavBar />
                </header>

                <main>
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default HomeLayouts;