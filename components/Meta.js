import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta property="og:image" content="%PUBLIC_URL%/computer.jpg" />
      <meta
        property="og:image:secure_url"
        content="%PUBLIC_URL%/computer.jpg"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Simple Simon Safaris",
  keywords:
    "Hiking, Kenya, Trails, Mt Kenya, Rurumeria, Abaderares, Table Mountain, Kinangop, Elephant Hills, Suswa",
  description:
    "We provide Hiking, Trails, Treks expenditions in Kenya ",
};

export default Meta;
