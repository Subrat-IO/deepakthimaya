import { Building2, Flower2, Globe2, HeartHandshake, Newspaper, Podcast, Tv, type LucideIcon } from "lucide-react";

export type DetailSection = { title: string; paragraphs: string[] };
export type Role = {
  slug: string;
  title: string;
  short: string;
  image: string;
  description: string;
  sections?: DetailSection[];
};

export type Affiliation = {
  name: string;
  label: string;
  url: string;
  detail: string;
  logo?: string;
  icon: LucideIcon;
  accent: string;
  accentBg: string;
};

export const roles: Role[] = [
  {
    slug: "television",
    title: "Actor",
    short:
      "For close to 30 years, Deepak has worked as a television presenter and actor. His acting journey began with acclaimed Bangalore Little Theatre productions before television made him a familiar household presence.",
    image: "/images/ACTOR.jpg",
    description:
      "For close to three decades, Deepak Thimaya has worked as a television presenter and actor, including Kannada television serials, films and theatre.",
  },
  {
    slug: "journalism",
    title: "Journalist",
    short:
      "Active in journalism since his college days, Deepak has edited a newspaper and worked as a freelance journalist and columnist with leading publications. He was also the first editor of the Times of India Group's Vijaya Next weekly.",
    image: "/images/JOURNALIST.jpg",
    description:
      "Active since college, Deepak has edited a newspaper and written as a freelance journalist and columnist for prominent publications.",
  },
  {
    slug: "films",
    title: "Filmmaker",
    short:
      "Equally at home before and behind the camera, Deepak has directed and produced educational films, business and biographical films, short features and the Kannada feature film Neene Bari Neene.",
    image: "/images/FILMMAKER.jpg",
    description:
      "As a filmmaker and producer, he has directed educational, business and biographical films, short features and the Kannada feature Neene Bari Neene.",
    sections: [
      {
        title: "Current Acting Project",
        paragraphs: [
          "Deepak Thimaya is presently playing the lead role in the film Shuddhi, a socially relevant film carrying a strong social message. The project brings him back to acting, the field in which his screen journey began, while drawing upon his extensive experience in storytelling, social communication and visual media.",
        ],
      },
      {
        title: "Journey as a Filmmaker",
        paragraphs: [
          "As a filmmaker and producer, Deepak has directed and produced hundreds of educational films, business films, biographical films, short features and television programmes. His work includes both fiction and non-fiction, with an emphasis on clear storytelling and audience relevance.",
          "He co-produced and directed the Kannada feature film Neene Bari Neene, a musical romantic comedy released in 2015. He has also created numerous television programmes and commissioned films for organisations and institutions.",
        ],
      },
    ],
  },
  {
    slug: "political-shows",
    title: "Political interviews",
    short:
      "Deepak has presented news magazines, quiz shows and influential interview programmes including Time to Talk, Jedara Bale, Special Reporter and Sanjeevini, alongside his work as a senior political analyst.",
    image: "/images/political.jpg",
    description:
      "Deepak has presented political programmes including Time to Talk, Jedara Bale, Special Reporter and Sanjeevini.",
  },
  {
    slug: "entrepreneurship",
    title: "Entrepreneur",
    short:
      "Beginning with advertising, Deepak established ventures across brand promotion, marketing, public relations and consultancy. He is the Managing Director of TV House Network and is connected with ventures in hospitality, healthcare and technology.",
    image: "/images/ENTREPRENEUR.jpg",
    description:
      "He is Managing Director of TV House Network and has established ventures in promotion, marketing, PR and brand consultancy.",
  },
  {
    slug: "verbattle",
    title: "Verbattle",
    short:
      "Deepak's interest in debate and logic led him to establish Verbattle, a professional debate movement that promotes communication, democratic values and leadership and has expanded internationally.",
    image: "/images/verbattle.jpg",
    description:
      "Verbattle promotes debate, logic, communication, democratic values and leadership, with an international presence.",
  },
];

export const INTRO_VIDEO_URL = "https://www.youtube.com/watch?v=XlWm0otaRJ0";

export const videos = [
  { id: "XlWm0otaRJ0", title: "Deepak Thimaya — The Udaya TV Journey", category: "Political Show", description: "A candid conversation about television, journalism and a life in public media.", image: "/images/youtube/XlWm0otaRJ0.jpg", url: INTRO_VIDEO_URL },
  { id: "1porDh4AS8U", title: "Healing, Faith and Purpose", category: "Interview", image: "/images/youtube/1porDh4AS8U.jpg", url: "https://www.youtube.com/watch?v=1porDh4AS8U" },
  { id: "thiyxtrWMY0", title: "FutureFast Sunday Special", category: "Television", image: "/images/youtube/thiyxtrWMY0.jpg", url: "https://www.youtube.com/watch?v=thiyxtrWMY0" },
  { id: "6SHYk5BE2_A", title: "How Power Changes People", category: "Interview", image: "/images/youtube/6SHYk5BE2_A.jpg", url: "https://www.youtube.com/watch?v=6SHYk5BE2_A" },
  { id: "atcfKgORVJI", title: "Why Should India Support Russia?", category: "World Affairs", image: "/images/youtube/atcfKgORVJI.jpg", url: "https://www.youtube.com/watch?v=atcfKgORVJI" },
  { id: "GtlIGGUdXW8", title: "What Is Wrong with Bengaluru?", category: "Civic Conversation", image: "/images/youtube/GtlIGGUdXW8.jpg", url: "https://www.youtube.com/watch?v=GtlIGGUdXW8" },
];

