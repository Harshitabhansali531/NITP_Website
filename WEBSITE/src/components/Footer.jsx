import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';

const Footer = () => {
  const [visitorCount] = useState(['1', '4', '0', '0', '7', '1']);

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Departments', href: '#' },
        { label: 'NIRF', href: '#' },
        { label: 'New Campus', href: '#' },
        { label: 'RTI', href: '#' },
        { label: 'Magazine(Vol.4)', href: '#' },
        { label: 'Study In India', href: '#' },
      ]
    },
    {
      title: 'Explore',
      links: [
        { label: 'Campus', href: '#' },
        { label: 'BOG/FC/BWC Minutes', href: '#' },
        { label: 'Convocation 2023', href: '#' },
        { label: 'Senate Minutes', href: '#' },
        { label: 'SC/ST Cell', href: '#' },
        { label: 'National Service Scheme', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'How to Reach', href: '#' },
        { label: 'Annual Reports', href: '#' },
        { label: 'Tenders', href: '#' },
        { label: 'Academic Calendar', href: '#' },
        { label: 'Terms of Use', href: '#' },
        { label: 'Contact Us', href: '#' },
      ]
    }
  ];

  return (
    <footer id="footer" className="relative bg-[#4d0d0d] text-white pt-16 pb-8 border-t-4 border-[#811919]">
      {/* Background Subtle Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')]" />

      <div className="relative z-10 max-w-[1750px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* LEFT COLUMN: MAP & ADDRESS */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl h-64 group relative">
              <iframe
                title="NIT Patna Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.564!2d85.170252!3d25.619183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58556f8f172d%3A0xc3f347306236b359!2sNational%20Institute%20of%20Technology%20Patna!5e0!3m2!1sen!2sin!4v1710183000000!5m2!1sen!2sin"
                className="w-full h-full grayscale-[0.3] contrast-[1.1] transition-transform duration-700 group-hover:scale-110"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                <p className="text-white/90 font-medium leading-tight">
                  Ashok Rajpath, Mahendru, Patna,<br/>Bihar 800005, India
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-red-400 shrink-0" />
                <a href="tel:06122371715" className="text-white/90 hover:text-white font-bold transition-colors">0612-2371715</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-red-400 shrink-0" />
                <a href="mailto:info@nitp.ac.in" className="text-white/90 hover:text-white font-bold transition-colors">info@nitp.ac.in</a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMNS: LINKS */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <h4 className="text-2xl font-black uppercase tracking-widest text-white relative inline-block pb-3">
                {section.title}
                <span className="absolute bottom-0 left-0 w-16 h-1.5 bg-[#811919] rounded-full" />
              </h4>
              <ul className="space-y-6 pt-4">
                {section.links.map((link, lidx) => (
                  <li key={lidx}>
                    <a 
                      href={link.href} 
                      className="text-white font-bold hover:underline decoration-[3px] underline-offset-[12px] flex items-center gap-3 group transition-all text-lg"
                    >
                      <ChevronRight className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* BOTTOM SECTION: COMPACT STATS & LEGAL */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Visitor Count Mini */}
          <div className="flex items-center gap-3 bg-black/20 px-4 py-2 rounded-xl border border-white/5">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#811919]">Visitors:</span>
            <div className="flex gap-1">
              {visitorCount.map((digit, i) => (
                <span key={i} className="w-6 h-8 bg-[#811919] rounded flex items-center justify-center text-sm font-black shadow-inner">
                  {digit}
                </span>
              ))}
            </div>
          </div>

          {/* Institutional Note */}
          <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.3em] text-center">
            © {new Date().getFullYear()} National Institute of Technology Patna
          </p>

          {/* Micro Socials */}
          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#811919] hover:border-[#811919] transition-all transform hover:-translate-y-1 shadow-lg group"
              >
                <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
