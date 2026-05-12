import { Link } from "react-router";



const TravelCard = ({ travelCard, setSelectedPlace }) => {

    console.log(travelCard)

    const { id, title, image } = travelCard




    return (
        <Link to={''}>
            <div className="transition-all duration-300 ease-in-out hover:translate-y-3 hover:shadow-2xl " onMouseEnter={() => setSelectedPlace(travelCard)}>




                <div className="w-60 relative hover:border-5 hover:border-yellow-400 rounded-3xl">
                    <img className="" src={image} alt="" />



                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>


                    <div id="title" className="absolute bottom-5 text-4xl left-4 uppercase font-">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TravelCard;