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

interface AudioControlProps {
  isPlaying: boolean;
  repeat: boolean;
  setRepeat?: () => void;
  shuffle?: () => void;
  setShuffle?: () => void;
  currentSongs: any[];
  handlePlayPause?: () => void;
  handlePrevSong?: () => void;
  handleNextSong?: () => void;
}

const AudioControl: React.FC<AudioControlProps> = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handleNextSong,
  handlePrevSong,
}) => {
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
      <IconButton icon={<Volume1 size={20} />} label="Volume" />
      <IconButton icon={<VolumeX size={20} />} label="Mute All" />
      <div className="w-full flex justify-center items-center flex-col">
        {/* <img src={react} alt="loader" className="w-32 h-32 object-contain" /> */}
        <h1 className="font-bold text-2xl text-white mt-2">123123</h1>
      </div>
    </div>
  );
};

export default AudioControl;
