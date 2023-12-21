import { ReactNode } from "react";
import Footer from "./Footer";
import Nevbar from "./Nevbar";

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Nevbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
