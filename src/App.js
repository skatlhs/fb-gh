import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Repo from './Repos';
import Mainview from './Mainview';
import { createStore } from 'redux';
import './App.css';

class App extends Component {   

  render() {
    return (
        <div className="App">
          <Grid fluid>
            <Row>
              <Col md={8}>
                <div className="rectangle">
                  <Mainview />
                 </div>
               </Col>
               <Col md={4}>
                 <div className="column">
                   <Repo />
                  </div>
               </Col>
            </Row>
          </Grid>
       </div>
    );
  }
}

export default App;
