import { useState } from 'react';

const BackgroundVideo = () => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="fixed inset-0 z-0 bg-neutral-950">
      {!failed && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default BackgroundVideo;
