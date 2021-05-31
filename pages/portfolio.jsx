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
              <a href="https://number-guesser.pseno.repl.co/" target="_blank">
                Number Guesser
              </a>
            </div>
            <div>
              <a href="https://excursion.pseno.repl.co/" target="_blank">
                Excursion
              </a>
            </div>
            <div>
              <a
                href="https://replit.com/@pseno/nodejs-random-color-generator#index.js"
                target="_blank"
              >
                Random color generator
              </a>
            </div>
            <div>
              <a
                href="https://replit.com/@pseno/Nodejs-Meme-craper#Meme/image0.jpg"
                target="_blank"
              >
                Meme scraper
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
