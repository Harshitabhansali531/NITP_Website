import { 
  Home, Info, FileText, BookOpen, ScrollText, Briefcase, 
  UserCheck, Users, Landmark, Building, Award, ClipboardList, 
  GraduationCap, CheckSquare, Shield, Search, Building2, 
  LineChart, Layers, LayoutGrid, Globe, Book, Star, 
  Bed, Wallet, HeartHandshake, ShieldAlert, Monitor, Banknote, Calendar, Receipt, Tent, Rocket
} from 'lucide-react';

/**
 * Global Navigation Configuration
 * Each item represents a top-level nav category.
 * Sub-menus support up to 2 levels of nesting.
 */
export const navigationData = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
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
          { label: 'Applied Physics and Materials Engineering', href: '#' },
          { label: 'Architecture & Planning', href: '#' },
          { label: 'Chemical Science and Technology', href: '#' },
          { label: 'Civil Engineering', href: '#' },
          { label: 'Computer Science and Engineering', href: '/department/cse' },
          { label: 'Electrical Engineering', href: '#' },
          { label: 'Electronics and Communication Engineering', href: '#' },
          { label: 'Humanities & Social Sciences', href: '#' },
          { label: 'Mathematics and Computing Technology', href: '#' },
          { label: 'Mechanical Engineering', href: '#' },
          { label: 'Mechatronics and Automation Engineering', href: '#' },
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
    href: '/faculty-directory',
    children: [
      { label: 'Faculty Directory', href: '/faculty-directory', icon: Users },
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
    ],
  },
];

export const heroImages = [
  "/images/DJI_20250925092321_0053_D (1).png",
  "/images/DJI_20250925145712_0143_D.png",
  "/images/IMG_20251019_214850.png",
  "/images/DJI_20250925145758_0148_D.png",
  "/images/DJI_20250925150150_0153_D.png",
  "/images/DSC_0161 (2).png",
  "/images/DJI_20250925161831_0200_D.png",
  "/images/TYNE9859(1).png",
  "/images/VIS07257.png"
];
