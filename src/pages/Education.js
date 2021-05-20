import React, {useEffect} from 'react'
//import Container from 'react-bootstrap/Container'
//import Col from 'react-bootstrap/Col'
//import Row from 'react-bootstrap/Row'
import Collapsible from 'react-collapsible';

// https://www.npmjs.com/package/react-collapsible
// https://github.com/glennflanagan/react-collapsible/blob/develop/example/src/sass/components/_Collapsible.scss

import GoBlue from '../images/go_blue_long.jpg'

const Education = () => {
    useEffect(() => {document.title = "Education"})

    return(
        <div>
            
            <h1 className="page-title">Education page</h1>
            <img src={GoBlue} alt="Michigan Go Blue" className='img-fluid'></img>

            <div>
                <h2>Collegiate Studies</h2>
                <div className="school-panel" 
                    style={{border: '2px solid black', borderRight: '2px solid black',
                            borderTop: '2px solid black', borderBottom: '1px solid black'}}>
                    <h3>University of Michigan</h3>
                    <p>Attended: September 2015 to May 2021</p>
                    <p>Master of Science in Informatics [GPA 4.00/4.00]</p>
                    <p>Bachelors of Science in Informatics [3.91 Major, 3.21 Cumulative]</p>
                </div>
                <div className="school-panel" 
                    style={{border: '2px solid black'}}>
                    <h3>Saint Clair County Community College (SC4)</h3>
                    <p>Attended: September 2013 to May 2015</p>
                    <p>CL5 Early-College // Dual-Enrollment [GPA 4.00/4.00]</p>
                </div>
            </div>

            <div>
                <h2>Graduate Coursework</h2>
                <Collapsible trigger="Applied Machine Learning">
                    <p>
                        A course that gave me a deeper and more-focused exposure to machine learning,
                        covering topics including:
                    </p>
                    <ul>
                        <li>An Introduction to Machine Learning Problems</li>
                        <li>Understanding Performance (Under/Over-Fitting, Precision, Recall, F1)</li>
                        <li>Intuition of various modelling approaches</li>
                        <li>Parameter Tuning, Grid Search, Cross Validation</li>
                        <li>Feature Engineering & Polynomial Expansion</li>
                        <li>Issues like: Class Imbalance, Data Leakage, Ethical Problems</li>
                    </ul>

  
                        polynomial feature expansion, feature engineering, time-series, 
                        and we also covered a bit of deep learning.
                </Collapsible>

                <Collapsible trigger="Consulting // Contextual Inquiry">
                    <p>
                        A course that taught us approaches to consulting and client management, while 
                        paired up into groups with a real-world client for a semester-long project.
                    </p>
                    <p>
                        In our case, our client was a top-ten bank looking to rebuild their customer-facing
                        portal that would manage client information, communication, and inquiry throughout the
                        process of a mortgage or home-equity loan application. We:
                    </p>
                    <ul>
                        <li>Conducted interviews with a diverse pool of stakeholders</li>
                        <li>Analyzed the pre-existing application in terms of user-experience design</li>
                        <li>Identified design flaws, communication ambiguities, and procedural inefficiency</li>
                    </ul>
                    <p>
                        By the end of the semester, we were able to proposed new features, linguistic clarifications, 
                        and process improvements that would both shorten time-to-close and decrease gaps in
                        communication that frustrated customers, optimizing both of the project's 
                        primary key-performance indicators.
                    </p>
                </Collapsible>

                <Collapsible trigger="Capstone (Project Course)">
                    <p>
                        A group-project-based course for terminal Masters students to 
                        independently propose and implement a project, as well as practice
                        technical communication by independently learning topics to conduct 
                        course lectures on.
                    </p>
                    <p>
                        Our group project is discussed more in-detail in the Project section
                        of the site, but in short, we tackled the prediction of popularity in
                        music.
                    </p>
                    <p>
                        For our main lecture session, we taught the class how to build 
                        custom named-entity-recognition systems by training them on sufficient
                        amounts of human-annotated text data. Our working example was built to
                        operate on "UMich-themed" data, extracting/tagging entities including
                        course codes ("Bio102", "Math115"), sports ("March Madness", "The Big
                        House", "Harbaugh"), and dorm names ("EQ", "East Quad", "Bursley").
                    </p>
                </Collapsible>
            
                <Collapsible trigger="Databases">
                    <p>
                        A course that focused entirely on databases and SQL, including data
                        modeling, normalization, datatypes, components of SQL clauses, 
                        join types, derived tables, subqueries, database design, and how 
                        to practically use SQL and databases for conducting analysis.
                    </p>
                    <p>
                        This course definitely deepened my understanding of databases, as well
                        as my overall interest in their design and implementations.
                    </p>
                </Collapsible>

                <Collapsible trigger="Data Mining">
                    <p>
                        This was basically a course where each week we focused on a different
                        type of data, discussed what made them unique, and what approaches could
                        be used or adapted to mining them. It was effectively a weekly-rotating 
                        topical algorithms course.
                    </p>
                </Collapsible>

                <Collapsible trigger="Entrepreneurship: Compensation & Ownership">
                    <p>
                        A business course that focused on understanding compensation and equity in 
                        startup environments, as well as how to build a capitalization table to 
                        track stakeholder equity throughout the lifecycle phases of a startup.
                    </p>
                    <p>
                        So, while I'm not an expert, I am reasonably familiar, with cap tables, 
                        equity, stock options, dilution, exits/acquisitions/IPO, ratchet clauses,
                        and venture rounds, and I'd like to think that having taken time to learn
                        more about the lifecycle and financial operations of startups would help me 
                        better understand them as organizations I may end up working for.
                    </p>
                </Collapsible>

                <Collapsible trigger="Information Retrieval (Search Engines)">
                    <p>
                        A course on information retrieval and search engines, which went into various
                        IR topics including indexing, ranking algorithms, evaluation in IR/search systems,
                        TF-IDF, vector-space models, query expansion, feedback, pagerank, classification,
                        question-answering systems, advertising, adaptive // collaborative filtering.
                    </p>
                </Collapsible>

                <Collapsible trigger="Interactive Application Development">
                    <p>
                        A continuation of web development curriculum that focused more on the Javascript 
                        side of development, including callbacks, DOM manipulation, integrating libraries,
                        React, package management (NPM, Webpack), React, Node, Express, and just a touch of 
                        Typescript and asyncronous programming.
                    </p>
                </Collapsible>
            
                <Collapsible trigger="Natural Language Processing (NLP)">
                    <p>
                        This was a course that focused on introduction and exploration of topics and issues
                        in natural language processing, with an emphasis on applications in healthcare 
                        research. Covered everything from basics like tokenization // shingling // parsing 
                        up through machine learning methods and deep learning methods. Special focus was 
                        put into classification tasks, information extraction, and some more specialized
                        tools are uniquely beneficial for practicing NLP in healthcare contexts.
                    </p>
                </Collapsible>

                <Collapsible trigger="Servers & Shells">
                    <p>
                        A course I took because, despite using Git, Github, and command-line interfaces
                        reasonably frequently, I felt it would be nice to have a more formal exposure.
                        I got more comfortable dealing with piping together commands, the filestructure
                        of unix systems, using SSH to work on remote servers, and managing branches and
                        merges in Git.
                    </p>
                </Collapsible>
            </div>

            <div>
                <h2>Undergraduate Coursework</h2>
                <p>(A non-exhaustive list)</p>

                <Collapsible trigger="Algorithms // Methods for Information Processing">
                    <p>A really diverse pool of cool topics including:</p>
                    <ul>
                        <li>
                            Networks (Social Networks Emphasized) including Structural Properties,
                            Breadth-First-Search (BFS), Homophily, Affiliations, Traffic // Exchange 
                            Experiments, Python Library NetworkX
                        </li>
                        <li>
                            Game Theory, Strategic Dominance, Nash Equilibria
                        </li>
                        <li>
                            Auctions, Bipartite Graphs, Bipartite Matching Problems, Applications in
                            Commerce // Markets & Finding Market-Clearing-Prices
                        </li>
                        <li>
                            PageRank, Hyperlink-Induced Topic Search (HITS), Web-Content Popularity,
                            Degree Distributions, Rich-Get-Richer Model
                        </li>
                        <li>Modeling Behavioral Cascades</li>
                    </ul>
                </Collapsible>

                <Collapsible trigger="Consulting: Information Environments & Work">
                    <p>
                        A course we all had to take on program admission, which taught a blent of
                        consulting foundations, discussion of different software development life cycle
                        models (Agile, Iterative, Spiral, Waterfall), and discussion of how technical 
                        professionals integrate into various enterprises and environments.
                    </p>
                    <p>
                        Compared to the very-client-focused consulting course I went on to take as a
                        graduate student, this course was very much focused on weekly case-work.
                    </p>
                </Collapsible>

                <Collapsible trigger="Database-Driven Web Applications (Django)">
                    <p>
                        A course that focused on how to develop web applications using Python and
                        the Django library. Basically, developing CRUD apps in MCV form.
                    </p>
                </Collapsible>

                <Collapsible trigger="Data Manipulation">
                    <p>
                        Course focused on approaches to data manipulation, scalability, and 
                        further continuation of API and database curriculum. Topics included:
                    </p>
                    <ul>
                        <li>Authentication Review (API Credentials, OAuth)</li>
                        <li>AWS -- Using Lambda & S3 Buckets for API Administration</li>
                        <li>Database Join Types & SQL</li>
                        <li>Data Visualization</li>
                        <li>Map-Reduce in PySpark</li>
                        <li>Natural Language Processing with NLTK</li>
                        <li>O-Notation, Runtime Scalability</li>
                        <li>Regular Expressions (RegEx)</li>
                        <li>Resilient Distributed Datasets (RDDs)</li>
                    </ul>
                </Collapsible>

                <Collapsible trigger="Data Structures // Intermediate Programming">
                    <p>
                        An intermediate programming course that focused heavily on principles of
                        object-oriented programming, databasing, and caching. This course also served 
                        as the department's introduction to command-line interfaces, API authentication, 
                        git, and a personal favorite topic: web crawling / scraping.
                    </p>
                    <p>
                        I absolutely loved this course and ended up becoming a teaching assistant for
                        it a few semesters later; it was almost as much fun to teach as it was to take.
                    </p>
                </Collapsible>

                <Collapsible trigger="Entrepreneurship: Finding Your Venture">
                    <p>
                        An elective course targeted at non-business-majors to give those of us interested
                        in entrepreneurial ventures a more formal overview of what the process of starting
                        a startup would entail. Each week focused on a different topic, from identification
                        of a business problem and solution design to accounting, marketing, and rounds of
                        venture investment.
                    </p>
                </Collapsible>

                <Collapsible trigger="Exploratory Data Analysis">
                    <p>
                        A course that was basically a 1/3rd-1/3rd-1/3rd mix of statistics, data 
                        visualization (MatPlotLib, Seaborn, etc.), and introductory machine learning .
                        This course also exposed us to Jupyter Notebooks, Kaggle competitions, and using
                        Google Collab for a less git-centric approach to collaborative coding.
                    </p>
                </Collapsible>

                <Collapsible trigger="German Through News Media">
                    <p>
                        This was my final German course and it was really uniquely interesting in that,
                        each week we would come into class and vote on 1-2 topics currently in either
                        German or global news that we wanted to focus on. Then we would spend the week
                        exploring various forms of media coverage, from news to radio/podcast audio to
                        even physical copies of German news papers. This course was also during the 
                        2017 Bundestagswahl so we got to watch live coverage of the federal elections.
                    </p>
                </Collapsible>

                <Collapsible trigger="Graphic Design & Visual Communication">
                    <p>
                        Effectively a 50-50 crash course that focused half of the time on the theory
                        of graphic design and visual communication, and half of the time on hands-on
                        lab sessions working with Adobe's design tools, primarily Photoshop and 
                        Illustrator, but I also ended up teaching myself XD for this course as well.
                        While I don't see myself becoming a graphic designer anytime soon, it was 
                        definitely taking some time to learn about color theory for CSS work and 
                        the ability to work with visual assets might come in handy for future projects.
                    </p>
                </Collapsible>

                <Collapsible trigger="Introduction to Information Studies">
                    <p>
                        This was one of the two informatics-department courses required to apply
                        for the BS Information Science program, and it focused on teaching students
                        about socio-technical innovations and issues of the past, present, and future.
                        It was a really wonderful overview of sociotechnical studies and I loved the
                        course enough to become part of the teaching staff.
                    </p>
                    <p>
                        My main projects from this course were a term-paper on use of Reddit
                        to assist in second-language-learning processes and a user-experiential
                        design analysis of cult-classic game Dwarf Fortress.
                    </p>
                </Collapsible>

                <Collapsible trigger="Online Communities: Development, Research, and Analysis">
                    <p>
                        A course that focused entirely on social media and online communities,
                        exploring the formation, evolution, maintenance, psychology, and mechanics
                        of online communities, as well as research-grounded guidance in how to
                        design and implement successful interventions. We also covered the unique 
                        issue of research ethics and design in these types of environments.
                    </p>
                    <p>
                        For a term-project, we each focused on analysis of an online community,
                        including identification of how certain aspects are managed, problematic,
                        and/or could be improved; I wrote my paper on the socially-asymmetric
                        online streaming platform Twitch.tv after analyzing two different 
                        communities, each focused around a different "streamer"//performer.
                    </p>
                </Collapsible>

                <Collapsible trigger="Programs, Information, & People // Introductory Programming">
                    <p>
                        This was one of the two informatics-department courses required to apply
                        for the BS Information Science program, and it focused on teaching students
                        the basics of computer programming with Python. Introduction to functions,
                        classes, methods, simple data requests from a URL or authorization-free API.
                    </p>
                    <p>
                        Ironically this was my second introductory programming course after having
                        taken a different introductory course for a different department, which focused
                        more on using C++ and had an Embedded project component with Arduino, but I
                        ended up taking this one as well for Python and exploration of what would become 
                        my undergraduate and gradaute department.
                    </p>
                </Collapsible>

                <Collapsible trigger="Psychology of Persuasion & Social Influence">
                    <p>
                        A course that explored various components of human psychology with a focus on how
                        individuals process social information in ways that impact their thoughts and actions.
                        Deep focus kept on comparative tendencies, biases, and differential information 
                        processing and reception relative to environmental, situational, and social factors.
                    </p>
                </Collapsible>

                <Collapsible trigger="Senior Capstone // Client-Based Course">
                    <p>
                        A year-long capstone course sequence where I was paired with a student-group
                        and real-world client, specifically an corporate unemployment-insurance firm 
                        that wanted to figure out how their existing backlog of data could be used to 
                        more intelligently inform their decisions about when to invest in the process 
                        of petitioning to deny unemployment benefits, a costly process that can, if
                        successful, prevent their customers' unemployment insurance rates from increasing.
                    </p>
                    <p>
                        It was really interesting to get to work with their "real world" (nightmarishly messy) 
                        data; while our target fields were directly user-input derived and required some
                        extreme cleaning, we were able to develop conventional statistical and machine learning
                        models to help predict the viability of investments to protest claims. I forget the 
                        exact number, but I remember we were able to get predictions that were consistently
                        in the 80-85% accuracy range, as well as report back to the client an outline of 
                        which features were most indicative.
                    </p>
                </Collapsible>

                <Collapsible trigger="User Modeling // Behavioral Economics">
                    <p>
                        A course that focused on how modern data collection and economics can 
                        strategically collide to profile economic behaviors and drive business
                        optimizations and solutions, including major design decisions, choice 
                        architecture, deriving user willingness-to-pay, and determining 
                        situations in which "freemium" or subscription structures become ideal.
                    </p>
                </Collapsible>

                <Collapsible trigger="Video Game Audio // Music">
                    <p>
                        An elective course directed at non-music-majors to discuss the study of 
                        audio effects and music in videogames and experiential art forms. It was
                        really interesting from a user-experience analysis perspective to think about
                        how sound design works for immersive and artistic engagement experiences like
                        video games, and we also did a composition-based final project, so I learned
                        a little bit about how to use Linux Multi-Media Studio as a free Digital-Audio
                        Workstation (DAW).
                    </p>
                </Collapsible>

                <Collapsible trigger="Web Development & Accessibility">
                    <p>
                        Elective course for informatics students focusing on introducing web development
                        and accessibility. We learned about HTML, CSS, vanilla (ES6) Javascript, just a 
                        touch of JQuery, and a lot about web accessibility standards and how to use
                        tools to assess and validate compliance with W3C accessibility standards.
                    </p>
                </Collapsible>

                <Collapsible trigger="3D Modeling & Animation">
                    <p>
                        An elective course for non-art-majors to get introduced to 3D modeling and 
                        animation with Autodesk software, primarily Autodesk 3DS Max. We learned about
                        modeling, texturing, recreation from reference images, camera rigging, and
                        animation. Autodesk is super expensive, though, so I'm trying to reteach
                        myself the same concepts in freeware project Blender.
                    </p>
                </Collapsible>
            </div>
        </div>
    )
}

export default Education