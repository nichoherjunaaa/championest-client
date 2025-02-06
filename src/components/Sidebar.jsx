import { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavList from "./NavList";

const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Staggered Button */}
            <button
                className={`fixed top-4 z-50 transition-all duration-300 p-2 bg-primary text-white rounded-full shadow-lg ${isOpen ? "left-56" : "left-4"
                    }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaBars className="text-3xl" />
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-primary text-white w-52 p-4 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <h2 className="text-lg font-bold mb-4">TECHNOFEST 7.0</h2>
                <NavList /> 
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default SidebarMenu;
