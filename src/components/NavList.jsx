import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const links = [
    { id: 1, url: '', text: "Beranda" },
    { id: 2, url: 'kompetisi', text: "Daftar Kompetisi" },
    { id: 3, url: 'about', text: "Tentang Kami" },
    { id: 4, url: 'news', text: "Informasi" },
    { id: 5, url: 'order', text: "Dipesan" },

]
const NavList = () => {
    const user = useSelector(state => state.userState.user)
    return (
        <>
            <ul className="flex flex-col gap-2 md:flex-row md:gap-2">
                {links.map((link) => {
                    const { id, url, text } = link
                    if (url === 'order'  && !user) {
                        return null
                    }
                    return (
                        <li key={id}>
                            <NavLink className={({ isActive }) =>
                                `rounded-none capitalize hover: !bg-transparent hover: !text - inherit 
                            ${isActive ? '!border-primary border-b-4 !text-inherit' : ''} 
                            hover:bg-transparent hover:text-inherit 
                            focus:outline-none focus:ring-0 focus:shadow-none`
                            } to={url}>
                                {text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default NavList