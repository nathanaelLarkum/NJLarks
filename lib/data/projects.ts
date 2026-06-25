export type Project = {
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Pizzaometry",
    description: "Modern takeaway website for a pizza restaurant, featuring an online menu, ordering information, and brand identity.",
    url: "https://pizzaometry.netlify.app",
    category: "Takeaway",
    tags: ["Restaurant", "Takeaway", "Menu", "Local Business"],
    featured: true,
  },
  {
    name: "The Crown Uxbridge",
    description: "Warm and inviting pub website showcasing food menus, events, and opening hours for a traditional British pub.",
    url: "https://the-crown-uxbridge.netlify.app",
    category: "Pub & Bar",
    tags: ["Pub", "Bar", "Events", "Food"],
    featured: true,
  },
  {
    name: "Cowley Fish Bar",
    description: "Clean and appetising website for a local fish and chip shop with menu display and location details.",
    url: "https://cowley-fish-bar.netlify.app",
    category: "Fish & Chips",
    tags: ["Takeaway", "Fish & Chips", "Local Business"],
    featured: true,
  },
  {
    name: "Manor Fish Bar",
    description: "Friendly and professional website for a neighbourhood fish and chip shop, designed for quick mobile access.",
    url: "https://manorfishbar.netlify.app",
    category: "Fish & Chips",
    tags: ["Takeaway", "Fish & Chips", "Local Business"],
  },
  {
    name: "Brick & Bean",
    description: "Stylish coffee shop website with a warm aesthetic, showcasing the menu, ambience, and brand story.",
    url: "https://brick-bean.netlify.app",
    category: "Coffee Shop",
    tags: ["Cafe", "Coffee", "Brunch", "Local Business"],
    featured: true,
  },
  {
    name: "Sunshine Ibstock",
    description: "Professional service business website with clear service listings, contact details, and local SEO focus.",
    url: "https://sunshineibstock.netlify.app",
    category: "Local Service",
    tags: ["Service", "Local Business", "SEO"],
  },
  {
    name: "Overdose Desserts",
    description: "Eye-catching dessert shop website with vibrant visuals, menu showcase, and enticing product photography.",
    url: "https://overdose-desserts.netlify.app",
    category: "Dessert Shop",
    tags: ["Desserts", "Takeaway", "Food", "Local Business"],
  },
  {
    name: "Theo's Cafe",
    description: "Elegant cafe and deli website with a focus on atmosphere, showcasing daily specials and the full menu.",
    url: "https://theos-cafe-and-deli.netlify.app",
    category: "Cafe & Deli",
    tags: ["Cafe", "Deli", "Food", "Local Business"],
  },
  {
    name: "Hot Box Chicken",
    description: "Bold and energetic chicken shop website designed to capture attention and drive footfall from local customers.",
    url: "https://hot-box-chicken.netlify.app",
    category: "Chicken Shop",
    tags: ["Takeaway", "Chicken", "Fast Food", "Local Business"],
  },
  {
    name: "Hong Kong Kitchen",
    description: "Authentic Chinese takeaway website with a traditional feel, complete menu display and easy ordering information.",
    url: "https://hongkongkitchen.netlify.app",
    category: "Chinese Takeaway",
    tags: ["Takeaway", "Chinese", "Asian Food", "Local Business"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
