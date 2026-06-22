import React, { useState, useRef, useEffect } from "react";
import "./PrivateHeader.css";

const PrivateHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <header className="private-header">
      <div className="header-left">
        <div className="logo">Socio</div>
      </div>

      <nav className="header-nav">
        <button className="nav-item active">Feed</button>

        <button className="nav-item">
          Messages
          <span className="badge">3</span>
        </button>

        <button className="nav-item">
          Notifications
          <span className="badge">7</span>
        </button>
      </nav>

      <div className="header-right" ref={dropdownRef}>
        <button
          className="profile-btn"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          SK
        </button>

        {dropdownOpen && (
          <div className="profile-dropdown">
            <button className="dropdown-item">Settings</button>
            <button className="dropdown-item logout">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default PrivateHeader;