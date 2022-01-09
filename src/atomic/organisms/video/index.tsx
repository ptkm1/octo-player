import React, { useRef, VideoHTMLAttributes } from "react";
import {
  BodyVideo,
  ButtonFullScreen,
  Controls,
  PlayButton,
  PlayerTimeRange,
  SelectPlaybackRate,
  Video,
  VolumeButtonLabel,
  VolumeRange,
} from "./styles";
import { usePlayerState } from "./hooks";
import { PlayerProps } from "./props";

import {
  BiPlayCircle,
  BiPauseCircle,
  BiVolume,
  BiFullscreen,
} from "react-icons/bi";

function Player({ width, height, url }: PlayerProps) {
  const VideoRef: any = useRef();

  const {
    PlayVideo,
    playerState,
    HandleTimeUpdate,
    handleChangeVideoPercentage,
    handleChangePlayBackRate,
    handleChangeVolumePercentage,
    handleMuteOrDesmute,
  } = usePlayerState(VideoRef);

  return (
    <BodyVideo width={width} height={height}>
      <Video
        width={width}
        height={height}
        ref={VideoRef}
        src={url}
        onTimeUpdate={HandleTimeUpdate}
      />
      <Controls>
        <PlayButton onClick={PlayVideo}>
          {playerState.playing ? (
            <BiPauseCircle size="15px" />
          ) : (
            <BiPlayCircle size="15px" />
          )}
        </PlayButton>

        <VolumeButtonLabel onClick={handleMuteOrDesmute} htmlFor="volume-range">
          <BiVolume style={{ marginTop: 8 }} />
        </VolumeButtonLabel>
        <VolumeRange
          type="range"
          id="volume-range"
          min="0.0"
          max="1"
          step="0.1"
          onChange={handleChangeVolumePercentage}
          value={playerState.volumePercentage}
        />

        <PlayerTimeRange
          type="range"
          min="0"
          max="100"
          onChange={handleChangeVideoPercentage}
          value={playerState.percentage}
        />
        <SelectPlaybackRate
          onChange={(e) => handleChangePlayBackRate(e.target.value)}
        >
          {[1, 2, 3].map((speed) => (
            <option key={`speedChange_${speed}`}>{speed}</option>
          ))}
        </SelectPlaybackRate>
        <ButtonFullScreen onClick={() => VideoRef.current.requestFullscreen()}>
          <BiFullscreen size="15px" />
        </ButtonFullScreen>
      </Controls>
    </BodyVideo>
  );
}

export default Player;
