import { createContext, useContext, useEffect, useState } from "react";
import { fetchSiteSettings } from "./content";
import {
  brand as staticBrand,
  pillars as staticPillars,
  journeySteps as staticJourney,
  story as staticStory,
  partners as staticPartners,
  faqs as staticFaqs,
} from "../data/site";
import { img } from "../data/images";

// Used until Supabase responds, and as a safety net if it is unreachable.
const fallback = {
  brand: { ...staticBrand, heroEyebrow: "ĐIỆN BIÊN · TÂY BẮC VIỆT NAM", address: "26 Nguyễn Công Hoan, Giảng Võ, Ba Đình, Hà Nội" },
  pillars: staticPillars,
  journey_steps: staticJourney,
  story: { ...staticStory, heading: "Câu chuyện Dien3ean", gallery: [] },
  partners: staticPartners,
  faqs: staticFaqs,
  page_images: {
    home: img("heroMisty", { w: 1920 }),
    about: img("seaOfClouds", { w: 1920 }),
    regions: img("terracesAerial", { w: 1920 }),
    products: img("roastLevelsBowls", { w: 1920 }),
    showroom: img("cafeMachineSteam", { w: 1920 }),
    blog: img("waterfallForest", { w: 1920 }),
    faq: img("roastLevelsBowls", { w: 1920 }),
    contact: img("cafeMachineSteam", { w: 1920 }),
  },
  page_copy: {},
};

const SiteContentContext = createContext(fallback);

export function SiteContentProvider({ children }) {
  const [settings, setSettings] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    fetchSiteSettings()
      .then((data) => {
        if (cancelled) return;
        setSettings({
          brand: { ...fallback.brand, ...(data.brand || {}) },
          pillars: data.pillars?.length ? data.pillars : fallback.pillars,
          journey_steps: data.journey_steps?.length ? data.journey_steps : fallback.journey_steps,
          story: { ...fallback.story, ...(data.story || {}) },
          partners: { ...fallback.partners, ...(data.partners || {}) },
          faqs: data.faqs?.length ? data.faqs : fallback.faqs,
          page_images: { ...fallback.page_images, ...(data.page_images || {}) },
          page_copy: data.page_copy || {},
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return <SiteContentContext.Provider value={settings}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}

// Copy for an inner page hero, falling back to whatever the page passes in.
export function usePageHero(pageKey, defaults = {}) {
  const { page_copy: copy, page_images: images } = useSiteContent();
  const entry = copy?.[pageKey] || {};
  return {
    label: entry.label || defaults.label,
    title: entry.title || defaults.title,
    desc: entry.desc || defaults.desc,
    image: images?.[pageKey] || defaults.image,
  };
}
