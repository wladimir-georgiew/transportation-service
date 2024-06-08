import { useTranslation } from "react-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

let countries = [
  {
    code: "bg",
    name: "Български",
    country_code: "bg",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="px-1 py-1 language-selector-items" aria-label="menu-items">
      <div>
        {countries.map((lng) => (
          <button
            key={lng.code}
            className={classNames(
              "items-center space-x-2 px-4 py-2 text-sm inline language-selector-btn"
            )}
            onClick={() => i18n.changeLanguage(lng.code)} // used to change language that needs to be rendered
            disabled={i18n.language === lng.code}
          >
            <span className={`inline language-selector-flag language-selector-flag-${lng.country_code}`}></span>
            <span className="language-selector-code">{lng.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
