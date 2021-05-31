import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">my projects:</p>

            <div>
              <a href="https://replit.com/@pseno/Number-Guesser#script.js">
                Number Guesser
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
