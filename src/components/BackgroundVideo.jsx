import { useState, useEffect } from 'react';

const BackgroundVideo = () => {
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const onChange = (event) => setReducedMotion(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-neutral-950">
      {!failed && !reducedMotion && (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/poster.jpg"
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      )}
      {(failed || reducedMotion) && (
        <img
          src="/videos/poster.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default BackgroundVideo;
