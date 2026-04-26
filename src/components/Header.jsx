import { useClock } from '../hooks/useClock'

export default function Header() {
  const clock = useClock()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 panel border-b border-noc-border">
      <div className="flex items-center justify-between px-4 py-2 text-xs font-mono">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-noc-green led-green"></span>
            <span className="text-noc-green">SYSTEM ONLINE</span>
          </span>
          <span className="text-noc-border">|</span>
          <span className="text-noc-text">NOC_DASHBOARD_v2.4.1</span>
          <span className="text-noc-border">|</span>
          <span className="text-noc-text">ID: david.yaotse</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-noc-cyan">{clock}</span>
          <span className="text-noc-border">|</span>
          <span className="text-noc-yellow">⚠ 0 ALERTS</span>
          <span className="text-noc-border">|</span>
          <span className="text-noc-text">BERLIN_NODE</span>
        </div>
      </div>
    </header>
  )
}