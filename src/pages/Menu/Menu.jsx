import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import MenuDisplay from "../../components/menu-display/menudisplay";
import Navbar from "../../components/navbar/Navbar";
import { getEntireMenuData } from "../../services/api";

export default function Menu() {
    const [menuData, setMenuData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await getEntireMenuData();
            setMenuData(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            {loading
                ? <div className="text-center py-20">Loading menu...</div>
                : <MenuDisplay menuData={menuData} />
            }
            <Footer />
        </div>
    );
}