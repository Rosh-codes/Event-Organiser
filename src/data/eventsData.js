export const sampleEvents = [
  {
    id: 1,
    title: "Tech Innovation Summit 2024",
    description:
      "Join industry leaders and innovators for a day of cutting-edge technology discussions, networking, and groundbreaking product launches.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    date: "2024-11-15",
    time: "09:00",
    location: "San Francisco Convention Center",
    category: "technology",
    price: 299,
    attendees: 1250,
    featured: true,
  },
  {
    id: 2,
    title: "Summer Music Festival",
    description:
      "Experience an unforgettable weekend of live music featuring top artists from around the world in a beautiful outdoor setting.",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
    date: "2024-07-20",
    time: "14:00",
    location: "Golden Gate Park",
    category: "music",
    price: 85,
    attendees: 5000,
    featured: true,
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass",
    description:
      "Learn the latest digital marketing strategies and techniques from industry experts. Perfect for entrepreneurs and marketing professionals.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
    date: "2024-06-10",
    time: "10:00",
    location: "Downtown Business Center",
    category: "business",
    price: 149,
    attendees: 200,
    featured: false,
  },
  {
    id: 4,
    title: "City Marathon 2024",
    description:
      "Challenge yourself in the annual city marathon. All fitness levels welcome with multiple distance options available.",
    image:
      "https://images.unsplash.com/photo-1544737151-6e4b3999de0a?w=400&h=300&fit=crop",
    date: "2024-09-15",
    time: "06:00",
    location: "City Center Starting Line",
    category: "sports",
    price: 0,
    attendees: 3200,
    featured: false,
  },
  {
    id: 5,
    title: "Art Gallery Opening Night",
    description:
      "Discover contemporary art from emerging local artists. Wine and appetizers will be served throughout the evening.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    date: "2024-08-05",
    time: "18:00",
    location: "Modern Art Gallery",
    category: "culture",
    price: 25,
    attendees: 150,
    featured: false,
  },
  {
    id: 6,
    title: "Startup Pitch Competition",
    description:
      "Watch innovative startups pitch their ideas to a panel of investors. Networking session and awards ceremony included.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop",
    date: "2024-10-22",
    time: "13:00",
    location: "Innovation Hub",
    category: "business",
    price: 50,
    attendees: 300,
    featured: true,
  },
  {
    id: 7,
    title: "Cooking Workshop: Italian Cuisine",
    description:
      "Learn to prepare authentic Italian dishes from a professional chef. All ingredients and equipment provided.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    date: "2024-07-08",
    time: "15:00",
    location: "Culinary Arts Institute",
    category: "food",
    price: 75,
    attendees: 24,
    featured: false,
  },
  {
    id: 8,
    title: "Jazz Night at the Rooftop",
    description:
      "Enjoy smooth jazz performances under the stars with cocktails and city views. Featuring renowned local jazz musicians.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    date: "2024-08-12",
    time: "19:30",
    location: "Skyline Rooftop Bar",
    category: "music",
    price: 40,
    attendees: 80,
    featured: false,
  },
  {
    id: 9,
    title: "Yoga in the Park",
    description:
      "Start your weekend with a rejuvenating yoga session in nature. Suitable for all levels. Bring your own mat.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    date: "2024-06-29",
    time: "08:00",
    location: "Central Park Meadow",
    category: "wellness",
    price: 0,
    attendees: 45,
    featured: false,
  },
  {
    id: 10,
    title: "Photography Workshop: Street Photography",
    description:
      "Explore the art of street photography with professional tips and hands-on practice in the urban landscape.",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    date: "2024-09-07",
    time: "11:00",
    location: "Historic District",
    category: "education",
    price: 65,
    attendees: 15,
    featured: false,
  },
  {
    id: 11,
    title: "Wine Tasting Evening",
    description:
      "Sample premium wines from around the world paired with artisanal cheeses and expert guidance from a sommelier.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
    date: "2024-11-03",
    time: "17:00",
    location: "The Wine Cellar",
    category: "food",
    price: 95,
    attendees: 40,
    featured: false,
  },
  {
    id: 12,
    title: "Basketball Tournament Finals",
    description:
      "Cheer for your favorite team in the championship finals. High-energy atmosphere with food trucks and live entertainment.",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
    date: "2024-08-25",
    time: "16:00",
    location: "Sports Arena",
    category: "sports",
    price: 30,
    attendees: 2500,
    featured: true,
  },
];

// Event categories for search filtering
export const eventCategories = [
  { value: "technology", label: "Technology" },
  { value: "music", label: "Music" },
  { value: "business", label: "Business" },
  { value: "sports", label: "Sports" },
  { value: "culture", label: "Arts & Culture" },
  { value: "food", label: "Food & Drink" },
  { value: "wellness", label: "Health & Wellness" },
  { value: "education", label: "Education" },
];

// Helper functions for filtering events
export const filterEvents = (events, searchTerm, category) => {
  return events.filter((event) => {
    const matchesSearch =
      !searchTerm ||
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = !category || event.category === category;

    return matchesSearch && matchesCategory;
  });
};

// Function to get featured events
export const getFeaturedEvents = (events) => {
  return events.filter((event) => event.featured);
};

// Function to sort events by date
export const sortEventsByDate = (events) => {
  return [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
};
