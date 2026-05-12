import { useLoaderData, useNavigate } from "react-router";
import TravelCard from "../TravelCard/TravelCard";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import bgIMG from "../../assets/Rectangle-1.png";



const Home = () => {

    const data = useLoaderData()

    const navigate = useNavigate()

    const [selectedPlace, setSelectedPlace] = useState(data[0]);
    const [showBooked, setShowBooked] = useState(false);
    const [destination, setDestination] = useState("")
    const [origin, setOrigin] = useState("")

    const handleBooking = () => {


        if (!origin) {
            alert("Please Select a Origin")
            return;
        }
        else if (!destination) {
            alert("Please select a destination");
            return;
        }



        navigate(`/booking/${destination}`);
    };


    // console.log(data)

    return (
        <div className="min-h-screen bg-cover bg-center">
            <div>
                <img src={bgIMG} className="fixed top-0 -z-10 brightness-30" alt="" />
            </div>
            <div className="flex justify-between items-center px-20">

                <div className="">

                    <h1 className="text-7xl font-semibold pb-5">
                        {selectedPlace.title}
                    </h1>

                    <p className="w-130 pb-10">
                        {selectedPlace.description}
                    </p>

                    <button onClick={() => setShowBooked(true)} className="btn bg-[#F9A51A] text-black border-none">
                        Booking <FaArrowRight />
                    </button>

                </div>


                {/* onChange={(e) => setOrigin(e.target.value)} */}

                <div>
                    {
                        showBooked ? <div className="hero">
                            <div className="hero-content flex-col lg:flex-row-reverse">

                                <div className="card bg-white text-black w-100 max-w-sm shadow-2xl">
                                    <div className="card-body">
                                        <fieldset className="fieldset">
                                            <label className="label">Origin</label>
                                            <select name="" id="" onChange={(e) => setOrigin(e.target.value)} className="py-3 px-5 bg-[#F2F2F2] font-bold">
                                                <option value="" className="uppercase">Select Destination</option>
                                                <option className="uppercase">Bangladesh</option>
                                            </select>

                                            <label className="label">Destination</label>
                                            <select name="" id="" onChange={(e) => setDestination(e.target.value)} className="py-3 px-5 bg-[#F2F2F2] font-bold">
                                                <option value="" className="uppercase">Select Destination</option>
                                                <option value="1" className="uppercase">Cox's Bazar</option>
                                                <option value="2" className="uppercase">Sreemangal</option>
                                                <option value="3" className="uppercase">Shundarban</option>
                                            </select>

                                            <div className="flex gap-3">
                                                <div className="flex-1 relative">
                                                    <label htmlFor="" className="block mb-1">From</label>
                                                    <input className="py-3 px-5 w-full bg-[#F2F2F2] font-bold" type="date" />
                                                    <SlCalender className="absolute right-3 top-9 text-[15px]" />
                                                </div>

                                                <div className="flex-1">
                                                    <label htmlFor="" className="block mb-1">To</label>
                                                    <input className="py-3 px-5 w-full bg-[#F2F2F2] font-bold" type="date" />
                                                    <SlCalender className="absolute right-9 top-52 text-[15px]" />
                                                </div>

                                            </div>

                                            <button type="button" onClick={handleBooking} className="btn btn-neutral mt-4">Start Booking</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div> : <div className="flex gap-10 justify-end items-center flex-wrap">
                            {
                                data.map(travelCard => <TravelCard key={travelCard.id} setSelectedPlace={setSelectedPlace} travelCard={travelCard}></TravelCard>)
                            }
                        </div>
                    }
                </div>





            </div>
        </div>
    );
};

export default Home;