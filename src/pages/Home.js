import React, {useEffect} from 'react'

//// React Bootstrap Imports
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Home = () => {
    useEffect(() => {document.title = "Home"})

    return(
        <Container fluid style={{padding:'0px'}}>
            <h1 className="page-title">Welcome</h1>
            <Row>
                <Col sm={3} md={3} lg={3} xl={3}>
                    <img src="/selfie_fa2020.jpeg" alt="selfie" className="img-fluid" ></img>
                </Col>
                <Col sm={9} md={9} lg={9} xl={9}>
                    <p> Hey there, my name is McCoy and I'm a recent graduate from the University of Michigan in 
                        Ann Arbor. I've spent my years here studying informatics for with an emphasis on 
                        data-science and, through that focus, become fascination with the broader spectrum 
                        of computation beyond just its applications.</p>
                    <p> I'm currently seeking out full-time career opportunities along the tech spectrum, 
                        from analytics to full-stack. </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home