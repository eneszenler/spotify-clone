import {Icon} from "Icons";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {setCurrent, setPlaying} from "stores/player";

const SongItem = ({item}) => {
  const dispatch = useDispatch();
  const {current, playing} = useSelector((state) => state.player);

  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "podcast":
        return "rounded-xl";
      default:
        return "rounded";
    }
  };

  const updateCurrent = () => {
    dispatch(setCurrent(item));
    dispatch(setPlaying(true));
  };

  return (
    <NavLink key={item?.id} to={"/"} className={"bg-footer rounded p-4 hover:bg-active group"}>
      <div className="pt-[100%] relative mb-4">
        <img
          src={item?.image_url}
          alt={item?.title}
          className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`}
        />
        <button
          onClick={updateCurrent}
          className={`w-12 h-12 rounded-full group-hover:flex group-active:flex bg-primary absolute bottom-2 right-2 justify-center items-center ${
            current?.id === item.id && playing ? "flex" : "hidden"
          }`}
        >
          <Icon name={current?.id === item.id && playing ? "pause" : "play"} size={22} />
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {item?.title}
      </h6>
      <p className="text-link line-clamp-2 text-sm mt-1">{item?.description}</p>
    </NavLink>
  );
};

export default SongItem;
