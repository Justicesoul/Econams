import { useState } from 'react';

const Video = () => {
  const [mutedSound, setMutedSound] = useState(true);

  const changeSoundMutability = () => {
    setMutedSound(!mutedSound);
  };

  return (
    <div className="header__video">
      <video
        className="video"
        onClick={changeSoundMutability}
        autoPlay
        muted={mutedSound}
        loop
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video__content" onClick={changeSoundMutability}>
        <h1 className="video__content-title">
          Guļbūvju ražošana īsti Skandināviskās tradīcijās
        </h1>
        {mutedSound && (
          <img
            className="video__content-sound--btn"
            src="./images/eko-nams-audio-mute.svg"
            alt="mute-icon"
            onClick={changeSoundMutability}
          />
        )}
      </div>
    </div>
  );
};

export default Video;
