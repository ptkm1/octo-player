import styled from "styled-components";
import { PlayerProps } from "./props";

export const Controls = styled.div<PlayerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0px 5px;
  background: none;
  margin-top: -5px;
  z-index: 999999999;
`;

export const PlayButton = styled.button`
  width: 25px;
  height: 20px;
  border-radius: 10px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0077b6;
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s;
  :hover {
    background: #0077b6;
    color: #fff;
  }
`;

export const BodyVideo = styled.div<PlayerProps>`
  width: ${(prop) => prop.width || "100px"};
  border-radius: 7px;
  overflow: hidden;
  box-shadow: #22223b 1px;
  background: #c5c5c5c5;
  button {
    border: none;
  }
`;

export const Video = styled.video`
  width: ${(prop) => prop.width || "100%"};
  height: ${(prop) => prop.height || "100%"};
  object-fit: contain;
`;

export const VolumeRange = styled.input`
  max-width: 50px;
  width: 100%;
  height: 5px;
  transition: all 0.7s;
  cursor: pointer;
  -webkit-appearance: none;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    background: #0077b6;
    cursor: pointer;
    border: none;
  }

  ::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: #0077b6;
    cursor: pointer;
    border: none;
    border-radius: 5px 5px 5px 0px;
    transform: rotate(220deg);
  }
`;

export const VolumeButtonLabel = styled.label`
  cursor: pointer;
`;

export const PlayerTimeRange = styled.input`
  width: 100%;
  height: 5px;
  box-shadow: none;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    background: #0077b6;
    cursor: pointer;
    border: none;
  }

  ::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: #0077b6;
    cursor: pointer;
    border: none;
    border-radius: 5px 5px 5px 0px;
    transform: rotate(220deg);
  }
`;
export const SelectPlaybackRate = styled.select`
  width: 30px;
  height: 15px;
  border: none;
  background: none;
  color: white;
  option {
    background: none;
  }
`;

export const ButtonFullScreen = styled.button`
  width: 30px;
  height: 28px;
  background: none;
  border-radius: 10px;
  display: flex;

  justify-content: center;
  align-items: center;
  color: #0077b6;
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s;
  :hover {
    background: #0077b6;
    color: #fff;
  }
`;
