import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default page;
