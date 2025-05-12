import React from 'react';

interface NavItem {
    name: string;
    active: boolean;
}

interface NavbarProps {
    activeTab: string;
    onTabChange: (tabName: string) => void;
    navItems: NavItem[];
}

export default function Navbar({ activeTab, onTabChange, navItems }: NavbarProps) {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    {navItems.map((item, index) => (
                        <li className="navbar-item" key={index}>
                            <button 
                                className={`navbar-link ${item.active ? 'active' : ''}`}
                                data-nav-link
                                onClick={() => onTabChange(item.name)}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
