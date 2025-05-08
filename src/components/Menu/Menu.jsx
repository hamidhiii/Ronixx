import React from 'react'
import '../Menu/Menu.scss'
import { menuLink } from '../../Constants/Index'


export default function Menu() {
    return (
        <ul>
            {
                menuLink.map(({ id, LinkName, slug }) => {
                    return <li key={id}>{slug}</li>
                })
            }

        </ul>
    )
}
