import { NavLink } from "react-router";

function Nav({ links }) {
    return (
        <nav>
            {links.map((link, index) => (
                <NavLink key={index} to={link.path}>
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
}
export default Nav

