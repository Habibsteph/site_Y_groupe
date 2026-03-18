export type ProjectPole =
  | "Graphisme"
  | "Production"
  | "Digital"
  | "Stratégie & Conseil";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  client: string;
  image: string;
  year: string;
  poles: ProjectPole[];
  coverImage?: string;
  images?: string[];
  services: string[];
  heroTitle: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  stats: {
    label: string;
    value: string;
  }[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "bsfb",
    title: "BSFB",
    category: "Graphisme · Production · Digital",
    poles: ["Graphisme", "Production", "Digital"],
    summary:
      "Un univers visuel énergique et une communication conçue pour mobiliser une communauté forte.",
    client: "Baller's Free Babi",
    image: "/projects/bsfb_cover.jpg",
    year: "2025",
    services: ["Branding", "Production", "Digital"],
    heroTitle: "Une identité visuelle pensée pour faire vibrer la communauté.",
    description:
      "Pour BSFB, Y Groupe a conçu un dispositif créatif fort capable d’unifier image, communication et présence terrain autour d’un événement à forte énergie.",
    challenge:
      "Créer une identité impactante, jeune et mémorable capable de fédérer une audience autour d’un événement basket à forte intensité.",
    solution:
      "Nous avons mis en place une direction artistique dynamique, des visuels promotionnels puissants et un univers digital cohérent pour soutenir toute la communication.",
    result:
      "Une image de marque plus forte, une communication plus identifiable et une meilleure présence auprès du public cible.",
    stats: [
      { label: "Supports créés", value: "20+" },
      { label: "Pôles mobilisés", value: "3" },
      { label: "Temps de campagne", value: "6 sem." },
    ],
    gallery: [
      "/projects/bsfb-1.jpg",
      "/projects/bsfb-2.jpg",
      "/projects/bsfb-3.jpg",
    ],
  },
  {
    slug: "infinix",
    title: "Infinix",
    category: "Production",
    poles: ["Production"],
    summary:
      "Des créations premium pour des lancements produits à forte intensité visuelle.",
    client: "Infinix Côte d’Ivoire",
    image: "/projects/infinix_cover.jpg",
    year: "2025",
    services: ["Campagne", "Direction artistique", "Social content"],
    heroTitle:
      "Des campagnes visuelles conçues pour amplifier le lancement produit.",
    description:
      "Y Groupe a accompagné Infinix sur plusieurs prises de parole visuelles avec un objectif clair : produire des créations percutantes, premium et immédiatement lisibles.",
    challenge:
      "Donner aux lancements produits une présence visuelle forte capable de capter l’attention dans un environnement très concurrentiel.",
    solution:
      "Nous avons développé des supports créatifs premium, adaptés aux réseaux sociaux, aux activations et aux déclinaisons de campagne.",
    result:
      "Une meilleure cohérence visuelle sur les campagnes et une perception plus premium des lancements.",
    stats: [
      { label: "Campagnes", value: "5+" },
      { label: "Formats", value: "15+" },
      { label: "Univers créatifs", value: "3" },
    ],
    gallery: [
      "/projects/infinix-1.jpg",
      "/projects/infinix-2.jpg",
      "/projects/infinix-3.jpg",
    ],
  },
  {
    slug: "salon-africain-du-football",
    title: "Salon Africain du Football",
    category: "Graphisme",
    poles: ["Graphisme"],
    summary:
      "Une présence visuelle forte pour un rendez-vous à haute visibilité.",
    client: "SAF",
    image: "/projects/saf_cover.jpg",
    year: "2023",
    services: ["Branding", "Communication événementielle"],
    heroTitle: "Une présence visuelle institutionnelle, moderne et impactante.",
    description:
      "Pour le Salon Africain du Football, nous avons conçu une communication visuelle capable de porter l’événement avec sérieux, visibilité et modernité.",
    challenge:
      "Créer une image forte et professionnelle pour un rendez-vous panafricain à dimension institutionnelle.",
    solution:
      "Nous avons travaillé une direction visuelle claire, forte et immédiatement identifiable sur les différents supports de communication.",
    result:
      "Une communication plus lisible, plus professionnelle et plus cohérente sur l’ensemble des points de contact.",
    stats: [
      { label: "Événement", value: "1" },
      { label: "Supports", value: "10+" },
      { label: "Audience visée", value: "Large" },
    ],
    gallery: [
      "/projects/saf-1.jpg",
      "/projects/saf-2.jpg",
      "/projects/saf-3.jpg",
    ],
  },
  {
    slug: "ninho",
    title: "Ninho",
    category: "Graphisme · Production · Digital · Stratégie & Conseil",
    poles: ["Graphisme", "Production", "Digital", "Stratégie & Conseil"],
    summary:
      "Une campagne visuelle pensée pour créer de l’attente et renforcer l’impact événementiel.",
    client: "Concert Ninho",
    image: "/projects/ninho_cover.jpg",
    year: "2024",
    services: ["Communication", "Visuels événementiels"],
    heroTitle:
      "Créer l’attente, l’impact et la mémorabilité autour d’un grand événement.",
    description:
      "Y Groupe a participé à la conception d’éléments visuels visant à porter la communication d’un concert à fort potentiel d’audience.",
    challenge:
      "Attirer l’attention rapidement et donner à l’événement une image forte, populaire et désirable.",
    solution:
      "Nous avons conçu des visuels promotionnels à fort impact pensés pour les réseaux sociaux et les supports événementiels.",
    result:
      "Une présence visuelle plus marquante et une communication plus efficace autour de l’événement.",
    stats: [
      { label: "Campagne", value: "360°" },
      { label: "Impact visuel", value: "Fort" },
      { label: "Supports", value: "Multi" },
    ],
    gallery: [
      "/projects/ninho-1.jpg",
      "/projects/ninho-2.jpg",
      "/projects/ninho-3.jpg",
    ],
  },
];