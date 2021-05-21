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

            <div className="project-panel">
                <h3>Cross-Community Entity-Level Sentiment Analysis</h3>
                <p>
                    As a term project for a course on NLP with emphasis on healthcare 
                    research, I wanted to try working with the idea of entity-level 
                    text sentiment through the scope of comparing across online 
                    communities. Our main goal was to build flexible tooling for the overall 
                    NLP task and to run it on something healthcare-related for the course 
                    project so, once we figured out Reddit data collection, my partner and 
                    I scraped data from multiple subreddits focused in one of three categories, 
                    specifically mental health, drug cessation // moderation, or drug usage.
                </p>
                <p>
                    Once we had a reasonably large sample of posts from each community, we 
                    traversed the "comment forests" (list of comment trees) to get more data,
                    tagged all of the post/comment text based on subreddit of origination, 
                    passed each through a Google Cloud NLP API for handling sentiment analysis,
                    and cached the results. We would have wrote a custom entity recognizer but
                    frankly we were curious what it actually looks like to use one of the cloud 
                    services like IBM and Google provide.
                </p>
                <p>
                    Once we had all of the text analyzed // entities extracted, we wrote 
                    some code to aggregate and average varied expressions of a given target 
                    expression using RegEx, so we could aggregate similar expressions like 
                    "therapy" or "therapist" if our intention was to use entity-level sentiment 
                    aggregation to get sentiment for a concept more than just a word. 
                </p>
            </div>
            <hr/>

            <div className="project-panel">
                <h3>"Git-Job" - A Search Engine Project</h3>
                <p>
                    For my graduate Information Retrieval / Search Engines course term 
                    project, my friend and I wanted to specifically try doing something in 
                    the job-search space, especially specialized around tech positions.
                    We started by scraping LinkedIn job postings for an array of different titles, 
                    approximately 20-30, taking about 200 listings each.
                </p>
                <p>
                    We then experimented with a few different sorting algorithms, especially
                    variants on BM25, to see how they would perform with different input, 
                    and realized that we wanted to try extracting just technical frameworks and 
                    languages from application document bodies to experiment with how performance 
                    would look when just passing in title and extracted skills, which made us 
                    go and train a customized named-entity-recognition system.
                </p>
                <p>
                    While our performance ultimately seemed subjectively quite good, we realized 
                    that we made an error in our annotation process out of our inexperience with 
                    data annotation and it being our first full-scale search engine, basically in 
                    that the queries we annotated for weren't sufficiently specific enough to reflect 
                    improvement in specific areas we had hoped to improve on compared to LinkedIn's 
                    search process.
                </p>
                <p>
                    While we intended to make some kinda of actual web interface for this, 
                    the final project ended up being a python script / CLI application 
                    because of time constraints / other Finals Season obligations.
                </p>
            </div>
            <hr/>

            <div className="project-panel">
                <h3>Fun with Browser Audio</h3>
                <p>
                    For a javascript-focused course on web development, I decided to try to 
                    get some experience working with bootstrap and with browser audio so, 
                    using Tone.js, I built out an audio application that would let users 
                    plat sounds through a few different instrument voicings across a few
                    octaves.
                </p>
                <p>
                    I also had to give a lecture on how the library worked, so I made a
                    panel of buttons at the top of the page to demonstrate different 
                    affordances of the library. Due to some kinks with cross-origin resource 
                    sharing, some of the buttons were only working locally with resources 
                    I was sharing via an Express server, but it worked well enough for the 
                    class demonstration at least.
                </p>
                <p>
                    Ultimately I'd like to build this into something that's more like a 
                    creative tool people could use to make music, and most of the pieces 
                    seem to be there for building that out in the future, but for now 
                    I have to focus my efforts on other work. 
                </p>
                <p>
                    Accessible: <a href="https://msdoherty.github.io/si579_daw_project/">here</a>
                </p>
            </div>
            <hr/>

            <div className="project-panel">
                <h3>Mining for Consumer Review Fraud on Amazon</h3>
                <p>
                    After seeing multiple negative reviews alleging review fraud in the 
                    review section of Amazon product listings, I wanted to see if it would 
                    be possible to distinguish the text of fake product reviews from legitimate 
                    ones.
                </p>
                <p>
                    I found an annotated dataset of Amazon reviews, which included a field 
                    indicating fraudulent status and got to work engineering features with 
                    Pandas and building models with SKLearn. Some of the most important 
                    features ended up being token length, unique word count, adjective 
                    and proper noun count, linebreaks, containing url or photo components, 
                    product category (Beauty, Furnigure, etc.), and certain keywords like 
                    "real" or "smell" which I looked into after doing some literature review.
                </p>
                <p>
                    End-performance came out pretty reasonable, with recall scores near 90 
                    while maintaining F1 scores in the low-to-mid 80's, as well as one 
                    99%+ recall SGD model that we ended up not submitting because of having
                    just really awful precision.
                </p>
            </div>
            <hr/>

            <div className="project-panel">
                <h3>Predictive Music Popularity</h3>
                <p>
                    For a capstone course project, my partners and I decided to work on
                    exploring whether or not we could accurately project musical popularity.
                    We samples records from the Million Song Database, ~32k due to API rate 
                    limiting, and ran the song titles through Spotify's Search API, using a 
                    thresholded Jaro-Winkler similarity score to ensure matching records, 
                    which were used to then gather extended features through secondary calls 
                    to Spotify's Audio Features API. We then tried an array of modeling approaches
                    and ultimately ended up achieving our best performance using SMOGN to offset
                    the class imbalance. At the time of submission, we achieved an MAE of ~6.809 
                    with SMOGN and a gridsearch-tuned random forest model. 
                </p>
            </div>
            <hr/>

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