import { useEffect, useState } from "react";
import moment from "moment";
import IconButton from "../IconButton";
import {
  Atom,
  BarChart3,
  BookOpen,
  Calendar,
  CircleUserRound,
  Clock,
  EllipsisVertical,
  FileText,
  Home,
  Image,
  LayoutTemplate,
  Link,
  MonitorPlay,
  Settings,
  SlidersVertical,
} from "lucide-react";
import classnames from "classnames";
import AudioControl from "./AudioControl";
import ScreenModeControl from "./ScreenModeControl";

interface BottomBarProps {
  csClassName?: string;
}

const BottomBar: React.FC<BottomBarProps> = ({ csClassName }) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  const wrapperClass = classnames(
    "px-[17px] absolute left-0 right-0 bottom-[22px] z-[9999] ease-in-out duration-300",
    csClassName
  );

  const updateTime = () => {
    const currentTime = moment().format("hh:mm A");
    setCurrentTime(currentTime);
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={wrapperClass}>
      <div className="text-white px-[17px] h-[50px] rounded-[10px] bg-[rgba(18,18,18,0.75)] backdrop-blur-[30px] border border-[rgba(255,255,255,0.2)] flex items-center justify-center">
        <div className="flex items-center mr-auto">
          <p className="text-white">{currentTime}</p>
        </div>
        <div className="flex items-center gap-[5px]">
          <IconButton icon={<Home size={20} />} />
          <div className="h-[20px] w-[2px] bg-[#fff2]" />
          <AudioControl />
          <div className="h-[20px] w-[2px] bg-[#fff2]" />
          <IconButton icon={<SlidersVertical size={20} />} />
          <IconButton icon={<LayoutTemplate size={20} />} />
          <IconButton icon={<Image size={20} />} />
          <IconButton icon={<Atom size={20} />} />
          <IconButton icon={<Calendar size={20} />} />
          <IconButton icon={<Link size={20} />} />
          <IconButton icon={<MonitorPlay size={20} />} />
          <IconButton icon={<Clock size={20} />} />
          <IconButton icon={<BookOpen size={20} />} />
          <IconButton icon={<FileText size={20} />} />
          <IconButton icon={<BarChart3 size={20} />} />
          <div className="h-[20px] w-[2px] bg-[#fff2]" />
          <ScreenModeControl videoRef={null} />
        </div>
        <div className="flex items-center ml-auto">
          <IconButton icon={<CircleUserRound size={20} />} />
          <IconButton icon={<Settings size={20} />} />
          <IconButton icon={<EllipsisVertical size={20} />} />
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
