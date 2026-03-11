import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Info, FileText, BookOpen, ScrollText, Briefcase, 
  UserCheck, Users, Landmark, Building, Award, ClipboardList, 
  GraduationCap, CheckSquare, Shield, Search, Building2, 
  LineChart, Layers, LayoutGrid, Globe, Book, Star, 
  Bed, Wallet, HeartHandshake, ShieldAlert, Monitor, Banknote, Calendar, Receipt, Tent, Rocket, ChevronRight
} from 'lucide-react';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Institute',
    href: '#',
    children: [
      { label: 'About', href: '#', icon: Info, hasSubMenu: true },
      { label: 'NIT Status & Acts', href: '#', icon: Landmark },
      { label: 'Reports', href: '#', icon: BookOpen, hasSubMenu: true },
      { label: 'Magazine', href: '#', icon: ScrollText },
      { label: 'PAN/GST', href: '#', icon: Receipt },
    ],
  },
  {
    label: 'Administration',
    href: '#',
    children: [
      { label: 'Visitor', href: '#', icon: UserCheck },
      { label: 'NITs Council', href: '#', icon: Users },
      { label: 'Board of Governors', href: '#', icon: Landmark },
      { label: 'Senate', href: '#', icon: Building },
      { label: 'Director', href: '#', icon: Award },
      { label: 'Registrar', href: '#', icon: ClipboardList },
      { label: 'Deans', href: '#', icon: GraduationCap },
      { label: 'HoD', href: '#', icon: CheckSquare },
      { label: 'Chief Proctor', href: '#', icon: Shield },
      { label: 'Proctorial Board', href: '#', icon: Users },
      { label: 'Chief Vigilance Officer', href: '#', icon: Search },
      { label: 'Service Unit Heads', href: '#', icon: Building2 },
      { label: 'Finance Committee', href: '#', icon: LineChart },
      { label: 'Building Work Committee', href: '#', icon: Layers },
      { label: 'Committees', href: '#', icon: Users, hasSubMenu: true },
      { label: 'Minutes of Meeting', href: '#', icon: FileText },
      { label: 'Organization Chart', href: '#', icon: LayoutGrid },
    ],
  },
  {
    label: 'Academics',
    href: '#',
    children: [
      { 
        label: 'Departments', 
        href: '#', 
        icon: Building2, 
        hasSubMenu: true,
        children: [
          { label: 'Computer Science & Engineering', href: '/department/cse' },
          { label: 'Electronics & Communication', href: '/department/ece' },
          { label: 'Electrical Engineering', href: '/department/ee' },
          { label: 'Civil Engineering', href: '/department/civil' },
          { label: 'Mechanical Engineering', href: '/department/mechanical' },
          { label: 'Chemical Engineering', href: '/department/chemical' },
        ]
      },
      { label: 'Intranet Portal', href: '#', icon: Globe },
      { label: 'Programmes', href: '#', icon: Book },
      { label: 'Academic Calendar', href: '#', icon: Calendar },
      { label: 'Rules and Regulation', href: '#', icon: Shield },
      { label: 'Fee Structure', href: '#', icon: Banknote },
      { label: 'Admission', href: '#', icon: UserCheck },
      { label: 'Format of Official Documents', href: '#', icon: FileText },
      { label: 'Academic Notices', href: '#', icon: ClipboardList },
      { label: 'Centre of Excellence', href: '#', icon: Star, hasSubMenu: true },
      { label: 'Patents', href: '#', icon: Award },
      { label: 'Publications', href: '#', icon: BookOpen },
      { label: 'Projects', href: '#', icon: Briefcase },
      { label: 'BIS Dashboard', href: '#', icon: LayoutGrid },
      { label: 'Scholarship', href: '#', icon: GraduationCap },
    ],
  },
  {
    label: 'Faculty & Staff',
    href: '#',
    children: [
      { label: 'Faculty Directory', href: '#faculty-profile', icon: Users },
      { label: 'Officers Directory', href: '#', icon: Shield },
      { label: 'Staff Directory', href: '#', icon: UserCheck },
      { label: 'Admin Portal', href: '#', icon: Monitor },
      { label: 'Faculty Academic Portal', href: '#', icon: LayoutGrid },
      { label: 'Staff Claim Form', href: '#', icon: FileText },
      { label: 'Holidays/Restricted Holidays', href: '#', icon: Calendar },
    ],
  },
  {
    label: 'Students',
    href: '#',
    children: [
      { label: 'Hostel & Mess', href: '#', icon: Bed },
      { label: 'Scholarship', href: '#', icon: GraduationCap },
      { label: 'Clubs/Societies', href: '#', icon: Users },
      { label: 'Anti Ragging', href: '#', icon: ShieldAlert },
      { label: 'Fee Payment', href: '#', icon: Wallet },
      { label: 'Women Cell', href: '#', icon: HeartHandshake },
      { label: 'SC/ST Cell', href: '#', icon: Users },
      { label: 'Student Activity Center', href: '#', icon: Tent },
      { label: 'Tech Fest', href: '#', icon: Rocket },
      { label: 'NSS@NITP', href: '#', icon: HeartHandshake },
      { label: 'E-Cell', href: '#', icon: LineChart },
      { label: 'Unnat Bharat', href: '#', icon: Globe },
      { label: 'Academic Portal (New)', href: '#', icon: Monitor },
      { label: 'Academic Portal(Old)', href: '#', icon: LayoutGrid },
    ],
  },
  {
    label: 'Facilities',
    href: '#',
    children: [
      { label: 'Library', href: '#', icon: Book },
      { label: 'Computer Center', href: '#', icon: Monitor },
      { label: 'Sports', href: '#', icon: Award },
      { label: 'Medical', href: '#', icon: HeartHandshake },
      { label: 'Transport', href: '#', icon: Building },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 bg-[#811919] text-white ${isScrolled ? 'shadow-xl' : 'border-b border-white/10'}`}>
      <div className="max-w-[1750px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center justify-evenly w-full">
            {navItems.map((item, idx) => (
              <li key={idx} className="dropdown relative group">
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-3 mx-1 rounded-lg text-base xl:text-lg font-bold transition-all duration-300 whitespace-nowrap hover:bg-white/15 hover:backdrop-blur-md`}
                >
                  {item.label === 'Home' ? <Home className="w-[20px] h-[20px] mb-0.5" /> : item.label}
                  {item.children && (
                    <svg className="w-3.5 h-3.5 ml-1 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="dropdown-menu absolute left-0 top-full bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] min-w-[320px] border border-[#811919] z-50 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.children.map((child, cidx) => {
                      const Icon = child.icon;
                      return (
                        <div key={cidx} className="relative group/sub">
                          <Link
                            to={child.href}
                            className="flex items-center gap-3 px-4 py-3 text-[16px] text-[#811919] font-medium hover:bg-[#811919]/10 rounded-lg transition-colors group/item"
                          >
                            {Icon && <Icon className="w-[20px] h-[20px] shrink-0" />}
                            <span className="flex-1">{child.label}</span>
                            {child.hasSubMenu && (
                              <ChevronRight className="w-4 h-4 opacity-70 shrink-0" />
                            )}
                          </Link>
                          {/* Nested Level 2 (Departments) */}
                          {child.children && (
                            <div className="absolute left-full top-0 ml-1 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] min-w-[280px] border border-[#811919] p-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                              {child.children.map((subChild, scidx) => (
                                <Link
                                  key={scidx}
                                  to={subChild.href}
                                  className="flex items-center gap-3 px-4 py-2 text-[14px] text-[#811919] font-medium hover:bg-[#811919]/10 rounded-lg transition-colors"
                                >
                                  {subChild.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded transition-colors ${isScrolled ? 'hover:bg-gray-100 text-navy-900' : 'hover:bg-white/20 text-white'}`}
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
          <span className="lg:hidden text-sm font-semibold ml-2">Menu</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#811919] border-t border-white/10 overflow-y-auto max-h-[calc(100vh-64px)]">
          {navItems.map((item, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-base font-bold bg-[#811919] border-b border-white/5"
              >
                {item.label}
                {item.children && (
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {item.children && openDropdown === idx && (
                <div className="bg-white/5">
                  {item.children.map((child, cidx) => (
                    <div key={cidx}>
                      <button
                        onClick={() => child.children ? setOpenSubDropdown(openSubDropdown === cidx ? null : cidx) : null}
                        className="w-full flex items-center gap-3 px-10 py-3 text-[15px] font-medium text-gray-200 hover:text-white hover:bg-white/10"
                      >
                        {child.icon && <child.icon className="w-[18px] h-[18px]" />}
                        <Link to={child.children ? '#' : child.href} className="flex-1 text-left" onClick={() => !child.children && setMobileOpen(false)}>{child.label}</Link>
                        {child.hasSubMenu && (
                          <ChevronRight className={`w-4 h-4 transition-transform ${openSubDropdown === cidx ? 'rotate-90' : ''}`} />
                        )}
                      </button>
                      {child.children && openSubDropdown === cidx && (
                        <div className="bg-black/20">
                          {child.children.map((sub, scidx) => (
                            <Link
                              key={scidx}
                              to={sub.href}
                              className="block px-16 py-2 text-[14px] text-gray-400 hover:text-white hover:bg-white/5"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
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
