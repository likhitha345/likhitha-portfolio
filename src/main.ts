import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SkillGroup { title: string; icon: string; skills: string[]; }
interface Experience { company: string; role: string; period: string; domain: string; points: string[]; }
interface Project { title: string; tag: string; description: string; stack: string[]; impact: string; }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="shell">
    <div class="orb orb-one"></div>
    <div class="orb orb-two"></div>
    <nav class="nav">
      <a class="brand" href="#home"><span>LP</span><b>Likhitha</b></a>
      <div class="nav-links">
        <a href="#skills">Skills</a><a href="#work">Work</a><a href="#resume">Resume</a><a href="#contact">Contact</a>
      </div>
      <a class="nav-cta" href="assets/Likhitha_Paipuri_Resume.pdf" target="_blank">Resume</a>
    </nav>

    <main id="home" class="hero section">
      <section class="hero-copy reveal">
        <p class="eyebrow">Angular-focused Full Stack .NET Developer</p>
        <h1>Likhitha Paipuri</h1>
        <p class="hero-text">I am Likhitha Paipuri, a Full Stack .NET Developer with 4+ years of experience across financial services and agriculture platforms. I build Angular experiences, ASP.NET Core APIs, SQL-backed systems, Azure cloud workflows, and secure applications using JWT, OAuth and RBAC.</p>
        <div class="hero-actions">
          <a class="primary" href="#work">View Enterprise Work</a>
          <a class="secondary" href="assets/Likhitha_Paipuri_Resume.pdf" target="_blank">Open Resume</a>
        </div>
        <div class="metrics">
          <div><b>4+</b><span>Years Experience</span></div>
          <div><b>2</b><span>Enterprise Domains</span></div>
          <div><b>Angular 18</b><span>Frontend Focus</span></div>
        </div>
      </section>
      <section class="profile-card reveal delay">
        <div class="scanline"></div>
        <img src="assets/profile.png" alt="Likhitha Paipuri professional headshot">
        <div class="availability"><span></span> Open to Full Stack .NET / Angular Roles</div>
        <div class="mini-terminal">
          <p><span>$</span> current_focus</p>
          <code>Angular • ASP.NET Core • Azure • SQL • Secure APIs</code>
        </div>
      </section>
    </main>

    <section class="section strip reveal">
      <h2>Angular-first, .NET-strong, cloud-ready.</h2>
      <p>My portfolio is designed for recruiters to quickly scan my Angular and .NET expertise, see my impact in enterprise projects, and access my resume without friction.</p>
    </section>

    <section id="skills" class="section reveal">
      <div class="section-head">
        <p class="eyebrow">Skill System</p>
        <h2>Organized skill groups for quick Review.</h2>
      </div>
      <div class="skill-grid">
        <article class="skill-card" *ngFor="let group of skillGroups">
          <div class="skill-icon">{{ group.icon }}</div>
          <h3>{{ group.title }}</h3>
          <div class="chips"><span *ngFor="let skill of group.skills">{{ skill }}</span></div>
        </article>
      </div>
    </section>

    <section id="work" class="section reveal">
      <div class="section-head split">
        <div>
          <p class="eyebrow">Experience</p>
          <h3>Banking and agriculture platforms built with Angular and .NET</h3>
        </div>
        <p class="side-note">Banking credibility + Angular delivery + secure backend engineering.</p>
      </div>
      <div class="timeline">
        <article class="experience" *ngFor="let item of experiences">
          <div class="dot"></div>
          <div class="exp-card">
            <div class="exp-top"><div><h3>{{ item.company }}</h3><p>{{ item.role }}</p></div><span>{{ item.period }}</span></div>
            <div class="domain">{{ item.domain }}</div>
            <ul><li *ngFor="let point of item.points">{{ point }}</li></ul>
          </div>
        </article>
      </div>
    </section>

    <section class="section reveal">
      <div class="section-head">
        <p class="eyebrow">Projects</p>
        <h2>Angular and .NET projects with impact.</h2>
      </div>
      <div class="project-grid">
        <article class="project" *ngFor="let project of projects">
          <span class="project-tag">{{ project.tag }}</span>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="stack"><span *ngFor="let tech of project.stack">{{ tech }}</span></div>
          <b>{{ project.impact }}</b>
        </article>
      </div>
    </section>

    <section id="resume" class="section resume reveal">
      <div>
        <p class="eyebrow">Resume</p>
        <h2>Download-ready resume for recruiter review.</h2>
        <p>Your resume is embedded as a direct PDF asset so recruiters do not have to ask for it separately.</p>
        <a class="primary" href="assets/Likhitha_Paipuri_Resume.pdf" target="_blank">Download Resume PDF</a>
      </div>
      <iframe src="assets/Likhitha_Paipuri_Resume.pdf" title="Likhitha Paipuri Resume"></iframe>
    </section>

    <section id="contact" class="section contact reveal">
      <div class="contact-panel">
        <p class="eyebrow">Contact</p>
        <h3>Let's connect about Angular and .NET opportunities.</h3>
        <p>Email: <a href="mailto:paipurilikhi&#64;gmail.com">paipurilikhi&#64;gmail.com</a></p>
        <p>Phone: <a href="tel:+13143690931">(314) 369-0931</a></p>
        <div class="socials">
          <a href="https://www.linkedin.com/in/likhitha-p-9866b020b/" target="_blank">LinkedIn</a>
          <a href="https://github.com/likhitha345" target="_blank">GitHub</a>
          <a href="https://www.hackerrank.com/profile/paipurilikhitha" target="_blank">HackerRank</a>
        </div>
      </div>
      <form class="message-card" (ngSubmit)="sendMail()">
  <label>Your Name
    <input [(ngModel)]="contactName" name="name" placeholder="Your Name">
  </label>

  <label>Opportunity Details
    <textarea [(ngModel)]="contactMessage" name="message"
    placeholder="Share role title, location, tech stack, and interview timeline."></textarea>
  </label>

  <button class="primary" type="submit">Discuss Role</button>
