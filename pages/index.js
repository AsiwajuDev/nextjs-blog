import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";

import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Button from "../components/button";
import { SOCIAL_MEDIA } from "../SocialData/index";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const checkUrls = (obj) => {
  switch (obj.name) {
    case "github":
      return `https://github.com/${obj.userName}`;
    case "twitter":
      return `https://twitter.com/${obj.userName}`;
    case "linkedin":
      return `https://www.linkedin.com/in/${obj.userName}`;
    case "medium":
      return `https://medium.com/${obj.userName}`;
    default:
      return null;
  }
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
      </Head>
      <section className={utilStyles.headingMd}>
        <p style={{ margin: "0" }}>
          I'm Asiwaju, a Front-End and SharePoint Developer. My stacks are
          ReactJs, ReactNative, NextJs, .Net and SharePoint.
        </p>
        <p style={{ margin: "0" }}>
          An individual with the passion to impact human lives positively with
          my skills and abilities
        </p>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            justifyContent: "center",
          }}
        >
          {SOCIAL_MEDIA.map((i) => (
            <li key={SOCIAL_MEDIA.id}>
              <a
                href={checkUrls(i)}
                target="blank"
                style={{ color: "#000", margin: "0px 10px" }}
              >
                <i className={`fab fa-${i.name} fa-2x`}></i>
              </a>
            </li>
          ))}
        </ul>
        {/* <Button>Switch Background</Button> */}
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
