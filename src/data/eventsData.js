// has to update for entries of data

export const sampleEvents = [
  {
    id: 1,
    title: "Operating Systems",
    description: "descrp",
    image: "src/assets/data/OS.png",
    date: "date",
    time: "time",
    location: "address",
    category: "technology",
    attendees: 1250,
    featured: true,
  },
  {
    id: 2,
    title: "Programming Languages & Software Lifecycle Management",
    description: "descrp",
    image: "src/assets/data/Program.png",
    date: "date",
    time: "time",
    location: "address",
    category: "technology",
    attendees: 5000,
    featured: true,
  },
  {
    id: 3,
    title: "Communication / Network Stacks / Internet",
    description: "descrp",
    image: "src/assets/data/Network.png",
    date: "date",
    time: "time",
    location: "address",
    category: "technology",
    attendees: 200,
    featured: false,
  },
  {
    id: 4,
    title: "Security",
    description: "descrp",
    image: "src/assets/data/Security.png",
    date: "date",
    time: "time",
    location: "address",
    category: "technology",
    attendees: 3200,
    featured: false,
  },
  {
    id: 4,
    title: "Workload Management",
    description: "descrp",
    image: "src/assets/data/Workload.png",
    date: "date",
    time: "time",
    location: "address",
    category: "business",
    attendees: 150,
    featured: false,
  },
  {
    id: 6,
    title: "Data Management, Workforce Productivity and Publishing",
    description: "descrp",
    image: "src/assets/data/DataManagement.png",
    date: "date",
    time: "time",
    location: "address",
    category: "business",
    attendees: 300,
    featured: true,
  },
  {
    id: 7,
    title: "Domain Specific",
    description: "descrp",
    image: "src/assets/data/DomainSpecific.png",
    date: "date",
    time: "time",
    location: "address",
    category: "technology",
    attendees: 24,
    featured: false,
  },
  {
    id: 8,
    title: "Angular Project Tips",
    description: "descrp",
    image: "src/assets/data/Angular.png",
    date: "date",
    time: "time",
    location: "address",
    category: "technology",
    attendees: 80,
    featured: false,
  },
  {
    id: 9,
    title: "Bug bounty event",
    description: "descrp",
    image: "src/assets/data/BugBounty.png",
    date: "date",
    time: "time",
    location: "address",
    category: "technology",
    attendees: 45,
    featured: false,
  },
  {
    id: 10,
    title: "Finding Vulnerability tips for Bounty Hunters",
    description: "descrp",
    image: "src/assets/data/Vuln.png",
    date: "date",
    time: "time",
    location: "address",
    category: "technology",
    attendees: 15,
    featured: false,
  },
  {
    id: 11,
    title: "HPC",
    description: "descrp",
    image: "src/assets/data/HPC.png",
    date: "date",
    time: "time",
    location: "address",
    category: "technology",
    attendees: 40,
    featured: false,
  },
  {
    id: 12,
    title: "Moonlight Organization",
    description: "descrp",
    image: "src/assets/data/MoonLight.png",
    date: "date",
    time: "time",
    location: "address",
    category: "business",
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