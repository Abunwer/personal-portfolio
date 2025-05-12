import { ReactNode, useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import { navItems as defaultNavItems } from '../config/portfolio';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const [activeTab, setActiveTab] = useState('About');
  const [navItems, setNavItems] = useState(defaultNavItems);
  const [showHint, setShowHint] = useState(true);

  // Hide the navigation hint after a while
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    setNavItems(prev => 
      prev.map(item => ({
        ...item,
        active: item.name === tabName
      }))
    );
  };

  // Determine which component to render based on active tab
  const getActiveComponent = () => {
    switch (activeTab) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <Layout
      title={siteConfig.title}
      description="Personal Portfolio Template">
      {showHint && (
        <div className="nav-hint">
          Use navigation menu at bottom ↓
        </div>
      )}
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar activeTab={activeTab} onTabChange={handleTabChange} navItems={navItems} />
          {getActiveComponent()}
        </div>
      </main>
    </Layout>
  );
}
