import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "./Testimonials";
import Cta from "../components/cta";
import LoginPage from "./Login";
import Report from "./Report";

import Faq from "../components/faq";


const Home = () => {
  return (
    <>
      <Head>
        <title>LostAndFound</title>
        <meta
          name="description"
          content="LostAndFound is a portal for lost and found items."
        />

      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="How it works?"
        title=" ">
       This portal will find your lost items and will help you to find your lost items.
       You can Report your lost items and you can also report if you found any items.
      </SectionTitle>
      <Benefits data={benefitOne} />
      
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
       Here you will find some of the questions that are frequently asked questions.

      </SectionTitle>
      <Faq />

      <Footer />

    </>
  );
}

export default Home;