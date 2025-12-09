import { useState, useEffect } from 'react';
import './IntroMain.css';
import videoSource from '../assets/videos/자율주행영상_251103_확대 1.mp4';

const IntroMain = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleVideoAreaClick = () => {
    setIsZoomed(!isZoomed);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === '1') {
      setIsZoomed(true);
    } else if (event.key === '2') {
      setIsZoomed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={`intro-main ${isZoomed ? 'overlay' : ''}`}>
      <div
        className={`video-area ${isZoomed ? 'zoomed' : ''}`}
        onClick={handleVideoAreaClick}
      >
        <video
          src={videoSource}
          autoPlay
          muted
          playsInline
          loop
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default IntroMain;
