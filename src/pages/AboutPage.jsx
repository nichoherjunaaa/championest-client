import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Loading from './../components/Loading';

// Sponsor
import Sponsor1 from '../assets/sponsor/e.jpg';
import Sponsor2 from '../assets/sponsor/OFAAX40.jpg';
import Sponsor3 from '../assets/sponsor/pok3.jpg';
import Sponsor4 from '../assets/sponsor/pexels-magda-ehlers-pexels-1337380.jpg'
import Sponsor5 from '../assets/sponsor/free-restaurant-logo-design-templates-png-10.png'
import Sponsor6 from '../assets/sponsor/final-logo-example.png'
import Sponsor7 from '../assets/sponsor/pg_logo_sample_-_009_copy.jpg'
import Sponsor8 from '../assets/sponsor/Free-Photography-Logo-Design-Template-Download-scaled.jpg'
import Sponsor9 from '../assets/sponsor/logo025.png'
import Sponsor10 from '../assets/sponsor/social-organization-logo-social-community-logo-template-illustration-eps-10-free-vector.jpg'

// Penyelenggara
import Logo1 from '../assets/owner/188552034.png'
import Logo2 from '../assets/owner/logo033.png'

const containerStyle = {
    width: "100%",
    height: "400px",
};

const center = {
    lat: -6.200000,
    lng: 106.816666,
};

const AboutPage = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const handleMarkerClick = () => {
        window.open(`https://www.google.com/maps?q=${center.lat},${center.lng}`, "_blank");
    };

    if (!isLoaded) return <Loading />;

    return (
        <div className="flex flex-col w-full gap-10">
            {/* Tentang Kami */}
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-center">Tentang Kami</h1>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae quaerat harum quia eveniet adipisci repudiandae hic, rerum quos aliquam molestias quis magni, perspiciatis ipsa, ratione quibusdam. Quisquam sed provident aliquid odio non harum cumque at. Recusandae dolorum quas veritatis maiores maxime animi in impedit voluptate commodi, est labore sed ipsam at unde blanditiis suscipit modi reiciendis eligendi temporibus quod vero. Sapiente, unde perspiciatis itaque fugiat repellat minus sint voluptatibus eligendi, quidem excepturi nihil, quae a ullam mollitia non voluptatum. Necessitatibus quae error voluptate accusantium reprehenderit totam corrupti eaque, velit veritatis sapiente ea eum fuga! Repudiandae magni dolor assumenda fuga!
                </p>
            </div>

            {/* Google Maps */}
            <div>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                    <Marker position={center} onClick={handleMarkerClick} />
                </GoogleMap>
            </div>

            {/* Diselenggarakan Oleh */}
            <div className="flex flex-col items-center w-full">
                <h1 className="text-2xl font-bold text-center">Diselenggarakan oleh</h1>
                <div className="grid grid-cols-2 gap-10 mt-10 w-full h-96 place-items-center">
                    <img src={Logo1} alt="Logo 1" className="w-full h-full max-w-[400px] max-h-[400px] object-contain" loading="lazy" />
                    <img src={Logo2} alt="Logo 2" className="w-full h-full max-w-[400px] max-h-[400px] object-contain" loading="lazy" />
                </div>
            </div>

            {/* Disponsori Oleh */}
            <div className="flex flex-col items-center w-full">
                <h1 className="text-2xl font-bold text-center">Disponsori oleh</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 w-full p-5 place-items-center">
                    {[Sponsor1, Sponsor2, Sponsor4, Sponsor3, Sponsor5, Sponsor6, Sponsor7, Sponsor8, Sponsor9, Sponsor10].map((src, index) => (
                        <img key={index} src={src} alt={`Logo Sponsor ${index + 1}`} className="w-32 h-32 object-contain" loading="lazy" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
