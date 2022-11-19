import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("components/Layout"));

export default function Home() {
  return (
    <Layout title="Overview" description="TCS overview">
      Hello
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
