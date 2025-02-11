import React from 'react'
import Logo from '../assets/owner/logo033.png'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content p-12">
            <aside>
                <img src={Logo} alt="" className="h-36" />
                <p>
                    ACME Industries Ltd.
                    <br />
                    Providing reliable tech since 2023
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://instagram.com"><FaInstagram className="text-3xl" /></a>
                    <a href="https://youtube.com"><FaYoutube className="text-3xl" /></a>
                    <a href="https://github.com"><FaGithub className="text-3xl" /></a>
                </div>
            </nav>
            {/* Contact Person */}
            <div>
                <h6 className="footer-title">Contact Person</h6>
                <a className="link link-hover" href="https://wa.me/6281227631975">Contact Person 1 </a>
                <a className="link link-hover" href="https://wa.me/6281227631975">Contact Person 2</a>
            </div>
            {/* <div>
                <h6 className="footer-title">Customer Service</h6>
                <a className="link link-hover">Help</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Returns</a>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Privacy Policy</a>
            </div> */}
            <div>
                {/* Company */}
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">Beranda</a>
                <a className="link link-hover">Daftar Kompetisi</a>
                <a className="link link-hover">Tentang Kami</a>
                <a className="link link-hover">Informasi</a>
            </div>
        </footer>
    )
}

export default Footer