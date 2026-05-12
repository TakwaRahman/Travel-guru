
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";



const Booking = () => {

    const data = useLoaderData();


    const { place } = useParams();

    const id = parseInt(place);



    const filterData = data.filter(resort => resort.id === id)

    const mapQuery = filterData[0]?.location;


    return (
        <div className="bg-white min-h-screen text-black px-20 space-y-5">

            {id === 1 ? <h1 className="font-bold text-4xl">Stay in Cox's Bazar</h1> : id === 2 ? <h1 className="font-bold text-4xl">Stay in SreeMangal</h1> : id === 3 ? <h1 className="font-bold text-4xl">Stay in Shundarban</h1> : ""}

            <div className="flex gap-10">

                <div className="space-y-5">
                    {
                        filterData.map(resort => <div key={resort.rating}>

                            <div className="flex gap-5">
                                <img className="w-100 rounded-xl" src={resort.image_url} alt="" />

                                <div>
                                    <p className="text-2xl font-semibold">{resort.name}</p>
                                    <div className="flex gap-3 text-[#6A6A6A] pt-3">
                                        <p>{resort.guests} Guests</p>
                                        <p>{resort.bedrooms} Bedrooms</p>
                                        <p>{resort.bathrooms} Bath</p>
                                    </div>
                                    <div className="pt-3 leading-8">
                                        <p className="w-50">{resort.description}</p>
                                    </div>

                                    <div className="flex items-center pt-5 gap-2">
                                        <FaStar className="text-yellow-400"></FaStar> {resort.rating}
                                    </div>
                                </div>
                            </div>



                        </div>)
                    }
                </div>

                <div className="h-215 flex-1 rounded-xl overflow-hidden">
                    <iframe
                        className="w-full h-full"
                        loading="eager"
                        src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                    ></iframe>
                </div>

            </div>
        </div>

    );
};

export default Booking;