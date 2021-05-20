import React, {useEffect} from 'react'

const Bucketlist = () => {
    useEffect(() => {document.title = "Bucketlist"})

    return(
        <div>
            <h1 className="page-title">Aspirations / Bucketlist</h1>

            <h2>Collegiate</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: '15px'}}>
                <li><b>&#x2713;</b> Attend University of Michigan (Ann Arbor)</li>
                <li><b>&#x2713;</b> Become a Residential Advisor</li>
                <li><b>&#x2713;</b> Try Interning as a Research Assistant</li>
                <li><b>&#x2713;</b> Try Teaching / TA-ing for a Programming Course</li>
                <li>Play the Burton Memorial Tower's Grand Carillon (Or Other Belltower)</li>
                <li>Play the organ in the School of Public Health</li>
                <li><b>&#x2713;</b> Complete a Masters Degree</li> 
            </ul>

            <hr/>

            <h2>Personal</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: '15px'}}>
                <li>Develop a Rust-based emulator</li>
                <li>Develop a Virtual Reality Game with Unity & C#</li>
                <li>Get good at 3D modeling in Blender</li>
                <li>Get good at Reverse-Engineering with Ghidra</li>
                <li>Study Guitar Craftsmanship</li>
                <li>Study Music Theory</li>
                <li>Try Learning French Horn</li>
                <li>Try relcoating to New York City more permanently</li>
                <li>Visit Australia, German, Japan, Switzerland, and Vietnam</li>
            </ul>

            <hr/>

            <h2>Professional</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: '15px'}}>
                <li>Learn Rust</li>
                <li>Get experience working in Full-Stack Development</li>
                <li>Self-Study Security & Attend Security Conventions</li>
                <li>Launch a Startup</li>
            </ul>
        </div>
    )
}

export default Bucketlist