import { Terminal, Download, Github, ExternalLink } from 'lucide-react'
import { ENV } from '../config/env'

export default function Hero() {
  return (
    <section id="dashboard" className="mb-16">
      <div className="flex items-center gap-2 mb-6 text-xs font-mono text-noc-text">
        <span className="text-noc-cyan">$</span>
        <span className="cursor-blink">./init_dashboard --user=david.yaotse --role="Software Support Engineer"</span>
      </div>

      <div className="panel rounded-lg p-6 md:p-10 border border-noc-border hover-glow">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="panel rounded p-4 border border-noc-border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-noc-text">AVAILABILITY</span>
              <span className="w-2 h-2 rounded-full bg-noc-green led-green"></span>
            </div>
            <div className="text-2xl font-mono font-bold text-noc-green">ONLINE</div>
            <div className="text-xs text-noc-text mt-1">Ready for new opportunities</div>
          </div>

          <div className="panel rounded p-4 border border-noc-border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-noc-text">LOCATION_NODE</span>
              <span className="text-noc-blue text-xs">📍</span>
            </div>
            <div className="text-2xl font-mono font-bold text-noc-textBright">BERLIN</div>
            <div className="text-xs text-noc-text mt-1">DE · UTC+2</div>
          </div>

          <div className="panel rounded p-4 border border-noc-border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-noc-text">PRIMARY_ROLE</span>
              <span className="text-noc-cyan text-xs">🛡</span>
            </div>
            <div className="text-lg font-mono font-bold text-noc-textBright leading-tight">SOFTWARE<br/>SUPPORT ENG</div>
            <div className="text-xs text-noc-text mt-1">SRE · DevOps · Mfg</div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-noc-textBright mb-4 font-sans">
          Eye of the Storm.
        </h1>
        <p className="text-lg text-noc-text max-w-2xl mb-8 leading-relaxed">
          I provide Systems Engineering support by building and managing tools and automations. 
          Incident commander for <span className="text-noc-textBright font-semibold">10,000+ manufacturing devices</span>. 
          I eliminate recurring problems — not manage them eternally. Currently maintaining critical uptime at 
          <span className="text-noc-red font-semibold"> Tesla Manufacturing Brandenburg</span> as an IT Engineer with skills in python, linux and windows systems.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#runbooks" className="px-5 py-2.5 bg-noc-red/10 border border-noc-red/50 text-noc-red rounded font-mono text-sm hover:bg-noc-red/20 transition-all flex items-center gap-2">
            <Terminal size={16} />
            VIEW_RUNBOOKS
          </a>
          <a href={ENV.CV_URL} className="px-5 py-2.5 panel border border-noc-border text-noc-textBright rounded font-mono text-sm hover:border-noc-text transition-all flex items-center gap-2">
            <Download size={16} />
            DOWNLOAD_CV.pdf
          </a>
          <a href={ENV.GITHUB_URL} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 panel border border-noc-border text-noc-textBright rounded font-mono text-sm hover:border-noc-text transition-all flex items-center gap-2">
            <Github size={16} />
            OPEN_GITHUB
          </a>
        </div>
      </div>
    </section>
  )
}