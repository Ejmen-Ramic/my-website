import React, { createContext, useContext, useState, useEffect } from 'react';
import { dynamicActivate } from './dynamicActivate';

const LanguageContext = createContext({
  locale: 'en', 
  changeLanguage: (locale: string) => {}
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') || 'en';
    setLocale(savedLocale);
  }, []);

  const changeLanguage = async (newLocale: string) => {
    await dynamicActivate(newLocale);
    localStorage.setItem('locale', newLocale);
    setLocale(newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
