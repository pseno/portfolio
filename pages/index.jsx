import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Hello</h1>
            <p className="description">Wellcome to my profile site</p>

            <Link href="/contact">
              <a className="cta">Contact</a>
            </Link>
          </div>

          <div className="image-wrapper"></div>
        </div>
      </section>
    </>
  );
}

export default Home;
