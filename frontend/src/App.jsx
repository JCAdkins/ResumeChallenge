import { useEffect, useRef, useState } from "react";
import Header from "./components/html/Header";
import Body from "./components/html/Body";
import Footer from "./components/html/Footer";
import "./App.css";
import { Card } from "@mui/material";
import getVisitorCount from "./services/getVisitorCount";

function App() {
  const [views, setViews] = useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    getVisitorCount().then((data) => {
      setViews(data.update);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${
          scrollPosition * -0.6
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex w-full h-full min-h-screen min-w-screen justify-center items-center p-6 overflow-hidden">
      <div
        ref={parallaxRef}
        className="parallax-bg"
        // className="absolute bg-center -z-10 h-full w-full bg-[url(https://images.unsplash.com/photo-1506968430777-bf7784a87f23?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
      />
      {views ? (
        <Card
          variant="outlined"
          className="fixed top-0 sm:top-1 md:top-2 right-0 sm:right-1 md:right-2 p-0.5 text-xs"
        >
          Views: {`${views}`}
        </Card>
      ) : (
        <></>
      )}
      <div className="relative bg-white rounded-md flex flex-col w-4/5 h-full items-center py-10 px-12 space-y-10 font-sans subpixel-antialiased shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
