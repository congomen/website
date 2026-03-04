export const site = {
  brand: "Congomen",
  metaTitle: "Congomen — Tears of Congo (Na Leli)",
  metaDescription:
    "2026 Congomen n'est ni un label ni une marque ; c'est un cri du cœur. Listen to the new single 'Tears of Congo (Na Leli)' out now on all platforms.",
  baseUrl: "https://congomen.com",
  themeColor: "#FF0000", // Congolese Red

  contact: {
    phone: "", 
    whatsapp: "", 
    email: "congomen2026@gmail.com", // Updated to your project email
    address: "Eastern Congo / Global",
  },

  social: {
    instagram: "https://www.instagram.com/congomen2026/",
    facebook: "", 
    tiktok: "",
    twitter: "",
  },

  hero: {
    title: "Tears of Congo (Na Leli)",
    subtitle:
      "A cry from the heart. A message of resilience. The new single by Congomen.",
    ctaPrimary: {
      label: "Listen on Spotify",
      href: "https://open.spotify.com/album/5NkGDNQDlgokWaaMNaqfBo", // Add your direct link here
    },
    ctaSecondary: {
      label: "Follow on Instagram",
      href: "https://www.instagram.com/congomen2026/",
    },
    image: "/congomen-hero.jpg", // Ensure your cover art is in /public
  },

  sections: [
    {
      id: "mission",
      title: "The Mission",
      items: [
        { title: "Awareness", desc: "Shining a light on the silent struggles in Eastern Congo through art and music." },
        { title: "Resilience", desc: "Celebrating the strength of the Congolese spirit in the face of adversity." },
        { title: "Solidarity", desc: "A call for global attention and empathy for the Silence of the World." },
      ],
    },
  ],
};
export default site;