import {Menu} from "@headlessui/react";
import {Icon} from "Icons";
import React from "react";
import {Link} from "react-router-dom";

const Auth = () => {
  const user = {
    name: "Enes Zenler",
    avatar: "https://i.scdn.co/image/ab6775700000ee8544d853e5325942d418640425",
  };

  return (
    <Menu as={"nav"} className={"relative"}>
      {({open}) => (
        <>
          <Menu.Button
            className={`h-8 flex items-center rounded-3xl ${
              open ? "bg-active" : "bg-black"
            } pr-2 hover:bg-active`}
          >
            <img src={user.avatar} alt="" className="w-8 h-8 rounded-full p-px mr-2" />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && "rotate-180"}>
              <Icon name="downDir" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items className={"absolute p-1 top-full right-0 bg-active w-48 rounded translate-y-2"}>
            <Menu.Item>
              {({active}) => (
                <Link
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  to="/"
                >
                  Account
                  <Icon size={16} name="external" />
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) => (
                <Link
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  to="/"
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) => (
                <Link
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  to="/"
                >
                  Log out
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Auth;
