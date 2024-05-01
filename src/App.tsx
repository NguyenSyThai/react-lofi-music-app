import { useEffect, useState } from "react";
import BackgroundCover from "./components/BackgroundCover";
import BottomBar from "./components/BottomBar";
import Loading from "./components/Loading";

function App() {
  const [isVisible, setVisible] = useState<boolean>(true);

  const updateVisible = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      setTimeout(updateVisible, 10000);
    }
  }, [isVisible]);

  return (
    <div
      className="flex items-center justify-center w-full"
      onMouseOver={() => setVisible(true)}
    >
      <BackgroundCover />
      <BottomBar
        csClassName={
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[100px]"
        }
      />
      <Loading />
    </div>
  );
}

export default App;
