import { NavLink } from "react-router-dom";


export default function Navbar(){
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='play'>Play</NavLink>
                </li>
                <li>
                    <NavLink to='write'>Write</NavLink>
                </li>
            </ul>
        </nav>
    )
}
