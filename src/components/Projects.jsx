import { BookOpen, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 'careerleap',
    runbook: 'RUNBOOK_001',
    title: 'CareerLeap Mentorship Platform',
    problem: 'Need for a scalable mentorship matching system with containerized deployment.',
    diagnostic: 'Django REST backend + React/Vite SPA frontend. Docker containerization. Render cloud hosting.',
    resolution: 'Full-stack deployment with CI/CD pipeline. Git-based version control and automated builds.',
    tags: ['Python', 'Django', 'React', 'Docker', 'Render'],
    links: { live: '#', repo: '#' },
  },
  {
    id: 'tesla-api',
    runbook: 'RUNBOOK_002',
    title: 'Tesla Device Monitoring API',
    internal: true,
    problem: 'Manual asset tracking across 10,000+ manufacturing endpoints causing production delays.',
    diagnostic: 'Python M2M REST API integrated with monitoring DB. Real-time location telemetry.',
    resolution: 'Automated alerting reduced asset search time. Improved operational response in 24/7 environment.',
    tags: ['Python', 'REST API', 'M2M', 'Monitoring'],
  },
]

export default function Projects() {
  return (
    <section id="runbooks" className="mb-16">
      <div className="flex items-center gap-2 mb-6 text-xs font-mono text-noc-text">
        <span className="text-noc-cyan">$</span>
        <span>ls -la /opt/runbooks/ && cat README.md</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="panel rounded-lg p-6 border border-noc-border hover-glow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-noc-orange" />
                <span className="text-xs font-mono text-noc-orange">{project.runbook}</span>
              </div>
              <div className="flex gap-2">
                {project.links?.live && (
                  <a href={project.links.live} className="text-xs font-mono text-noc-text hover:text-noc-textBright flex items-center gap-1">
                    <ExternalLink size={12} /> LIVE
                  </a>
                )}
                {project.links?.repo && (
                  <a href={project.links.repo} className="text-xs font-mono text-noc-text hover:text-noc-textBright flex items-center gap-1">
                    <Github size={12} /> REPO
                  </a>
                )}
                {project.internal && (
                  <span className="px-2 py-0.5 rounded bg-noc-red/10 border border-noc-red/30 text-noc-red text-xs font-mono">INTERNAL</span>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-noc-textBright mb-2">{project.title}</h3>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-noc-red font-mono text-xs">[PROBLEM]</span>
                <p className="text-noc-text mt-1">{project.problem}</p>
              </div>
              <div>
                <span className="text-noc-yellow font-mono text-xs">[DIAGNOSTIC]</span>
                <p className="text-noc-text mt-1">{project.diagnostic}</p>
              </div>
              <div>
                <span className="text-noc-green font-mono text-xs">[RESOLUTION]</span>
                <p className="text-noc-text mt-1">{project.resolution}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-noc-border">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 rounded bg-noc-border text-xs font-mono text-noc-text">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}