import { useContext, createContext } from 'react';
import enLocale from './locales/en.json';
import zhLocale from './locales/zh.json';
import { useLocation } from 'react-router-dom';

// locales
const locales = {
    'en': enLocale,
    'zh': zhLocale
};

// useContext API
const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
    const location = useLocation();
    const parts = location.pathname.split('/');
    // langCode
    const langCode = parts[1] || 'en';
    // restOfPath
    const restOfPath = parts.slice(2).join('/');
    // t("...")
    const t = (key) => {
        return key.split('.').reduce((o, i) => (o ? o[i] : key), locales[langCode]) || key;
    };
    //  <LocaleProvider> >> index.tsx
    return (
        <LocaleContext.Provider value={{ locales, langCode, restOfPath, t }}>
            {children}
        </LocaleContext.Provider>
    );
};

// Custom Hook: useLocale
export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) throw new Error("❌ useLocale must be used within a LocaleProvider");
    return context;
};

// Custom Hook: useTranslations
export const useTranslations = (namespace) => {
    const { t } = useLocale();
    return (key) => t(`${namespace}.${key}`);
};
