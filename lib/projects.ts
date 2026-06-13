export type Project = {
  title: string
  category: string
  location: string
  description: string
  image: string
  tags: string[]
}

export const featuredProjects: Project[] = [
  {
    title: 'BrightSmile Dental',
    category: 'Healthcare',
    location: 'Toronto, ON',
    description:
      'A calm, trust-building site that made it effortless for new patients to book online and find clear answers.',
    image: '/portfolio/dental-clinic.png',
    tags: ['Website Design', 'Booking System', 'Local SEO'],
  },
  {
    title: 'GreenLeaf Landscaping',
    category: 'Home Services',
    location: 'Calgary, AB',
    description:
      'A bold, quote-focused website that turns seasonal traffic into booked jobs and steady inbound leads.',
    image: '/portfolio/landscaping.png',
    tags: ['Website Design', 'Lead Forms', 'Branding'],
  },
  {
    title: 'Summit Realty Group',
    category: 'Real Estate',
    location: 'Vancouver, BC',
    description:
      'An elegant listings experience built for credibility, fast search, and high-intent buyer inquiries.',
    image: '/portfolio/realestate.png',
    tags: ['Website Design', 'CRM Setup', 'SEO'],
  },
  {
    title: 'Apex Performance',
    category: 'Fitness & Coaching',
    location: 'Austin, TX',
    description:
      'A high-energy funnel that converts cold visitors into free-trial sign-ups and recurring members.',
    image: '/portfolio/fitness.png',
    tags: ['Landing Page', 'Automation', 'Advertising'],
  },
  {
    title: 'Harbor & Co. Law',
    category: 'Professional Services',
    location: 'Chicago, IL',
    description:
      'A polished, authority-first website that earns trust and drives qualified consultation requests.',
    image: '/portfolio/lawfirm.png',
    tags: ['Website Design', 'Branding', 'Lead Gen'],
  },
  {
    title: 'Roast & Ritual Coffee',
    category: 'Hospitality',
    location: 'Portland, OR',
    description:
      'A warm, conversion-driven storefront with online ordering that grew repeat visits month over month.',
    image: '/portfolio/cafe.png',
    tags: ['Website Design', 'E-commerce', 'Branding'],
  },
]

export const moreProjects: Project[] = [
  {
    title: 'Northwind HVAC',
    category: 'Home Services',
    location: 'Denver, CO',
    description:
      'Emergency-ready service site with click-to-call and instant quote requests for busy homeowners.',
    image: '/portfolio/landscaping.png',
    tags: ['Website Design', 'Local SEO'],
  },
  {
    title: 'Lumen Skincare Clinic',
    category: 'Healthcare',
    location: 'Miami, FL',
    description:
      'A refined med-spa experience with online consultations and a seamless booking flow.',
    image: '/portfolio/dental-clinic.png',
    tags: ['Landing Page', 'Booking System'],
  },
  {
    title: 'Vantage Consulting',
    category: 'Professional Services',
    location: 'New York, NY',
    description:
      'A clear, authoritative B2B site engineered to convert visitors into discovery calls.',
    image: '/portfolio/lawfirm.png',
    tags: ['Website Design', 'Automation'],
  },
  {
    title: 'Crestview Realty',
    category: 'Real Estate',
    location: 'Seattle, WA',
    description:
      'Fast, map-driven listings with lead capture built for high-intent property seekers.',
    image: '/portfolio/realestate.png',
    tags: ['Website Design', 'CRM Setup'],
  },
  {
    title: 'IronForge Gym',
    category: 'Fitness & Coaching',
    location: 'Phoenix, AZ',
    description:
      'A membership funnel with trial offers and automated follow-up that fills classes.',
    image: '/portfolio/fitness.png',
    tags: ['Landing Page', 'Advertising'],
  },
  {
    title: 'Daily Grind Roasters',
    category: 'Hospitality',
    location: 'Nashville, TN',
    description:
      'A storytelling brand site with subscriptions and online ordering for loyal regulars.',
    image: '/portfolio/cafe.png',
    tags: ['Website Design', 'E-commerce'],
  },
]
