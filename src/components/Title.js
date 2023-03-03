import {Link} from "react-router-dom";

const Title = ({title, more = false}) => {
  return (
    <header className="flex items-center justify-between mb-4">
      <Link to={more ?? "/"}>
        <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">{title}</h3>
      </Link>
      {more && (
        <Link
          to={more ?? "/"}
          className="font-semibold text-xs text-link uppercase hover:underline tracking-wider"
        >
          SEE ALL
        </Link>
      )}
    </header>
  );
};

export default Title;
