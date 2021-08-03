import router from "next/router";
import React, { useState } from "react";
import { useAuth } from "../../utils/context/auth-context";

interface PropsDashboard {}

export const Dashboard: React.FC<PropsDashboard> = (props) => {
  const { logout, currentUser } = useAuth();
  const [toggleOption, setToggleOptios] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(true);

  const handleLogOut = async () => {
    try {
      await logout();
      router.push("/login");
    } catch {
      alert;
    }
  };

  const handleOptions = () => {
    setToggleOptios(!toggleOption);
  };

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="flex min-h-screen relative">
      <div
        className={`bg-discord w-80 text-white inset-y-0 left-0 absolute transform md:relative transition duration-200  ease-in-out ${
          toggleMenu ? "md:translate-x-0 -translate-x-full" : ""
        } `}
      >
        <div className="relative flex items-center justify-content-center py-2">
          <button
            onClick={handleMenu}
            className="absolute md:hidden pl-4 left-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <p className="m-0 text-3xl font-bold">VMO</p>
        </div>
      </div>
      <div className="flex-1 bg-gray-400">
        <div className="bg-white  items-center relative">
          <div className="absolute right-6 top-16 bg-white p-2">
            <button onClick={handleLogOut}>Logout</button>
          </div>
          <div className="py-2 flex justify-content-between">
            <button onClick={handleMenu} className="md:invisible pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex">
              <button onClick={handleOptions} className="inline px-4">
                <img
                  src={
                    currentUser.photoURL !== null ? currentUser.photoURL : ""
                  }
                  className=" rounded-full w-10 h-10"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
