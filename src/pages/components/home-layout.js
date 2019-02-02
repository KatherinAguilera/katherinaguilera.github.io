import React from 'react';
import './home-layout.css';

function HomeLayout(props) {
  return (
    <section className="HomeLayout" id="Home">
      {props.children}
    </section>
  )
}

export default HomeLayout