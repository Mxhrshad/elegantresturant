import HeroSection from "../../components/hero-section/HeroSection";
import MenuCategories from "../../components/menu-categories/menucategories";
import Navbar from "../../components/Navbar/navbar";

export default function Home() {
    return (
        <div className="w-full">
            <Navbar />
            <HeroSection />
            <MenuCategories />
            <div >

            </div>
        </div>
    );
}