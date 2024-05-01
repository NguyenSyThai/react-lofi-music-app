import { Player } from "@lottiefiles/react-lottie-player";
import loading from "../assets/loading.json";
import { useEffect, useState } from "react";

const Loading: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const updateLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(updateLoading, 1000);
    }
  }, [isLoading]);

  if (!isLoading) {
    return;
  }
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 z-[10000000] bg-white/90 w-full h-full flex items-center justify-center pb-[5vh]">
      <Player autoplay loop src={loading} className="size-[300px]"></Player>
    </div>
  );
};

export default Loading;
