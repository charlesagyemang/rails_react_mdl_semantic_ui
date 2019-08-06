import React, { Component } from 'react';
import { Header, Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div>
          <Header className="header-color" title="Title" scroll>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/about-me">AboutMe</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about-me">AboutMe</Link>
              </Navigation>
          </Drawer>
      </div>
    );
  }
}

export default Navbar;
