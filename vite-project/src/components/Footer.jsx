const quickLinks = [
  {
    title: 'Academics',
    links: [
      { label: 'Departments', href: '#' },
      { label: 'Programs', href: '#' },
      { label: 'Academic Calendar', href: '#' },
      { label: 'Examination', href: '#' },
      { label: 'Curriculum', href: '#' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Admissions', href: '#' },
      { label: 'Placements', href: '#' },
      { label: 'Research', href: '#' },
      { label: 'Library', href: '#' },
      { label: 'NIRF Data', href: '#' },
    ],
  },
  {
    title: 'Important',
    links: [
      { label: 'RTI', href: '#' },
      { label: 'Tenders', href: '#' },
      { label: 'Annual Reports', href: '#' },
      { label: 'ICC', href: '#' },
      { label: 'Anti-Ragging', href: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact Us', href: '#' },
      { label: 'How to Reach', href: '#' },
      { label: 'Alumni Portal', href: '#' },
      { label: 'Newsletter', href: '#' },
      { label: 'Feedback', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-navy-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Logo / About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="NIT Patna" className="w-12 h-12 object-contain" width={48} height={48} />
              <div>
                <h3 className="text-white font-bold text-lg font-[var(--font-heading)]">NIT Patna</h3>
                <p className="text-xs text-gray-500">Est. 1886</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              National Institute of Technology Patna is an Institute of National Importance, 
              committed to excellence in technical education, research, and innovation.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <span className="text-burnt-500 mt-0.5">📍</span>
                Ashok Rajpath, Patna, Bihar — 800005, India
              </p>
              <p className="flex items-start gap-2">
                <span className="text-burnt-500 mt-0.5">📞</span>
                +91-612-2371715 / 2372715
              </p>
              <p className="flex items-start gap-2">
                <span className="text-burnt-500 mt-0.5">✉️</span>
                registrar@nitp.ac.in
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-5">
              {['Facebook', 'Twitter', 'LinkedIn', 'YouTube', 'Instagram'].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-burnt-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 text-xs font-bold"
                  aria-label={social}
                  title={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-semibold text-sm mb-4 relative">
                {section.title}
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-burnt-500 rounded-full" />
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link, lidx) => (
                  <li key={lidx}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-burnt-400 transition-colors duration-200 flex items-center gap-1.5"
                    >
                      <span className="text-[10px] text-burnt-600">›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} National Institute of Technology Patna. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-burnt-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-burnt-400 transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-burnt-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
