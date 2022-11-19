import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const Layout = dynamic(() => import("components/Layout"));

export default function HistoryPage() {
  const { t } = useTranslation();

  return (
    <Layout title="History" description="TCS History">
      <p>History</p>
      <p>{t("hello")}</p>
    </Layout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "th", ["common"])),
    },
  };
}
