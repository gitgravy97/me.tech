import './App.css';

import {
  BrowserRouter as Router,
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

  const padding = {padding: 5}

  return (
    <Container fluid>
      <Router >
        <Row style={{margin:'0px'}}>
          <Link style={padding} to="/">Home</Link>
          <Link style={padding} to="/education">Education</Link>
          <Link style={padding} to="/work">Work Experience</Link> 
          <Link style={padding} to="/projects">Projects</Link>
          <Link style={padding} to="/resume-skills">Resume/Skills</Link>
          <Link style={padding} to="/bucketlist">Bucketlist</Link>
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

        <div>
          <hr/>
          <i>footer goes here</i>
        </div>
      </Router>
    </Container>
  )
}

export default App;
