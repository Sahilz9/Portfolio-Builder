import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IoLocationSharp } from "react-icons/io5";
import { ChangeEvent, useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const translations = {
  en: {
    name: "Mason Parker",
    title: "Graphics & UI/UX Designer",
    location: "Denver, United States",
    biography:
      "I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise. With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions, leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting pixel-perfect UIs and captivating graphics that elevate user experiences.",
    connect: "Connect With me:",
  },
  es: {
    name: "Mason Parker",
    title: "Diseñador Gráfico y UI/UX",
    location: "Denver, Estados Unidos",
    biography:
      "Soy un diseñador gráfico y UI/UX visionario, combinando perfectamente el talento artístico con la experiencia técnica. Con un título en Diseño Gráfico, entrego consistentemente soluciones visualmente impresionantes y centradas en el usuario, dejando una marca indeleble en el paisaje digital. Como colaborador de confianza, estoy dedicado a crear UIs perfectas y gráficos cautivadores que elevan las experiencias de usuario.",
    connect: "Conéctate conmigo:",
  },
  fr: {
    name: "Mason Parker",
    title: "Designer Graphique et UI/UX",
    location: "Denver, États-Unis",
    biography:
      "Je suis un designer graphique et UI/UX visionnaire, combinant parfaitement flair artistique et expertise technique. Avec un diplôme en design graphique, je livre constamment des solutions visuellement époustouflantes et centrées sur l'utilisateur, laissant une marque indélébile sur le paysage numérique. En tant que collaborateur de confiance, je suis dédié à créer des interfaces utilisateur parfaites et des graphismes captivants qui élèvent les expériences utilisateur.",
    connect: "Connectez-vous avec moi :",
  },
};

export const MainResume = ({ getTextColor }) => {
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
  const [language, setLanguage] = useState<string>("en");

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

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    const { name, title, location, biography } = translations[newLang];
    setName(name);
    setTitle(title);
    setLocation(location);
    setBiography(biography);
  };

  const downloadResume = () => {
    const filename = `${name}_Resume.pdf`;
    html2canvas(document.querySelector("#resume"), {
      scale: 2,
    }).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 210, 297);
      pdf.save(filename);
    });
  };

  return (
    <>
      <div className="flex flex-col gap-y-8">
        <div className="mt-[-30px]">
          <button
            onClick={downloadResume}
            className="bg-black hover:bg-slate-500 text-white font-medium px-6 rounded"
          >
            Download
          </button>
        </div>
        <div id="resume">
          <div
            className="rounded-lg pt-4 pl-4 mt-[-30px]"
            style={{
              border: "1px solid gainsboro",
              width: "100%",
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
                  <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="mb-4 border border-gray-300 rounded text-sm"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                  </select>
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
                  className="p-6 my-4 mx-10 rounded-2xl w-[80%] mt-6"
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
                <div className="my-4 mx-10">
                  <div className="flex gap-x-4">
                    <p
                      className="text-lg"
                      style={{
                        color: getTextColor(color),
                      }}
                    >
                      {translations[language].connect}
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
        </div>
      </div>
    </>
  );
};
