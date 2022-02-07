import React from "react";
import logo from './logo.svg';
import { FaTimes } from "react-icons/fa";
import { social, links } from './data';
import { useGlobalContext } from "./context";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        // <aside className="sidebar-container">
        <aside className={`${isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}`}>
            <div className="sidebar-title">
                <img src={logo} className="logo" alt="Logo of the Company" />
                <button className="close-sidebar-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <div className="sidebar-link-container">
                <ul>
                    {links.map((link) => {
                        const { id, url, text, icon } = link;
                        return <li key={id}>
                            <div className="icon">
                                {icon}
                                <a href={url}>{text}</a>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
            <div className="sidebar-social-container">
                <ul>
                    {
                        social.map((soc) => {
                            const { id, url, icon } = soc;
                            return <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;