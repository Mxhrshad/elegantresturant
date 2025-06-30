import ChefsRecommendations from "../../components/ChefsRecommendations/ChefsRecommendations";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import MenuCategories from "../../components/MenuCategories/MenuCategories";
import MenuItemsDisplay from "../../components/menuItemsDisplay/MenuItemsDisplay";
import Navbar from "../../components/Navbar/Navbar";

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