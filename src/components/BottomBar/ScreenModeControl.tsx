import IconButton from "../IconButton";
import { PictureInPicture, Scan } from "lucide-react";

interface ScreenModeControlProps {
  videoRef: React.RefObject<HTMLVideoElement> | null;
}

const ScreenModeControl: React.FC<ScreenModeControlProps> = ({ videoRef }) => {
  const toggleFullScreen = () => {
    const elem = document.documentElement;
    if (
      document.fullscreenElement !== undefined &&
      document.fullscreenElement === null
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const togglePictureInPicture = async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (videoRef?.current && videoRef?.current?.readyState === 4) {
        await videoRef?.current.requestPictureInPicture();
      }
    } catch (error) {
      console.error("Error toggling Picture-in-Picture mode:", error);
    }
  };

  return (
    <div className="flex items-center gap-[5px]">
      <IconButton
        icon={<PictureInPicture size={20} />}
        onAction={togglePictureInPicture}
      />
      <IconButton icon={<Scan size={20} />} onAction={toggleFullScreen} />
    </div>
  );
};

export default ScreenModeControl;
