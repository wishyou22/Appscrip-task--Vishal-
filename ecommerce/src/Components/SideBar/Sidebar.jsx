import React, { useState } from 'react';
import './SideBar.css';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const Sidebar = ({ applyFilter }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  // Define filter sections as an array of objects
  const filterSections = [
    {
      id: 'IDEAL FOR',
      title: 'IDEAL FOR',
      items: ['Men', 'Women', 'Kid']
    },
    {
      id: 'OCCASION',
      title: 'OCCASION',
      items: ['Tops', 'Sandals']
    },
    {
      id: 'WORK',
      title: 'WORK',
      items: ['Clothes', 'Toys']
    },
    {
      id: 'FABRIC',
      title: 'FABRIC',
      items: ['Clothes', 'Toys']
    },
    {
      id: 'SEGMENT',
      title: 'SEGMENT',
      items: ['Clothes', 'Toys']
    },
    {
      id: 'SUITABLE FOR',
      title: 'SUITABLE FOR',
      items: ['Clothes', 'Toys']
    },
    {
      id: 'RAW MATERIALS',
      title: 'RAW MATERIALS',
      items: ['Clothes', 'Toys']
    },
    {
      id: 'PATTERN',
      title: 'PATTERN',
      items: ['Clothes', 'Toys']
    }
  ];

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  const toggleSection = (sectionId) => {
    setExpandedSections({
      ...expandedSections,
      [sectionId]: !expandedSections[sectionId]
    });
  };

  return (
    <div>
      <button onClick={toggleSidebar} className="filter-button">
        {isVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
      </button>
      <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
        <h2>Filter Options</h2>

        {filterSections.map(section => (
          <div key={section.id} className="filter-section">
            <div className="filter-header" onClick={() => toggleSection(section.id)}>
              {section.title} <span className="arrow">{expandedSections[section.id] ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</span>
              
            </div>
          
            {expandedSections[section.id] && (
              <div className="filter-subsection">
                {section.items.map(item => (
                  <label key={item}>
                    <input type="checkbox" /> {item}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}

        <button onClick={applyFilter} className="apply-button">Apply</button>
      </div>
    </div>
  );
};

export default Sidebar;
