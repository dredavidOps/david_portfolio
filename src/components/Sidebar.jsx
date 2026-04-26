import { useState } from 'react'
import { 
  Gauge, 
  User, 
  GitBranch, 
  BookOpen, 
  BarChart3, 
  Bell, 
  Menu,
  X
} from 'lucide-react'

const navItems = [
  { href: '#dashboard', icon: Gauge, label: 'dashboard.sys', color: 'text-noc-cyan' },
  { href: '#about', icon: User, label: 'about.cfg', color: 'text-noc-blue' },
  { href: '#timeline', icon: GitBranch, label: 'experience.log', color: 'text-noc-yellow' },
  { href: '#runbooks', icon: BookOpen, label: 'runbooks/', color: 'text-noc-orange' },
  { href: '#metrics', icon: BarChart3, label: 'metrics.db', color: 'text-noc-green' },
  { href: '#alerts', icon: Bell, label: 'alerts.console', color: 'text-noc-red' },
]

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileOpen(false)
    }
  }

  return (
    <>
      <button 
        className="lg:hidden fixed top-12 left-4 z-50 p-2 panel rounded border border-noc-border"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside className={`
        fixed left-0 top-10 bottom-0 w-64 panel border-r border-noc-border z-40
        transform transition-transform duration-300 lg:translate-x-0
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col
      `}>
        <div className="p-4 border-b border-noc-border">
          <div className="font-mono text-sm font-bold text-noc-textBright mb-1">NAVIGATION_PANEL</div>
          <div className="text-xs text-noc-text font-mono">Select module to view</div>
        </div>

        <nav className="flex-1 p-2 space-y-1">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="flex items-center gap-3 px-3 py-2 rounded text-sm font-mono hover:bg-noc-border transition-colors group"
            >
              <item.icon size={16} className={item.color} />
              <span className="text-noc-text group-hover:text-noc-textBright">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-noc-border">
          <div className="text-xs font-mono text-noc-text mb-2">SYSTEM RESOURCES</div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span>CPU</span>
              <span className="text-noc-green">12%</span>
            </div>
            <div className="h-1 bg-noc-border rounded-full overflow-hidden">
              <div className="h-full bg-noc-green w-[12%]"></div>
            </div>
            <div className="flex justify-between text-xs font-mono">
              <span>MEM</span>
              <span className="text-noc-blue">64%</span>
            </div>
            <div className="h-1 bg-noc-border rounded-full overflow-hidden">
              <div className="h-full bg-noc-blue w-[64%]"></div>
            </div>
            <div className="flex justify-between text-xs font-mono">
              <span>UPTIME</span>
              <span className="text-noc-cyan">5y 2m</span>
            </div>
          </div>
        </div>
      </aside>

      {mobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  )
}