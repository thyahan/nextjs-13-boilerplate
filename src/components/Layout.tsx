import Head from "next/head";
import Link from "next/link";
import React, { FC } from "react";
import LocalePicker from "./LocalePicker";

const Layout: FC<{ children: React.ReactNode; title?: string; description?: string }> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="main-layout">
      <Head>
        <title>{title || "TCS"}</title>
        <meta name="description" content={description || "True Customer Sponsor"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <div className="h-[64px] bg-red-500 flex justify-between items-center text-white">
          <ul className="flex gap-6">
            <li>
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link href="/history">
                <span>History</span>
              </Link>
            </li>
            <li>
              <Link href="/report">
                <span>Report</span>
              </Link>
            </li>
          </ul>
          <LocalePicker />
        </div>
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};
export default Layout;
