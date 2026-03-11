import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Menu, X } from 'lucide-react';
import { navigationData } from '../data/navigation';

/**
 * Navbar Component
 * 
 * Handles site-wide navigation with support for multi-level dropdowns.
 * Includes responsive mobile navigation and sticky behaviors.
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position for dynamic styling (solid vs transparent/translucent)
  useEffect(() => {
    const handleScroll = () => setIsPageScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever a route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav 
      className={`
        sticky top-0 z-50 transition-all duration-300 
        bg-[#811919] text-white 
        ${isPageScrolled ? 'shadow-xl' : 'border-b border-white/10'}
      `}
    >
      <div className="max-w-[1750px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Desktop Navigation (Center/Spanned) */}
          <ul className="hidden lg:flex items-center justify-center w-full gap-2">
            {navigationData.map((item, index) => (
              <NavItem 
                key={item.label} 
                item={item} 
              />
            ))}
          </ul>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link to="/" className="text-xl font-black uppercase tracking-widest">NITP</Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        activeId={activeDropdown}
        setActiveId={setActiveDropdown}
        subActiveId={activeSubDropdown}
        setSubActiveId={setActiveSubDropdown}
      />
    </nav>
  );
};

/**
 * NavItem: Individual link with Dropdown support
 */
const NavItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <li className="relative group flex items-center h-20">
      <Link
        to={item.href}
        className="
          flex items-center gap-2 px-4 py-2.5 rounded-xl border border-transparent
          text-base xl:text-[1.1rem] font-bold uppercase tracking-wide
          transition-all duration-300 hover:bg-white/10 hover:border-white/5
        "
      >
        {item.label === 'Home' ? <Icon className="w-5 h-5" /> : item.label}
        {item.children && (
          <ChevronRight 
            className="w-4 h-4 rotate-90 opacity-70 transition-transform group-hover:rotate-[270deg]" 
          />
        )}
      </Link>

      {/* Flyout Dropdown */}
      {item.children && (
        <div 
          className="
            absolute top-full left-0 pt-2 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            transition-all duration-200 transform group-hover:translate-y-0 translate-y-2
          "
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 min-w-[320px] p-3 text-slate-800">
            {item.children.map((child) => (
              <SubNavItem key={child.label} child={child} />
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

/**
 * SubNavItem: Dropdown item with potential Level-3 nesting
 */
const SubNavItem = ({ child }) => {
  const ChildIcon = child.icon;

  return (
    <div className="relative group/sub mb-1 last:mb-0">
      <Link
        to={child.href}
        className="
          flex items-center gap-3.5 px-4 py-3 
          text-[15px] font-bold text-slate-700 
          hover:bg-[#811919]/5 hover:text-[#811919] 
          rounded-xl transition-all
        "
      >
        {ChildIcon && <ChildIcon className="w-5 h-5 opacity-60 group-hover/sub:opacity-100" />}
        <span className="flex-1">{child.label}</span>
        {child.children && <ChevronRight className="w-4 h-4 opacity-50" />}
      </Link>

      {/* Level 3 Sub-Dropdown (Fly-out to the right) */}
      {child.children && (
        <div 
          className="
            absolute left-full top-0 ml-2 pt-0
            opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible
            transition-all duration-200 transform group-hover/sub:translate-x-0 -translate-x-2
          "
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 min-w-[350px] p-3 text-slate-800">
            {child.children.map((sub) => (
              <Link
                key={sub.label}
                to={sub.href}
                className="block px-4 py-2.5 text-[14px] font-bold text-slate-600 hover:text-[#811919] hover:bg-[#811919]/5 rounded-lg"
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * MobileMenu: Hierarchical accordion menu for touch devices
 */
const MobileMenu = ({ isOpen, activeId, setActiveId, subActiveId, setSubActiveId }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white text-[#1a1c1e] max-h-[calc(100vh-80px)] overflow-y-auto font-bold border-t border-slate-100">
      {navigationData.map((item, idx) => (
        <div key={item.label} className="border-b border-slate-50 last:border-0">
          <button
            onClick={() => setActiveId(activeId === idx ? null : idx)}
            className={`
              w-full flex items-center justify-between px-8 py-5 
              text-lg uppercase tracking-wider
              ${activeId === idx ? 'text-[#811919] bg-[#811919]/5' : 'text-slate-800'}
            `}
          >
            {item.label}
            {item.children && (
              <ChevronRight className={`w-5 h-5 transition-transform ${activeId === idx ? 'rotate-90 text-[#811919]' : ''}`} />
            )}
          </button>
          
          {item.children && activeId === idx && (
            <div className="bg-slate-50/50 pb-4">
              {item.children.map((child, cidx) => (
                <div key={child.label}>
                  <button
                    onClick={() => child.children ? setSubActiveId(subActiveId === cidx ? null : cidx) : null}
                    className="w-full flex items-center gap-4 px-12 py-3.5 hover:text-[#811919]"
                  >
                    {child.icon && <child.icon className="w-5 h-5 opacity-40" />}
                    <Link 
                      to={child.children ? '#' : child.href} 
                      className="flex-1 text-left text-[15px]"
                    >
                      {child.label}
                    </Link>
                    {child.children && (
                      <ChevronRight className={`w-4 h-4 transition-transform ${subActiveId === cidx ? 'rotate-90' : ''}`} />
                    )}
                  </button>
                  
                  {child.children && subActiveId === cidx && (
                    <div className="bg-slate-100/50 py-2 border-l-4 border-[#811919] mx-12 rounded-r-xl">
                      {child.children.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="block px-6 py-2.5 text-[14px] text-slate-500 hover:text-[#811919]"
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
  );
};

export default Navbar;
