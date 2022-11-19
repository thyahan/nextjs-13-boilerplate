import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const localeOptions = [
  {
    id: "locale-option-th",
    label: "Thai",
    value: "th",
  },
  {
    id: "locale-option-en",
    label: "English (US)",
    value: "en",
  },
];

const LocalePicker = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const selectedLocale = router.locale;
  const pathname = router.pathname;

  return (
    <div className="text-black">
      <label htmlFor="local-picker">{t("change-locale")}</label>
      <select
        id="local-picker"
        value={selectedLocale}
        onChange={e => router.push(pathname, pathname, { locale: e.target.value })}
      >
        {localeOptions.map(({ id, label, value }) => (
          <option key={id} id={id} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocalePicker;
