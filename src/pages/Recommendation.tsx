import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IoLocationSharp, IoLogoGithub } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Recommendation = () => {
  const color = useSelector((state: RootState) => state.solidColorTheme.color);
  const dispatch = useDispatch();
  const [profilePic, setProfilePic] = useState<string>(
    "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const [backgroundImage, setBackgroundImage] = useState<string>(
    "https://images.unsplash.com/photo-1694853464881-94abdc2a75ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const [name, setName] = useState<string>("Mason Parker");
  const [title, setTitle] = useState<string>("Graphics & UI/UX Designer");
  const [location, setLocation] = useState<string>("Denver, United States");
  const [biography, setBiography] = useState<string>(
    "I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise. With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions, leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting pixel-perfect UIs and captivating graphics that elevate user experiences."
  );
  const [collegeTitle, setCollegeTitle] = useState<string>("Amity University");
  const [education, setEducation] = useState<string>("MCA");
  const [year, setYear] = useState<string>("2022-2024");

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

  const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex justify-center flex-wrap gap-2">
        {/* 1st */}

        <div
          className="rounded-lg pt-4 pl-4"
          style={{
            border: "1px solid gainsboro",
            width: "30%",
          }}
        >
          <div
            className="rounded-lg"
            style={{
              border: "1px solid gainsboro",
              height: "auto",
              width: "100%",
              background: color,
            }}
          >
            <div className="flex flex-col relative">
              <div
                className="p-2 m-4 rounded-2xl"
                style={{
                  border: "2px dashed gainsboro",
                  backgroundColor: "white",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="backgroundImage"
                  onChange={handleBackgroundImageChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="backgroundImage">
                  <img
                    src={backgroundImage}
                    alt="Background"
                    className="w-[100%] h-[150px] object-cover rounded-2xl"
                  />
                </label>
              </div>
              <div
                className="h-[150px] w-[150px] mx-10 flex justify-center items-center rounded-full absolute top-24"
                style={{
                  border: "2px dashed gainsboro",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="profilePic"
                  onChange={handleProfilePicChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="profilePic">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="rounded-full h-[130px] w-[130px] object-cover"
                  />
                </label>
              </div>
              <div
                className="mx-10 mt-4"
                style={{
                  color: getTextColor(color),
                }}
              >
                <input
                  className="mt-[1.5em] text-3xl font-semibold bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="flex items-center mt-2">
                  <IoLocationSharp className="mr-2" />
                  <input
                    className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                    style={{
                      color: getTextColor(color),
                    }}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="p-6 my-10 mx-10 rounded-2xl w-[80%] mt-6"
                style={{
                  border: "2px dashed gainsboro",
                  color: getTextColor(color),
                }}
              >
                <textarea
                  className="text-base text-gray-500 font-light bg-transparent border-b-2 border-transparent h-[150px] focus:border-white focus:outline-none w-full "
                  value={biography}
                  style={{
                    color: getTextColor(color),
                  }}
                  onChange={(e) => setBiography(e.target.value)}
                />
              </div>
            </div>
            <div className="my-4 mx-10">
              <div className="flex gap-x-4">
                <p
                  className="text-lg"
                  style={{
                    color: getTextColor(color),
                  }}
                >
                  Connect With me:{" "}
                </p>
                <div
                  className="flex gap-x-4 cursor-pointer"
                  style={{
                    color: getTextColor(color),
                  }}
                >
                  <BsTwitterX />
                  <IoLogoGithub className="text-purple-800" />
                  <FaInstagram className="text-red-700" />
                  <FaLinkedin className="text-blue-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd */}

        <div
          className="rounded-lg pt-4 pl-4"
          style={{
            border: "1px solid gainsboro",
            width: "30%",
          }}
        >
          <div
            className="rounded-lg"
            style={{
              border: "1px solid gainsboro",
              height: "auto",
              width: "100%",
              background: color,
            }}
          >
            <div className="flex flex-col relative">
              <div
                className="h-[150px] w-[150px] mt-4 mx-10 flex justify-center items-center rounded-full "
                style={{
                  border: "2px dashed gainsboro",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="profilePic"
                  onChange={handleProfilePicChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="profilePic">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="rounded-full h-[130px] w-[130px] object-cover"
                  />
                </label>
              </div>

              <div
                className="mx-10 mt-4"
                style={{
                  color: getTextColor(color),
                }}
              >
                <input
                  className=" text-3xl font-semibold bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="flex items-center mt-2">
                  <IoLocationSharp className="mr-2" />
                  <input
                    className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                    style={{
                      color: getTextColor(color),
                    }}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="mx-10"
                style={{
                  color: getTextColor(color),
                }}
              >
                <input
                  className="mt-[1.5em] text-3xl font-semibold bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={collegeTitle}
                  onChange={(e) => setCollegeTitle(e.target.value)}
                />
                <div className="flex gap-x-8">
                  <input
                    className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                    style={{
                      color: getTextColor(color),
                    }}
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                  />
                  <input
                    className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                    style={{
                      color: getTextColor(color),
                    }}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="p-6 my-10 mx-10 rounded-2xl w-[80%] mt-6"
                style={{
                  border: "2px dashed gainsboro",
                  color: getTextColor(color),
                }}
              >
                <textarea
                  className="text-base text-gray-500 font-light bg-transparent border-b-2 border-transparent h-[150px] focus:border-white focus:outline-none w-full "
                  value={biography}
                  style={{
                    color: getTextColor(color),
                  }}
                  onChange={(e) => setBiography(e.target.value)}
                />
              </div>
            </div>
            <div className="my-4 mx-10">
              <div className="flex gap-x-4">
                <p
                  className="text-lg"
                  style={{
                    color: getTextColor(color),
                  }}
                >
                  Connect With me:{" "}
                </p>
                <div
                  className="flex gap-x-4 cursor-pointer"
                  style={{
                    color: getTextColor(color),
                  }}
                >
                  <BsTwitterX />
                  <IoLogoGithub className="text-purple-800" />
                  <FaInstagram className="text-red-700" />
                  <FaLinkedin className="text-blue-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd */}

        <div
          className="rounded-lg pt-4 pl-4"
          style={{
            border: "1px solid gainsboro",
            width: "30%",
          }}
        >
          <div
            className="rounded-lg"
            style={{
              border: "1px solid gainsboro",
              height: "auto",
              width: "100%",
              background: color,
            }}
          >
            <div className="flex flex-col relative">
              <div
                className="p-2 m-4 rounded-2xl"
                style={{
                  border: "2px dashed gainsboro",
                  backgroundColor: "white",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="backgroundImage"
                  onChange={handleBackgroundImageChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="backgroundImage">
                  <img
                    src={backgroundImage}
                    alt="Background"
                    className="w-[100%] h-[150px] object-cover rounded-2xl"
                  />
                </label>
              </div>
              <div
                className="h-[150px] w-[150px] mx-10 flex justify-center items-center rounded-full absolute top-24"
                style={{
                  border: "2px dashed gainsboro",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="profilePic"
                  onChange={handleProfilePicChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="profilePic">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="rounded-full h-[130px] w-[130px] object-cover"
                  />
                </label>
              </div>
              <div
                className="mx-10 mt-4"
                style={{
                  color: getTextColor(color),
                }}
              >
                <input
                  className="mt-[1.5em] text-3xl font-semibold bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="flex items-center mt-2">
                  <IoLocationSharp className="mr-2" />
                  <input
                    className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                    style={{
                      color: getTextColor(color),
                    }}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="p-6 my-10 mx-10 rounded-2xl w-[80%] mt-6"
                style={{
                  border: "2px dashed gainsboro",
                  color: getTextColor(color),
                }}
              >
                <textarea
                  className="text-base text-gray-500 font-light bg-transparent border-b-2 border-transparent h-[150px] focus:border-white focus:outline-none w-full "
                  value={biography}
                  style={{
                    color: getTextColor(color),
                  }}
                  onChange={(e) => setBiography(e.target.value)}
                />
              </div>
            </div>
            <div className="my-4 mx-10">
              <div className="flex gap-x-4">
                <p
                  className="text-lg"
                  style={{
                    color: getTextColor(color),
                  }}
                >
                  Connect With me:{" "}
                </p>
                <div
                  className="flex gap-x-4 cursor-pointer"
                  style={{
                    color: getTextColor(color),
                  }}
                >
                  <BsTwitterX />
                  <IoLogoGithub className="text-purple-800" />
                  <FaInstagram className="text-red-700" />
                  <FaLinkedin className="text-blue-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}

        <div
          className="rounded-lg pt-4 pl-4"
          style={{
            border: "1px solid gainsboro",
            width: "30%",
          }}
        >
          <div
            className="rounded-lg"
            style={{
              border: "1px solid gainsboro",
              height: "auto",
              width: "100%",
              background: color,
            }}
          >
            <div className="flex flex-col relative">
              <div
                className="p-2 m-4 rounded-2xl"
                style={{
                  border: "2px dashed gainsboro",
                  backgroundColor: "white",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="backgroundImage"
                  onChange={handleBackgroundImageChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="backgroundImage">
                  <img
                    src={backgroundImage}
                    alt="Background"
                    className="w-[100%] h-[150px] object-cover rounded-2xl"
                  />
                </label>
              </div>
              <div
                className="h-[150px] w-[150px] mx-10 flex justify-center items-center rounded-full absolute top-24"
                style={{
                  border: "2px dashed gainsboro",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="profilePic"
                  onChange={handleProfilePicChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="profilePic">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="rounded-full h-[130px] w-[130px] object-cover"
                  />
                </label>
              </div>
              <div
                className="mx-10 mt-4"
                style={{
                  color: getTextColor(color),
                }}
              >
                <input
                  className="mt-[1.5em] text-3xl font-semibold bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="flex items-center mt-2">
                  <IoLocationSharp className="mr-2" />
                  <input
                    className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                    style={{
                      color: getTextColor(color),
                    }}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="p-6 my-10 mx-10 rounded-2xl w-[80%] mt-6"
                style={{
                  border: "2px dashed gainsboro",
                  color: getTextColor(color),
                }}
              >
                <textarea
                  className="text-base text-gray-500 font-light bg-transparent border-b-2 border-transparent h-[150px] focus:border-white focus:outline-none w-full "
                  value={biography}
                  style={{
                    color: getTextColor(color),
                  }}
                  onChange={(e) => setBiography(e.target.value)}
                />
              </div>
            </div>
            <div className="my-4 mx-10">
              <div className="flex gap-x-4">
                <p
                  className="text-lg"
                  style={{
                    color: getTextColor(color),
                  }}
                >
                  Connect With me:{" "}
                </p>
                <div
                  className="flex gap-x-4 cursor-pointer"
                  style={{
                    color: getTextColor(color),
                  }}
                >
                  <BsTwitterX />
                  <IoLogoGithub className="text-purple-800" />
                  <FaInstagram className="text-red-700" />
                  <FaLinkedin className="text-blue-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}

        <div
          className="rounded-lg pt-4 pl-4"
          style={{
            border: "1px solid gainsboro",
            width: "30%",
          }}
        >
          <div
            className="rounded-lg"
            style={{
              border: "1px solid gainsboro",
              height: "auto",
              width: "100%",
              background: color,
            }}
          >
            <div className="flex flex-col relative">
              <div
                className="p-2 m-4 rounded-2xl"
                style={{
                  border: "2px dashed gainsboro",
                  backgroundColor: "white",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="backgroundImage"
                  onChange={handleBackgroundImageChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="backgroundImage">
                  <img
                    src={backgroundImage}
                    alt="Background"
                    className="w-[100%] h-[150px] object-cover rounded-2xl"
                  />
                </label>
              </div>
              <div
                className="h-[150px] w-[150px] mx-10 flex justify-center items-center rounded-full absolute top-24"
                style={{
                  border: "2px dashed gainsboro",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="profilePic"
                  onChange={handleProfilePicChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="profilePic">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="rounded-full h-[130px] w-[130px] object-cover"
                  />
                </label>
              </div>
              <div
                className="mx-10 mt-4"
                style={{
                  color: getTextColor(color),
                }}
              >
                <input
                  className="mt-[1.5em] text-3xl font-semibold bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="flex items-center mt-2">
                  <IoLocationSharp className="mr-2" />
                  <input
                    className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                    style={{
                      color: getTextColor(color),
                    }}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="p-6 my-10 mx-10 rounded-2xl w-[80%] mt-6"
                style={{
                  border: "2px dashed gainsboro",
                  color: getTextColor(color),
                }}
              >
                <textarea
                  className="text-base text-gray-500 font-light bg-transparent border-b-2 border-transparent h-[150px] focus:border-white focus:outline-none w-full "
                  value={biography}
                  style={{
                    color: getTextColor(color),
                  }}
                  onChange={(e) => setBiography(e.target.value)}
                />
              </div>
            </div>
            <div className="my-4 mx-10">
              <div className="flex gap-x-4">
                <p
                  className="text-lg"
                  style={{
                    color: getTextColor(color),
                  }}
                >
                  Connect With me:{" "}
                </p>
                <div
                  className="flex gap-x-4 cursor-pointer"
                  style={{
                    color: getTextColor(color),
                  }}
                >
                  <BsTwitterX />
                  <IoLogoGithub className="text-purple-800" />
                  <FaInstagram className="text-red-700" />
                  <FaLinkedin className="text-blue-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 6 */}

        <div
          className="rounded-lg pt-4 pl-4"
          style={{
            border: "1px solid gainsboro",
            width: "30%",
          }}
        >
          <div
            className="rounded-lg"
            style={{
              border: "1px solid gainsboro",
              height: "auto",
              width: "100%",
              background: color,
            }}
          >
            <div className="flex flex-col relative">
              <div
                className="p-2 m-4 rounded-2xl"
                style={{
                  border: "2px dashed gainsboro",
                  backgroundColor: "white",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="backgroundImage"
                  onChange={handleBackgroundImageChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="backgroundImage">
                  <img
                    src={backgroundImage}
                    alt="Background"
                    className="w-[100%] h-[150px] object-cover rounded-2xl"
                  />
                </label>
              </div>
              <div
                className="h-[150px] w-[150px] mx-10 flex justify-center items-center rounded-full absolute top-24"
                style={{
                  border: "2px dashed gainsboro",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="profilePic"
                  onChange={handleProfilePicChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="profilePic">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="rounded-full h-[130px] w-[130px] object-cover"
                  />
                </label>
              </div>
              <div
                className="mx-10 mt-4"
                style={{
                  color: getTextColor(color),
                }}
              >
                <input
                  className="mt-[1.5em] text-3xl font-semibold bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                  style={{
                    color: getTextColor(color),
                  }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="flex items-center mt-2">
                  <IoLocationSharp className="mr-2" />
                  <input
                    className="text-lg font-normal bg-transparent border-b-2 border-transparent focus:border-white focus:outline-none"
                    style={{
                      color: getTextColor(color),
                    }}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="p-6 my-10 mx-10 rounded-2xl w-[80%] mt-6"
                style={{
                  border: "2px dashed gainsboro",
                  color: getTextColor(color),
                }}
              >
                <textarea
                  className="text-base text-gray-500 font-light bg-transparent border-b-2 border-transparent h-[150px] focus:border-white focus:outline-none w-full "
                  value={biography}
                  style={{
                    color: getTextColor(color),
                  }}
                  onChange={(e) => setBiography(e.target.value)}
                />
              </div>
            </div>
            <div className="my-4 mx-10">
              <div className="flex gap-x-4">
                <p
                  className="text-lg"
                  style={{
                    color: getTextColor(color),
                  }}
                >
                  Connect With me:{" "}
                </p>
                <div
                  className="flex gap-x-4 cursor-pointer"
                  style={{
                    color: getTextColor(color),
                  }}
                >
                  <BsTwitterX />
                  <IoLogoGithub className="text-purple-800" />
                  <FaInstagram className="text-red-700" />
                  <FaLinkedin className="text-blue-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendation;
