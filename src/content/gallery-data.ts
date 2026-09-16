import type { StaticImageData } from "next/image";
import deepakPortrait from "@/app/deeepak2.png";

export type GalleryCategory = "conversations" | "stage" | "learning" | "portraits" | "art";
export type GalleryChapterId = "early" | "sadhguru" | "learning" | "public-life" | "current" | "archive" | "studio";

export type GalleryItem = {
  id: string;
  src: string | StaticImageData;
  alt: string;
  title: string;
  caption: string;
  category: GalleryCategory;
  chapter: GalleryChapterId;
  year?: string;
  focus?: string;
};

export const galleryChapters: Array<{
  id: GalleryChapterId;
  period: string;
  title: string;
  description: string;
}> = [
  { id: "early", period: "2004–2013", title: "The early chapters", description: "College memories, early portraits and the first frames of a life in communication." },
  { id: "sadhguru", period: "2011", title: "Conversations with Sadhguru", description: "A memorable series of conversations and time spent with Sadhguru Jaggi Vasudev." },
  { id: "learning", period: "2014", title: "Learning without borders", description: "Interactive classrooms, workshops and exchanges with students and educators." },
  { id: "public-life", period: "2015–2020", title: "A voice in public life", description: "On stage, in conversation and across programmes that brought people and ideas together." },
  { id: "current", period: "2021–Present", title: "The current chapter", description: "Recent portraits, civic conversations and public engagements." },
  { id: "archive", period: "Across the years", title: "From the archive", description: "Selected portraits, travels, platforms and encounters from a life lived in public." },
  { id: "studio", period: "Art studio", title: "Lines, colour and inner worlds", description: "Paintings and drawings spanning landscapes, florals, figures and abstraction." },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "early-college", src: "/images/Me in College.jpg", alt: "A young Deepak Thimaya during his college years",
    title: "College days", caption: "An early portrait from Deepak Thimaya’s college years.", category: "portraits", chapter: "early", year: "Early years", focus: "center 24%",
  },
  {
    id: "early-vidhana-soudha", src: "/images/100_2281 - Copy.jpg", alt: "Deepak Thimaya at Vidhana Soudha in Bengaluru",
    title: "Bengaluru nights", caption: "A 2004 portrait in front of an illuminated Vidhana Soudha.", category: "portraits", chapter: "early", year: "2004",
  },
  {
    id: "early-audience", src: "/images/100_6375 - Copy.jpg", alt: "Deepak Thimaya at a public programme in 2004",
    title: "In the audience", caption: "A candid frame from a public programme in 2004.", category: "stage", chapter: "early", year: "2004",
  },
  {
    id: "early-students", src: "/images/2.jpg", alt: "Deepak Thimaya surrounded by young students",
    title: "Listening to young voices", caption: "An early exchange with students gathered around their ideas and notes.", category: "learning", chapter: "early", year: "Archive",
  },
  {
    id: "early-interview-set", src: "/images/5.jpg", alt: "Deepak Thimaya during an outdoor interview",
    title: "The outdoor set", caption: "A behind-the-scenes moment from an outdoor conversation.", category: "stage", chapter: "early", year: "Archive",
  },

  {
    id: "sadhguru-portrait", src: "/images/sadguru.jpg", alt: "Deepak Thimaya with Sadhguru Jaggi Vasudev",
    title: "With Sadhguru", caption: "Deepak Thimaya with Sadhguru Jaggi Vasudev in 2011.", category: "conversations", chapter: "sadhguru", year: "2011",
  },
  {
    id: "sadhguru-conversation", src: "/images/Sadh.jpg", alt: "Deepak Thimaya in conversation with Sadhguru Jaggi Vasudev",
    title: "A conversation with Sadhguru", caption: "An engaged one-to-one conversation with Sadhguru Jaggi Vasudev.", category: "conversations", chapter: "sadhguru", year: "2011",
  },
  {
    id: "sadhguru-outdoors", src: "/images/With Sri Sadguru Jaggi Vasudev.jpg", alt: "Deepak Thimaya and Sadhguru Jaggi Vasudev beside a forest stream",
    title: "A quieter moment", caption: "Deepak Thimaya and Sadhguru beside a forest stream.", category: "conversations", chapter: "sadhguru", year: "2011",
  },
  {
    id: "sadhguru-walk", src: "/images/Sad and Me.jpg", alt: "Deepak Thimaya walking with Sadhguru Jaggi Vasudev outdoors",
    title: "On the trail", caption: "A candid outdoor memory with Sadhguru Jaggi Vasudev.", category: "conversations", chapter: "sadhguru", year: "2011",
  },

  {
    id: "learning-hall", src: "/images/IMG_3899.JPG", alt: "Deepak Thimaya speaking to students in a school hall",
    title: "A room full of questions", caption: "Opening an interactive session with students overseas.", category: "learning", chapter: "learning", year: "2014",
  },
  {
    id: "learning-hall-wide", src: "/images/IMG_3900.JPG", alt: "Students listening to Deepak Thimaya in a school hall",
    title: "Learning as dialogue", caption: "A packed school hall turns into a space for conversation.", category: "learning", chapter: "learning", year: "2014",
  },
  {
    id: "learning-student-group", src: "/images/IMG_3971.JPG", alt: "Deepak Thimaya with a group of international students",
    title: "After the session", caption: "A group portrait with students after a classroom exchange.", category: "learning", chapter: "learning", year: "2014",
  },
  {
    id: "learning-classroom", src: "/images/IMG_3984.JPG", alt: "Deepak Thimaya with students in an international classroom",
    title: "Across cultures", caption: "Meeting students and exchanging perspectives in their classroom.", category: "learning", chapter: "learning", year: "2014",
  },
  {
    id: "learning-young-class", src: "/images/IMG_4026.JPG", alt: "A classroom of young students during an interactive session",
    title: "Curious minds", caption: "Young students at an energetic learning session.", category: "learning", chapter: "learning", year: "2014",
  },
  {
    id: "learning-circle", src: "/images/IMG_4032.JPG", alt: "Deepak Thimaya leading a seated classroom discussion",
    title: "The classroom circle", caption: "Learning moves off the desks and into an open conversation.", category: "learning", chapter: "learning", year: "2014",
  },
  {
    id: "learning-teaching", src: "/images/IMG_4043.JPG", alt: "Deepak Thimaya speaking with a teacher and students",
    title: "Ideas at the board", caption: "A shared classroom session with educators and students.", category: "learning", chapter: "learning", year: "2014",
  },
  {
    id: "learning-questions", src: "/images/IMG_4044.JPG", alt: "Deepak Thimaya asking a question during a classroom session",
    title: "Keeping it interactive", caption: "A moment of humour and participation in the classroom.", category: "learning", chapter: "learning", year: "2014",
  },
  {
    id: "learning-verbattle-session", src: "/images/VC 3.jpg", alt: "Deepak Thimaya interacting with students at a Verbattle session",
    title: "Building confident voices", caption: "A lively exchange with students through Verbattle.", category: "learning", chapter: "learning", year: "2014",
  },
  {
    id: "learning-student-audience", src: "/images/vm1.jpg", alt: "A large student audience at a Verbattle programme",
    title: "The next generation speaks", caption: "Students gather for a programme centred on thought and expression.", category: "learning", chapter: "learning", year: "2014",
  },

  {
    id: "public-honour", src: "/images/_BDS5772 - Copy - Copy - Copy.JPG", alt: "Deepak Thimaya being honoured on stage",
    title: "An honour on stage", caption: "A ceremonial moment at a public programme in 2015.", category: "stage", chapter: "public-life", year: "2015",
  },
  {
    id: "public-alvas", src: "/images/Alvas Nudisiri - Copy - Copy - Copy.JPG", alt: "Deepak Thimaya on the dais at Alva's Nudisiri",
    title: "Alva’s Nudisiri", caption: "On the dais at the celebrated cultural and literary gathering.", category: "stage", chapter: "public-life", year: "Archive",
  },
  {
    id: "public-speaker-2017", src: "/images/deeeep - Copy.jpg", alt: "Deepak Thimaya speaking into a microphone",
    title: "Speaking from experience", caption: "A public conversation on ideas, media and communication.", category: "stage", chapter: "public-life", year: "2017",
  },
  {
    id: "public-student-forum", src: "/images/ss5.jpg", alt: "Deepak Thimaya addressing a student forum",
    title: "Among young thinkers", caption: "Addressing a full student forum in 2018.", category: "learning", chapter: "public-life", year: "2018",
  },
  {
    id: "public-dk-shivakumar", src: "/images/20200301_190455.jpg", alt: "Deepak Thimaya in conversation with D. K. Shivakumar",
    title: "In conversation with D. K. Shivakumar", caption: "A candid exchange with D. K. Shivakumar in 2020.", category: "conversations", chapter: "public-life", year: "2020",
  },
  {
    id: "public-verbattle-winner", src: "/images/verbattle.jpg", alt: "A winner being recognised at a Verbattle finale",
    title: "Celebrating a winning voice", caption: "A Verbattle finalist is recognised on stage.", category: "learning", chapter: "public-life", year: "Archive",
  },

  {
    id: "current-portrait-2021", src: "/images/BeautyPlus_20210616191504064_save.jpg", alt: "Portrait of Deepak Thimaya",
    title: "A considered gaze", caption: "A portrait from 2021.", category: "portraits", chapter: "current", year: "2021", focus: "center 20%",
  },
  {
    id: "current-rahul-gandhi", src: "/images/Rahul Gandhi.jpeg", alt: "Deepak Thimaya walking alongside Rahul Gandhi at a public engagement",
    title: "Alongside Rahul Gandhi", caption: "A moment from a public engagement in 2022.", category: "conversations", chapter: "current", year: "2022",
  },
  {
    id: "current-blue-portrait", src: "/images/DSC07863.JPG", alt: "Deepak Thimaya in a blue kurta",
    title: "The storyteller", caption: "A contemporary portrait from 2024.", category: "portraits", chapter: "current", year: "2024", focus: "center 20%",
  },
  {
    id: "current-public-forum", src: "/images/WhatsApp Image 2026-09-11 at 23.59.01 (1).jpeg", alt: "Deepak Thimaya seated at a public forum",
    title: "At a public forum", caption: "Listening in before taking the conversation forward.", category: "stage", chapter: "current", year: "Recent",
  },
  {
    id: "current-siddaramaiah-standing", src: "/images/WhatsApp Image 2026-09-12 at 00.31.06 (9).jpeg", alt: "Deepak Thimaya with former Karnataka Chief Minister Siddaramaiah",
    title: "With Siddaramaiah", caption: "Deepak Thimaya with former Karnataka Chief Minister Siddaramaiah.", category: "conversations", chapter: "current", year: "Archive",
  },
  {
    id: "current-siddaramaiah-conversation", src: "/images/WhatsApp Image 2026-09-12 at 00.31.06.jpeg", alt: "Deepak Thimaya talking with former Karnataka Chief Minister Siddaramaiah",
    title: "In conversation with Siddaramaiah", caption: "Talking with former Karnataka Chief Minister Siddaramaiah in Bengaluru.", category: "conversations", chapter: "current", year: "Archive",
  },
  {
    id: "current-samvada", src: "/images/WhatsApp Image 2026-09-12 at 00.31.06 (7).jpeg", alt: "Deepak Thimaya on a Samvada discussion panel",
    title: "Samvada", caption: "Sharing the table at a public discussion centred on women’s voices.", category: "stage", chapter: "current", year: "Archive",
  },
  {
    id: "current-outreach", src: "/images/WhatsApp Image 2026-09-12 at 00.31.06 (10).jpeg", alt: "Deepak Thimaya speaking at a Verbattle teachers outreach programme",
    title: "Teachers outreach", caption: "At a Verbattle outreach programme for teachers.", category: "learning", chapter: "current", year: "Archive",
  },

  {
    id: "archive-hero-portrait", src: deepakPortrait, alt: "Portrait of Deepak Thimaya",
    title: "Poised for the next chapter", caption: "A formal portrait shaped by years of storytelling and public work.", category: "portraits", chapter: "archive", focus: "center 24%",
  },
  {
    id: "archive-red-portrait", src: "/images/WhatsApp Image 2026-09-11 at 23.34.28.jpeg", alt: "Close portrait of Deepak Thimaya in a red sweater",
    title: "Direct gaze", caption: "A close, characterful portrait from the personal archive.", category: "portraits", chapter: "archive", focus: "center 20%",
  },
  {
    id: "archive-blue-kurta", src: "/images/WhatsApp Image 2026-09-12 at 00.26.10.jpeg", alt: "Portrait of Deepak Thimaya in a blue kurta",
    title: "In blue", caption: "A relaxed contemporary portrait.", category: "portraits", chapter: "archive", focus: "center 18%",
  },
  {
    id: "archive-venice", src: "/images/WhatsApp Image 2026-09-12 at 00.31.05 (1).jpeg", alt: "Deepak Thimaya travelling in a European city",
    title: "A traveller’s frame", caption: "A sunlit pause during travels in Europe.", category: "portraits", chapter: "archive",
  },
  {
    id: "archive-interview-close", src: "/images/WhatsApp Image 2026-09-12 at 00.31.05 (2).jpeg", alt: "Deepak Thimaya speaking during an interview",
    title: "In conversation", caption: "A close frame from an interview and discussion.", category: "stage", chapter: "archive",
  },
  {
    id: "archive-leaders-group", src: "/images/WhatsApp Image 2026-09-12 at 00.31.05.jpeg", alt: "Deepak Thimaya with guests after a meeting",
    title: "After the meeting", caption: "A group memory following a public conversation.", category: "conversations", chapter: "archive",
  },
  {
    id: "archive-speaking-white", src: "/images/WhatsApp Image 2026-09-12 at 00.31.06 (1).jpeg", alt: "Deepak Thimaya speaking at a table microphone",
    title: "Making a point", caption: "A focused moment from a live discussion.", category: "stage", chapter: "archive",
  },
  {
    id: "archive-outdoors-candid", src: "/images/WhatsApp Image 2026-09-12 at 00.31.06 (2).jpeg", alt: "A candid outdoor portrait of Deepak Thimaya",
    title: "Off the clock", caption: "A light-hearted moment away from the stage.", category: "portraits", chapter: "archive",
  },
  {
    id: "archive-europe-view", src: "/images/WhatsApp Image 2026-09-12 at 00.31.06 (3).jpeg", alt: "Deepak Thimaya overlooking a European city",
    title: "Above the city", caption: "A joyful travel memory high above the city streets.", category: "portraits", chapter: "archive",
  },
  {
    id: "archive-speaking-blue", src: "/images/WhatsApp Image 2026-09-12 at 00.31.06 (5).jpeg", alt: "Deepak Thimaya speaking into a microphone",
    title: "The animated speaker", caption: "Bringing energy and humour to a live session.", category: "stage", chapter: "archive",
  },
  {
    id: "archive-speaking-white-two", src: "/images/WhatsApp Image 2026-09-12 at 00.31.06 (6).jpeg", alt: "Deepak Thimaya addressing an audience",
    title: "Holding the room", caption: "A point made with clarity during a public programme.", category: "stage", chapter: "archive",
  },
  {
    id: "archive-nature", src: "/images/WhatsApp Image 2026-09-12 at 00.31.06 (8).jpeg", alt: "Deepak Thimaya seated outdoors in a green kurta",
    title: "Rooted in nature", caption: "A quiet outdoor portrait among weathered wood and greenery.", category: "portraits", chapter: "archive",
  },
  {
    id: "archive-formal", src: "/images/beauty - Copy - Copy - Copy.jpg", alt: "Formal portrait of Deepak Thimaya",
    title: "The formal frame", caption: "A polished portrait from 2014.", category: "portraits", chapter: "archive", year: "2014", focus: "center 18%",
  },
  {
    id: "archive-travel-buddha", src: "/images/buddi.jpg", alt: "Deepak Thimaya at a Buddhist temple",
    title: "Journeys east", caption: "A travel portrait at a Buddhist temple.", category: "portraits", chapter: "archive",
  },
  {
    id: "archive-travel-monastery", src: "/images/buddu.jpg", alt: "Deepak Thimaya outside a Buddhist monastery",
    title: "At the monastery gates", caption: "A pause at an ornate monastery entrance.", category: "portraits", chapter: "archive",
  },
  {
    id: "archive-on-set", src: "/images/3.jpg", alt: "Deepak Thimaya at an outdoor television shoot",
    title: "Behind the camera", caption: "On location with the crew during an outdoor production.", category: "stage", chapter: "archive",
  },
  {
    id: "archive-conversation", src: "/images/4.jpg", alt: "Deepak Thimaya in an informal outdoor conversation",
    title: "Between takes", caption: "An easy conversation between moments on set.", category: "stage", chapter: "archive",
  },
  {
    id: "archive-portrait-red", src: "/images/der.jpeg", alt: "Deepak Thimaya in a red polo and blazer",
    title: "City portrait", caption: "A contemporary portrait from the personal archive.", category: "portraits", chapter: "archive", focus: "center 20%",
  },
  {
    id: "archive-panel", src: "/images/11.jpg", alt: "Deepak Thimaya speaking on a panel",
    title: "On the panel", caption: "Contributing to a public conversation.", category: "stage", chapter: "archive",
  },
  {
    id: "archive-lamp", src: "/images/12.jpg", alt: "Deepak Thimaya beside a ceremonial lamp",
    title: "Opening ceremony", caption: "A ceremonial beginning to a public programme.", category: "stage", chapter: "archive",
  },
  {
    id: "archive-microphone", src: "/images/20.jpg", alt: "Deepak Thimaya speaking at an interview programme",
    title: "The interviewer", caption: "A familiar place: microphone in hand, conversation in motion.", category: "stage", chapter: "archive",
  },
  {
    id: "archive-yediyurappa", src: "/images/12963670_10208210003704498_7076450299665557051_n - Copy.jpg", alt: "Deepak Thimaya with B. S. Yediyurappa during a journey",
    title: "A shared journey", caption: "A candid travel moment with B. S. Yediyurappa.", category: "conversations", chapter: "archive",
  },

  {
    id: "art-eye", src: "/images/WhatsApp Image 2026-09-12 at 00.33.46.jpeg", alt: "Abstract black ink drawing resembling an eye and a fish",
    title: "The watching eye", caption: "A bold ink form hovering between eye, fish and symbol.", category: "art", chapter: "studio",
  },
  {
    id: "art-light", src: "/images/WhatsApp Image 2026-09-12 at 00.33.45 (1).jpeg", alt: "Painting of a single flower reaching through a luminous sky",
    title: "Reaching for light", caption: "A solitary bloom set against bands of colour.", category: "art", chapter: "studio",
  },
  {
    id: "art-lotus-dusk", src: "/images/WhatsApp Image 2026-09-12 at 00.33.45 (2).jpeg", alt: "Painting of lotus flowers on a pink lake",
    title: "Lotus at dusk", caption: "Lotus forms rise through a warm, quiet horizon.", category: "art", chapter: "studio",
  },
  {
    id: "art-mountain", src: "/images/WhatsApp Image 2026-09-12 at 00.33.45.jpeg", alt: "Textured painting of a mountain against a warm sky",
    title: "The mountain within", caption: "A textured summit held against earth and fire tones.", category: "art", chapter: "studio",
  },
  {
    id: "art-face", src: "/images/WhatsApp Image 2026-09-12 at 00.33.46 (1).jpeg", alt: "Expressive line drawing of a face",
    title: "Unmasked", caption: "An expressive face assembled through searching pencil lines.", category: "art", chapter: "studio",
  },
  {
    id: "art-figure", src: "/images/WhatsApp Image 2026-09-12 at 00.33.46 (2).jpeg", alt: "Abstract line drawing of a figure",
    title: "Figure in thought", caption: "Gesture and geometry meet in an abstract figure study.", category: "art", chapter: "studio",
  },
  {
    id: "art-leaf", src: "/images/WhatsApp Image 2026-09-12 at 00.33.46 (3).jpeg", alt: "Minimal pencil drawing of a heart-shaped leaf",
    title: "Bodhi leaf", caption: "A minimal study of symmetry, veins and organic form.", category: "art", chapter: "studio",
  },
  {
    id: "art-profile", src: "/images/WhatsApp Image 2026-09-12 at 00.33.47 (1).jpeg", alt: "Layered pencil profile study",
    title: "Profile in motion", caption: "Overlapping contours turn a profile into movement.", category: "art", chapter: "studio",
  },
  {
    id: "art-line-face-one", src: "/images/WhatsApp Image 2026-09-12 at 00.33.47 (2).jpeg", alt: "Abstract continuous-line portrait",
    title: "Thought lines I", caption: "A portrait allowed to emerge from one restless line.", category: "art", chapter: "studio",
  },
  {
    id: "art-line-face-two", src: "/images/WhatsApp Image 2026-09-12 at 00.33.47 (3).jpeg", alt: "Abstract line portrait in profile",
    title: "Thought lines II", caption: "A second study in face, rhythm and open space.", category: "art", chapter: "studio",
  },
  {
    id: "art-rain", src: "/images/WhatsApp Image 2026-09-12 at 00.33.47.jpeg", alt: "Purple abstract painting with fine vertical marks",
    title: "After the rain", caption: "Fine sparks of colour rise across a deep violet field.", category: "art", chapter: "studio",
  },
  {
    id: "art-orange-flowers", src: "/images/WhatsApp Image 2026-09-12 at 00.33.48 (1).jpeg", alt: "Bright floral painting on an orange ground",
    title: "Sunlit bouquet", caption: "A spontaneous bouquet alive with orange and yellow.", category: "art", chapter: "studio",
  },
  {
    id: "art-line-face-three", src: "/images/WhatsApp Image 2026-09-12 at 00.33.48 (2).jpeg", alt: "Abstract single-line portrait drawing",
    title: "Thought lines III", caption: "A face distilled into a continuous looping gesture.", category: "art", chapter: "studio",
  },
  {
    id: "art-ripples", src: "/images/WhatsApp Image 2026-09-12 at 00.33.48.jpeg", alt: "Dark painting of leaves emerging from circular ripples",
    title: "Quiet ripples", caption: "New growth breaks the surface of a dark reflecting pool.", category: "art", chapter: "studio",
  },
  {
    id: "art-sunflower", src: "/images/WhatsApp Image 2026-09-12 at 00.33.49 (1).jpeg", alt: "Colourful painting of a radiant sunflower",
    title: "Radiant bloom", caption: "A flower expands into a burst of energetic colour.", category: "art", chapter: "studio",
  },
  {
    id: "art-bird", src: "/images/WhatsApp Image 2026-09-12 at 00.33.49 (2).jpeg", alt: "Bold black drawing of a seated bird",
    title: "The inner bird", caption: "A bird rendered with weight, texture and quick black strokes.", category: "art", chapter: "studio",
  },
  {
    id: "art-wildflowers", src: "/images/WhatsApp Image 2026-09-12 at 00.33.49 (3).jpeg", alt: "Painting of four red and orange wildflowers",
    title: "Four wildflowers", caption: "Small blooms bend and gather against a rose-toned sky.", category: "art", chapter: "studio",
  },
  {
    id: "art-earth-portrait", src: "/images/WhatsApp Image 2026-09-12 at 00.33.49.jpeg", alt: "Stylised portrait in deep red, orange and black",
    title: "Earthbound", caption: "A frontal portrait built from grounded, elemental colour.", category: "art", chapter: "studio",
  },
  {
    id: "art-night-flowers", src: "/images/WhatsApp Image 2026-09-12 at 00.33.50 (2).jpeg", alt: "Yellow flowers painted against sweeping dark bands",
    title: "Flowers after dark", caption: "Fragile yellow flowers glow through currents of blue and charcoal.", category: "art", chapter: "studio",
  },
  {
    id: "art-red-field", src: "/images/WhatsApp Image 2026-09-12 at 00.33.50 (3).jpeg", alt: "Red and black abstract floral painting",
    title: "Red field", caption: "Floral marks push upward through layers of red, ochre and black.", category: "art", chapter: "studio",
  },
  {
    id: "art-colour-rain", src: "/images/art_02.jpg", alt: "Abstract painting with vertical strokes of vivid colour",
    title: "Colour rain", caption: "Vertical light and colour gather into an abstract landscape.", category: "art", chapter: "studio",
  },
];

export const homeGalleryPreviewIds = [
  "current-siddaramaiah-conversation", "sadhguru-portrait", "learning-circle", "public-honour",
  "current-rahul-gandhi", "archive-hero-portrait", "art-mountain", "art-earth-portrait",
];

export const galleryFilters = [
  { id: "all" as const, label: "All Stories" },
  { id: "conversations" as const, label: "Conversations" },
  { id: "stage" as const, label: "Public Life & Media" },
  { id: "learning" as const, label: "Learning & Education" },
  { id: "portraits" as const, label: "Portraits & People" },
  { id: "art" as const, label: "Art & Studio" },
];

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  conversations: "Conversations", stage: "Stage & media", learning: "Learning & Verbattle",
  portraits: "Portraits & travel", art: "Art studio",
};

export function filterGallery(items: GalleryItem[], filter: GalleryCategory | "all"): GalleryItem[] {
  if (filter === "all") return items;
  return items.filter((item) => item.category === filter);
}

/** @deprecated use galleryItems */
export const gallery = galleryItems.map((item) => item.src);
