import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

const Services = () => {
  const slides = [
    {
      title: "Installation/Management of School Healing Bay",
      content:
        "This service provides the setup and ongoing management of a dedicated 'Healing Bay' within schools, a safe and supportive space where students can receive first aid, health checks, and emotional support. Our team ensures the Healing Bay is equipped with necessary medical supplies, staffed with trained personnel, and maintained to promote students' health and well-being in a caring environment",
      image: "/assets/installation.jpg",
    },
    {
      title: "Health Education & Promotion",
      content:
        "We focus on educating students and staff about essential health topics, including nutrition, hygiene, mental health, and physical wellness. Through workshops, interactive sessions, and resource materials, we promote healthy habits and empower the school community to make informed decisions, fostering a culture of wellness and proactive health management.",
      image: "/assets/eduPromotion.jpg",
    },
    // Add more slides as needed
    {
      title: "Nutrition/Medical Screening",
      content:
        "We provide comprehensive health screenings, including assessments of nutritional status and basic medical checks for students. Our team evaluates key health indicators to identify any potential concerns early on, supporting students' physical well-being and ensuring they receive appropriate guidance or referrals for further care if needed. This proactive approach helps maintain a healthy school environment and promotes optimal growth and development.",
      image: "/assets/img9.jpg",
    },
    {
      title: "Psychological Counseling",
      content:
        "We offer confidential counseling and mental health support for students, helping them navigate emotional challenges, stress, and personal issues. Our trained counselors provide a safe, non-judgmental space to foster emotional well-being, build resilience, and support students in developing healthy coping strategies for school and life.",
      image: "/src/assets/counseling.jpg",
    },
    {
      title: "Standby Health Officer",
      content:
        "We also provide a dedicated health professional on-site at schools to ensure immediate response to medical emergencies and ongoing health support for students and staff. The Standby Health Officer is trained in first aid, emergency care, and general health management, offering peace of mind and quick assistance in case of health-related incidents throughout the school day.",
      image: "/assets/healthedu.jpg",
    },
    {
      title: "Seminars and Health Fair",
      content:
        "We organize engaging seminars and health fairs to promote health awareness and education within the school community. Through interactive sessions and informative displays, students, staff, and parents gain valuable insights into various health topics, including nutrition, mental well-being, and preventive care. The events aim to foster a culture of health, encourage healthy habits, and provide access to resources and expert advice in a fun and engaging environment.",
      image: "/assets/health.jpg",
    },
  ];

  // React Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    nextArrow: (
      <div className="flex justify-center items-center text-teal-600 bg-[#DFF2E7] rounded-full p-2 md:p-5 shadow-md size-fit">
        <FaChevronRight size={20} />
      </div>
    ),
    prevArrow: (
      <div className="flex justify-center items-center text-teal-600 bg-[#DFF2E7] rounded-full p-2 md:p-5 shadow-md size-fit">
        <FaChevronLeft size={20} />
      </div>
    ),
  };

  return (
    <div className="flex flex-col px-4 md:px-8 lg:px-24 py-6 md:py-20 text-[#1a202c] space-y-6 md:space-y-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-center font-bold text-3xl xl:text-4xl">
          Our Services
        </p>
        <div className="bg-teal-300 h-3 md:h-4 w-1/3 md:w-[8.5%] relative left-10 md:left-12 bottom-3 md:bottom-4 -z-10 rounded-sm"></div>
      </div>
      <div className="relative bg-white rounded-lg xl:shadow-lg">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              {/* Image */}
              <div
                className="w-1/2 h-[300px] xl:h-[80vh] bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              {/* Content */}
              <div className="w-1/2 flex flex-col">
                <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                <p className="text-gray-700 xl:w-[80%] w-[70%]">{slide.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
