import { plans } from "../../../constants/constants"
import { IoCheckmarkCircle } from "react-icons/io5";

const Pricing = () => {
  return (
    <div className="bg-gray-100 w-full mx-auto px-4 md:px-8 lg:px-24 my-8 md:my-20 py-6 md:py-20">
        <div className="flex items-center justify-center flex-col space-y-4 md:space-y-8">
            <div className="flex flex-col gpa-4 text-center gap-3 my-4 md:my-6 pb-4">
            <h1 className="text-3xl md:text-4xl text-gray-950 font-bold tracking-wide">Our Pricing Model</h1>
            <span className="text-base md:text-xl font-inter md:pt-2 text-teal-800 tracking-wide">Elevating Student&apos;s Health for a Bright Future!</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 w-full">
                {plans.map((plan, idx)=> (
                    <div key={idx} className="flex flex-col gap-4 justify-between rounded-2xl border border-gray-200 shadow-md bg-white p-6">
                        <div className="flex flex-col gap-4">
                        <span className="font-semibold text-base md:text-2xl text-gray-800">{plan.title}</span>
                        <p className="flex items-end gap-1">
                            <span className="font-bold text-2xl md:text-4xl text-gray-950 tracking-tighter">₦{plan.cost}</span>
                            <span className="text-base">/</span>
                            <span className="text-base text-gray-700 font-semibold line-through">₦{plan.initialCost}</span>
                        </p>
                        <ul className="flex flex-col gap-4 w-full md-[95%] my-3 md:my-6">
                            {plan.features.map((feature, index) => (
                                <li key={index} className='flex items-start justify-start text-start'><span className='list-disc mr-2'> <IoCheckmarkCircle fontSize={20} className="text-teal-900" /></span>  <span className='text-start text-base text-gray-600 -mt-[3px]'>{feature}</span>              
                                </li>                                    
                            ))}                            
                        </ul>
                        </div>
                        <button className="flex items-center justify-center bg-teal-500 text-white font-semibold py-4 rounded-full w-full md:w-[80%] mx-auto place-item-end text-base md:text-xl">Get Started</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Pricing