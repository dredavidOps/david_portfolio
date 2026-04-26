import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { ENV } from '../config/env'

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault()

    // If a contact form endpoint is configured (Formspree, Getform, etc.), use it
    if (ENV.CONTACT_FORM_URL) {
      const formData = new FormData(e.target)
      try {
        const response = await fetch(ENV.CONTACT_FORM_URL, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        })
        if (response.ok) {
          alert('Alert transmitted successfully. I will respond shortly.')
          e.target.reset()
        } else {
          alert('Transmission failed. Please try again or contact directly via email.')
        }
      } catch {
        alert('Transmission failed. Please try again or contact directly via email.')
      }
    } else {
      alert('Form submission placeholder. Set VITE_CONTACT_FORM_URL in .env to enable.')
    }
  }

  return (
    <section id="alerts" className="mb-16">
      <div className="flex items-center gap-2 mb-6 text-xs font-mono text-noc-text">
        <span className="text-noc-cyan">$</span>
        <span>sudo alertctl create --severity=low --assignee={ENV.CONTACT_EMAIL}</span>
      </div>

      <div className="panel rounded-lg p-6 md:p-8 border border-noc-border">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-noc-green led-green"></span>
          <span className="text-sm font-mono text-noc-text">ALERT_CONSOLE — READY TO RECEIVE MESSAGES</span>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <a href={`mailto:${ENV.CONTACT_EMAIL}`} className="panel p-4 rounded border border-noc-border hover:border-noc-red/50 transition-all text-center group">
            <Mail size={20} className="text-noc-red mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-mono text-noc-textBright">EMAIL_CHANNEL</div>
            <div className="text-xs font-mono text-noc-text mt-1">david.yaotse1@gmail.com</div>
          </a>
          <a href={ENV.LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="panel p-4 rounded border border-noc-border hover:border-noc-blue/50 transition-all text-center group">
            <Linkedin size={20} className="text-noc-blue mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-mono text-noc-textBright">LINKEDIN_NODE</div>
            <div className="text-xs font-mono text-noc-text mt-1">/in/davidyaotse</div>
          </a>
          <a href={ENV.GITHUB_URL} target="_blank" rel="noopener noreferrer" className="panel p-4 rounded border border-noc-border hover:border-noc-text/50 transition-all text-center group">
            <Github size={20} className="text-noc-textBright mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-mono text-noc-textBright">GITHUB_REPO</div>
            <div className="text-xs font-mono text-noc-text mt-1">/dredavidOps</div>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-noc-text mb-1">ORIGIN_NAME</label>
              <input type="text" className="w-full px-3 py-2 bg-noc-bg border border-noc-border rounded text-sm text-noc-textBright focus:border-noc-cyan focus:outline-none font-mono" placeholder="visitor_id" />
            </div>
            <div>
              <label className="block text-xs font-mono text-noc-text mb-1">RETURN_PATH</label>
              <input type="email" className="w-full px-3 py-2 bg-noc-bg border border-noc-border rounded text-sm text-noc-textBright focus:border-noc-cyan focus:outline-none font-mono" placeholder="email@domain.com" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-noc-text mb-1">MESSAGE_PAYLOAD</label>
            <textarea rows={4} className="w-full px-3 py-2 bg-noc-bg border border-noc-border rounded text-sm text-noc-textBright focus:border-noc-cyan focus:outline-none font-mono resize-none" placeholder="Describe incident or inquiry..."></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-noc-red/10 border border-noc-red/50 text-noc-red rounded font-mono text-sm hover:bg-noc-red/20 transition-all flex items-center justify-center gap-2">
            <Send size={16} />
            TRANSMIT_ALERT
          </button>
        </form>
      </div>
    </section>
  )
}