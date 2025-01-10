"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import Popup from "reactjs-popup";

export default function Home() {
  const openTick = (_: any) => {
    console.log("Put logic modal here");
    setChecked((e) => !e);
  };

  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <nav className="flex flex-row bg-blueUpbit-1 items-center h-16 w-screen p-4">
        <div className="flex pr-10 ml-10">
          <Image
            src="upbit_logo.svg"
            alt="upbit logo"
            width={140}
            height={32}
          ></Image>
        </div>
        <div className="flex flex-row px-5 justify-between items-center w-2/4">
          <p className="text-neutralGrey3 font-semibold text-md">Exchange</p>
          <p className="text-neutralGrey3 font-semibold text-md">Wallets</p>
          <p className="text-neutralGrey3 font-semibold text-md">My Trade</p>
          <p className="text-neutralGrey3 font-semibold text-md">Trends</p>
          <p className="text-neutralGrey3 font-semibold text-md">Support</p>
        </div>

        <div className="flex flex-row px-5 justify-end items-center w-full">
          <p className="text-primary text-sm px-2">Log In</p>
          <p className="text-primary text-sm px-2">Sign Up</p>
          <p className="text-primary text-sm font-bold px-2">EN</p>
          <p className="text-primary text-sm px-2">|</p>
          <p className="text-neutralGrey3 text-sm px-2">ID</p>
        </div>
      </nav>

      <div className="flex w-full justify-center mt-10">
        <div className="flex flex-col justify-center w-1/2 text-center items-center p-10">
          <p className="font-bold text-3xl">Sign Up</p>
          <p className="text-md font-extrabold text-neutralGrey3 p-2">
            Please ensure that you are at our official website as shown below
          </p>
          <p className="mb-8">
            <i className="fa fa-lock text-2xl text-blueUpbit-2"></i>
            <span className="font-medium text-blueUpbit-2 ml-1">https</span>
            <span className="font-medium">://id.upbit.com</span>
          </p>
          <input className="py-4 px-4 my-1 border w-full" placeholder="Email" />
          <input
            className="py-4 px-4 my-1 border w-full"
            placeholder="Password"
            type="password"
          />
          <input
            className="py-4 px-4 my-1 border w-full"
            placeholder="Confirm Password"
            type="password"
          />
          <input
            className="py-4 px-4 my-1 border w-full"
            placeholder="Referral Code (optional)"
          />

          <div
            id="checkbox"
            className="flex flex-row w-full pt-4 items-center text-left my-2"
          >
            <input
              onChange={openTick}
              checked={checked}
              type="checkbox"
              className="w-4 h-4 bg-neutralGrey3 border-gray-300 rounded text-justify"
            />
            <label
              htmlFor="checkbox"
              className="ml-4 text-sm font-poppins text-primary "
            >
              <p className="flex text-left text-black">
                I certify that I am 18 years of age or older, and I agree to the
                <span className="text-blueUpbit-2 mx-1">
                  Terms of Use
                </span> and{" "}
                <span className="text-blueUpbit-2 mx-1">Privacy Policy</span>.
              </p>
            </label>
          </div>

          <button
            className={`flex text-primary mt-4 ${
              disabled ? "bg-neutralGrey2" : "bg-blueUpbit-1"
            } w-full justify-center p-4 text-center`}
            disabled={disabled}
            // onClick={(e) => setDisabled(!disabled)}
            onClick={(e) => setChecked(!e)}
          >
            Sign Up
          </button>
          <Popup
            open={checked}
            modal
            position="center center"
            overlayStyle={{ backdropFilter: "blur(5px)" }}
          >
            <div
              id="square"
              className="flex w-full bg-blueUpbit-1 p-6 rounded-md flex-col items-center text-primary"
            >
              <p className="text-xl font-medium">Terms of Use</p>

              <div id="text-inside" className="border-solid">
                text
              </div>
            </div>
          </Popup>
        </div>
      </div>

      <div className="flex items-center my-4"></div>
    </div>
  );
}
