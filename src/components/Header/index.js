import React from 'react';
import './index.css';
function Header() {
  return (
    <>
      <header>
        <div className="container">
          <img className="logo" src="/logo.png" alt="logo" />
          <form>
            <div className="input">
              <input type="text" placeholder="search" />
              <button>
                <img src="/search.png" alt="search" />
              </button>
            </div>
          </form>
          <div className="user">
            <span className="username">John Smith</span>
            <img src="/user-icon.png" alt="ffff" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
