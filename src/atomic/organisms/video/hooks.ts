import { useState, useEffect } from "react";

export const usePlayerState = (videoPlayerElement: any) => {
  const [playerState, setPlayerState] = useState({
    playing: false,
    percentage: 0,
    volumePercentage: 100,
    isMuted: false,
  });

  useEffect(() => {
    playerState.playing
      ? videoPlayerElement.current.play()
      : videoPlayerElement.current.pause();

    playerState.percentage === 100 &&
      setPlayerState({ ...playerState, percentage: 0, playing: false });
  }, [
    playerState.playing,
    playerState.percentage,
    playerState.volumePercentage,
    playerState.isMuted,
    videoPlayerElement,
    playerState,
  ]);

  const PlayVideo = () => {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing,
    });
  };

  const HandleTimeUpdate = () => {
    const currentPorcentage =
      (videoPlayerElement.current.currentTime /
        videoPlayerElement.current.duration) *
      100;

    setPlayerState({
      ...playerState,
      percentage: currentPorcentage,
    });
  };

  const handleChangeVideoPercentage = (event: any) => {
    const currentPorcentageValue = event.target.value;
    videoPlayerElement.current.currentTime =
      (videoPlayerElement.current.duration / 100) * currentPorcentageValue;

    setPlayerState({
      ...playerState,
      percentage: currentPorcentageValue,
    });
  };

  const handleChangePlayBackRate = (event: any) => {
    videoPlayerElement.current.playbackRate = event;
  };

  const handleChangeVolumePercentage = (event: any) => {
    const currentVolumePercentage = event.target.value;
    videoPlayerElement.current.volume = currentVolumePercentage;
    setPlayerState({
      ...playerState,
      volumePercentage: currentVolumePercentage,
    });
  };

  const handleMuteOrDesmute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  return {
    PlayVideo,
    playerState,
    HandleTimeUpdate,
    handleChangeVideoPercentage,
    handleChangePlayBackRate,
    handleChangeVolumePercentage,
    handleMuteOrDesmute,
  };
};
