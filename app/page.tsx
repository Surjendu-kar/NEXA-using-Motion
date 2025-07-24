"use client";
import About from "@/components/About";
import Cards from "@/components/Cards";
import Eyes from "@/components/Eyes";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";

function Page() {
  const [count, setCount] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoadingComplete(true), 500);
          return 100;
        }
        return prevCount + 1;
      });
    }, 13);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      const locomotiveScroll = new LocomotiveScroll();
    }
  }, [loadingComplete]);

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white overflow-hidden">
      {loadingComplete && <Navbar />}
      <LandingPage loadingComplete={loadingComplete} count={count} />
      {loadingComplete && (
        <>
          <Marquee />
          <About />
          <Eyes />
          <Featured />
          <Cards />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Page;
