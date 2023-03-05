import tracks from "data/tracks";
import {Icon} from "Icons";
import {useDispatch, useSelector} from "react-redux";
import {setCurrent} from "stores/player";
import {secondsToTime} from "utils";
import CustomRange from "./CustomRange";

const FullScreenPlayer = ({toggle, state, controls, volumeIcon}) => {
  const {current} = useSelector((state) => state.player);
  const dispatch = useDispatch();

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
    <div
      className="h-full relative"
      onClick={controls[state?.playing ? "pause" : "play"]}
      onDoubleClick={toggle}
    >
      <div
        className="inset-0 absolute bg-cover bg-center opacity-30"
        style={{backgroundImage: `url(${current?.backdrop_url})`}}
      />
      <div className="absolute top-10 w-full flex px-16 items-center gap-3 text-white text-opacity-60">
        <div>
          <Icon name="logo" size={36} />
        </div>
        <div className="flex flex-col">
          <p className="text-xs">ÇALMA LİSTESİ'DEN ÇALINIYOR</p>
          <h4 className="font-semibold text-md">{current?.title}</h4>
        </div>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full absolute bottom-16 px-16 flex flex-col items-center"
      >
        <div className="w-full flex justify-start gap-x-5 mb-4">
          <div className="w-28 h-28">
            <img className="rounded-sm" src={current?.image_url} />
          </div>
          <div className="flex flex-col justify-end">
            <h3 className="text-4xl font-semibold pb-1">{current?.title}</h3>
            <p className="text-base font-semibold opacity-50">{current?.description}</p>
          </div>
        </div>
        <div className="w-full flex items-center mb-3 gap-x-2">
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
        <div className="flex justify-between items-center w-full">
          <div className="min-w-[11.25rem] w-[30%]">
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="heart" size={24} />
            </button>
          </div>
          <div className="max-w-[45.125rem] w-[40%] flex items-center gap-x-5 justify-center">
            <button
              disabled={!current}
              className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 disabled:text-opacity-50"
            >
              <Icon name="shuffle" size={24} />
            </button>
            <button
              disabled={!current}
              onClick={() => handleChangeTrack("previous")}
              className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 disabled:text-opacity-50"
            >
              <Icon name="playerPrev" size={24} />
            </button>
            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              disabled={!current}
              className="w-16 h-16 flex bg-white items-center justify-center text-black rounded-full hover:scale-[1.06] disabled:bg-opacity-50"
            >
              <Icon name={state?.playing ? "pause" : "play"} size={24} />
            </button>
            <button
              disabled={!current}
              onClick={() => handleChangeTrack("next")}
              className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 disabled:text-opacity-50"
            >
              <Icon name="playerNext" size={24} />
            </button>
            <button
              disabled={!current}
              className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 disabled:text-opacity-50"
            >
              <Icon name="repeat" size={24} />
            </button>
          </div>
          <div className="min-w-[11.25rem] w-[30%] flex items-center gap-x-5 justify-end">
            <div className="flex items-center">
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
            </div>
            <button
              disabled={!current}
              onClick={toggle}
              className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 disabled:text-opacity-30"
            >
              <Icon name="fullScreenOff" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenPlayer;
