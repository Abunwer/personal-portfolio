import React, { useState } from 'react';
import Icon from '../IconBox';
import { about } from '../../config/portfolio';

interface Testimonial {
  avatar: string;
  name: string;
  text: string;
}

export default function About() {
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = (testimonial: Testimonial) => {
        setSelectedTestimonial(testimonial);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <article className="about active" data-page="about">
                <header>
                    <h2 className="h2 article-title">About me</h2>
                </header>

                <section className="about-text">
                    {about.description.map((paragraph: string, index: number) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </section>

                <section className="service">
                    <h3 className="h3 service-title">What I'm doing</h3>
                    <ul className="service-list">
                        {about.services.map((service, index) => (
                            <li className="service-item" key={index}>
                                <div className="service-icon-box">
                                    <img src={`img/${service.icon}`} alt={`${service.title} icon`} width="40" />
                                </div>
                                <div className="service-content-box">
                                    <h4 className="h4 service-item-title">{service.title}</h4>
                                    <p className="service-item-text">
                                        {service.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="testimonials">
                    <h3 className="h3 testimonials-title">Testimonials</h3>
                    <ul className="testimonials-list has-scrollbar">
                        {about.testimonials.map((testimonial: Testimonial, index: number) => (
                            <li className="testimonials-item" key={index}>
                                <div 
                                    className="content-card" 
                                    data-testimonials-item
                                    onClick={() => openModal(testimonial)}
                                >
                                    <figure className="testimonials-avatar-box">
                                        <img 
                                            src={testimonial.avatar} 
                                            alt={testimonial.name} 
                                            width="60" 
                                            data-testimonials-avatar 
                                        />
                                    </figure>
                                    <h4 
                                        className="h4 testimonials-item-title" 
                                        data-testimonials-title
                                    >
                                        {testimonial.name}
                                    </h4>
                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>{testimonial.text}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                {modalOpen && selectedTestimonial && (
                    <div className="modal-container active" data-modal-container>
                        <div className="overlay" data-overlay onClick={closeModal}></div>
                        <section className="testimonials-modal">
                            <button className="modal-close-btn" data-modal-close-btn onClick={closeModal}>
                                <Icon name="close-outline" />
                            </button>
                            <div className="modal-img-wrapper">
                                <figure className="modal-avatar-box">
                                    <img 
                                        src={selectedTestimonial.avatar} 
                                        alt={selectedTestimonial.name} 
                                        width="80" 
                                        data-modal-img 
                                    />
                                </figure>
                                <img src="img/icon-quote.svg" alt="quote icon" />
                            </div>
                            <div className="modal-content">
                                <h4 className="h3 modal-title" data-modal-title>
                                    {selectedTestimonial.name}
                                </h4>
                                <time dateTime="2021-06-14">14 June, 2021</time>
                                <div data-modal-text>
                                    <p>{selectedTestimonial.text}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                <section className="clients">
                    <h3 className="h3 clients-title">Clients</h3>
                    <ul className="clients-list has-scrollbar">
                        {about.clients.map((client, index) => (
                            <li className="clients-item" key={index}>
                                <a href="#">
                                    <img src={client.logo} alt="client logo" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>
        </>
    );
}
