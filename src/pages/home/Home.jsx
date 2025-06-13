import ChefsRecommendations from "../../components/chefs-recommendations/chefsrecommendations";
import Footer from "../../components/footer/footer";
import HeroSection from "../../components/hero-section/HeroSection";
import MenuCategories from "../../components/menu-categories/menucategories";
import MenuItemsDisplay from "../../components/menu-items-display/menuitemsdisplay";
import Navbar from "../../components/Navbar/navbar";

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