import HeroSection from "../../components/hero-section/HeroSection";
import MenuCategories from "../../components/menu-categories/menucategories";
import MenuItemsDisplay from "../../components/menu-items-display/menuitemsdisplay";
import Navbar from "../../components/Navbar/navbar";

export default function Home() {
    return (
        <div className="w-full">
            <Navbar />
            <HeroSection />
            <MenuCategories />
            <MenuItemsDisplay />
            <div >

            </div>
        </div>
    );
}