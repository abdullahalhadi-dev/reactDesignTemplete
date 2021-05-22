import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar(){
    return(
        <div>
            This is Side Bar

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}