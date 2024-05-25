import { useEffect, useRef, useState } from "react";
import Header from "./components/html/Header";
import Body from "./components/html/Body";
import Footer from "./components/html/Footer";
import "./App.css";
import { Button, Card } from "@mui/material";
import getVisitorCount from "./services/getVisitorCount";

function App() {
  const [views, setViews] = useState(0);
  const [showResume, setShowResume] = useState(true);
  const parallaxRef = useRef(null);

  useEffect(() => {
    getVisitorCount().then((data) => {
      setViews(data.update);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // const offset = window.innerHeight * -0.15;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${
          scrollPosition * -0.6
        }px)`;
      }
    };

    // Initial set position
    if (parallaxRef.current) {
      const height = window.innerHeight;
      const transHeight = height * -0.15;
      parallaxRef.current.style.transform = `translateY(${transHeight}px)`;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleShowResume = () => {
    setShowResume((prevState) => !prevState);
  };

  // bg: https://images.unsplash.com/photo-1506968430777-bf7784a87f23?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

  return (
    <div className="relative flex w-full h-full min-h-screen min-w-screen justify-center items-center p-6 overflow-hidden">
      <div
        ref={parallaxRef}
        className="parallax-bg"
        // className="absolute bg-center -z-10 h-full w-full bg-[url(https://i.pinimg.com/564x/13/30/90/13309089ffff021858624c00f40fff0b.jpg)]"
      />
      <div
        className="bg-white hover:bg-gray-200 rounded-full cursor-pointer fixed top-0 sm:top-1 md:top-2 left-0 sm:left-1 md:left-2 text-xs"
        onClick={toggleShowResume}
      >
        <Button size="small">{showResume ? <p>Hide</p> : <p>Show</p>}</Button>
      </div>
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
      <div
        className={`${
          showResume ? "opacity-100" : "opacity-0"
        } resume relative bg-white rounded-md flex flex-col items-center py-10 px-12 font-sans subpixel-antialiased shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]`}
      >
        <div className="resume-inner space-y-10">
          <Header />
          <Body disable={showResume ? false : true} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
