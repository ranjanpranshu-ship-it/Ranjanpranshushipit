/**
 * Page section component.
 */
import type { Page } from '../types/navigation.ts'
import {
  introductionStyle, introheading, introductionContentStyle, imagestyle, introductionbuttonStyle1,
  introductiontitletextStyle, introductiontitletextStyle2, introductiontextStyle, introductionbuttonContainerStyle, introductionbuttonStyle,
  socialmediaContainerStyle, socialmediaStyle, introcol1, introcol2, introcodebackgroundStyle, ContentBlurStyle2, bootomtile, bootomtileitem
} from '../styles/introduction.tsx'
import { asset } from '../libs/assets.ts'


interface IntroProps {
  onNavigate: (page: Page) => void
}

export default function Intro({ onNavigate }: IntroProps) {
  return (
    <>
      <div className={introductionStyle}> {/* Intro */}
        <div className={introductionContentStyle} role="region">
          <div className={introcol1}>
            <h2 className={introheading}><span>Backend Developer</span><span>·</span><span>NestJS</span><span>·</span><span>TypeScript</span></h2>
            <h1 className={introductiontitletextStyle}>Hi, I'm <span className="text-[#019455]">Pranshu</span></h1>
            <h2 className={introductiontitletextStyle2}>Building reliable web applications,<br /> from APIs to infrastructure.</h2><br />
            <p className={introductiontextStyle}>
              I'm a BCA student and developer focused on backend engineering with NestJS and TypeScript. I enjoy building REST APIs,
              working with databases, and exploring event-driven systems, caching, and backend infrastructure. I also have experience
              with frontend technologies like React and Tailwind CSS, allowing me to understand how frontend applications communicate
              with backend services.I'm continuously learning, building practical projects, and working toward becoming a stronger
              software developer.
            </p>
            <div className={introductionbuttonContainerStyle}>
              <button
                type="button"
                className={introductionbuttonStyle1}
                onClick={() => onNavigate('Projects')}
              >
                View My Projects <img src={asset('/intro/arrow-right.svg')} alt="" className="w-4 h-4 ml-2" />
              </button>
              <button
                type="button"
                className={introductionbuttonStyle}
                onClick={() => onNavigate('Social')}
              >
                Get in Touch <img src={asset('/intro/email.svg')} alt="" className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className={socialmediaContainerStyle}>
              <img src={asset('/intro/gitlab.svg')} alt="GitLab" className={socialmediaStyle} />
              <img src={asset('/intro/github.svg')} alt="GitHub" className={socialmediaStyle} />
              <img src={asset('/intro/linkedin.svg')} alt="LinkedIn" className={socialmediaStyle} />
              <img src={asset('/intro/email-filled.svg')} alt="Email" className={socialmediaStyle} />
            </div>
          </div>
          <div className={introcol2}>
            <div className={ContentBlurStyle2} aria-hidden="true"></div>
            <img src={asset('/intro/Backend.png')} alt="Backend illustration" className={introcodebackgroundStyle} />
          </div>
        </div>
      <div className="overflow-hidden w-full">
        <div className={`${bootomtile} animate-marquee w-[max-content]`}>
          <div className={bootomtileitem}>
            <img src={asset('/api/nestjs.svg')} alt="" className={imagestyle} />
            NestJS
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/api/typescript.svg')} alt="" className={imagestyle} />
            TypeScript
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/database/redis.svg')} alt="" className={imagestyle} />
            Redis
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/database/mongo.svg')} alt="" className={imagestyle} />
            MongoDB
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/messaging/kefka.svg')} alt="" className={imagestyle} />
            Kafka
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/frontend/react.svg')} alt="" className={imagestyle} />
            React
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/frontend/tailwind.svg')} alt="" className={imagestyle} />
            Tailwind
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/api/nestjs.svg')} alt="" className={imagestyle} />
            NestJS
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/api/typescript.svg')} alt="" className={imagestyle} />
            TypeScript
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/database/redis.svg')} alt="" className={imagestyle} />
            Redis
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/database/mongo.svg')} alt="" className={imagestyle} />
            MongoDB
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/messaging/kefka.svg')} alt="" className={imagestyle} />
            Kafka
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/frontend/react.svg')} alt="" className={imagestyle} />
            React
            </div>
          <div className={bootomtileitem}>
            <img src={asset('/frontend/tailwind.svg')} alt="" className={imagestyle} />
            Tailwind
            </div>
        </div>
      </div>
      </div>

    </>
  )
}
