/**
 * Page section component.
 */
import {
  skillsgridStyle,
  backendSkillsgridItemStyle,
  BackendAPIGridStyle,
  DbandCachingGridStyle,
  MassageDistGridStyle,
  DevopAndInfraGridStyle,
  DevopToolGridStyle,
  frontendGridStyle,
  DbgridItemStyle,
  MassageItemStyle,
  DevopItemStyle,
  DevopToolItemStyle,
  frontendItemStyle,
  ImageStyle,
  skillsContainerStyle,
  GridItemStyle,
  skillsInfoHeadingStyle,
  skillsHeadingStyle,
  skillsInfoStyle,
  blurStyle,
} from "../styles/skills";

const SKILL_LINKS: Record<string, string> = {
  NestJS: "https://nestjs.com",
  "REST API": "https://restfulapi.net",
  WebSocket: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
  TypeScript: "https://www.typescriptlang.org",
  JWT: "https://jwt.io",
  Microservices: "https://microservices.io",
  "Node.js": "https://nodejs.org",
  APIGateway: "https://www.nginx.com/learn/api-gateway",
  Redis: "https://redis.io",
  PostgreSQL: "https://www.postgresql.org",
  MongoDB: "https://www.mongodb.com",
  SQL: "https://www.w3schools.com/sql/",
  "Apache Kafka": "https://kafka.apache.org",
  "Redis Pub/Sub": "https://redis.io/docs/latest/develop/interact/pubsub/",
  Docker: "https://www.docker.com",
  Kubernetes: "https://kubernetes.io",
  Jenkins: "https://www.jenkins.io",
  Compose: "https://docs.docker.com/compose/",
  Git: "https://git-scm.com",
  GitLab: "https://gitlab.com",
  Postman: "https://www.postman.com",
  GitHub: "https://github.com",
  "VS Code": "https://code.visualstudio.com",
  React: "https://react.dev",
  "Tailwind CSS": "https://tailwindcss.com",
  Vite: "https://vitejs.dev",
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
};

import { asset } from '../libs/assets.ts'

