import { Outlet } from "react-router-dom";

import Header from "../../Sections/Header";

function Root() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Root;