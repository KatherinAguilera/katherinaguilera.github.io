import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Header from '../components/header';
import Name from '../components/name';
import Logo from '../../widgets/components/logo';
import Contact from '../../widgets/components/contact';
import About from '../../about/components/about';
import Portfolio from '../../portfolio/components/portfolio';
import Email from '../../widgets/components/email';

class HomePage extends Component {
  render() {
    return (
        <HomeLayout>
          <Logo />
          <Header />
          <Name />
          <Contact/>
          <About />
          <Portfolio projects={this.props.data.projects}/>
          <Email />
        </HomeLayout>

    )
  }
}
export default HomePage;
