import { useState } from 'react';

const navItems = [
  {
    label: 'Home',
    href: '#',
    children: [
      { label: 'About NIT Patna', href: '#about' },
      { label: 'Vision & Mission', href: '#' },
      { label: 'Campus Tour', href: '#campus' },
      { label: 'Contact Us', href: '#footer' },
    ],
  },
  {
    label: 'Institute',
    href: '#',
    children: [
      { label: 'Administration', href: '#' },
      { label: 'Annual Reports', href: '#' },
      { label: 'Infrastructure', href: '#' },
      { label: 'Committees', href: '#' },
      { label: 'RTI', href: '#' },
      { label: 'NIRF Ranking', href: '#' },
    ],
  },
  {
    label: 'Academics',
    href: '#',
    children: [
      { label: 'Departments', href: '#' },
      { label: 'Programs Offered', href: '#' },
      { label: 'Curriculum', href: '#' },
      { label: 'Academic Calendar', href: '#' },
      { label: 'Examination', href: '#' },
      { label: 'Admissions', href: '#' },
    ],
  },
  {
    label: 'Faculty & Staff',
    href: '#',
    children: [
      { label: 'Faculty Directory', href: '#' },
      { label: 'Staff Directory', href: '#' },
      { label: 'Faculty Achievements', href: '#' },
      { label: 'Research Profiles', href: '#' },
    ],
  },
  {
    label: 'Research',
    href: '#',
    children: [
      { label: 'Publications', href: '#publications' },
      { label: 'Research Highlights', href: '#research' },
      { label: 'Sponsored Projects', href: '#projects' },
      { label: 'Patents', href: '#' },
    ],
  },
  {
    label: 'Students',
    href: '#',
    children: [
      { label: 'Student Life', href: '#' },
      { label: 'Hostels', href: '#' },
      { label: 'Clubs & Societies', href: '#' },
      { label: 'Placements', href: '#' },
      { label: 'Alumni', href: '#' },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="bg-navy-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0 w-full">
            {navItems.map((item, idx) => (
              <li key={idx} className="dropdown relative group">
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-3 text-sm font-medium hover:bg-burnt-600 transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3.5 h-3.5 ml-1 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.children && (
                  <div className="dropdown-menu absolute left-0 top-full bg-white text-navy-900 rounded-b-lg shadow-xl min-w-[220px] border-t-2 border-burnt-500 z-50">
                    {item.children.map((child, cidx) => (
                      <a
                        key={cidx}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm hover:bg-burnt-50 hover:text-burnt-700 transition-colors border-b border-gray-50 last:border-0"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded hover:bg-burnt-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <span className="lg:hidden text-sm font-semibold">Menu</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-navy-800 animate-slide-down">
          {navItems.map((item, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-navy-800 border-b border-navy-800"
              >
                {item.label}
                {item.children && (
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {item.children && openDropdown === idx && (
                <div className="bg-navy-950 animate-slide-down">
                  {item.children.map((child, cidx) => (
                    <a
                      key={cidx}
                      href={child.href}
                      className="block px-8 py-2.5 text-sm text-gray-300 hover:text-burnt-400 hover:bg-navy-900 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
