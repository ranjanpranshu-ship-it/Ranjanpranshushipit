/**
 * Page section component.
 */
import { useState } from 'react'
import {
    projectStyle, projectTitleStyle, projectContentStyle,
    firstprojectItemStyle, firstprojectItemTitleStyle,
    projectItemContainer,
    secondprojectItemStyle, secondprojectItemTitleStyle, secondprojectItemContentStyle,
    firstprojectItemContentStyle, hiddenText, bottomItemStyle, bottomItemContentStyle, topCompartment, linkImg
} from '../styles/project.tsx'

export default function Projects() {
    const [showFirst, setShowFirst] = useState(false)
    const [showSecond, setShowSecond] = useState(false)

    return (
        <>
            <div className={projectStyle}>
                <h1 className={projectTitleStyle}>Projects</h1>
                <h2 className={projectContentStyle}>Projects I have worked on recently</h2>

                <div className={projectItemContainer}>
                    <div className={firstprojectItemStyle}>
                        <div className={topCompartment}>
                        <h3 className={firstprojectItemTitleStyle}>Event-Driven Order Processing Pipeline</h3>
                        <a href="https://gitlab.com/backend-projects1893240/event-driven-order-processing-pipeline" target="_blank" rel="noopener noreferrer" className="ml-auto">
                            <img src="/projects/gitlab.svg" alt="GitLab" className={linkImg} />
                        </a>
                        <a href="https://github.com/ranjanpranshu-ship-it/Event-Driven-Order-Processing-Pipeline" target="_blank" rel="noopener noreferrer">
                            <img src="/social/github.svg" alt="GitHub" className={linkImg} />
                        </a>
                        <a href="https://docs.docker.com/compose/" target="_blank" rel="noopener noreferrer">
                            <img src="/projects/compose.svg" alt="Docker Compose" className={linkImg} />
                        </a>
                        </div><br/>
                        <p className={firstprojectItemContentStyle}> Built an event-driven backend pipeline that processes order creation events asynchronously using Apache Kafka.
                            Implemented NestJS producers and consumers to handle order events and persist order data to a relational database using TypeORM.<br/><br/>
                            Integrated the pipeline with Redis caching with a cache-aside strategy to reduce repeated database reads
                            and implemented cache invalidation after order persistence to help maintain data consistency.</p> <br/>
                        <button
                            type="button"
                            onClick={() => setShowFirst((v) => !v)}
                            className="text-sm text-white underline mb-2"
                        >
                            {showFirst ? 'Hide' : 'Show'} Key Features
                        </button>
                        {showFirst && (
                            <>
                                <p className={hiddenText}>Key Features</p>
                                <ul className={hiddenText}>
                                    <li>Asynchronous order processing using Apache Kafka</li>
                                    <li>Reliable order data persistence using TypeORM</li>
                                    <li>Cache-aside strategy for Redis caching</li>
                                    <li>Cache invalidation after order persistence</li>
                                </ul>
                            </>
                        )}
                        <div className={bottomItemStyle}>
                            <p className={bottomItemContentStyle}> NestJS </p>
                            <p className={bottomItemContentStyle}> TypeScript </p>
                            <p className={bottomItemContentStyle}> Apache Kafka </p>
                            <p className={bottomItemContentStyle}> Redis </p>
                            <p className={bottomItemContentStyle}> TypeORM </p>
                            <p className={bottomItemContentStyle}> Relational Database </p>
                        </div>
                    </div>

                    <div className={secondprojectItemStyle}>
                        <div className={topCompartment}>
                        <h3 className={secondprojectItemTitleStyle}>E-commerce REST API</h3>
                        <a href="https://gitlab.com/backend-projects1893240/simple-e-commerce-api" target="_blank" rel="noopener noreferrer" className="ml-auto">
                            <img src="/projects/gitlab.svg" alt="GitLab" className={linkImg} />
                        </a>
                        <a href="https://github.com/ranjanpranshu-ship-it/Simple-E-commerce-API" target="_blank" rel="noopener noreferrer">
                            <img src="/social/github.svg" alt="GitHub" className={linkImg} />
                        </a>
                        <a href="https://docs.docker.com/compose/" target="_blank" rel="noopener noreferrer">
                            <img src="/projects/compose.svg" alt="Docker Compose" className={linkImg} />
                        </a>
                        </div><br/>
                        <p className={secondprojectItemContentStyle}> Developed an e-commerce backend using NestJS to support core shopping
                            workflows, including user authentication, product listings, shopping cart operations, and checkout. Implemented
                            JWT-based authentication with refresh tokens to manage authenticated sessions.<br/><br/>

                            Integrated PostgreSQL for user data and MongoDB for product and cart data, using each database for its
                            respective responsibilities. Integrated the Razorpay payment gateway into the checkout workflow to support
                            payment processing.</p> <br/>
                            <button
                                type="button"
                                onClick={() => setShowSecond((v) => !v)}
                                className="text-sm text-white underline mb-2"
                            >
                                {showSecond ? 'Hide' : 'Show'} Key Features
                            </button>
                            {showSecond && (
                                <>
                                    <p className={hiddenText}>Key Features</p>
                                    <ul className={hiddenText}>
                                        <li>RESTful APIs for authentication, product listings, and shopping cart operations.</li>
                                        <li>JWT-based authentication with refresh-token support.</li>
                                        <li>PostgreSQL and MongoDB integration for managing application data.</li>
                                        <li>Razorpay payment gateway integration into the checkout workflow.</li>
                                    </ul>
                                </>
                            )}
                            <div className={bottomItemStyle}>
                                <p className={bottomItemContentStyle}> NestJS </p>
                                <p className={bottomItemContentStyle}> TypeScript </p>
                                <p className={bottomItemContentStyle}> PostgreSQL </p>
                                <p className={bottomItemContentStyle}> MongoDB </p>
                                <p className={bottomItemContentStyle}> JWT </p>
                                <p className={bottomItemContentStyle}> Razorpay </p>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
