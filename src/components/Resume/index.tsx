import React from 'react';
import Icon from '../IconBox';
import { resume } from '../../config/portfolio';

export default function Resume() {
    return (
        <>
            <article className="resume" data-page="resume">
                <header>
                    <h2 className="h2 article-title">Resume</h2>
                </header>

                <section className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box">
                            <Icon name="book-outline" />
                        </div>
                        <h3 className="h3">Education</h3>
                    </div>

                    <ol className="timeline-list">
                        {resume.education.map((education, index) => (
                            <li className="timeline-item" key={index}>
                                <h4 className="h4 timeline-item-title">{education.title}</h4>
                                <span>{education.years}</span>
                                <p className="timeline-text">
                                    {education.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box">
                            <Icon name="book-outline" />
                        </div>
                        <h3 className="h3">Experience</h3>
                    </div>

                    <ol className="timeline-list">
                        {resume.experience.map((exp, index) => (
                            <li className="timeline-item" key={index}>
                                <h4 className="h4 timeline-item-title">{exp.title}</h4>
                                <span>{exp.years}</span>
                                <p className="timeline-text">
                                    {exp.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="skill">
                    <h3 className="h3 skills-title">My skills</h3>
                    <ul className="skills-list content-card">
                        {resume.skills.map((skill, index) => (
                            <li className="skills-item" key={index}>
                                <div className="title-wrapper">
                                    <h5 className="h5">{skill.name}</h5>
                                    <data value={skill.percentage}>{skill.percentage}%</data>
                                </div>
                                <div className="skill-progress-bg">
                                    <div 
                                        className="skill-progress-fill" 
                                        style={{ width: `${skill.percentage}%` }}
                                    ></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>
        </>
    );
}
