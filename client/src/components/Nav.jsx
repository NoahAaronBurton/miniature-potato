import { SiAboutdotme } from "react-icons/si";

export default function Nav() {

    const NavItem = ({ text }) => {
        return (
            <a href={text} className="text-nowrap text-xl px-6">
                {text}
            </a>
        )
    }

    return (

        <nav className="flex flex-row items-center h-10 w-screen shadow-lg">
            <NavItem text="About Me" />
            <NavItem text="My Music" />
            <NavItem text="My Work" />
            <NavItem text="Services" />

        </nav>
    )
}