import React from 'react';
import Photo from '../assets/carousel/slide2.webp'
const InformationPage = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="bg-base-300 guide-file justify-center items-center flex w-full h-32">
                Guide
            </div>
            <div className="news-info grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 grid-cols-1">
                <div className="news-item bg-base-300 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
                    <img
                        src="https://via.placeholder.com/300"
                        alt="News Image"
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold">Judul Berita 1</h3>
                    <p className="text-gray-600 mt-2">Deskripsi singkat dari berita atau informasi terkait. Ini adalah contoh deskripsi yang bisa ditambahkan pada setiap item berita.</p>
                    <a href="#" className="text-primary mt-4 inline-block">Read more</a>
                </div>
                <div className="news-item bg-base-300 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
                    <img
                        src="https://via.placeholder.com/300"
                        alt="News Image"
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold">Judul Berita 2</h3>
                    <p className="text-gray-600 mt-2">Deskripsi singkat dari berita atau informasi terkait. Ini adalah contoh deskripsi yang bisa ditambahkan pada setiap item berita.</p>
                    <a href="#" className="text-primary mt-4 inline-block">Read more</a>
                </div>
                <div className="news-item bg-base-300 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
                    <img
                        src="https://via.placeholder.com/300"
                        alt="News Image"
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold">Judul Berita 3</h3>
                    <p className="text-gray-600 mt-2">Deskripsi singkat dari berita atau informasi terkait. Ini adalah contoh deskripsi yang bisa ditambahkan pada setiap item berita.</p>
                    <a href="#" className="text-primary mt-4 inline-block">Read more</a>
                </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center mt-10">
                <div className="mb-10">
                    <h1 className="text-2xl font-bold">Dokumentasi Championest 2023</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <img src={Photo} alt="Photo" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
}

export default InformationPage;
