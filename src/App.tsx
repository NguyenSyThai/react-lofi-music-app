import { useEffect, useRef, useState } from "react";
import BackgroundCover from "./components/BackgroundCover";
import BottomBar from "./components/BottomBar";
import Loading from "./components/Loading";
import axios from "axios";

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

  // const options = {
  //   method: "GET",
  //   url: "https://spotify23.p.rapidapi.com/search/",
  //   params: {
  //     q: "<REQUIRED>",
  //     type: "multi",
  //     offset: "0",
  //     limit: "10",
  //     numberOfTopResults: "5",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "b63945aa1amsh5a04fe452d068afp1803afjsn0f26108abcd0",
  //     "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  //   },
  // };

  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/songs/get-details",
    params: {
      key: "40333609",
      locale: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": "b63945aa1amsh5a04fe452d068afp1803afjsn0f26108abcd0",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  const getMusicApi = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMusicApi();
  }, []);

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
