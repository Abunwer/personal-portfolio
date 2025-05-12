import React, { useState } from 'react';
import './styles.module.scss';
import { profile } from '../../config/portfolio';
import Icon from '../IconBox';

export default function Sidebar() {
    const [expanded, setExpanded] = useState(false);

    const toggleSidebar = () => {
        setExpanded(prev => !prev);
    };

    return (
        <>
            <aside className={`sidebar ${expanded ? 'active' : ''}`} data-sidebar>
                <div className="sidebar-info">
                    <figure className="avatar-box">
                        <img src={profile.avatar} alt={profile.name} width="80" />
                    </figure>

                    <div className="info-content">
                        <h1 className="name" title={profile.name}>{profile.name}</h1>
                        <p className="title">{profile.title}</p>
                    </div>

                    <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
                        <span>{expanded ? "Hide Contacts" : "Show Contacts"}</span>
                        <Icon name="chevron-down" />
                    </button>
                </div>

                <div className="sidebar-info_more">
                    <div className="separator"></div>

                    <ul className="contacts-list">
                        <li className="contact-item">
                            <div className="icon-box">
                                <Icon name="mail-outline" />
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Email</p>
                                <a href={`mailto:${profile.email}`} className="contact-link">{profile.email}</a>
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <Icon name="phone-portrait-outline" />
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Phone</p>
                                <a href={`tel:${profile.phone}`} className="contact-link">{profile.phone}</a>
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <Icon name="calendar-outline" />
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Birthday</p>
                                <time dateTime="1982-06-23">{profile.birthday}</time>
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <Icon name="location-outline" />
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Location</p>
                                <address>{profile.location}</address>
                            </div>
                        </li>
                    </ul>

                    <div className="separator"></div>

                    <ul className="social-list">
                        {profile.social.map((social, index) => (
                            <li className="social-item" key={index}>
                                <a href={social.url} className="social-link">
                                    <Icon name={`logo-${social.name}`} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}
