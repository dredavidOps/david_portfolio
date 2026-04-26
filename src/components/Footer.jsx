export default function Footer() {
  return (
    <footer className="pt-8 border-t border-noc-border">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-noc-text">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-noc-green led-green"></span>
          <span>SYSTEM_STABLE</span>
          <span className="text-noc-border">|</span>
          <span>© {new Date().getFullYear()} David Yaotse</span>
        </div>
        <div className="flex items-center gap-4">
          <span>BUILD: React_Vite_Tailwind</span>
          <span className="text-noc-border">|</span>
          <span>HOST: Netlify</span>
          <span className="text-noc-border">|</span>
          <span>STATUS: PRODUCTION</span>
        </div>
      </div>
    </footer>
  )
}