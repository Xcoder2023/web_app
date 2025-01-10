import { IoMdArrowForward } from "react-icons/io";

export const HeroPage = () => {
  return (
    <div className="text-white bg-[url('/src/assets/herroImage.jpg')] bg-no-repeat bg-center bg-cover h-screen flex items-center justify-center">
      {/* Relative container for overlay and content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0D183A] opacity-45"></div>

        {/* Content */}
        <div className="relative xl:w-[60%] mx-auto flex flex-col items-center gap-5  w-[90%]">
          <p className="text-center  xl:text-[48px] text-[28px]">
            <span className="">E</span>nsuring Every Child&apos;s Health &
            Safety in Schools
          </p>
          <p className="text-[16px] text-center">
            Empowering Healthy Futures, One School at a Time!
          </p>
          <div className="flex items-center justify-center bg-teal-500 px-4 py-2 rounded-md cursor-pointer">
            <a href="/contact" className="decoration-none">
              Contact Us
            </a>{" "}
            <IoMdArrowForward className="ml-2" />q
          </div>
        </div>
      </div>
    </div>
  );
};
