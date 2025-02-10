import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
    width: "100%",
    height: "400px",
};

const center = {
    lat: -6.200000, // Ganti dengan koordinat tujuan
    lng: 106.816666,
};


const AboutPage = () => {
    const handleMarkerClick = () => {
        window.open(`https://www.google.com/maps?q=${center.lat},${center.lng}`, "_blank");
    };

    return (
        <div className="flex flex-col w-full gap-10">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-center">Tentang Kami</h1>
                <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, corporis quam labore,
                    optio fugiat dignissimos mollitia porro ea molestias molestiae maiores dolores magni nisi. Deleniti ullam obcaecati dolore sunt.
                    Culpa, cum. Reiciendis commodi quidem odit maxime maiores, esse at neque et quisquam voluptate atque expedita enim id recusandae provident praesentium, repudiandae consequatur nam ducimus doloribus nesciunt. Obcaecati alias molestias esse ex necessitatibus cumque repellendus, modi consectetur exercitationem, eligendi impedit sit cupiditate quae minus debitis ducimus optio ipsam numquam dolor. Natus consequatur nobis delectus labore dignissimos a dolor veniam nisi. Quam tempore temporibus magni pariatur quae voluptates ullam optio aliquam esse!</p>
            </div>
            <div className="">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                        <Marker position={center} onClick={handleMarkerClick} />
                    </GoogleMap>
                </LoadScript>
            </div>
            <div className="flex justify-center flex-col items-center w-full">
                <h1 className="text-2xl font-bold text-center">Diselenggarakan oleh</h1>
                <div className="grid grid-cols-2 gap-10 mt-10 bg-gray-200 w-full h-96">
                    <img src="" alt="Logo" className="logo1"/>
                    <img src="" alt="logo2" className=""/>
                </div>
            </div>
            <div className="flex justify-center flex-col items-center w-full">
                <h1 className="text-2xl font-bold text-center">Disponsori oleh</h1>
                <div className="grid grid-cols-2 gap-10 mt-10 bg-gray-200 w-full h-96">
                    <img src="" alt="Logo" className="logo1"/>
                    <img src="" alt="logo2" className=""/>
                    <img src="" alt="logo3" className=""/>
                    <img src="" alt="logo4" className=""/>
                    <img src="" alt="logo5" className=""/>
                    <img src="" alt="logo6" className=""/>
                </div>
            </div>
        </div>
    )
}




export default AboutPage