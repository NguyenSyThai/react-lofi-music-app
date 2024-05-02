interface BackgroundCoverProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const BackgroundCover: React.FC<BackgroundCoverProps> = ({ videoRef }) => {
  return (
    <div className="h-[100vh] min-h-[100vh] min-w-[100vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 w-[177.77778vh]">
      <video
        ref={videoRef}
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        className="min-h-[100vh] min-w-[100vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[400] w-[100vw]"
      >
        <source
          src="https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/Cozy_Studio/Studio_day.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default BackgroundCover;
