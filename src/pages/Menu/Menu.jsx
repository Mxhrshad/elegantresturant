import { useEffect, useState } from "react";
import MenuDisplay from "../../components/menuDisplay/MenuDisplay";
import { getEntireMenuData } from "../../services/api";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

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