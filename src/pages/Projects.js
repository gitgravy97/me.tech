import React, {useEffect} from 'react'

const Projects = () => {
    useEffect(() => {document.title = "Projects"}) 

    return(
        <div>
            <h1 className="page-title">Projects page</h1>
            <h2><u>Current Projects</u></h2>
            <div className="project-panel">
                <h3>Rewrite: Personal Site</h3>
                <p>
                    Currently doing a whole rewrite and rebuild of my personal site because
                    the previous version started as a course project for my very first web 
                    development course. Now that grad school is over and my skills have 
                    improved, I wanted to build something a bit more polished because 
                    the content needed updating and the CSS needed work.
                </p>
            </div>
            <hr/>
            <div className="project-panel">
                <h3>Refactor & Complete: UMich Crime Corpus</h3>
                <p>
                    University of Michigan's on-campus police force has a mini-app on
                    their website that's used to publish crime data, daily, going all
                    the way back to January of 2000. The downside is, it's slow, has 
                    no search capacity, and is a pain to even browse because you can
                    only view one date worth of records at a time, and can only step 
                    back month-by-month through a calendar-esque interface.

                    I decided to start experimenting with a project to basically extract 
                    all of the daily-published crime data from UMich's campus police 
                    department, which is only available through a severely lame endpoint,
                    store it in my own database, and make it searchable, visualizable, etc.
                </p>
                <p>
                    I scraped approximately one year's worth of data into a Mongo 
                    database, wrote up an API with Node/Express, and used React to
                    build the user-facing part of the website.
                </p>
                <p>
                    When the school-year started, I got so busy that I didn't really
                    get to the last bit of development and deployment, so now that I have
                    time for extra projects, I'm reviewing what I wrote, improving in
                    some areas I'm more capable in now, and actually get the thing deployed.
                </p>
            </div>

            <h2><u>Past Projects</u></h2>

            <ul>
                <li>712 Sentiment Project</li>
                <li>650 Job Search Engine</li>
                <li>579 DAW Project</li>
                <li>671 Amazon Fraud Reviews</li>
                <li>699 Capstone Project</li>
            </ul>



            <div className="project-panel">
                <h3>Boston Health Inspection Projection</h3>
                <p>
                    For a final project in a machine learning course, my partner and I 
                    used a dataset of health inspection records published openly by the 
                    city of Boston and we wanted to see if we could predict the outcome 
                    of a health inspection based on the dataset and other easily-joined 
                    datasets available through the city's open-data portal (permits, 
                    ownership, lot features, etc.).
                </p>
                <p>
                    We tested a variety of both conventional machine learning models and
                    even a few deep learning approaches, tested PCA and polynomial feature 
                    expansion, but ultimately, no matter what we tried, it didn't seem
                    that there was any pattern in our features that would get our 
                    accuracy to a sufficient level, which was kinda disappointing. In 
                    retrospect we think we should have considered further feature expansion 
                    by looking up the available geolocation data in other data sources.
                </p>
            </div>
            <hr/>

            <div className="project-panel">
                <h3>Database Design - NYC Food-Service Healthcode Violations</h3>
                <p>
                    For my course on SQL and database design, our final project was to 
                    pick a dataset, architect a MySQL database, and write up a list of
                    realistic organizational needs that could be solved querying the 
                    database (with answers to present to the class).
                </p>
                <p>
                    I chose to convert a "flattened" csv dump of data from NYC's open
                    data platform, which focused on the health inspections and healthcode
                    violations occuring at foodservice entities in NYC, in part just with 
                    raw SQL, in part with some assistance from DataGrips.
                </p>
            </div>
            <hr/>

            <div className="project-panel">
                <h3>Product Consulting for a Top-10 Bank</h3>
                <p>
                    As part of a student group, we were paired with a client project for
                    a major bank to provide assessment and redesign advising for the firm's
                    client-facing online portal system to assist with the tracking of 
                    mortgage and home-equity loan applications, secure client 
                    communication, and secure document upload.
                </p>
                <p>
                    Our group conducted interviews with a diverse pool of stakeholders over
                    the course of a quarter to gather perspective and assessed the existing 
                    implementation of the application. We identified multiple areas for
                    significant improvement of the application portal, paired with suggestions
                    and grounded with pre-existing research from our literature review process.
                    We proposed new features, redesigns to the visual user interface, and 
                    noted two issues potentially detrimental to the customer experience, namely
                    textual ambiguities that could establish unrealistic expectations and 
                    parts of the process with higher prevalence of communication gaps.
                    Unexpectedly, we also identified a potential logistical detail in our
                    interviews that could significantly shorten the closing time on the 
                    application process.
                </p>
            </div>
            <hr/>

            <div className="project-panel">
                <h3>Undergrad Senior Client Project: Unemployment Insurance Analytics</h3>
                <p>
                    For senior year, all BSI students were given a real-world client project
                    and my team was paired with a firm that focuses on handling unemployment 
                    insurance and associated data for their corporate clients. Our project was
                    focused on identifying factors and attributes of unemployment claims that
                    could be predictive of whether or not a motion to claim or protest a claim
                    would be successful, allowing them to more effectively determine whether 
                    or not to invest in legal/logistical efforts or not, saving time and 
                    money by helping with resource prioritization.
                </p>
                <p>
                    This project involved some pretty extensive data cleaning work with 
                    Pandas and RegEx for reducing variation in critical fields of interest 
                    that were derived from raw user input, as well as using statistical and 
                    machine learning models to help with reporting on features of predictive
                    prevalence and providing a model to help advise on decision making.
                    We also identified some... real oddities in their database, things
                    that shouldn't have been there but went unnoticed until we were
                    involved and actively working with their data.
                </p>
            </div>
            <hr/>

            <div className="project-panel">
                <h3>San Francisco Predictive Crime Classification</h3>
                <p>
                    As part of a group project for our Exploratory Data Analysis course,
                    we had to pick a Kaggle dataset and build a project out of it. As 
                    multiple of us were interested in crime, law, and policy, we chose to
                    use the <a href="https://www.kaggle.com/c/sf-crime/data"> San Francisco
                    Crime Classification</a> competition as a base and set out to build both 
                    an interactive visualization and a predictive classifier.
                </p>
                <p>
                    We achieved reasonable performance with our best classifier, a 
                    grid-tuned random forest model, which revealed location (coordinates 
                    and district) and season as some of the most significant features.
                </p>
                <p>
                    For our visualization component, we used Folium to build maps 
                    <a href="http://www.si370finalproject.xyz"> here</a>.
                </p>
            </div>
            <hr/>  

            <div className="project-panel">
                <h3>Green Wolverine Fund - Market Research Web Scraper</h3>
                <p>
                    I did a project for the Green Wolverine Fund within Ross School of
                    Business to help with investigating what the product diversity of
                    legal cannabis dispensaries within the state of Michigan. 
                    I identified a platform that an apparent majority of retailers 
                    used to list their product offerings to customers as a data source.
                </p>
                <p>
                    Using Python and Selenium's chrome webdriver to dig through 
                    hub pages representing four of the cities with the most retailers 
                    and scraped data from each retailer listed therein. The difficult
                    part was that the platform seemingly was designed against being 
                    scraped. I had to put a lot of effort into simulating clicks, 
                    scrolling cycles, waiting for load-ins, etc.
                </p>
                <p style={{marginBottom: '8px'}}>
                    I was also able to find a database of attributes of certain 
                    "strains" that could augment records for herbal product so 
                    we could aggregate and report on things like popularly-offered
                    flavors or effects. I also produced some visualizations to help
                    us compare if aggregates were similar across cities.
                </p>
                <ul style={{paddingLeft: '30px'}}>
                    <li><a href="https://chart-studio.plotly.com/~mcshaned/16/inventory-distribution-by-product-type/#/">
                        Inventory Distribution by Product Type</a></li>
                    <li><a href="https://chart-studio.plotly.com/~mcshaned/14/herb-flavor-distribution-by-city/#/">
                        Herbal Product Distribution by "Flavor"</a></li>
                    <li><a href="https://chart-studio.plotly.com/~mcshaned/8/herb-effect-distribution-by-city/#/">
                        Herbal Product Distribution by Effect</a></li>
                    <li><a href="https://chart-studio.plotly.com/~mcshaned/12/herb-type-distribution-by-city/#/">
                        Herbal Product Distribution by Category</a></li>
                    <li><a href="https://chart-studio.plotly.com/~mcshaned/18/traditional-herb-vs-alternative-cannabis-products/#/">
                        Herbal vs Non-Herbal Consumable Products</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Projects