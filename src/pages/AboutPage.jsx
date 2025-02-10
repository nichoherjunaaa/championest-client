import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Loading from './../components/Loading';

const containerStyle = {
    width: "100%",
    height: "400px",
};

const center = {
    lat: -6.200000, // Ganti dengan koordinat tujuan
    lng: 106.816666,
};

const AboutPage = () => {
    // Gunakan useJsApiLoader agar tidak terjadi re-render terus-menerus
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
    });

    const handleMarkerClick = () => {
        window.open(`https://www.google.com/maps?q=${center.lat},${center.lng}`, "_blank");
    };

    if (!isLoaded) return <Loading/>;

    return (
        <div className="flex flex-col w-full gap-10">
            {/* Tentang Kami */}
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-center">Tentang Kami</h1>
                <p className="text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, corporis quam labore,
                    optio fugiat dignissimos mollitia porro ea molestias molestiae maiores dolores magni nisi.
                </p>
            </div>

            {/* Google Maps */}
            <div>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                    <Marker position={center} onClick={handleMarkerClick} />
                </GoogleMap>
            </div>

            {/* Diselenggarakan Oleh */}
            <div className="flex justify-center flex-col items-center w-full">
                <h1 className="text-2xl font-bold text-center">Diselenggarakan oleh</h1>
                <div className="grid grid-cols-2 gap-10 mt-10 bg-gray-200 w-full h-96">
                    <img src="/images/logo1.png" alt="Logo 1" className="w-32 h-32 object-contain" />
                    <img src="/images/logo2.png" alt="Logo 2" className="w-32 h-32 object-contain" />
                </div>
            </div>

            {/* Disponsori Oleh */}
            <div className="flex justify-center flex-col items-center w-full">
                <h1 className="text-2xl font-bold text-center">Disponsori oleh</h1>
                <div className="grid grid-cols-3 gap-10 mt-10 bg-gray-200 w-full p-5">
                    <img src="/images/logo3.png" alt="Logo 3" className="w-32 h-32 object-contain" />
                    <img src="/images/logo4.png" alt="Logo 4" className="w-32 h-32 object-contain" />
                    <img src="/images/logo5.png" alt="Logo 5" className="w-32 h-32 object-contain" />
                    <img src="/images/logo6.png" alt="Logo 6" className="w-32 h-32 object-contain" />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
