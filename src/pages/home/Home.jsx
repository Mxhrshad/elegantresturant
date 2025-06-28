import ChefsRecommendations from "../../components/chefs-recommendations/ChefsRecommendations";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/hero-section/HeroSection";
import MenuCategories from "../../components/menu-categories/MenuCategories";
import MenuItemsDisplay from "../../components/menu-items-display/MenuItemsDisplay";
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