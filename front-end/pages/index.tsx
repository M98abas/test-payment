import type { NextPage } from "next";
import Link from "next/link";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      {/* <Link href="/hyperpay">Hello</Link> */}
      <div className="body-content">
        <img src="EN-Logo-1.png" alt="" />
      </div>
    </>
  );
};

export default Home;
