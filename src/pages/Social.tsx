/**
 * Page section component.
 */
import { SocialPageStyle, SocialContentStyle, SocialTitleStyle, SocialTextStyle, SocialColumeStyle,
    GithubStyle, GitLabStyle, LinkedInStyle, EmailStyle, ImageStyle, TextStyle, LinkTextStyle, arrowStyle
} from "../styles/social";

export default function Social() {
    return (
        <>
            <div className={SocialPageStyle}>
                <div className={SocialContentStyle}>
                    <h1 className={SocialTitleStyle}>Contact Me</h1>
                    <p className={SocialTextStyle}>Find me online and explore my work.</p>
                    <div className={SocialColumeStyle}>
                        <a
                            className={GithubStyle}
                            href="https://github.com/ranjanpranshu-ship-it"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/social/github.svg" alt="Github" className={ImageStyle} />
                            <p className={SocialTitleStyle}>Github</p>
                            <p className={TextStyle}>Explore my projects</p>
                            <div className="flex items-center">
                            <p className={LinkTextStyle}>Visit My Github Profile</p>
                            <img src="/social/arrow.svg" alt="" className={arrowStyle} />
                            </div>
                        </a>
                        <a
                            className={GitLabStyle}
                            href="https://gitlab.com/ranjanpranshu-ship-it"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/intro/gitlab.svg" alt="GitLab" className={ImageStyle} />
                            <p className={SocialTitleStyle}>GitLab</p>
                            <p className={TextStyle}>Explore my repositories</p>
                            <div className="flex items-center">
                            <p className={LinkTextStyle}>Visit My GitLab Profile</p>
                            <img src="/social/arrow.svg" alt="" className={arrowStyle} />
                            </div>
                        </a>
                        <a
                            className={LinkedInStyle}
                            href="https://www.linkedin.com/in/pranshu-ranjan-tiwari-77b6513b7"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/social/linkedin.svg" alt="LinkedIn" className={ImageStyle} />
                            <p className={SocialTitleStyle}>LinkedIn</p>
                            <p className={TextStyle}>Connect professionally</p>
                            <div className="flex items-center">
                            <p className={LinkTextStyle}>Visit My LinkedIn Profile</p>
                            <img src="/social/arrow.svg" alt="" className={arrowStyle} />
                            </div>
                        </a>
                        <a className={EmailStyle} href="mailto:ranjanpranshu029@gmail.com">
                            <img src="/social/email.svg" alt="Email" className={ImageStyle} />
                            <p className={SocialTitleStyle}>Email</p>
                            <p className={TextStyle}>Have an opportunity or want to connect?</p>
                            <div className="flex items-center">
                            <p className={LinkTextStyle}>Send Me An Email</p>
                            <img src="/social/arrow.svg" alt="" className={arrowStyle} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
