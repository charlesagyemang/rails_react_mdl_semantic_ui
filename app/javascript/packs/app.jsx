import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Main from './pages/routes';
import Navbar from './components/navbar';
import { Layout, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'


class App extends Component {
  render() {
    return(
      <div>
        <div className="demo-big-content">
          <Layout>
            <Navbar />
              <Content>
                  <div className="page-content" />
                  <Main />
                  <Button>Click Here</Button>
              </Content>
            </Layout>
        </div>
      </div>
    );
  }
}

export default App;
