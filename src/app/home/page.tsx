import Clarifications from "@/components/Home/Clarifications";
import HeaderContent from "@/components/Home/HeaderContent";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <main className="dark:bg-dark-warning white:bg-white ">
            <div className="m-auto  max-w-[1720px]">
                <Navbar />

                <HeaderContent />
            </div>

            <Clarifications />
        </main>
    );
}
