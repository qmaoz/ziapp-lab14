import React from "react";

export default function Header(props) {
  return (
    <>
      <header className='mb-3'>
        <div className="container df">
          <h1>Top-Words</h1>
          {props.toShowProfile == true && (
            <div className="header__user-profile">
              <div className="icon">img</div>
              <div className="username">username</div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
