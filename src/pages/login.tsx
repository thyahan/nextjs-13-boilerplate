import dynamic from "next/dynamic";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import LocalePicker from "components/LocalePicker";

const FeatureLogin = dynamic(() => import("features/login"), { ssr: false });

const LoginPage = (props: any) => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>TCS Login</title>
        <meta name="description" content={"True Customer Sponsor"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>{t("login")}</p>
      <p>{t("hello")}</p>

      <FeatureLogin />
      <LocalePicker />
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "th", ["common", "login"])),
    },
  };
}

export default LoginPage;
