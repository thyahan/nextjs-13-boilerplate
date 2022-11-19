import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const Layout = dynamic(() => import("components/Layout"));

export default function ReportPage() {
  const { t } = useTranslation();

  return (
    <Layout title="Report" description="TCS Report">
      <p>Report</p>
      <p>{t("hello")}</p>
      <p>{t("report")}</p>
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
