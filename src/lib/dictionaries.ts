import "server-only";

export type Locale = "en" | "de";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  de: () => import("@/dictionaries/de.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export const locales: Locale[] = ["en", "de"];
export const defaultLocale: Locale = "en";
