export interface SchoolInfo {
  name: string;
  subheading: string;
  tagline: string;
  type: string;
  location: string;
  fullAddress: string;
  plusCode: string;
  pincode: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  instagramHandle: string;
  instagramUrl: string;
  currentAdmissionSession: string;
  email?: string;
  aboutPhoto?: string;
  admissionPosterPhoto?: string;
  campusPhoto?: string;
  classroomPhoto?: string;
  secondaryPhone?: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AcademicBlockItem {
  id: string;
  title: string;
  description: string;
  focusAreas: string[];
}

export interface ActivityItem {
  id: string;
  category: 'Classroom Activities' | 'Cultural Activities' | 'Celebrations' | 'Student Participation' | 'School Events';
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Classroom' | 'Activities' | 'Celebrations';
  imageUrl: string;
  caption: string;
}

export interface AdmissionFormData {
  studentName: string;
  parentName: string;
  classApplyingFor: string;
  mobileNumber: string;
  email: string;
  message: string;
}
