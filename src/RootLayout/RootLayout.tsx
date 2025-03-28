import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const RootLayout = () => {
    return ( 
        <>
            <Header />

            <main className="outlet">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default RootLayout;