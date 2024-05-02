import IconButton from "../IconButton";
import { PictureInPicture, Scan } from "lucide-react";

interface ScreenModeControlProps {
  onTogglePictureInPicture: () => void;
}

const ScreenModeControl: React.FC<ScreenModeControlProps> = ({
  onTogglePictureInPicture,
}) => {
  const toggleFullScreen = () => {
    const elem = document.documentElement;
    if (
      document.fullscreenElement !== undefined &&
      document.fullscreenElement === null
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
      // else if (elem.webkitRequestFullscreen) {
      //   elem.webkitRequestFullscreen();
      // } else if (elem.msRequestFullscreen) {
      //   elem.msRequestFullscreen();
      // }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      // else if (document.webkitExitFullscreen) {
      //   document.webkitExitFullscreen();
      // } else if (document.msExitFullscreen) {
      //   document.msExitFullscreen();
      // }
    }
  };

  return (
    <div className="flex items-center gap-[5px]">
      <IconButton
        icon={<PictureInPicture size={20} />}
        onAction={onTogglePictureInPicture}
        label="Picture in Picture"
      />
      <IconButton
        icon={<Scan size={20} />}
        onAction={toggleFullScreen}
        label="Full Screen"
      />
    </div>
  );
};

export default ScreenModeControl;
