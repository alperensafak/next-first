import Head from "next/head";
const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/about.svg" />
      </Head>

      <h1 className="blueColor bigText">About</h1>

      <style jsx>{`
        .greenColor {
          color: green;
        }

        .redColor {
          color: red;
        }

        .bigText {
          font-size: 128px;
        }
      `}</style>
    </>
  );
};

export default About;
