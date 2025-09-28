import React from 'react';

const FloatingLineButton = () => {
  return (
    <a
      href="https://lin.ee/EcVg03t"
      className="line-float-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="line-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM176 152c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v104c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24v-104zm-48 0c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v104c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-104zm208 0c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v104c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-104z"/>
      </svg>
      <span>友だち追加</span>
    </a>
  );
};

export default FloatingLineButton;