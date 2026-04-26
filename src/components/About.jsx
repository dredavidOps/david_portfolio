import { UserCog } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="mb-16">
      <div className="flex items-center gap-2 mb-6 text-xs font-mono text-noc-text">
        <span className="text-noc-cyan">$</span>
        <span>cat /etc/config/about.txt</span>
      </div>

      <div className="panel rounded-lg p-6 md:p-8 border border-noc-border severity-info hover-glow">
        <div className="flex items-start gap-4">
          <div className="hidden md:flex w-12 h-12 rounded bg-noc-blue/10 border border-noc-blue/30 items-center justify-center flex-shrink-0">
            <UserCog size={20} className="text-noc-blue" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2 py-1 rounded bg-noc-blue/10 border border-noc-blue/30 text-noc-blue text-xs font-mono">INFO</span>
              <span className="text-xs font-mono text-noc-text">SYS_CONFIG — PERSONNEL_PROFILE</span>
            </div>

            <p className="text-noc-text leading-relaxed mb-4">
              Engineer with <span className="text-noc-textBright font-semibold">5+ years</span> of runtime in high-volume manufacturing and enterprise environments. 
              Specialized in full-stack troubleshooting across <span className="text-noc-textBright">hardware → OS → network → application → database</span> layers.
            </p>

            <p className="text-noc-text leading-relaxed mb-4">
              Core competencies: <span className="text-noc-cyan">Python</span>, <span className="text-noc-cyan">SQL</span>, <span className="text-noc-cyan">Bash</span> · 
              <span className="text-noc-yellow"> Jenkins</span>, <span className="text-noc-yellow">Ansible</span>, <span className="text-noc-yellow">Docker</span> · 
              <span className="text-noc-green"> Linux</span>, <span className="text-noc-green">Windows Server</span>, <span className="text-noc-green">Active Directory</span> · 
              <span className="text-noc-blue"> Jira</span>, <span className="text-noc-blue">Confluence</span>, <span className="text-noc-blue">ITIL</span>
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 rounded bg-noc-border/50 text-xs font-mono text-noc-text">LANG:EN_NATIVE</span>
              <span className="px-3 py-1 rounded bg-noc-border/50 text-xs font-mono text-noc-text">LANG:DE_B1</span>
              <span className="px-3 py-1 rounded bg-noc-border/50 text-xs font-mono text-noc-text">CLEARANCE:EU_WORK_PERM</span>
              <span className="px-3 py-1 rounded bg-noc-border/50 text-xs font-mono text-noc-text">SHIFT:24/5_PLUS_WKD_ONCALL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}