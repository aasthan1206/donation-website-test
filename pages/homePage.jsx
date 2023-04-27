import Layout from "@/components/layout";
import Hero from "@/components/hero";
import WhatWeDo from "@/components/what-we-do";
import Goal from "@/components/goal";
import WhatToDonate from "@/components/what-to-donate";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <WhatWeDo />
      <Goal />
      <WhatToDonate />
    </Layout>
  );
};

export default HomePage;