</form>
    </section>
  </div>
  `
})
export class AppComponent {
  contactName = '';
  contactMessage = '';

  skillGroups: SkillGroup[] = [
    { title: 'Frontend Engineering', icon: '✦', skills: ['Angular 18', 'AngularJS', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'Bootstrap', 'Material Bootstrap', 'Jasmine/Karma'] },
    { title: 'Backend & APIs', icon: '⚙', skills: ['C#', 'ASP.NET Core', '.NET 8', 'ASP.NET MVC', 'Web API', 'Entity Framework', 'LINQ', 'ADO.NET', 'WPF'] },
    { title: 'Database & Performance', icon: '▣', skills: ['SQL', 'PL/SQL', 'Stored Procedures', 'Views', 'Query Optimization', 'High-volume Transactions', 'Redis Cache'] },
    { title: 'Cloud & DevOps', icon: '☁', skills: ['Azure', 'Azure Functions', 'Service Bus', 'Blob Storage', 'Key Vault', 'Application Insights', 'CI/CD', 'Docker', 'Kubernetes'] },
    { title: 'Security & Architecture', icon: '◆', skills: ['JWT', 'OAuth', 'RBAC', 'Microservices', 'MVC', 'MVVM', 'n-tier', 'Event-driven Architecture'] },
    { title: 'Tools & Delivery', icon: '⌁', skills: ['Git', 'GitHub', 'Bitbucket', 'TFS', 'Azure DevOps', 'Jenkins', 'ServiceNow', 'Agile/Scrum'] }
  ];

  experiences: Experience[] = [
    {
      company: 'Bank of America', role: 'Full Stack .NET Developer', period: 'Feb 2025 – Present', domain: 'Financial Services / Secure Banking Systems',
      points: [
        'Built enterprise web applications using Angular, C#, ASP.NET MVC and ASP.NET Core for scalable, high-performance workflows.',
        'Designed RESTful APIs with .NET Core and implemented secure authentication using ASP.NET Identity, JWT, OAuth and RBAC.',
        'Optimized SQL Server queries, stored procedures and EF Core data access for high-volume transactional financial datasets.',
        'Delivered Azure-based application monitoring, caching, audit logging and transaction tracking for regulated banking environments.'
      ]
    },
    {
      company: 'Cognizant Technology Solutions / Viterra', role: 'Full Stack .NET Developer', period: 'Feb 2021 – Dec 2023', domain: 'Agriculture / Commodity Trading Platform',
      points: [
        'Developed modules for Credit, Trade, Import/Export and Commodity Tracking using Angular, ASP.NET Core, ASP.NET MVC and SQL Server.',
        'Implemented layered Controller, Repository, Business, Model and View architecture to keep the platform maintainable and scalable.',
        'Used Azure Blob Storage, Azure Functions, Service Bus, Web Apps, Key Vault and Azure Monitor for cloud-native delivery.',
        'Handled TFS stories, code reviews, deployment validation, UAT support and production troubleshooting in Agile/Scrum teams.'
      ]
    }
  ];

  projects: Project[] = [
    { title: 'Secure Banking Operations Dashboard', tag: 'Financial Services', description: 'Angular-driven dashboard connected to ASP.NET Core APIs for secure access, transaction visibility and operational monitoring.', stack: ['Angular', 'ASP.NET Core', 'JWT', 'SQL Server', 'Azure'], impact: 'Designed for security, traceability and fast data retrieval.' },
    { title: 'Commodity Trade Workflow Platform', tag: 'Agribusiness', description: 'Enterprise workflow modules for credit, trade, import/export processing and commodity tracking with layered .NET architecture.', stack: ['Angular', 'ASP.NET MVC', 'SQL Server', 'TFS', 'Azure'], impact: 'Improved maintainability across business-critical modules.' },
    { title: 'Cloud-native Event Processing', tag: 'Azure / DevOps', description: 'Serverless and event-driven services using Azure Functions, Service Bus, Blob Storage and monitored deployments.', stack: ['Azure Functions', 'Service Bus', 'Blob Storage', 'Key Vault'], impact: 'Built for scalable asynchronous processing and reliable operations.' }
  ];

  sendMail(): void {
    const subject = encodeURIComponent('Portfolio Inquiry - Full Stack .NET / Angular Role');
    const body = encodeURIComponent(`Hi Likhitha,\n\n${this.contactMessage || 'I came across your portfolio and would like to discuss an opportunity.'}\n\nThanks,\n${this.contactName || ''}`);
    window.location.href = `mailto:paipurilikhi&#64;gmail.com?subject=${subject}&body=${body}`;
  }
}

bootstrapApplication(AppComponent).catch(err => console.error(err));
