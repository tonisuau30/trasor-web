"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLanguage, languages, translations } from "@/data/translations";

const LanguageContext = createContext(null);

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(defaultLanguage);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("trasor-language");

    if (!savedLanguage || !translations[savedLanguage]) {
      return;
    }

    window.setTimeout(() => {
      setLanguageState(savedLanguage);
    }, 0);
  }, []);

  useEffect(() => {
    const htmlLang =
      languages.find((item) => item.code === language)?.htmlLang ?? "es";

    document.documentElement.lang = htmlLang;
    window.localStorage.setItem("trasor-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      languages,
      setLanguage: (nextLanguage) => {
        if (translations[nextLanguage]) {
          setLanguageState(nextLanguage);
        }
      },
      t: (path, replacements = {}) => {
        const translated =
          getNestedValue(translations[language], path) ??
          getNestedValue(translations[defaultLanguage], path) ??
          path;

        return Object.entries(replacements).reduce(
          (text, [key, value]) => text.replaceAll(`{${key}}`, value),
          translated,
        );
      },
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
