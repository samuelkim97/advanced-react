import { useState } from "react";

const ToggleChallenge = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const MusicOff = () => {
    return (
      <div>
        <h2>click a button to play music</h2>
      </div>
    );
  };

  const MusicOn = () => {
    return (
      <div>
        <h2>click a button to stop music</h2>
      </div>
    );
  };

  const MusicPlayer = () => {
    return (
      <div>
        <h1 style={{ fontSize: "5rem", width: "200px", margin: "auto" }}>
          music player
        </h1>
      </div>
    );
  };

  return (
    <>
      {isPlaying ? <MusicOn /> : <MusicOff />}
      <button className="btn" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "stop" : "play"}
      </button>
      {isPlaying && <MusicPlayer />}
    </>
  );
};

export default ToggleChallenge;
