import React from "react";
import { NavLink } from "react-router-dom";
import { FaHeadset } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const links = [
    { id: 1, url: "/", text: "Beranda", icon: <FaHome /> },
    { id: 2, url: "/event", text: "Daftar Lomba", icon: <FaTrophy /> },
    { id: 3, url: "/about", text: "Tentang Kami", icon: <FaInfoCircle /> },
    { id: 4, url: "/customer-service", text: "Customer Service", icon: <FaHeadset /> },
];

const NavList = () => {
    return (
        <ul className="space-y-2">
            {links.map((link) => (
                <li key={link.id}>
                    <NavLink
                        to={link.url}
                        className={({ isActive }) =>
                            `flex items-center gap-4 p-2 rounded ${isActive ? "bg-secondary text-white text-lg" : ""
                            }`
                        }
                    >
                        {link.icon && link.icon} {/* Menampilkan ikon jika ada */}
                        {link.text}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavList;
