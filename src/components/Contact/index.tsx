import React, { useState, ChangeEvent, FormEvent } from 'react';
import Icon from '../IconBox';
import { contact } from '../../config/portfolio';

interface FormData {
    fullname: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        fullname: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ fullname: '', email: '', message: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        }, 1500);
    };

    return (
        <>
            <article className="contact" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>

                <section className="mapbox" data-mapbox>
                    <figure>
                        <iframe
                            src={contact.mapEmbedUrl}
                            width="400" height="300" loading="lazy" title="location map">
                        </iframe>
                    </figure>
                </section>

                <section className="contact-form">
                    <h3 className="h3 form-title">Contact Form</h3>

                    <form 
                        action={contact.formAction} 
                        className="form" 
                        data-form
                        onSubmit={handleSubmit}
                    >
                        <div className="input-wrapper">
                            <input 
                                type="text" 
                                name="fullname" 
                                className="form-input" 
                                placeholder="Full name" 
                                required 
                                data-form-input
                                value={formData.fullname}
                                onChange={handleInputChange}
                            />

                            <input 
                                type="email" 
                                name="email" 
                                className="form-input" 
                                placeholder="Email address" 
                                required 
                                data-form-input
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <textarea 
                            name="message" 
                            className="form-input" 
                            placeholder="Your Message" 
                            required 
                            data-form-input
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>

                        <button 
                            className="form-btn" 
                            type="submit" 
                            data-form-btn
                            disabled={isSubmitting}
                        >
                            <Icon name="paper-plane" />
                            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                        </button>
                        
                        {submitted && (
                            <p className="form-success">
                                Thank you! Your message has been sent successfully.
                            </p>
                        )}
                    </form>
                </section>
            </article>
        </>
    );
}