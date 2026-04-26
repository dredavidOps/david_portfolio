import { Zap, Users, Headset, TrendingUp, Server } from 'lucide-react'

const experiences = [
  {
    id: 'tesla',
    severity: 'CRITICAL',
    severityColor: 'bg-noc-red/10 border-noc-red/30 text-noc-red',
    icon: Zap,
    title: 'Tesla · IT Manufacturing Specialist',
    date: '[2024-03-01T00:00:00Z → PRESENT]',
    points: [
      'First responder for <span class="text-noc-textBright">10,000+ Linux/Windows devices</span> in 24/5 Cell Manufacturing plus Weekend on-call',
      'Deployed <span class="text-noc-textBright">Python M2M REST API</span> for device monitoring & automated alerting',
      'Built <span class="text-noc-textBright">Jenkins + Ansible CI/CD</span> for fleet-wide software deployment',
      'Incident coordinator for cross-functional production events',
    ],
    tags: ['#manufacturing', '#python', '#ansible', '#incident-response'],
  },
  {
    id: 'grover-lead',
    severity: 'WARNING',
    severityColor: 'bg-noc-yellow/10 border-noc-yellow/30 text-noc-yellow',
    icon: Users,
    title: 'Grover Group · IT Support Team Lead',
    date: '[2023-06-01 → 2024-02-01]',
    points: [
      'Owned problem prioritization; achieved <span class="text-noc-textBright">78.78% SLA compliance</span>',
      'Configured <span class="text-noc-textBright">Jira Service Management</span> for cross-functional teams',
      'Authored Confluence runbooks to standardize resolution procedures',
    ],
    tags: ['#itsm', '#sla', '#leadership'],
  },
  {
    id: 'grover-spec',
    severity: 'INFO',
    severityColor: 'bg-noc-blue/10 border-noc-blue/30 text-noc-blue',
    icon: Headset,
    title: 'Grover · IT Support Specialist',
    date: '[2022-01-01 → 2023-05-01]',
    points: [
      'Managed IAM ecosystem: <span class="text-noc-textBright">Okta, JAMF, M365, Intune</span>',
      'Automated Slack→Jira workflows and Service Desk dashboards',
      'Tier 1–3 support across application, OS, and infrastructure layers',
    ],
    tags: ['#okta', '#intune', '#automation'],
  },
  {
    id: 'grover-fraud',
    severity: 'INFO',
    severityColor: 'bg-noc-blue/10 border-noc-blue/30 text-noc-blue',
    icon: TrendingUp,
    title: 'Grover · Fraud Analyst → Jr. Fraud Analyst',
    date: '[2019-11-01 → 2022-02-01]',
    points: [
      'Built <span class="text-noc-textBright">SQL-based reporting workflows</span> for fraud pattern analysis',
      'Scaled team from 1 → 7 members; established onboarding SOPs',
      'Liaised with Data Science & Engineering on business rules for US/NL expansion',
    ],
    tags: ['#sql', '#data-analysis', '#cross-functional'],
  },
  {
    id: 'ostec',
    severity: 'LOW',
    severityColor: 'bg-noc-border border-noc-text/20 text-noc-text',
    icon: Server,
    title: 'OSTEC IT · Data Center Engineer',
    date: '[2017-11-01 → 2019-08-01]',
    points: [
      'Managed enterprise DC infrastructure: <span class="text-noc-textBright">Windows Server, Linux, AD</span>',
      'Tier 1–2 support across storage, virtualization, and network layers',
    ],
    tags: ['#linux', '#windows-server', '#datacenter'],
  },
]

export default function Experience() {
  return (
    <section id="timeline" className="mb-16">
      <div className="flex items-center gap-2 mb-6 text-xs font-mono text-noc-text">
        <span className="text-noc-cyan">$</span>
        <span>tail -f /var/log/experience.log | grep --color=always "CRITICAL\|WARNING\|INFO"</span>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className={`panel rounded-lg p-6 border border-noc-border severity-${exp.severity.toLowerCase()} hover-glow`}>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded ${exp.severityColor} text-xs font-mono font-bold`}>
                  {exp.severity}
                </span>
                <span className="text-noc-textBright font-mono font-bold">{exp.title}</span>
              </div>
              <span className="text-xs font-mono text-noc-text">{exp.date}</span>
            </div>

            <ul className="space-y-2 text-sm text-noc-text mb-4 font-mono">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-noc-green mt-1 text-xs">[OK]</span>
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
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