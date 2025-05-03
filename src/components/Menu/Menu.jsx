import React from 'react'
import '../Menu/Menu.scss'
import { menuLink } from '../../Constants/Index'
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom'
>>>>>>> 21f9046 (farruxs codes)


export default function Menu() {
    return (
        <ul>
            {
<<<<<<< HEAD
                menuLink.map(({ id, LinkName, slug }) => {
                    return <li key={id}>{slug}</li>
=======
                menuLink.map(({ id, LinkName, slug, path }) => {
                    return <li><Link to={path}>{LinkName}</Link></li>
>>>>>>> 21f9046 (farruxs codes)
                })
            }

        </ul>
    )
}
