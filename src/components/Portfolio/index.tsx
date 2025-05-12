import React, { useState } from 'react';
import Icon from '../IconBox';
import { portfolio } from '../../config/portfolio';

interface Project {
    image: string;
    title: string;
    category: string;
    url: string;
}

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setShowDropdown(false);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Filter projects based on selected category
    const filteredProjects = activeCategory === 'All' 
        ? portfolio.projects 
        : portfolio.projects.filter((project: Project) => project.category === activeCategory);

    return (
        <>
            <article className="portfolio" data-page="portfolio">
                <header>
                    <h2 className="h2 article-title">Portfolio</h2>
                </header>

                <section className="projects">
                    <ul className="filter-list">
                        {portfolio.categories.map((category: string, index: number) => (
                            <li className="filter-item" key={index}>
                                <button 
                                    className={activeCategory === category ? 'active' : ''} 
                                    data-filter-btn
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="filter-select-box">
                        <button 
                            className="filter-select" 
                            data-select
                            onClick={toggleDropdown}
                        >
                            <div className="select-value" data-selecct-value>
                                {activeCategory === 'All' ? 'Select category' : activeCategory}
                            </div>
                            <div className="select-icon">
                                <Icon name="chevron-down" />
                            </div>
                        </button>

                        <ul className={`select-list ${showDropdown ? 'active' : ''}`}>
                            {portfolio.categories.map((category: string, index: number) => (
                                <li className="select-item" key={index}>
                                    <button 
                                        data-select-item
                                        onClick={() => handleCategoryChange(category)}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ul className="project-list">
                        {filteredProjects.map((project: Project, index: number) => (
                            <li 
                                className="project-item active" 
                                data-filter-item 
                                data-category={project.category}
                                key={index}
                            >
                                <a href={project.url}>
                                    <figure className="project-img">
                                        <div className="project-item-icon-box">
                                            <Icon name="eye-outline" />
                                        </div>
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            loading="lazy"
                                        />
                                    </figure>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-category">{project.category}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>
        </>
    );
}
