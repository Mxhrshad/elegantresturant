import ChefsRecommendations from "../../components/chefs-recommendations/Chefsrecommendations";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/hero-section/HeroSection";
import MenuCategories from "../../components/menu-categories/Menucategories";
import MenuItemsDisplay from "../../components/menu-items-display/Menuitemsdisplay";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <MenuCategories />
            <MenuItemsDisplay />
            <ChefsRecommendations />
            <Footer />
            <div >

            </div>
        </div>
    );
}