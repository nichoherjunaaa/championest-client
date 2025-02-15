import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import API from "./../api";

const InformationPage = () => {
    const [dokumentasi, setDokumentasi] = useState([]);

    const getData = async () => {
        try {
            const { data } = await API.get("/dokumentasi");
            setDokumentasi(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="flex flex-col w-full">
            <div className="bg-base-300 flex justify-center items-center w-full h-32 text-xl font-bold">
                Guide
            </div>

            <div className="news-info grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="news-item bg-base-300 p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
                    >
                        <img
                            src="https://via.placeholder.com/300"
                            alt={`News Image ${item}`}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold">Judul Berita {item}</h3>
                        <p className="text-gray-600 mt-2">
                            Deskripsi singkat dari berita atau informasi terkait. Ini adalah contoh deskripsi yang bisa ditambahkan pada setiap item berita.
                        </p>
                        <a href="#" className="text-primary mt-4 inline-block">
                            Read more
                        </a>
                    </div>
                ))}
            </div>

            <div className="flex flex-col w-full justify-center items-center mt-10">
                <h1 className="text-2xl font-bold mb-5">Dokumentasi Championest 2023</h1>
                <div className="relative w-full overflow-hidden">
                    <Marquee pauseOnHover={true} speed={50} loop={0} className="w-full overflow-hidden flex">
                        {[...dokumentasi, ...dokumentasi].map((item, index) => (
                            <img
                                key={index}
                                src={item.gambar}
                                alt={`Photo ${index}`}
                                className="w-64 h-40 object-cover rounded-lg shadow-md mr-2 transition-transform transform hover:scale-110 overflow-hidden"
                            />
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default InformationPage;
