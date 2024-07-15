import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setColor } from "../redux/theme/action";
import { IoLocationSharp } from "react-icons/io5";
import { MainResume } from "./MainResume";

const solidColors: string[] = [
  "black",
  "white",
  "grey",
  "green",
  "yellow",
  "blue",
  "orange",
  "pink",
  "purple",
];

const linearGradients: string[] = [
  "linear-gradient(to right, red, yellow)",
  "linear-gradient(to right, blue, green)",
  "linear-gradient(to right, yellow, green)",
  "linear-gradient(to right, blue, yellow)",
  "linear-gradient(to right, yellow, red)",
  "linear-gradient(to right, navy, gold)",
  "linear-gradient(to right, plum, white)",
  "linear-gradient(to right, white, skyblue)",
];

const radialGradients: string[] = [
  "radial-gradient(circle, red, yellow)",
  "radial-gradient(circle, blue, green)",
  "radial-gradient(circle, purple, white)",
  "radial-gradient(circle, white, red)",
  "radial-gradient(circle, yellow, red)",
  "radial-gradient(circle, navy, gold)",
  "radial-gradient(circle, plum, white)",
  "radial-gradient(circle, white, skyblue)",
];

const Themes: React.FC = () => {
  const color = useSelector((state: RootState) => state.solidColorTheme.color);
  const dispatch = useDispatch();

  const getTextColor = (bgColor: string): string => {
    const darkColors = ["black", "grey", "blue", "green", "purple"];
    const gradientDarkColors = [
      "linear-gradient(to right, red, yellow)",
      "linear-gradient(to right, blue, green)",
      "linear-gradient(to right, yellow, green)",
      "radial-gradient(circle, red, yellow)",
      "radial-gradient(circle, blue, green)",
      "radial-gradient(circle, purple, white)",
      "radial-gradient(circle, white, red)",
      "radial-gradient(circle, red, yellow)",
      "radial-gradient(circle, blue, green)",
      "radial-gradient(circle, purple, white)",
      "radial-gradient(circle, white, red)",
    ];
    return darkColors.includes(bgColor) || gradientDarkColors.includes(bgColor)
      ? "white"
      : "black";
  };

  const handleImport = () => {
    window.print();
  };

  return (
    <>
      <div className="absolute top-10 left-[20%] w-[70%] ">
        <div className="flex justify-between items-center">
          <div className="text-xl font-normal">Themes</div>
          <button className="bg-stone-200 rounded-lg px-4 py-2 text-base">
            Sahil Yadav
          </button>
        </div>
        <div
          className="flex justify-between items-center mt-4 bg-stone-100 py-6 px-6 rounded-lg"
          style={{ border: "2px solid gainsboro" }}
        >
          <div className="text-xl font-normal">
            Apply a skin to your profile
          </div>
          <div>
            <button
              className="text-black rounded-lg text-base px-8 py-2 mx-2 border-slate-950"
              style={{ border: "1px solid" }}
              onClick={handleImport}
            >
              Export
            </button>
            <button className="bg-black text-white text-base rounded-lg px-8 py-2">
              Save
            </button>
          </div>
        </div>

        <div className="flex justify-between gap-8 mt-14">
          <div className="h-[70vh]">
            <div className="mt-4">
              <div className="text-lg font-semibold">Solid Colors</div>
              <div className="flex justify-center items-center gap-2">
                {solidColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => dispatch(setColor(color))}
                    className="px-6 py-6 mx-1"
                    style={{
                      backgroundColor: color,
                      color: getTextColor(color),
                      border: "1px solid gainsboro",
                      borderRadius: "4px",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mt-[5em]">
              <div className="text-lg font-semibold">Linear Gradients</div>
              <div className="flex justify-center items-center gap-2">
                {linearGradients.map((gradient) => (
                  <button
                    key={gradient}
                    onClick={() => dispatch(setColor(gradient))}
                    className="px-6 py-6 mx-1"
                    style={{
                      background: gradient,
                      color: getTextColor(gradient),
                      border: "1px solid gainsboro",
                      borderRadius: "4px",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mt-[5em]">
              <div className="text-lg font-semibold">Radial Gradients</div>
              <div className="flex justify-center items-center gap-2 flex-wrap">
                {radialGradients.map((gradient) => (
                  <button
                    key={gradient}
                    onClick={() => dispatch(setColor(gradient))}
                    className="px-6 py-6 mx-1"
                    style={{
                      background: gradient,
                      color: getTextColor(gradient),
                      border: "1px solid gainsboro",
                      borderRadius: "4px",
                    }}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* Resume Part */}

          <MainResume getTextColor={getTextColor} />
        </div>
      </div>
    </>
  );
};

export default Themes;
