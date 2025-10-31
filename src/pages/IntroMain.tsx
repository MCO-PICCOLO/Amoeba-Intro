import './IntroMain.css';
import videoSource from '../assets/videos/자율주행_임시영상_251028 1.mp4';
const IntroMain = () => {
  return (
    <div className="intro-main">
      <div className="video-area">
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
