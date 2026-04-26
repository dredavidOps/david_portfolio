import { Microchip, Award } from 'lucide-react'

const skillMetrics = [
  { name: 'Python / Scripting', value: 95, color: 'from-noc-cyan to-noc-blue' },
  { name: 'Linux / Systems', value: 92, color: 'from-noc-green to-noc-cyan' },
  { name: 'CI/CD / Automation', value: 88, color: 'from-noc-yellow to-noc-orange' },
  { name: 'ITSM / Jira / SLA', value: 90, color: 'from-noc-blue to-noc-cyan' },
]

const certifications = [
  { name: 'ITIL v4 Foundation', year: '2023' },
  { name: 'Cisco CCNA 200-301', year: '2022' },
  { name: 'Google IT Support', year: '2021' },
  { name: 'M365 Certified: Fundamentals', year: '2021' },
  { name: 'DevOps Training (Global Dev Experts)', year: 'Sep 2024' },
  { name: 'SQL / MySQL & DB Design', year: '2020' },
]

export default function Skills() {
  return (
    <section id="metrics" className="mb-16">
      <div className="flex items-center gap-2 mb-6 text-xs font-mono text-noc-text">
        <span className="text-noc-cyan">$</span>
        <span>SELECT * FROM metrics WHERE category IN ('skills', 'certifications') ORDER BY priority DESC</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="panel rounded-lg p-6 border border-noc-border">
          <h3 className="text-sm font-mono text-noc-text mb-4 flex items-center gap-2">
            <Microchip size={16} className="text-noc-cyan" /> TECHNICAL_METRICS
          </h3>
          <div className="space-y-4">
            {skillMetrics.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-noc-text">{skill.name}</span>
                  <span className="text-noc-cyan">{skill.value}%</span>
                </div>
                <div className="h-2 bg-noc-border rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${skill.color}`} style={{ width: `${skill.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-lg p-6 border border-noc-border">
          <h3 className="text-sm font-mono text-noc-text mb-4 flex items-center gap-2">
            <Award size={16} className="text-noc-yellow" /> CERTIFICATION_REGISTRY
          </h3>
          <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center justify-between p-2 rounded bg-noc-border/30 border border-noc-border/50">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-noc-green"></span>
                  <span className="text-sm text-noc-textBright">{cert.name}</span>
                </div>
                <span className="text-xs font-mono text-noc-text">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}