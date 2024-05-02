import { useEffect, useRef, useState } from "react";
import BackgroundCover from "./components/BackgroundCover";
import BottomBar from "./components/BottomBar";
import Loading from "./components/Loading";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mouseMoved, setMouseMoved] = useState<boolean>(false);
  const [isInPictureInPicture, setIsInPictureInPicture] =
    useState<boolean>(false);

  useEffect(() => {
    let timer: number;

    const handleMouseMove = () => {
      setMouseMoved(true);
      // Reset the timer on mouse movement
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        setMouseMoved(false);
      }, 100000); // 10 seconds
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener and timer on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const handleTogglePictureInPicture = async () => {
    if (!document.pictureInPictureEnabled) {
      alert("Picture-in-Picture is not supported in this browser.");
      return;
    }

    if (videoRef.current) {
      try {
        if (isInPictureInPicture) {
          // Exit Picture-in-Picture mode
          await document.exitPictureInPicture();
          setIsInPictureInPicture(false);
        } else {
          // Enter Picture-in-Picture mode
          await videoRef.current.requestPictureInPicture();
          setIsInPictureInPicture(true);
        }
      } catch (error) {
        console.error("Error entering Picture-in-Picture mode:", error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <BackgroundCover videoRef={videoRef} />
      <BottomBar
        csClassName={
          mouseMoved
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[100px]"
        }
        onTogglePictureInPicture={handleTogglePictureInPicture}
      />
      <Loading />
      <div className="hidden">learn react</div>
    </div>
  );
}

export default App;