export const affiliations: Affiliation[] = [
  {
    name: "samoohashakti.com",
    label: "Samooha Shakti",
    url: "https://www.samoohashakti.com/",
    detail: "Socio-Political Organisation",
    logo: "/logos/samoohashakti.png",
    icon: Globe2,
    accent: "#e95d18",
    accentBg: "#fff2e7",
  },
  {
    name: "verbattle.com",
    label: "Verbattle",
    url: "https://www.verbattle.com",
    detail: "Debate & Youth Platform",
    logo: "/logos/verbattle.webp",
    icon: Podcast,
    accent: "#a243d4",
    accentBg: "#f5edff",
  },
  {
    name: "supersuddi.com",
    label: "Super Suddi",
    url: "https://www.supersuddi.com",
    detail: "News & Media Portal",
    icon: Newspaper,
    accent: "#168998",
    accentBg: "#e8fafa",
  },
  {
    name: "hubballihealthfestival.com",
    label: "Hubballi Health Fest",
    url: "https://www.hubballihealthfestival.com",
    detail: "Health & Wellness Initiative",
    icon: HeartHandshake,
    accent: "#55a72f",
    accentBg: "#eef8e8",
  },
  {
    name: "tvtowner.com",
    label: "TV Towner",
    url: "https://www.tvtowner.com",
    detail: "TV & Media Community",
    logo: "/logos/tvtowner.png",
    icon: Tv,
    accent: "#b34abb",
    accentBg: "#f9edf9",
  },
  {
    name: "tvhousenetwork.com",
    label: "TV House Network",
    url: "https://www.tvhousenetwork.com",
    detail: "TV House Network",
    logo: "/logos/tv-house-network.png",
    icon: Building2,
    accent: "#416dd4",
    accentBg: "#edf2ff",
  },
  {
    name: "bangalorehealthfestival.com",
    label: "Bengaluru Health Fest",
    url: "https://www.bangalorehealthfestival.com",
    detail: "Bengaluru Health Festival",
    icon: Flower2,
    accent: "#ef7644",
    accentBg: "#fff0e8",
  },
];

export const highlights = [
  {
    title: "Special interviews",
    text:
      "Deepak has worked across almost every genre of Kannada television and every facet of the medium. He is also recognised as a television quiz master and produced the first quiz show for Kannada satellite television.",
    image: "/images/deeeep - Copy.jpg",
    href: "/work/political-shows",
  },
  {
    title: "Jedara Bale",
    text:
      "Jedara Bale became a distinctive issue-based interview programme on Udaya TV, bringing opinion makers, politicians, policy makers and public personalities into conversations that looked beyond the headlines.",
    image: "/images/Alvas Nudisiri - Copy - Copy - Copy.JPG",
    href: "/work/political-shows",
  },
  {
    title: "Neene Bari Neene",
    text:
      "The Kannada feature film Neene Bari Neene was released in 2015 with Anish Tejeshwar, Deepika Kamaiah and Samyukta Hornad in lead roles. Deepak directed the film and co-wrote its story with Vinayak Bhat.",
    image: "/images/3.jpg",
    href: "/work/films",
  },
  {
    title: "Art",
    text:
      "Deepak is an established painter who works across media. His paintings have been displayed and sold through galleries and exhibitions and have received critical appreciation.",
    image: "/images/art_02.jpg",
    href: "/work/art",
  },
  {
    title: "Politics",
    text:
      "Deepak has conceptualised and led public initiatives and political conversations. He is the Chief Inspiration of Samooha Shakti, a socio-political organisation.",
    image: "/images/ss5.jpg",
    href: "/work/political-shows",
  },
  {
    title: "Music",
    text:
      "He has composed acclaimed music albums, including Gaana Gange, and has written and sung songs that have been widely appreciated.",
    image: "/images/6.jpg",
    href: "/work/music",
  },
];

export { galleryItems, gallery } from "@/content/gallery-data";

export const extraPages: Record<
  string,
  { title: string; description: string; image: string; sections?: DetailSection[] }
> = {
  art: {
    title: "Art",
    description:
      "Deepak is an established painter whose works have been displayed and sold in galleries and exhibitions.",
    image: "/images/art_02.jpg",
  },
  music: {
    title: "Music",
    description: "He has composed, written and sung acclaimed music and song albums.",
    image: "/images/6.jpg",
  },
  theatre: {
    title: "Theatre & child theatre",
    description:
      "A stage actor since school days, Deepak has directed and acted in plays and established The Academy for Child Theatre in 1992.",
    image: "/images/BeautyPlus_20200803200641180_save.jpg",
  },
  "social-impact": {
    title: "Social impact",
    description:
      "As a social entrepreneur and public speaker, Deepak has been involved in social and human development initiatives.",
    image: "/images/_BDS5772 - Copy - Copy - Copy.JPG",
  },
  advertising: {
    title: "Advertising & brand promotion",
    description:
      "Deepak began his professional career in advertising and has worked across creative concepts, promotion and design.",
    image: "/images/Me in College.jpg",
  },
};

export type SocialLink = {
  id: "facebook" | "x" | "youtube" | "linkedin" | "instagram";
  label: string;
  url: string;
  background: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/DeepakThimaya/",
    background: "#1877F2",
  },
  {
    id: "x",
    label: "X",
    url: "https://x.com/deepakthimaya",
    background: "#0f1419",
  },
  {
    id: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/@DeepakThimaya",
    background: "#FF0000",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/deepak-thimaya-1a65a710",
    background: "#0A66C2",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/deepakthimaya_official/",
    background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
  },
];
