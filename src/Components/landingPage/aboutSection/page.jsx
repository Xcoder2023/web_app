const AboutSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-24 w-full my-8 md:my-16 lg:my-20">
      <div className="flex items-center justify-between mx-auto gap-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col w-full md:w-1/2 gap-6 font-inter">
            <h1 className="font-bold text-3xl md:text-5xl text-slate-950 md:pb-2">
              About Us
            </h1>
            <p className="flex flex-col gap-4 text-sm text-slate-950 font-semibold w-full md:w-[85%]">
              <span>
                The Serene Scheal Initiative is a School Health Programme
                targeting health inequality among school children. It addresses
                the critical issue of disparate access to healthcare,
                irrespective of socioeconomic status, ensuring every child
                receives essential health services. By doing so, it directly
                combats poor academic performance caused by absenteeism due to
                illness,tackles neglected health needs by offering tailored
                health assessments, education, and interventions,thus promoting
                holistic well-being within school communities.
              </span>
              <span>
                Our focus is on preventive measures, embedding wellness programs
                that foster long-term health outcomes among students. Serene
                Scheal Initiative prioritizes inclusivity, effectiveness, and
                sustainability, ensuring that no child is left behind in
                accessing vital healthcare services essential for their academic
                success and overall well-being.
              </span>
            </p>
            <a
              href="/about-us"
              className="md:mt-2 px-10 py-4 bg-slate-900 hover:bg-slate-950 hover:-translate-y-1 transition duration-75 ease-in-out text-gray-200 text-base font-semibold w-full md:w-fit rounded-xl"
            >
              Learn More...
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/serene2.jpg"
              alt=""
              className="object-cover h-[20rem] md:h-[27.5rem] w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
