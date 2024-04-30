import { useContext, useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { LuLogIn } from "react-icons/lu";
import { PiPencilCircle } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { VscThreeBars } from "react-icons/vsc";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/Provider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const [sideOpen, setSideOpen] = useState(true);
  const [userOpen, setUserOpen] = useState(false);
  const navigate = useNavigate();

  const [theme, setTheme] = useState("light");

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const item = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", item);
  }, [theme]);
  // const { user, logOut } = useAuth() || {};

  const handleLogOut = () => {
    logOutUser()
      .then((result) => {
        navigate("/");
      })
      .catch((err) => toast.error(err));
    setUserOpen(false);
  };

  return (
    <div className=" w-full  mx-auto fixed z-40 rale-way">
      <header className="bg-white shadow-lg py-2  flex justify-center items-center w-full   md:px-[50px] ">
        <Link to="/" className=" pl-2 flex flex-shrink-0 items-center">
          {/* <img
            className="md:w-[200px] w-[150px] h-[70px]  object-cover"
            src={logo}
            alt=""
          /> */}
          <p className="text-2xl md:text-5xl text-[#0DBC95]">
            <PiPencilCircle />
          </p>
          <h1 className="font-bold text-xl text-black md:text-3xl">
            <span className="text-[#0DBC95]">BRUSH</span> STROKES
          </h1>
        </Link>
        {/* middle */}
        <nav className="header-links md:contents  font-medium text-base  hidden ">
          <ul className="flex gap-8 items-center ml-4 xl:ml-8 mr-auto w-full justify-center dark:text-black">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#0DBC95] border-b-4 border-[#0DBC95]"
                    : "hover:text-[#0DBC95]"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="add_craft"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#0DBC95] border-b-4 border-[#0DBC95]"
                      : "hover:text-[#0DBC95]"
                  }
                >
                  <span>Add Art</span>
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to={`/my-art&craft/${user?.email}`}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#0DBC95] border-b-4 border-[#0DBC95]"
                    : "hover:text-[#0DBC95]"
                }
              >
                <span>MyArt</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/all_craft_item"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#0DBC95] border-b-4 border-[#0DBC95]"
                    : "hover:text-[#0DBC95]"
                }
              >
                <span>All Art Item</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* End */}
        <div className="relative  flex items-center  gap-3 justify-end w-full md:w-[100px] lg:w-[400px] md:pl-5 pl-0 ">
          {/* theme */}
          <div className=" w-[50px] ">
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                onChange={handleTheme}
                className="toggle theme-controller bg-[#0DBC95] hover:bg-[bg-[#0DBC95] row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1  stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          <div>
            {user ? (
              <button
                onClick={() => setUserOpen(!userOpen)}
                className="border-2 border-[#0DBC95] rounded-full w-[40px]"
              >
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </button>
            ) : (
              <button
                onClick={() => navigate("/signIn")}
                className="bg-[#0DBC95] inline-flex justify-center items-center gap-2 hover:bg-[#0DBC95]  duration-200 text-white font-bold px-2 xl:px-6 py-1 rounded"
              >
                <LuLogIn />
                Login
              </button>
            )}
          </div>

          {/* user Menu */}
          <div
            className={`absolute ${
              userOpen ? " " : "hidden"
            } text-center   flex flex-col justify-center items-center gap-4  shadow-lg bg-white dark:bg-[#123841] px-6 min-w-[200px] py-4 -top-80 md:top-12 -left-34 dark:text-white z-50`}
          >
            <p className="text-lg font-semibold">{user?.displayName}</p>

            <button
              onClick={handleLogOut}
              className="bg-[#0DBC95]  hover:bg-[#123841] duration-200 text-white font-bold px-4 xl:px-6 py-1 inline-flex items-center gap-3 rounded cursor-pointer "
            >
              logout
              <IoIosLogOut />
            </button>
          </div>
        </div>

        {/* Drawer */}
        <button
          onClick={() => setSideOpen(!sideOpen)}
          className="text-4xl text-[#0DBC95] flex items-center md:hidden ml-3"
        >
          <div>{sideOpen ? <VscThreeBars /> : <RxCross2 />}</div>
        </button>
      </header>

      {/* Side Menu */}
      {/* transition-transform transform -translate-x-full */}
      <div
        className={`absolute ${
          !sideOpen ? "block" : "hidden"
        } md:hidden  bg-white shadow-lg  w-56 min-h-screen overflow-y-auto md:top-0 -left-6 ease-in-out pb-7 duration-300 dark:bg-[#123841] dark:text-white z-50`}
      >
        <div className="p-4">
          <ul className="mt-6 flex flex-col gap-4 ml-5">
            <li>
              <NavLink
                onClick={() => setSideOpen(!sideOpen)}
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#0DBC95] border-b-4 border-[#0DBC95]"
                    : "hover:text-[#0DBC95]"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  onClick={() => setSideOpen()}
                  to="/add_craft"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#0DBC95] border-b-4 border-[#0DBC95]"
                      : "hover:text-[#0DBC95]"
                  }
                >
                  <span>Add Art</span>
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  onClick={() => setSideOpen()}
                  to="/my-art&craft"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#0DBC95] border-b-4 border-[#0DBC95]"
                      : "hover:text-[#0DBC95]"
                  }
                >
                  <span>My-art&craft</span>
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                onClick={() => setSideOpen()}
                to="/all_craft_item"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#0DBC95] border-b-4 border-[#0DBC95]"
                    : "hover:text-[#0DBC95]"
                }
              >
                <span>All Craft Item</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="ml-8 mt-8">
          <div className={`flex flex-col gap-2 top-16 pr-2`}>
            <button className="border-2 mx-auto border-[#0DBC95] rounded-full w-[40px]">
              <img
                src={user?.photoURL}
                alt=""
                className="w-full h-full rounded-full"
              />
            </button>
            <p className="text-lg font-semibold text-center">
              {user?.displayName}
            </p>
            {user ? (
              <button
                onClick={() => handleLogOut()}
                className="bg-[#0DBC95] hover:bg-[#123841] duration-200 text-white font-bold px-4  py-1 rounded inline-flex items-center gap-2 justify-center "
              >
                logout
                <IoIosLogOut />
              </button>
            ) : (
              <button
                onClick={() => navigate("/signIn")}
                className="bg-[#0DBC95] hover:bg-[#123841] duration-200 text-white font-bold px-4  py-1 rounded inline-flex items-center gap-2 justify-center "
              >
                <LuLogIn />
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
