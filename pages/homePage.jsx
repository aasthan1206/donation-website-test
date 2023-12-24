import React from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Contribute from "@/components/contribute";
import Goal from "@/components/goal";
import Affiliation from "@/components/affiliation";
import Statistics from "@/components/statistics";
import TopOrg from "@/components/topOrg";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import Ads from "@/components/ads";
import DonateItems from "@/components/donateItems";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Contribute />
      <Goal />
      <Affiliation />
      <Statistics />
      <TopOrg />
      <DonateItems />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;
