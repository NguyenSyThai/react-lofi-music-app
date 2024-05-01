import { useState } from "react";
import IconButton from "../IconButton";
import {
  CirclePause,
  CirclePlay,
  SkipBack,
  SkipForward,
  Volume1,
  VolumeX,
} from "lucide-react";

const AudioControl = () => {
  const [isPlay, setPlay] = useState<boolean>(false);
  return (
    <div className="flex items-center gap-[5px]">
      <IconButton icon={<SkipBack size={20} />} />
      {isPlay ? (
        <IconButton
          icon={<CirclePause size={20} />}
          onAction={() => setPlay(false)}
        />
      ) : (
        <IconButton
          icon={<CirclePlay size={20} />}
          onAction={() => setPlay(true)}
        />
      )}
      <IconButton icon={<SkipForward size={20} />} />
      <IconButton icon={<Volume1 size={20} />} />
      <IconButton icon={<VolumeX size={20} />} />
    </div>
  );
};

export default AudioControl;
