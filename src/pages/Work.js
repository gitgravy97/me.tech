import React, {useEffect} from 'react'

//import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import RAJunior from '../images/stockwellStaffJuniorYr.jpg'
import RASummer from '../images/stockwellStaffSummer.jpg'


const Work = () => {
    useEffect(() => {document.title = "Work Experience"})

    return(
        <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
            <h1 className="page-title">Work page</h1>
            <h2>Current Work</h2>

            <div className="flex-container-current-employment">
                <div className="job-panel">
                <div className="fas fa-flask"></div>
                <h3>Programming Assistant to MADS</h3>
                <p>May 2019 to Present</p>
                <p>
                    I assist with the development of my academic department's new online degree 
                    program, the <a href="https://www.si.umich.edu/programs/master-applied-data-science-online">
                    Masters of Applied Data Science</a> ("MADS").
                </p>
                <p>
                    I assist with a blend of tasks depending on where there's need, from wokring
                    directly on assisting with course development (curating datasets and textbooks,
                    assignment design) to quality assurance (review, beta testing) or configuring 
                    autograders, repositories, programming environments (Docker, Conda), etc.
                </p>
                </div>
            </div>

            <hr/>

            <h2>Past Work</h2>

            <div className="flex-container-current-employment">
                <div className="job-panel">
                <div className="fas fa-book"></div>
                <h3> Teaching Assistant for Intermediate Programming</h3>
                <p>Winter 2019 Semester (Jan - April)</p>
                <p>
                    I was a member of the teaching team of one of my favorite courses of undergrad,
                    an intermediate-level programming course that focused on data structures and 
                    also introduced databasing, overall focused primarily in Python and SQL. This 
                    is also the course where we teach students how to use bash / command-line.
                </p>
                <p>
                    Topic Include: APIs requiring keys // OAuth, Caching,  Databasing and SQL, 
                    Unit Testing, Git for Version Control, Web Crawling // Web Scraping
                    and emphasis around principles of object-oriented programming.
                </p>
                <p>
                    I was responsible for helping to teach students new programming concepts and 
                    debug their code. I helped students with quick one-on-one issues and questions
                    during large lectures (150-200 students), as well as held weekly lab sessions
                    reviewing // detailing course concepts and weekly office hours to focus on 
                    one-on-one assistance.
                </p>
                </div>
            </div>

            <div className="job-panel">
                <div className="fas fa-book"></div>
                <h3>Grader for Introduction to Information Studies</h3>
                <p>Winter 2019 Semester (Jan - April)</p>
                <p>
                    I was a member of the instruction/grading team for a large introductory course 
                    that teaches aspiring informatics students a broad overview of sociotechnical issues 
                    and innovations through past, present, and the potential future.
                </p>
                <p>
                    Most of my work in this course was just grading and and communicating 
                    constructive, actional revisionary feedback to students.
                </p>
            </div>

            <div className="job-panel">
                <div className="fas fa-user-friends"></div>
                <h3>Residential Advisor - Stockwell Hall</h3>
                <p>From September of 2017 to May 2019</p>
                <p>
                    After working in Residential Staff as a Community Center Assistant for the summer,
                    I heard of a shortage of Residential Advisors and decided to interview for the 
                    chance to become a Residential Advisor the upcoming fall. I placed in Stockwell Hall 
                    for Junior year, loved it, and decided to stay for the summer and a second academic year.
                </p>
                <p>
                    An RA is never truly "off the clock" because you live at work, building community in
                    your hall and building, getting to know residents to support them effectively, 
                    working regular front-office shifts and rotating on-call night-shifts.
                </p>
            </div>


            <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <img src={RAJunior} alt="Stockwell Staff" 
                    className='img-fluid'></img>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <img src={RASummer} alt="Stockwell Summer Staff" 
                    className='img-fluid'></img>
                </Col>
                
            </Row>

            <div className="job-panel">
                <div className="fas fa-flask"></div>
                <h3>Research Intern (Summer 2018)</h3>
                <p>From June 2018 to December 2018</p>
                <p>
                    I spent my post-junior summer as a research intern assisting with a literature review
                    initiative intended to better organize and analyze research focusing on how factors
                    in humans, groups, and robotic systems can impact humans' experiences and perceptions
                    of human-robot interactions.
                </p>
                <p>
                    Basically all of my time was spent reading through massive sets of scholarly
                    publications and reporting on various characteristics of the studies, highlighting
                    methodology, commonly-used hardware, sample size, variables of interest, etc.
                </p>
            </div>

            <div className="job-panel">
                <div className="fas fa-flask"></div>
                <h3>Research Intern (Winter 2018)</h3>
                <p>From January 2018 to June 2018</p>
                <p>
                    I took a winter-term internship my junior year assisting UMSI professor 
                    <a href="https://www.si.umich.edu/people/douglas-van-houweling">Douglas Van Houweling</a>
                    , an <a href="https://www.internethalloffame.org/inductees/douglas-van-houweling">
                    Internet Hall of Fame Inductee
                    </a> as part of an NSF-sponsored project to promote the examination and preservation
                    of early-internet history, specifically focusing on network development and
                    commercialization of networking between 1980 and 1996.
                </p>
                <p>
                    Most of my work was processing interviews conducted by the professor and his colleagues,
                    resolving issues in any automated transcriptions as well as presenting written summaries
                    of key factors from each interview, including vital topics, individuals, and organizations
                    discussed.
                </p>
            </div>

            <div className="job-panel">
                <div className="fas fa-user-friends"></div>
                <h3>Community Center Assistant - Northwood Campus Apartments</h3>
                <p>From April 2017 to August 2017</p> 
                <p>
                    Summer after my sophomore year, I decided to take a Residential Staff position working
                    as a clerical assistant for the housing offices // community-centers for UMich's 
                    Northwood Apartment complexes. Most of my job was actually using some database 
                    software to administrate building access, catalogue keys, and parking passes.
                    I was also in charge of managing packages, move-in/move-out processing, and 
                    being a liaison between residents, admin, and contractors.
                </p>
            </div>

            <div className="job-panel">
                <div className="fas fa-barcode"></div> 
                <h3>Sales Associate - UGo's (Student Retail)</h3>
                <p>From June 2017 to January 2018</p> 
                <p>
                    I worked a pretty standard retail job for a university-owned convenience store 
                    one summer, and on-and-off through the fall semester. I got experience running
                    register, accounting money and inventory, and managing various pop-up problems 
                    on-the-fly (difficult customers, rush, hardware/software/machinery failure, etc.)
                </p>
                <p>
                    I also figured out I unironically just really enjoy working retail. I would have
                    continued working, but the building that contained our store was shut down for
                    over a year for rennovations.
                </p>
            </div>

            <div className="job-panel">
                <i className="fas fa-pencil-alt"></i>
                <h3>English Tutor // Essay Editor // Wordsmith</h3>
                <p>September 2015 Onwards</p>  
                <p>
                    Pretty much all throughout college I've been helping people with essays, applications,
                    and mission statements, sometimes compensated, sometimes volunteer. Language is one 
                    of the things I've always been gifted at and I enjoy being able to use that to help people.
                </p>
            </div>

            <div className="job-panel">
                <div className="fas fa-hard-hat"></div>
                <h3>Landscape Worker</h3>
                <p>From May 2011 to August 2015</p>
                <p>
                    I was a seasonal assistant for a local landscaping company; most of my work
                    was a blend of cleaning up to ensure operations could proceed at optimal pace
                    and also keeping peoples' unattended kids from running up to dangerous heavy
                    machinery.
                </p>
            </div>
        </div>
    )
}

export default Work