function SkillItem({ src, name }: { src: string; name: string }) {
  return (
    <a
      href={SKILL_LINKS[name] ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={GridItemStyle}
    >
      <img src={src} className={ImageStyle} alt={name} />
      <p>{name}</p>
    </a>
  );
}

function Skills() {
  return (
    <>
      <div className={blurStyle}></div>
      <div className={skillsContainerStyle}>
        <div>
          <h1 className={skillsHeadingStyle}>Skills</h1>
          <h2 className={skillsInfoHeadingStyle}>Backend API</h2>
          <p className={skillsInfoStyle}>Technologies I have worked with and used to build backend Systems <br /> from API to Deployment:</p>
        </div>
        <div className={skillsgridStyle}>
          <div className={backendSkillsgridItemStyle}>
            <div className="flex">
              <img src={asset('/api/backend.svg')} className={ImageStyle} alt="" />
              <div className="m-2"></div>
              <div>
                <h2 className={skillsInfoHeadingStyle}>Backend API</h2>
                <h3 className={skillsInfoStyle}>Building Scalable and Reliable API with Mordern Systems.</h3>
              </div>
            </div>
            <div className={BackendAPIGridStyle}>
              <SkillItem src={asset('/api/nestjs.svg')} name="NestJS" />
              <SkillItem src={asset('/api/restapi.svg')} name="REST API" />
              <SkillItem src={asset('/api/websockit.svg')} name="WebSocket" />
              <SkillItem src={asset('/api/typescript.svg')} name="TypeScript" />
              <SkillItem src={asset('/api/jwt.svg')} name="JWT" />
              <SkillItem src={asset('/api/microservices.svg')} name="Microservices" />
              <SkillItem src={asset('/api/nodejs.svg')} name="Node.js" />
              <SkillItem src={asset('/api/ApiGateway.svg')} name="APIGateway" />
            </div>
          </div>

          <div className={DbgridItemStyle}>
            <div className="flex">
              <img src={asset('/database/database.svg')} className={ImageStyle} alt="" />
              <div className="m-2">
                <h2 className={skillsInfoHeadingStyle}>Database & Caching</h2>
                <h3 className={skillsInfoStyle}>Working with different databases and caching solutions for better performance</h3>
              </div>
            </div>
            <div className={DbandCachingGridStyle}>
              <SkillItem src={asset('/database/redis.svg')} name="Redis" />
              <SkillItem src={asset('/database/postgresql.svg')} name="PostgreSQL" />
              <SkillItem src={asset('/database/mongo.svg')} name="MongoDB" />
              <SkillItem src={asset('/database/sql.svg')} name="SQL" />
            </div>
          </div>

          <div className={MassageItemStyle}>
            <div className="flex">
              <img src={asset('/messaging/streaming.svg')} className={ImageStyle} alt="" />
              <div className="m-2">
                <h2 className={skillsInfoHeadingStyle}>Messaging & Streaming</h2>
                <h3 className={skillsInfoStyle}>Enabling asynchronous communication and event-driven architectures.</h3>
              </div>
            </div>
            <div className={MassageDistGridStyle}>
              <SkillItem src={asset('/messaging/kefka.svg')} name="Apache Kafka" />
              <SkillItem src={asset('/messaging/PubSub.svg')} name="Redis Pub/Sub" />
              <SkillItem src={asset('/messaging/websockit.svg')} name="WebSocket" />
            </div>
          </div>

          <div className={DevopItemStyle}>
            <div className="flex">
              <img src={asset('/devops/cloud.svg')} className={ImageStyle} alt="" />
              <div className="m-2">
                <h2 className={skillsInfoHeadingStyle}>Devops & Infrastructure</h2>
                <h3 className={skillsInfoStyle}>Containerization, Orchestration and CI/CD for smooth Deployments.</h3>
              </div>
            </div>
            <div className={DevopAndInfraGridStyle}>
              <SkillItem src={asset('/devops/docker.svg')} name="Docker" />
              <SkillItem src={asset('/devops/kubernetes.svg')} name="Kubernetes" />
              <SkillItem src={asset('/devops/jenkins.svg')} name="Jenkins" />
              <SkillItem src={asset('/devops/compose.svg')} name="Compose" />
            </div>
          </div>

          <div className={DevopToolItemStyle}>
            <div className="flex">
              <img src={asset('/devtool/tools.svg')} className={ImageStyle} alt="" />
              <div className="m-2">
                <h2 className={skillsInfoHeadingStyle}>Tools</h2>
                <h3 className={skillsInfoStyle}>Tools I use for development, collaboration and API testing.</h3>
              </div>
            </div>
            <div className={DevopToolGridStyle}>
              <SkillItem src={asset('/devtool/git.svg')} name="Git" />
              <SkillItem src={asset('/devtool/gitlab.svg')} name="GitLab" />
              <SkillItem src={asset('/devtool/postman.svg')} name="Postman" />
              <SkillItem src={asset('/devtool/github.svg')} name="GitHub" />
              <SkillItem src={asset('/devtool/vscode.svg')} name="VS Code" />
            </div>
          </div>

          <div className={frontendItemStyle}>
            <div className="flex">
              <img src={asset('/frontend/desktop.svg')} className={ImageStyle} alt="" />
              <div className="m-2">
                <h2 className={skillsInfoHeadingStyle}>Frontend</h2>
                <h3 className={skillsInfoStyle}>Exploring modern frontend tools to build better user experiences.</h3>
              </div>
            </div>
            <div className={frontendGridStyle}>
              <SkillItem src={asset('/frontend/react.svg')} name="React" />
              <SkillItem src={asset('/frontend/tailwind.svg')} name="Tailwind CSS" />
              <SkillItem src={asset('/frontend/vite.svg')} name="Vite" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
