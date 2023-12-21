import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  console.log("activeTab",activeTab);
  

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul className="tabs" style={{overflowX:"scroll"}}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;