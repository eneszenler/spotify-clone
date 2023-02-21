import {Icon} from "Icons";
import {NavLink} from "react-router-dom";

const Menu = () => {
  let activeClassName =
    "h-10 flex gap-x-4 items-center text-sm font-semibold text-white rounded hover:text-white px-4 bg-active";

  let deActiveClassName =
    "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4";

  return (
    <nav className="px-2 flex flex-col">
      <ul>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? activeClassName : deActiveClassName)}>
            {({isActive}) => (
              <>
                <span>
                  <Icon name="home" size={24} isActive={isActive ? true : false} />
                </span>
                Ana sayfa
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className={({isActive}) => (isActive ? activeClassName : deActiveClassName)}>
            {({isActive}) => (
              <>
                <span>
                  <Icon name="magnify" size={24} isActive={isActive ? true : false} />
                </span>
                Ara
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({isActive}) => (isActive ? activeClassName : deActiveClassName)}
          >
            {({isActive}) => (
              <>
                <span>
                  <Icon name="library" size={24} isActive={isActive ? true : false} />
                </span>
                Kitaplığın
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
