import { Button,  Label} from "flowbite-react";
import { useState } from "react";
const RegForm = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleCheckboxChange = (option) => {
      setSelectedOption(option);
    };

    const [selectedOption2, setSelectedOption2] = useState("");

    const handleCheckboxChange2 = (option2) => {
      setSelectedOption2(option2);
    };
  
    const residentialoptions = {
        "id":"resident",
        "option":[
            {
                "type": "B",
                "rooms": "3 Bedrooms, 2 Baths",
                "value": "typeb"
            },
            {
                "type": "C",
                "rooms": "3+1 Bedrooms, 3 Baths",
                "value": "typec"
            },
            {
                "type": "D",
                "rooms": "4+1 Bedrooms, 3 Baths",
                "value": "typed"
            }
        ]
    }
    const medium = {
        "id": "medium",
        "option":[
            {
                "type":"Billboard/Signage",
                "value":"billboard"
            },
            {
                "type":"Word of Mouth",
                "value":"Word of Mouth"
            },
            {
                "type":"Newspaper/Magazine",
                "value":"Newspaper/Magazine"
            },
            {
                "type":"Social Media",
                "value":"Social Media"
            },
            {
                "type":"Others",
                "value":"Others"
            },
        ]
    }
    return(
        <div className="w-full mt-14">
            <form>
                <div className="grid grid-cols-2 gap-3 py-5">
                    <div className="flex items-center">
                        <div className="block mr-2"> {/* Adjust the width as needed */}
                            <Label
                            htmlFor="name"
                            value="Name*"
                            className="font-Avgardn text-[#bda37f] tracking-[2px] leading-loose text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[15px]"
                            />
                        </div>
                        <input type="text" name="name" id="name" class="flex-1 border-black text-black h-[40px] py-0 bg-transparent focus:bg-white focus:border-gray-50 font-Avgardn tracking-[2px] 3xl:text-[15px]" placeholder="John Doe"/>
                    </div>
                    <div className="flex items-center">
                        <div className="block mr-2">
                        <Label
                            htmlFor="email"
                            value="Email*"
                            className="font-Avgardn text-[#bda37f] tracking-[2px] leading-loose text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[15px]"
                        />
                        </div>
                        <input type="email" name="email" id="email" class="flex-1 border-black text-black h-[40px] py-0 bg-transparent focus:bg-white focus:border-gray-50 font-Avgardn tracking-[2px] 3xl:text-[15px]" placeholder="example@email.com"/>
                    </div>
                    <div className="flex items-center">
                        <div className="block mr-2">
                            <Label
                                htmlFor="phone"
                                value="Contact Number*"
                                className="font-Avgardn text-[#bda37f] tracking-[2px] leading-loose text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[15px]"
                            />
                        </div>
                        <input type="text" name="phone" id="phone" class="flex-1 border-black text-black h-[40px] py-0 bg-transparent focus:bg-white focus:border-gray-50 font-Avgardn tracking-[2px] 3xl:text-[15px]" placeholder="0123456789"/>
                    </div>
                    <div className="flex items-center">
                        <div className="block mr-2">
                            <Label
                                htmlFor="age"
                                value="Age"
                                className="font-Avgardn text-[#bda37f] tracking-[2px] leading-loose text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[15px]"
                            />
                        </div>
                         <input type="text" name="age" id="age" class="flex-1 border-black text-black h-[40px] py-0 bg-transparent focus:bg-white focus:border-gray-50 font-Avgardn tracking-[2px] 3xl:text-[15px]" placeholder="25"/>
                    </div>
                </div>
                <div>
                    <p className="font-Avgardn text-black tracking-[2px] leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[15px] pb-5">I am interested in*</p>
                    <div className="pb-8">
                        <h5 className="font-Avgard text-[#bda37f] tracking-[2px] leading-loose text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[17px] mb-3">Residential</h5>
                        <div className="grid grid-cols-3 gap-4">
                            {residentialoptions.option.map((option) => (
                            <label key={option} className="flex items-start leading-6 font-Avgardn text-black tracking-[1px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[14px]">
                                <input
                                className="mr-2 mt-1 hover:cursor-pointer"
                                type="checkbox"
                                value={option.value}
                                checked={selectedOption === option.value}
                                onChange={() => handleCheckboxChange(option.value)}
                                />
                                Type {option.type}<br></br>{option.rooms}
                            </label>
                            ))}
                        </div>
                    </div>
                    <div className="pb-8">
                        <h5 className="font-Avgard text-[#bda37f] tracking-[2px] leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[17px] mb-3">How did you hear about us?</h5>
                        <div className="grid grid-cols-3 gap-4">
                        {medium.option.map((option) => (
                        <label key={option} className="flex items-center leading-6 font-Avgardn text-black tracking-[1px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[14px]">
                            <input
                            className="mr-2 hover:cursor-pointer"
                            type="checkbox"
                            value={option.value}
                            checked={selectedOption2 === option.value}
                            onChange={() => handleCheckboxChange2(option.value)}
                            />
                            {option.type}
                        </label>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-2">
                    <input className="mr-2 mt-2 hover:cursor-pointer" type="checkbox" value="tnc"/>
                    <Label htmlFor="tnc" className="leading-none font-Avgardn text-black tracking-[1px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[10px]">
                    I hereby agree and expressly give my consent to Matrix Concepts Holdings Berhad and its group of companies and/or its authorised entity (collectively referred to as “Matrix”) to
                    collect, store, process and/or access my personal data as far as to enable Matrix to keep me informed of any updates/information with regard to Matrix’s event including but not
                    limited to any future events, products, services and/or marketing related information, provided the use of my personal data is in line with the applicable laws.
                    </Label>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="border-solid rounded-none border-2 bg-transparent border-[#bda37f] w-fit py-2 px-7 text-[#bda37f] hover:bg-[#bda37f] hover:text-white">
                        <div className="font-Avgard uppercase tracking-[5px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[23px]">
                            Register
                        </div>
                    </button>
                    
                </div>
            </form>
        </div>
    );
}
export default RegForm;
