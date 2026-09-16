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
    sections: [
      {
        title: "Three decades on Kannada television",
        paragraphs: [
          "Deepak Thimaya’s public journey is closely tied to the evolution of Kannada television. For nearly thirty years he has worked in front of the camera as a presenter, anchor, interviewer and actor, developing the ability to be authoritative without becoming distant. His early association included Doordarshan, while his long connection with Udaya TV helped make him a familiar presence in homes across Karnataka.",
          "His range on television has never been limited to one format. He has participated in news magazines, interviews, quiz programmes, current-affairs discussions, educational shows, health programmes, women-centred formats, children’s programmes and entertainment productions—each genre demanding a different kind of communication and public responsibility.",
        ],
      },
      {
        title: "From theatre to the screen",
        paragraphs: [
          "Performance came even earlier. His acting roots reach back to school and theatre, including work with Bangalore Little Theatre. He acted in stage productions, Kannada television serials and cameo appearances in films, learning how character, voice, gesture and silence work together. That foundation explains much of his later screen presence: even when presenting factual or political content, he understands rhythm, narrative tension and the importance of holding attention.",
        ],
      },
    ],
  },
  {
    slug: "journalism",
    title: "Journalist",
    short:
      "Active in journalism since his college days, Deepak has edited a newspaper and worked as a freelance journalist and columnist with leading publications. He was also the first editor of the Times of India Group's Vijaya Next weekly.",
    image: "/images/JOURNALIST.jpg",
    description:
      "Active since college, Deepak has edited a newspaper and written as a freelance journalist and columnist for prominent publications.",
    sections: [
      {
        title: "Curiosity shaped into questions that matter",
        paragraphs: [
          "Journalism began during Deepak’s college years, when he edited a newspaper and discovered that gathering information was only the first step; the real work was deciding what mattered, how it should be explained and why a reader should care. That early experience developed habits that would later serve him across print, television and public speaking.",
          "Over time, he worked as a freelance journalist and columnist with publications including Deccan Herald, Prajavani, Vijay Karnataka, The Times of India, Mid-Day, Outlook and The Week. He also became the first editor of Vijaya Next, a Kannada weekly from the Times of India Group—defining its voice, readership and editorial direction at launch.",
        ],
      },
      {
        title: "Journalism in conversation",
        paragraphs: [
          "His journalism found a natural extension in television interviews and political analysis. Programmes such as Time to Talk, Jedara Bale and Special Reporter created room for questions about governance, policy and public accountability. His analysis has also appeared in Prajavani, placing individual statements within the larger context of Karnataka’s political and social landscape.",
        ],
      },
    ],
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
          "He co-produced and directed the Kannada feature film Neene Bari Neene, released in 2015, with Anish Tejeshwar, Deepika Kamaiah and Samyukta Hornad in the lead roles. He co-wrote the story with Vinayak Bhat. The film was produced by AKK Entertainment, owned by Ashok K. Kheny. He has also created numerous television programmes and commissioned films for organisations and institutions.",
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
      "Deepak has presented political programmes including Time to Talk, Jedara Bale, Special Reporter and Sanjeevini, and has served in senior political communication roles.",
    sections: [
      {
        title: "Special TV Shows",
        paragraphs: [
          "Deepak has worked across almost every genre of Kannada television and in almost every facet of the medium. Having worked as a VJ, anchor, news presenter, show host, analyst, actor, director, producer, executive producer, writer and content director, he has long been recognised as a leader in Kannada television.",
        ],
      },
      {
        title: "Politics",
        paragraphs: [
          "Deepak has conceptualised and led political conversations. From being a political observer and analyst to becoming a political communication strategist, and later serving as Political and Media Secretary to the President of the Karnataka Pradesh Congress Committee, he has transformed himself from a student of political science into a political analyst, political strategist and now a political functionary.",
        ],
      },
    ],
  },
  {
    slug: "entrepreneurship",
    title: "Entrepreneur",
    short:
      "Beginning with advertising, Deepak established ventures across brand promotion, marketing, public relations and consultancy. He is the Managing Director of TV House Network and is connected with ventures in hospitality, healthcare and technology.",
    image: "/images/ENTREPRENEUR.jpg",
    description:
      "He is Managing Director of TV House Network and has established ventures in promotion, marketing, PR and brand consultancy.",
    sections: [
      {
        title: "From advertising to enterprise",
        paragraphs: [
          "Deepak began his professional career in advertising after college, learning to translate creative ideas into clear messages under real constraints. That foundation led him to establish ventures in advertising, brand promotion, marketing, public relations and brand consultancy—fields that ask how attention is earned, how trust is built and how an organisation’s identity should guide everything it says in public.",
        ],
      },
      {
        title: "TV House Network and beyond",
        paragraphs: [
          "He is the Managing Director of TV House Network, working across television-show production, product promotion and events. His long exposure to television and public platforms allows him to view projects as a creator, producer and audience member at once. His biography also records directorships connected with hospitality, healthcare and technology—sectors that share the need to understand people, systems and service.",
        ],
      },
    ],
  },
  {
    slug: "verbattle",
    title: "Verbattle",
    short:
      "Deepak's interest in debate and logic led him to establish Verbattle, a professional debate movement that promotes communication, democratic values and leadership and has expanded internationally.",
    image: "/images/verbattle.jpg",
    description:
      "Verbattle promotes debate, logic, communication, democratic values and leadership, with an international presence.",
    sections: [
      {
        title: "A debate movement built for young minds",
        paragraphs: [
          "Deepak coined the name Verbattle in 2005 by combining “verbal” and “battle,” but the purpose was never argument for argument’s sake. The platform promotes logical thinking, communication, democratic values and leadership through a distinctive three-team debate format that has reached tens of thousands of participants across India and beyond.",
        ],
      },
      {
        title: "Institution, training and impact",
        paragraphs: [
          "Verbattle conducts competitions, academies, workshops, teacher-training programmes and school outreach. Deepak has shaped its philosophy, curriculum and public direction while personally conducting and supervising debates. The Verbattle Foundation advances debate, dialogue, youth leadership and civic responsibility as lasting institutional work—not a one-off media project.",
        ],
      },
    ],
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
    title: "Special TV Shows",
    text:
      "Deepak has worked across almost every genre of Kannada television and in almost every facet of the medium. Having worked as a VJ, anchor, news presenter, show host, analyst, actor, director, producer, executive producer, writer and content director, he has long been recognised as a leader in Kannada television.",
    image: "/images/deeeep - Copy.jpg",
    href: "/work/political-shows",
  },
  {
    title: "Jedara Bale",
    text:
      "Jedara Bale became a distinctive issue-based interview programme on Udaya TV, bringing opinion makers, politicians, policy makers and public personalities into conversations that looked beyond the headlines.",
    image: "/images/WhatsApp Image 2026-09-12 at 00.31.06.jpeg",
    href: "/work/political-shows",
  },
  {
    title: "Neene Bari Neene",
    text:
      "The Kannada feature film Neene Bari Neene was released in 2015, with Anish Tejeshwar, Deepika Kamaiah and Samyukta Hornad in the lead roles. Deepak co-produced and directed the movie and also co-wrote the story with Vinayak Bhat. The movie was produced by AKK Entertainment, owned by Ashok K. Kheny.",
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
      "Deepak has conceptualised and led political conversations. From being a political observer and analyst to becoming a political communication strategist, and later serving as Political and Media Secretary to the President of the Karnataka Pradesh Congress Committee, he has transformed himself from a student of political science into a political analyst, political strategist and now a political functionary.",
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
    image: "/images/WhatsApp Image 2026-09-12 at 00.33.49.jpeg",
    sections: [
      {
        title: "Painting as a parallel language",
        paragraphs: [
          "Alongside television, journalism and public life, Deepak has pursued painting with seriousness and continuity. His work spans colour fields, florals, landscapes, figurative studies and expressive line drawings—often exploring inner worlds, nature and human form with the same curiosity he brings to conversation on screen.",
          "His paintings have been displayed in exhibitions and appreciated by collectors. For Deepak, art is not a hobby tucked behind a public career; it is another way of paying attention—where emotion, symbolism and texture can speak when policy language or a timed interview cannot.",
        ],
      },
      {
        title: "Studio practice",
        paragraphs: [
          "Working across media—from bold acrylics and layered colour to minimal pencil and ink—he treats the studio as a place of experiment rather than repetition. Themes return in variations: light through flowers, mountains and horizons, portraits distilled into line, birds and leaves rendered with quick, decisive marks.",
          "The selection below offers a glimpse of that studio practice: finished canvases and works on paper that have been part of exhibitions and private collections.",
        ],
      },
    ],
  },
  music: {
    title: "Music",
    description: "He has composed, written and sung acclaimed music and song albums.",
    image: "/images/6.jpg",
    sections: [
      {
        title: "Composer, lyricist and voice",
        paragraphs: [
          "Music has run through Deepak’s creative life for decades. He has worked as a singer, composer, lyricist and creative artist, combining melody with storytelling instincts sharpened in theatre, television and film.",
          "His official biography credits him with creating music and song albums connected with Sri Dr Shivakumara Swamiji of Siddaganga Mutt and Sri Balagangadharanatha Swamiji, as well as writing and performing songs that have been widely appreciated.",
        ],
      },
      {
        title: "Gaana Gange and the screen",
        paragraphs: [
          "Among his best-known musical work is Gaana Gange, an acclaimed album that later became part of the creative foundation for the Kannada feature film Neene Bari Neene. That journey—from songs audiences already knew to a full cinematic story—reflects how Deepak treats music not as an isolated track list but as narrative material that can grow into larger artistic forms.",
        ],
      },
    ],
  },
  theatre: {
    title: "Theatre & child theatre",
    description:
      "A stage actor since school days, Deepak has directed and acted in plays and established The Academy for Child Theatre in 1992.",
    image: "/images/BeautyPlus_20200803200641180_save.jpg",
    sections: [
      {
        title: "Roots on the stage",
        paragraphs: [
          "Deepak began acting from his school days and later worked in major stage productions, including with Bangalore Little Theatre. Theatre placed him in direct contact with an audience where there is no edit button and every moment must be earned—training that shaped his later television presence and interview style.",
        ],
      },
      {
        title: "The Academy for Child Theatre",
        paragraphs: [
          "In 1992 he established the Academy for Child Theatre to promote the use of theatre in classrooms and learning. He has written children’s plays, directed productions and trained teachers in theatre-in-education—treating the stage as a laboratory where young people learn cooperation, empathy, language and the courage to be seen.",
          "That work connects naturally to Verbattle and his broader education initiatives: creative expression becomes more powerful when it helps people discover confidence and a voice of their own.",
        ],
      },
    ],
  },
  "social-impact": {
    title: "Social impact",
    description:
      "As a social entrepreneur and public speaker, Deepak has been involved in social and human development initiatives.",
    image: "/images/_BDS5772 - Copy - Copy - Copy.JPG",
    sections: [
      {
        title: "Public platforms with purpose",
        paragraphs: [
          "Deepak has conceptualised and led programmes that combine public education, health awareness, culture and civic engagement. Initiatives such as the Bangalore Health Festival, Sanjeevini Health Festival and Verbattle Knowledge Festivals reflect a consistent impulse: use communication and gathering to address issues that affect everyday lives.",
        ],
      },
      {
        title: "Mentorship and outreach",
        paragraphs: [
          "As a social entrepreneur and experienced public speaker, he has supported human-development initiatives and mentored Samooha Shakti, a socio-political organisation that attracted thousands of members. Whether addressing students, teachers or large public audiences, his talks draw on decades of journalism, debate education and media work to promote informed discussion and social awareness.",
        ],
      },
    ],
  },
  advertising: {
    title: "Advertising & brand promotion",
    description:
      "Deepak began his professional career in advertising and has worked across creative concepts, promotion and design.",
    image: "/images/Me in College.jpg",
    sections: [
      {
        title: "Where the professional journey began",
        paragraphs: [
          "After college, Deepak entered advertising—a field where creativity must work under real constraints. An idea may be imaginative, but it must also solve a problem, speak to a defined audience and produce a result. He worked across concept and design, developing an interest in the complete communication process rather than one isolated task.",
        ],
      },
      {
        title: "Brand thinking that scales",
        paragraphs: [
          "That early training led to enterprises in brand promotion, marketing, public relations and brand consultancy. Combined with his work as a journalist, presenter and producer, it gave him an unusual perspective: he understands not only what an organisation wants to say, but how editors, audiences and communities are likely to receive it. Advertising, for Deepak, was the first chapter in a lifelong practice of turning ideas into clear, credible public language.",
        ],
      },
    ],
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
