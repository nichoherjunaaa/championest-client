import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const links = [
    { id: 1, url: '', text: "Beranda" },
    { id: 2, url: 'kompetisi', text: "Daftar Kompetisi" },
    { id: 3, url: 'about', text: "Tentang Kami" },
    { id: 4, url: 'customer-service', text: "Customer Service" },

]
const NavList = () => {
    const user = useSelector(state => state.userState.user)
    return (
        <>
            <ul className="flex flex-col gap-2 md:flex-row md:gap-2">
                {links.map((link) => {
                    const { id, url, text } = link
                    if ((url === 'orders' || url === 'checkout') && !user) {
                        return null
                    }
                    return (
                        <li key={id}>
                            <NavLink className="capitalize hover:!bg-transparent hover:!text-inherit" to={url}>
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