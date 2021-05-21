import React, {useEffect} from 'react'

//// React Bootstrap Imports
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Github from '../images/GitHubLogo.png'
import Instagram from '../images/InstagramLogo.jpg'
import LinkedIn from '../images/LinkedInLogo.png'
import Selfie from '../images/selfie_fa2020.jpeg'

const Home = () => {
    useEffect(() => {document.title = "Home"})

    return(
        <Container fluid style={{padding:'0px'}}>
            <h1 className="page-title">Welcome</h1>
            <Row>
                <Col sm={3} md={3} lg={3} xl={3} style={{paddingRight:'5px'}}>
                    <img src={Selfie} alt="selfie" className="img-fluid"></img>
                </Col>
                <Col sm={9} md={9} lg={9} xl={9} style={{paddingLeft:'5px'}}>
                    <p> 
                        Hey there, my name is McCoy and I'm a recent graduate from the University 
                        of Michigan in Ann Arbor. I've spent most of my academic career studying 
                        informatics with an focus on data-science, which also ended up instilling 
                        in me an overall love for programming and computer science.
                    </p>
                    <p> 
                        I'm currently seeking out full-time technological career opportunities 
                        anywhere along the computer science / data science spectrums while 
                        taking advantage of the summer to work on personal projects I was 
                        too busy for during the academic year.
                    </p>
                    <p>
                        I've just been rewriting the site recently, so there's a few things 
                        that still need work, mainly surrounding accessibility and figuring out 
                        some custom domain stuff.
                    </p>
                </Col>
                <Col style={{marginTop:"5px"}}>
                    <a href="https://www.linkedin.com/in/mccoy-doherty-823342157/">
                        <img src={LinkedIn} alt="LinkedIn" style={{maxWidth:"50px"}}></img>
                    </a>
                    <a href="https://github.com/msdoherty">
                        <img src={Github} alt="Github" style={{maxWidth:"50px"}}></img>
                    </a>
                    <a href="https://www.instagram.com/surrealmccoy77/">
                        <img src={Instagram} alt="Instagram" style={{maxWidth:"50px"}}></img>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Home