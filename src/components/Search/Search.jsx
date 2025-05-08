import React from 'react';
import './Search.scss';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <form className="search-form">
      <div className="input-wrapper">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
    </form>
  );
}
