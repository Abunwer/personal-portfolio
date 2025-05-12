import React from 'react';
import { FaEnvelope, FaPhone, FaCalendar, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaChevronDown, FaEye, FaPaperPlane } from 'react-icons/fa';
import { IoBookOutline, IoCloseOutline } from 'react-icons/io5';

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = '' }: IconProps): React.ReactNode {
  const getIcon = () => {
    switch (name) {
      case 'mail-outline':
        return <FaEnvelope className={className} />;
      case 'phone-portrait-outline':
        return <FaPhone className={className} />;
      case 'calendar-outline':
        return <FaCalendar className={className} />;
      case 'location-outline':
        return <FaMapMarkerAlt className={className} />;
      case 'logo-facebook':
        return <FaFacebook className={className} />;
      case 'logo-twitter':
        return <FaTwitter className={className} />;  
      case 'logo-instagram':
        return <FaInstagram className={className} />;
      case 'chevron-down':
        return <FaChevronDown className={className} />;
      case 'book-outline':
        return <IoBookOutline className={className} />;
      case 'close-outline':
        return <IoCloseOutline className={className} />;  
      case 'eye-outline':
        return <FaEye className={className} />;
      case 'paper-plane':
        return <FaPaperPlane className={className} />;
      default:
        return null;
    }
  };

  return getIcon();
}