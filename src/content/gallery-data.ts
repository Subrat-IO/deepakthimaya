export type GalleryCategory = "photos" | "events" | "art";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  /** CSS object-position for consistent cropping */
  focus?: string;
};

/** All site photos — excludes logo/branding assets only */
export const galleryItems: GalleryItem[] = [
  // Art
  { id: "art-1", src: "/images/art_02.jpg", alt: "Artwork by Deepak Thimaya", category: "art" },
  { id: "art-2", src: "/images/art_03.jpg", alt: "Artwork by Deepak Thimaya", category: "art" },

  // Events & programmes
  { id: "ev-1", src: "/images/_BDS5772 - Copy - Copy - Copy.JPG", alt: "Event — Deepak Thimaya", category: "events" },
  { id: "ev-2", src: "/images/Alvas Nudisiri - Copy - Copy - Copy.JPG", alt: "Alvas Nudisiri event", category: "events" },
  { id: "ev-3", src: "/images/Rahul Gandhi.jpeg", alt: "Political interview", category: "events" },
  { id: "ev-4", src: "/images/Sadh.jpg", alt: "Special interview", category: "events" },
  { id: "ev-5", src: "/images/ss5.jpg", alt: "Public event", category: "events" },
  { id: "ev-6", src: "/images/IMG_3899.JPG", alt: "Verbattle event", category: "events" },
  { id: "ev-7", src: "/images/IMG_3900.JPG", alt: "Verbattle programme", category: "events" },
  { id: "ev-8", src: "/images/IMG_3971.JPG", alt: "Event photograph", category: "events" },
  { id: "ev-9", src: "/images/IMG_3972.JPG", alt: "Event photograph", category: "events" },
  { id: "ev-10", src: "/images/IMG_3984.JPG", alt: "Event photograph", category: "events" },
  { id: "ev-11", src: "/images/IMG_4013.JPG", alt: "Event photograph", category: "events" },
  { id: "ev-12", src: "/images/IMG_4026.JPG", alt: "Event photograph", category: "events" },
  { id: "ev-13", src: "/images/IMG_4032.JPG", alt: "Event photograph", category: "events" },
  { id: "ev-14", src: "/images/IMG_4043.JPG", alt: "Event photograph", category: "events" },
  { id: "ev-15", src: "/images/IMG_4044.JPG", alt: "Event photograph", category: "events" },
  { id: "ev-16", src: "/images/11.jpg", alt: "Television programme", category: "events" },
  { id: "ev-17", src: "/images/12.jpg", alt: "Television programme", category: "events" },
  { id: "ev-18", src: "/images/15.jpg", alt: "Interview programme", category: "events" },
  { id: "ev-19", src: "/images/19.jpg", alt: "Neene Bari Neene", category: "events" },
  { id: "ev-20", src: "/images/20.jpg", alt: "Verbattle grand finale", category: "events" },
  { id: "ev-21", src: "/images/verbattle.jpg", alt: "Verbattle", category: "events" },
  { id: "ev-22", src: "/images/political.jpg", alt: "Political show", category: "events" },
  { id: "ev-23", src: "/images/ACTOR.jpg", alt: "Television and acting", category: "events" },
  { id: "ev-24", src: "/images/JOURNALIST.jpg", alt: "Journalism", category: "events" },
  { id: "ev-25", src: "/images/FILMMAKER.jpg", alt: "Filmmaking", category: "events" },
  { id: "ev-26", src: "/images/ENTREPRENEUR.jpg", alt: "Entrepreneurship", category: "events" },
  { id: "ev-27", src: "/images/DD1 - Copy.jpg", alt: "Television event", category: "events" },
  { id: "ev-28", src: "/images/DSC07863.JPG", alt: "Event photograph", category: "events" },
  { id: "ev-29", src: "/images/DSC_0157.JPG", alt: "Event photograph", category: "events" },
  { id: "ev-30", src: "/images/VC 3.jpg", alt: "Public event", category: "events" },
  { id: "ev-31", src: "/images/20200301_190455.jpg", alt: "Event photograph", category: "events" },
  {
    id: "ev-32",
    src: "/images/12963670_10208210003704498_7076450299665557051_n - Copy.jpg",
    alt: "Public appearance",
    category: "events",
  },

  // Photos & portraits
  { id: "ph-1", src: "/images/deeeep - Copy.jpg", alt: "Deepak Thimaya speaking", category: "photos", focus: "center 35%" },
  { id: "ph-2", src: "/images/beauty - Copy - Copy - Copy.jpg", alt: "Deepak Thimaya portrait", category: "photos", focus: "center 18%" },
  { id: "ph-3", src: "/images/BeautyPlus_20200803200641180_save.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 15%" },
  { id: "ph-4", src: "/images/BeautyPlus_20210616191504064_save.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 20%" },
  { id: "ph-5", src: "/images/dt.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center center" },
  { id: "ph-6", src: "/images/dttttt.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 22%" },
  { id: "ph-7", src: "/images/buddi.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 20%" },
  { id: "ph-8", src: "/images/budd.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 25%" },
  { id: "ph-9", src: "/images/buddu.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 22%" },
  { id: "ph-10", src: "/images/1.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 25%" },
  { id: "ph-11", src: "/images/2.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 25%" },
  { id: "ph-12", src: "/images/3.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 30%" },
  { id: "ph-13", src: "/images/4.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 28%" },
  { id: "ph-14", src: "/images/5.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 25%" },
  { id: "ph-15", src: "/images/6.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 30%" },
  { id: "ph-16", src: "/images/100_2281 - Copy.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 30%" },
  { id: "ph-17", src: "/images/100_6375 - Copy.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 28%" },
  { id: "ph-18", src: "/images/class - Copy.jpg", alt: "Deepak Thimaya teaching", category: "photos", focus: "center 35%" },
  { id: "ph-19", src: "/images/cm.jpeg", alt: "Deepak Thimaya", category: "photos", focus: "center 25%" },
  { id: "ph-20", src: "/images/der.jpeg", alt: "Deepak Thimaya", category: "photos", focus: "center 25%" },
  { id: "ph-21", src: "/images/imm.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 25%" },
  { id: "ph-22", src: "/images/Me in College.jpg", alt: "Deepak Thimaya in college", category: "photos", focus: "center 30%" },
  { id: "ph-23", src: "/images/mush.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 25%" },
  { id: "ph-24", src: "/images/parents.jpg", alt: "Deepak Thimaya with parents", category: "photos", focus: "center 40%" },
  { id: "ph-25", src: "/images/Sad and Me.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 28%" },
  { id: "ph-26", src: "/images/sadguru.jpg", alt: "With Sri Sadguru", category: "photos", focus: "center 35%" },
  { id: "ph-27", src: "/images/sidda.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 25%" },
  { id: "ph-28", src: "/images/vm1.jpg", alt: "Deepak Thimaya", category: "photos", focus: "center 22%" },
  { id: "ph-29", src: "/images/whatsapp-photo.jpeg", alt: "Deepak Thimaya", category: "photos", focus: "center 20%" },
  {
    id: "ph-30",
    src: "/images/WhatsApp Image 2026-02-14 at 11.37.02 AM.jpeg",
    alt: "Deepak Thimaya",
    category: "photos",
    focus: "center 22%",
  },
  {
    id: "ph-31",
    src: "/images/With Sri Sadguru Jaggi Vasudev.jpg",
    alt: "With Sri Sadguru Jaggi Vasudev",
    category: "photos",
    focus: "center 35%",
  },
];

/** Curated homepage preview — images that crop cleanly in a square grid */
export const homeGalleryPreviewIds = [
  "ph-1",
  "ph-24",
  "ph-10",
  "ev-1",
  "ev-5",
  "ev-29",
  "art-1",
  "art-2",
];

export const galleryFilters = [
  { id: "photos" as const, label: "Photos" },
  { id: "events" as const, label: "Events" },
  { id: "art" as const, label: "Art Gallery" },
  { id: "all" as const, label: "All" },
];

export function filterGallery(
  items: GalleryItem[],
  filter: GalleryCategory | "all"
): GalleryItem[] {
  if (filter === "all") return items;
  return items.filter((item) => item.category === filter);
}

/** @deprecated use galleryItems */
export const gallery = galleryItems.map((item) => item.src);
