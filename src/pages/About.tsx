/**
 * Page section component.
 */
import { useState } from 'react'
import {
    aboutMeStyle, aboutmeBodyStyle, aboutmeTitleStyle, aboutmeTitleParagraphStyle, aboutmeContainerStyle, titleimageStyle,
    aboutmeHeadingTextStyle, aboutmeParagraphStyle, containerStyle, containerItemStyle, aboutmeParagraphTextStyle, aboutmefullStyle
} from '../styles/about'


export default function About() {
    const [showFull, setShowFull] = useState(false)
    return (
        <div className={aboutMeStyle}>
            <div className={aboutmeBodyStyle}>
                <div>
                    <h1 className={aboutmeTitleStyle}>About Me</h1>
                    <p className={aboutmeTitleParagraphStyle}>A little about who I am and what I build.</p>
                </div>
                <div>
                    <p className={`${aboutmefullStyle} ${showFull ? "" : "hidden"}`}>
                        Hi, I'm Pranshu, a BCA student passionate about backend development and building reliable server-side applications.<br/><br/>
                        My primary focus is NestJS, TypeScript, REST APIs, and database design. Through hands-on projects, I've explored 
                        event-driven architecture using Apache Kafka, caching with Redis, authentication with JWT, and database integration 
                        using PostgreSQL and MongoDB.<br/><br/>

                        I also enjoy learning how backend systems communicate and operate in real-world environments, including messaging 
                        systems, Docker, and CI/CD workflows. I believe the best way to learn technology is by building projects, 
                        understanding the underlying concepts, and improving through practical experience.<br/><br/>
                        
                        My goal is to grow into a skilled backend developer who can design, build, and maintain scalable APIs and 
                        dependable backend systems. I'm always looking to learn, solve challenging problems, and contribute to 
                        meaningful projects.
                    </p>
                </div>
                <div className={aboutmeContainerStyle}>
                    <h2 className={aboutmeHeadingTextStyle}>Backend-focused. Always learning.</h2>
                    <p className={aboutmeParagraphStyle}>I'm a BCA student focused on building APIs, working with databases, and
                        exploring event-driven systems. I enjoy understanding how services communicate and how to make backend
                        applications more reliable.
                    </p>
                    <div className={containerStyle}>
                        <div className={containerItemStyle}>
                            <img src="/about/server.svg" alt="" className={titleimageStyle} />
                            <h1 className={aboutmeHeadingTextStyle}>Backend Development</h1>
                            <p className={aboutmeParagraphTextStyle}>NestJS, TypeScript, REST APIs</p>
                        </div>
                        <div className={containerItemStyle}>
                            <img src="/database/database.svg" alt="" className={titleimageStyle} />
                            <h1 className={aboutmeHeadingTextStyle}>Data & Messaging</h1>
                            <p className={aboutmeParagraphTextStyle}>PostgreSQL, MongoDB, Redis, Kafka</p>
                        </div>
                    </div>
                    <h6 className={aboutmeParagraphStyle}>Currently focused on improving my backend engineering skills through practical projects.</h6>
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        type="button"
                        onClick={() => setShowFull((v) => !v)}
                        aria-label="Toggle about details"
                        className="p-2 text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6 transition-transform ${showFull ? 'rotate-180' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
