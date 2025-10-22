// has to update

export const sampleEvents = [
  {
    id: 1,
    title: "Tech related",
    description: "descrp",
    image: "",
    date: "date",
    time: "time",
    location: "address",
    category: "technology",
    price: 299,
    attendees: 1250,
    featured: true,
  },
  {
    id: 2,
    title: "music related",
    description: "descrp",
    image: "",
    date: "date",
    time: "time",
    location: "address",
    category: "music",
    price: 85,
    attendees: 5000,
    featured: true,
  },
  {
    id: 3,
    title: "bussiness related",
    description: "descrp",
    image: "",
    date: "date",
    time: "time",
    location: "address",
    category: "business",
    price: 149,
    attendees: 200,
    featured: false,
  },
  {
    id: 4,
    title: "sports related",
    description: "descrp",
    image: "",
    date: "date",
    time: "time",
    location: "address",
    category: "sports",
    price: 0,
    attendees: 3200,
    featured: false,
  },
  {
    id: 4,
    title: "culture related",
    description: "descrp",
    image: "",
    date: "date",
    time: "time",
    location: "address",
    category: "culture",
    price: 25,
    attendees: 150,
    featured: false,
  },
  {
    id: 6,
    title: "business related",
    description: "descrp",
    image: "",
    date: "date",
    time: "time",
    location: "address",
    category: "sports",
    category: "business",
    price: 50,
    attendees: 300,
    featured: true,
  },
  {
    id: 7,
    title: "food related",
    description: "descrp",
    image: "",
    date: "date",
    time: "time",
    location: "address",
    category: "sports",
    category: "food",
    price: 75,
    attendees: 24,
    featured: false,
  },
  {
    id: 8,
    title: "music related",
    description: "descrp",
    image: "",
    date: "date",
    time: "time",
    location: "address",
    category: "music",
    price: 40,
    attendees: 80,
    featured: false,
  },
  {
    id: 9,
    title: "welness related",
    description: "descrp",
    image: "",
    date: "date",
    time: "time",
    location: "address",
    category: "sports",
    category: "wellness",
    price: 0,
    attendees: 45,
    featured: false,
  },
  {
    id: 10,
    title: "education related",
    description: "descrp",
    image: "",
    date: "date",
    time: "time",
    location: "address",
    category: "education",
    price: 65,
    attendees: 15,
    featured: false,
  },
  {
    id: 11,
    title: "food related",
    description: "descrp",
    image: "",
    date: "date",
    time: "time",
    location: "address",
    category: "food",
    price: 95,
    attendees: 40,
    featured: false,
  },
  {
    id: 12,
    title: "sports related",
    description: "descrp",
    image: "",
    date: "date",
    time: "time",
    location: "address",
    category: "sports",
    price: 30,
    attendees: 2500,
    featured: true,
  },
];

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

export const getFeaturedEvents = (events) => {
  return events.filter((event) => event.featured);
};

export const sortEventsByDate = (events) => {
  return [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
};
