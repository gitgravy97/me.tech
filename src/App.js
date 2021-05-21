import './App.css';

import {
  //BrowserRouter as Router,
  HashRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

//// Page Imports
import Education from './pages/Education'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Work from './pages/Work'

import Bucketlist from './pages/Bucketlist'
import ResumeSkills from './pages/ResumeSkills'

//// React Bootstrap Imports
//import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
//import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const App = () => {

  const navTab = {color: '#FFFFFF', paddingLeft: '15px', paddingRight: '15px', 
    paddingTop: '5px', paddingBottom: '5px'}

  return (
    <Container fluid>
      <Router >
        <Row style={{backgroundColor: '#333333', margin:'0px', marginTop:'1px'}}>
          <Link tabIndex={1} className="navTab" style={navTab} to="/">Home</Link>
          <Link tabIndex={2} className="navTab" style={navTab} to="/education">Education</Link>
          <Link tabIndex={3} className="navTab" style={navTab} to="/work">Work Experience</Link> 
          <Link tabIndex={4} className="navTab" style={navTab} to="/projects">Projects</Link>
          <Link tabIndex={5} className="navTab" style={navTab} to="/resume-skills">Resume/Skills</Link>
          <Link tabIndex={6} className="navTab" style={navTab} to="/bucketlist">Bucketlist</Link>
        </Row>

        <Switch>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume-skills">
            <ResumeSkills />
          </Route>
          <Route path="/bucketlist">
            <Bucketlist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App;
