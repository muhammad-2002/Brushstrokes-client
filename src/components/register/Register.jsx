import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaKey } from "react-icons/fa6";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import {
  MdDriveFileRenameOutline,
  MdEmail,
  MdInsertPhoto,
} from "react-icons/md";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/Provider";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { createEmailAndPassword, UpdateUser, setUser, user } =
    useContext(AuthContext);

  const [passError, serPassError] = useState(null);
  const [Toggle, setToggle] = useState(true);
  const handleSubmitRegister = (data) => {
    const { email, password, PhotoURL, Name } = data;
    console.log(email, password, PhotoURL);
    // serPassError(null);

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return serPassError(
        "Please use Uppercase & Lowercase letter and length must be  6 character"
      );
    }

    createEmailAndPassword(email, password)
      .then((result) => {
        // toast.success("User Create Successfully");
        console.log(result.user);
        //update name and photo url

        UpdateUser(Name, PhotoURL)
          .then(() => {
            console.log("Successfully done");
            toast.success("Successfully Created..");
            setUser({ displayName: Name, photoURL: PhotoURL, email: email });
          })
          .catch((error) => {});
      })
      .catch((err) => {
        toast.error("Registration failed. Please try again.");
      });
    reset();
  };

  return (
    <div>
      <Helmet>
        <title>Brush strokes-Register</title>
      </Helmet>
      <div className="flex justify-center items-center mt-5">
        <div className="w-[80%] p-8 space-y-2 rounded-xl dark:bg-gray-100  ">
          <h1 className="text-2xl font-bold text-center">
            Register your account
          </h1>
          <form
            className="space-y-4"
            onSubmit={handleSubmit(handleSubmitRegister)}
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              className="space-y-1 text-sm relative"
            >
              <label htmlFor="username" className="block dark:text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                {...register("Name", { required: true })}
                placeholder="Enter your Name"
                className="w-full px-8 py-3 rounded-md border dark:border-[#00AFC6] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              {errors.Name && (
                <span className="text-red-700">This field is required</span>
              )}

              <p className="absolute text-xl top-8 text-[#23BF9B] left-2">
                <MdDriveFileRenameOutline />
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="700"
              className="space-y-1 text-sm relative"
            >
              <label htmlFor="photoUrl" className="block dark:text-gray-600">
                PhotoURL
              </label>
              <input
                type="text"
                {...register("PhotoURL", { required: true })}
                placeholder="PhotoURL"
                className="w-full px-8 py-3 rounded-md border dark:border-[#00AFC6] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <p className="absolute text-xl text-[#23BF9B] top-8 left-2">
                <MdInsertPhoto />
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="900"
              className="space-y-1 text-sm relative"
            >
              <label htmlFor="username" className="block dark:text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="w-full px-8 py-3 rounded-md dark:border-[#00AFC6] border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <p className="absolute text-[#23BF9B] text-xl top-8 left-2">
                <MdEmail />
              </p>
              {errors.email && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1100"
              className="space-y-1 text-sm"
            >
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <div className="relative">
                <input
                  type={`${Toggle ? "text" : "password"}`}
                  {...register("password", { required: true })}
                  id="password"
                  placeholder="Password"
                  className="w-full px-8 py-3 rounded-md border  dark:border-[#00AFC6] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
                {errors.password && (
                  <span className="text-red-700">This field is required</span>
                )}
                <p className="text-red-700">{passError}</p>
                <p className="absolute text-[#23BF9B] text-xl top-3 left-2">
                  <FaKey />
                </p>
                <p
                  onClick={() => setToggle(!Toggle)}
                  className="absolute text-[#23BF9B] text-xl top-3 right-3"
                >
                  {Toggle ? <IoMdEye /> : <IoIosEyeOff />}
                </p>
              </div>
              {/* <div className="text-red-700 text-sm ">{passError}</div> */}
            </div>
            <button
              data-aos="zoom-in"
              data-aos-duration="1300"
              type="submit"
              className="block w-full p-3 text-center rounded-sm bg-[#23BF9B] text-white font-bold"
            >
              Register
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Alradey you have an account?
            <Link to="/SignIn" className="underline font-bold text-[#23BF9B]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
