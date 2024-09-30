import React, { useState, useEffect, act } from "react";

function Tabs(props) {
  const [activeTab, setActiveTab] = useState("");
  const [tabs, setTabs] = useState([]);
  const [mapContent, setMapContent] = useState({});

  const { children } = props;
  console.log(props);
  useEffect(() => {
    const tabs = [];
    const map = {};
    children.forEach((child, index) => {
      tabs.push(child.props.title);
      map[child.props.title] = child.props.children;
    });
    setTabs(tabs);
    setMapContent(map);
    setActiveTab(tabs[0]);
  }, [props, children]);
  console.log(mapContent);

  const handleTabClick = (tab) => {
    console.log("clicked tab is:", tab);
    setActiveTab(tab);
  };
  return (
    <div>
      <div>
        {tabs.map((tab, index) => {
          return (
            <button
              onClick={() => handleTabClick(tab)}
              key={index}
              className={`${activeTab === tab ? "active-tab" : ""}`}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div>
        {Object.keys(mapContent).map((key, index) => {
          if (key === activeTab) {
            return <div>{mapContent[key]}</div>;
          }
        })}
      </div>
    </div>
  );
}

export default Tabs;
