export interface Testimonial {
    id: number;
    headline: string;
    quote: string;
    name: string;
    title: string;
    image: string;
  }
  
 export const testimonials: Testimonial[] = [
    {
      id: 1,
      headline: "Beautifully showcases our best videos...",
      quote: "Media+ has created our own 'UNI-FLIX.' It's exactly the OTT platform I've been looking for...",
      name: "Girish C. Ballolla",
      title: "Founder & CEO, Gen Next Education, Inc.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 2,
      headline: "A tool that makes it easy to manage videos with AI...",
      quote: "For marketers & go-to-market teams, this is a great portal...",
      name: "Jenifer Ho",
      title: "VP of Marketing, Bitwarden",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 3,
      headline: "Integrates our media with HubSpot CRM...",
      quote: "Media+ seamlessly integrates our media with HubSpot CRM...",
      name: "Tami Strand",
      title: "Senior Director of Marketing, Azuga",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=256&h=256&q=80",
    },
  ];