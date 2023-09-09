import { Fragment } from "react";
import Head from "next/head";
import Banner from "../components/banner/banner";
import AboutMe from "../components/aboutMe/aboutMe";
import Plans from "../components/plans/plans";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>نوید آزادی | مربی بدنسازی و فیتنس</title>
      </Head>
      <Banner />
      <AboutMe />
      <Plans />
    </Fragment>
  );
}

export default HomePage;
