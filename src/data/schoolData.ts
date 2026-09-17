import { SchoolInfo, FeatureCardItem, AcademicBlockItem, ActivityItem, GalleryItem } from '../types';

/**
 * ============================================================================
 * SCHOOL DATA CONFIGURATION
 * ============================================================================
 * To update school details, phone numbers, social links, or photos,
 * simply edit the values in this file.
 */

export const schoolData: SchoolInfo = {
  name: 'YS Stars Academy',
  subheading: 'YS Stars Academy, Goplapur, Campierganj',
  tagline: 'An Organization of Excellence, Where Learning Begins.',
  type: 'General Education School',
  location: 'Goplapur, Campierganj, Gorakhpur, Uttar Pradesh',
  fullAddress: '26HQ+X4G, Bhagawanpur, Uttar Pradesh 273158',
  plusCode: '26HQ+X4G',
  pincode: '273158',
  phone: '+91 91610 34400',
  phoneRaw: '+919161034400',
  whatsappNumber: '919161034400',
  instagramHandle: '@y.s.starsacademy',
  instagramUrl: 'https://www.instagram.com/y.s.starsacademy/',
  currentAdmissionSession: 'Academic Session 2026–2027',
  email: 'ysstarsacademy@gmail.com',
  aboutPhoto: '/ys_stars_admission_poster.jpg',
  admissionPosterPhoto: '/ys_stars_admission_poster.jpg',
  campusPhoto: '/ys_stars_school_building.jpg',
  classroomPhoto: '/ys_stars_about_photo.jpg',
  secondaryPhone: '+91 91707 43425',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=26HQ%2BX4G%2C+Bhagawanpur%2C+Uttar+Pradesh+273158',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=26HQ%2BX4G%2C+Bhagawanpur%2C+Uttar+Pradesh+273158&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

// Available classes for admission form
export const availableClasses = [
  'Playgroup / Nursery',
  'LKG (Lower Kindergarten)',
  'UKG (Upper Kindergarten)',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
];

// Why Choose YS Stars Academy features
export const whyChooseFeatures: FeatureCardItem[] = [
  {
    id: 'feat-1',
    title: 'Learning-Focused Environment',
    description: 'A structured, peaceful, and supportive atmosphere designed to help students concentrate on daily learning and understanding.',
    iconName: 'BookOpen',
  },
  {
    id: 'feat-2',
    title: 'Student Development',
    description: 'Guiding each learner toward intellectual growth, discipline, confidence, and positive character building.',
    iconName: 'Sparkles',
  },
  {
    id: 'feat-3',
    title: 'Academic Growth',
    description: 'Systematic curriculum delivery emphasizing core fundamentals, conceptual clarity, and regular academic practice.',
    iconName: 'TrendingUp',
  },
  {
    id: 'feat-4',
    title: 'Co-Curricular Activities',
    description: 'Encouraging expression through arts, cultural events, physical games, and collaborative school participation.',
    iconName: 'Palette',
  },
  {
    id: 'feat-5',
    title: 'Positive School Community',
    description: 'Cultivating respectful communication between educators, students, and parents to build mutual trust.',
    iconName: 'Users',
  },
  {
    id: 'feat-6',
    title: 'Learning Beyond the Classroom',
    description: 'Inspiring curiosity and practical awareness through group projects, school functions, and interactive discussions.',
    iconName: 'Compass',
  },
];

// Academic Environment blocks
export const academicBlocks: AcademicBlockItem[] = [
  {
    id: 'acad-1',
    title: 'Classroom Learning',
    description: 'Dedicated lessons focusing on clear foundational knowledge in languages, mathematics, science, and social awareness.',
    focusAreas: ['Interactive teaching methods', 'Regular concept reinforcement', 'Structured study timetable'],
  },
  {
    id: 'acad-2',
    title: 'Student Participation',
    description: 'Encouraging every child to ask questions, share answers, engage in reading exercises, and present their ideas openly.',
    focusAreas: ['Active speaking practice', 'Group problem solving', 'In-class presentation & recitation'],
  },
  {
    id: 'acad-3',
    title: 'Skill Development',
    description: 'Fostering practical cognitive abilities such as analytical thinking, neat handwriting, creative writing, and digital curiosity.',
    focusAreas: ['Reasoning & comprehension', 'Expressive communication', 'Self-discipline and organization'],
  },
  {
    id: 'acad-4',
    title: 'Co-Curricular Learning',
    description: 'Complementing textbook education with creative expression, national day celebrations, and collaborative peer activities.',
    focusAreas: ['Art and craft discovery', 'Cultural celebrations', 'Physical exercise and teamwork'],
  },
];

// School Life and Activities
export const schoolActivities: ActivityItem[] = [
  {
    id: 'act-1',
    category: 'Classroom Activities',
    title: 'Interactive Learning & Reading',
    description: 'Engaging classroom sessions where students read aloud, solve problems together, and participate actively in subject discussions.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Students learning actively in classroom',
  },
  {
    id: 'act-2',
    category: 'Cultural Activities',
    title: 'Music, Drama & Expression',
    description: 'Platform for young talents to perform, build stage confidence, and celebrate cultural heritage and art forms.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    alt: 'School cultural and stage presentation',
  },
  {
    id: 'act-3',
    category: 'Celebrations',
    title: 'National & Festival Celebrations',
    description: 'Honoring Independence Day, Republic Day, Annual Celebrations, and festivals to instill unity and patriotic values.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    alt: 'School celebrations and student gathering',
  },
  {
    id: 'act-4',
    category: 'Student Participation',
    title: 'Team Projects & Group Study',
    description: 'Encouraging peer support, cooperative problem solving, and healthy teamwork across all age groups.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    alt: 'Group study and teamwork participation',
  },
  {
    id: 'act-5',
    category: 'School Events',
    title: 'Sports Day & Fitness Fun',
    description: 'Fostering sportsmanship, physical coordination, agility, and teamwork through regular outdoor games.',
    image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=1000&q=80',
    alt: 'Students enjoying sports and outdoor activities',
  },
];

// Photo Gallery Items
export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-admission',
    title: 'Admission Open 2026–2027 Official Notice',
    category: 'Campus',
    imageUrl: '/ys_stars_admission_poster.jpg',
    caption: 'Official Admission Open 2026–2027 announcement for Y.S. Stars Academy, Goplapur, Campierganj.',
  },
  {
    id: 'gal-0',
    title: 'Classroom Learning & Student Activities',
    category: 'Classroom',
    imageUrl: '/ys_stars_about_photo.jpg',
    caption: 'Empowering Our Children To Step Into The Future With Confidence - YS Stars Academy students and teachers.',
  },
  {
    id: 'gal-1',
    title: 'YS Stars Academy Campus Building & School Buses',
    category: 'Campus',
    imageUrl: '/ys_stars_school_building.jpg',
    caption: 'Official campus building with yellow school buses in Goplapur, Campierganj, Gorakhpur.',
  },
  {
    id: 'gal-2',
    title: 'Active Learning in Classroom',
    category: 'Classroom',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Students engaged in foundational lessons and teacher guidance.',
  },
  {
    id: 'gal-3',
    title: 'Cultural Festival Celebration',
    category: 'Celebrations',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    caption: 'Students showcasing stage performances and cultural diversity.',
  },
  {
    id: 'gal-4',
    title: 'Reading and Quiet Study',
    category: 'Classroom',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Cultivating focused study habits and curiosity through books.',
  },
  {
    id: 'gal-5',
    title: 'Outdoor Play & Physical Education',
    category: 'Activities',
    imageUrl: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=1200&q=80',
    caption: 'Encouraging physical health, games, and active play outdoors.',
  },
  {
    id: 'gal-6',
    title: 'Art, Craft & Creative Expression',
    category: 'Activities',
    imageUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80',
    caption: 'Young learners discovering creative joy and fine motor skills.',
  },
  {
    id: 'gal-7',
    title: 'Assembly & Community Gathering',
    category: 'Campus',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    caption: 'Morning assembly, school prayers, and daily announcements.',
  },
  {
    id: 'gal-8',
    title: 'Science Curiosity & Practical Demonstrations',
    category: 'Classroom',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Exploring science ideas and group discussions in class.',
  },
];
