import AboutUs from "@/components/Home/AboutUs";
import Clarifications from "@/components/Home/Clarifications";
import Footer from "@/components/Home/Footer";
import HeaderContent from "@/components/Home/HeaderContent";
import Sticker from "@/components/Home/Sticker";
import Ventajas from "@/components/Home/Ventajas";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <main className="dark:bg-dark-warning white:bg-white ">
            <div className="m-auto  max-w-[1720px]">
                <Navbar />

                <HeaderContent />
            </div>

            <Clarifications />

            <AboutUs />

            <div className="m-auto  max-w-[1720px]">
                <Ventajas />
                <Sticker />
            </div>
            <Footer />
        </main>
    );
}
