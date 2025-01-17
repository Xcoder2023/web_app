import { reasons } from "../../../constants/constants";

const WhyChooseUs = () => {
  return (
    <div className="bg-white w-full mx-auto px-4 md:px-8 lg:px-24 my-8 md:my-20 py-6 md:py-20">
      <div className="flex flex-col space-y-4 md:space-y-8">
        <div className="flex justify-between items-end mb-4 flex-shrink-0">
          <h1 className="font-inter font-bold tracking-wide text-[24px]/[32px] md:text-[48px]/[64px]">
            Why Choose Serene <br />
            <span className="text-teal-800">Scheal Initiative</span>{" "}
          </h1>
          <button className="hidden md:flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 md:py-4 rounded-full px-6 md:px-8 w-auto text-sm md:text-xl">
            Get In Touch
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center mx-auto w-full my-6 md:my-20">
          <div className="w-full md:w-1/2 relative">
            <img
              src="/images/serene/img8.jpg"
              className="w-full h-[20rem] rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-1/2">
            {reasons.map((reason, id) => (
              <div key={id} className="flex flex-col gap-3">
                <img src={reason.icon} alt="" width={50} height={50} />
                <h1 className="font-inter font-bold text-xl text-gray-700">
                  {reason.title}
                </h1>
                <span className="text-base font-inter text-gray-700 w-full md:w-[80%]">
                  {reason.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
