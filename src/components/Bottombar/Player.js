import CustomRange from "components/CustomRange";
import FullScreenPlayer from "components/FullScreenPlayer";
import {Icon} from "Icons";
import {useEffect, useMemo, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useAudio, useFullscreen, useToggle} from "react-use";
import {setControls, setCurrent, setPlaying, setSidebar} from "stores/player";
import {secondsToTime} from "utils";
import tracks from "data/tracks";

const Player = () => {
  const fsRef = useRef();
  const [show, toggle] = useToggle(false);
  const isFullScreen = useFullscreen(fsRef, show, {onClose: () => toggle(false)});

  const dispatch = useDispatch();
  const {current, sidebar, playing} = useSelector((state) => state.player);

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    if (playing) {
      controls.play();
    }
  }, [playing]);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "volumeMuted";
    if (state.volume > 0 && state.volume < 0.33) return "volumeLow";
    if (state.volume >= 0.33 && state.volume <= 0.66) return "volumeNormal";
    return "volumeFull";
  }, [state.volume, state.muted]);

  const handleChangeTrack = (deal) => {
    if (deal === "next") {
      if (current.id >= tracks.length) {
        dispatch(setCurrent(tracks[0]));
      } else {
        dispatch(setCurrent(tracks[current.id]));
      }
    } else {
      if (current.id === 1) {
        dispatch(setCurrent(tracks[tracks.length - 1]));
        console.log("asd");
      } else {
        dispatch(setCurrent(tracks[current.id - 2]));
      }
    }
  };

  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%] flex items-center">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              {!sidebar && (
                <div className="w-14 h-14 mr-3 flex-shrink-0 relative group">
                  <img src={current?.image_url} alt="" />
                  <button
                    onClick={() => dispatch(setSidebar(true))}
                    className="w-6 h-6 bg-black opacity-80 group-hover:flex hover:opacity-100 hover:scale-[1.06] justify-center items-center rounded-full absolute top-1 right-1 rotate-90 hidden"
                  >
                    <Icon name="arrowLeft" size={16} />
                  </button>
                </div>
              )}
              <div>
                <h6 className="text-sm line-clamp-1">{current?.title}</h6>
                <p className="text-[0.688rem] text-white text-opacity-70 hover:underline">
                  {current?.artist}
                </p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="heart" size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="pictureInPicture" size={16} />
            </button>
          </div>
        )}
      </div>
      <div className="max-w-[45.125rem] w-[40%] px-4 flex flex-col items-center">
        <div className="flex items-center gap-x-2">
          <button
            disabled={!current}
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 disabled:text-opacity-50"
          >
            <Icon name="shuffle" size={16} />
          </button>
          <button
            onClick={() => handleChangeTrack("previous")}
            disabled={!current}
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 disabled:text-opacity-50"
          >
            <Icon name="playerPrev" size={16} />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            disabled={!current}
            className="w-8 h-8 flex bg-white items-center justify-center text-black rounded-full hover:scale-[1.06] disabled:bg-opacity-50"
          >
            <Icon name={state?.playing ? "pause" : "play"} size={16} />
          </button>
          <button
            onClick={() => handleChangeTrack("next")}
            disabled={!current}
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 disabled:text-opacity-50"
          >
            <Icon name="playerNext" size={16} />
          </button>
          <button
            disabled={!current}
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 disabled:text-opacity-50"
          >
            <Icon name="repeat" size={16} />
          </button>
        </div>
        <div className="w-full flex items-center mt-1.5 gap-x-2">
          {audio}
          <div className="text-[0.688rem] text-white text-opacity-70">{secondsToTime(state?.time)}</div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.688rem] text-white text-opacity-70">{secondsToTime(state?.duration)}</div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="lyrics" size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="queue" size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="device" size={16} />
        </button>
        <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          <Icon name={volumeIcon} size={16} />
        </button>
        <div className="w-[5.813rem] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state?.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          />
        </div>
        <button
          disabled={!current}
          onClick={toggle}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 disabled:text-opacity-30"
        >
          <Icon name="fullScreen" size={16} />
        </button>
      </div>
      <div ref={fsRef}>
        {isFullScreen && (
          <FullScreenPlayer toggle={toggle} state={state} controls={controls} volumeIcon={volumeIcon} />
        )}
      </div>
    </div>
  );
};

export default Player;
