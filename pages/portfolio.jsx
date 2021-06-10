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
            <div className="fulldiv">
              <div className="div1">
                <p>Games:</p>
                <div>
                  <a
                    href="https://number-guesser.pseno.repl.co/"
                    target="_blank"
                  >
                    Number Guesser
                  </a>
                </div>
                <div>
                  <a href="https://cube-matcher.netlify.app/" target="_blank">
                    Cube Matcher
                  </a>
                </div>
                <div>
                  <a href="https://electric-mouse.netlify.app/" target="_blank">
                    Electric Mouse
                  </a>
                </div>
                <div>
                  <a
                    href="https://business-outfitted-bob.netlify.app/"
                    target="_blank"
                  >
                    Business Outfitted Bob
                  </a>
                </div>
                <div>
                  <a
                    href="https://treasure-hunter00.netlify.app/"
                    target="_blank"
                  >
                    Treasure Hunter
                    <img
                      src="https://content.codecademy.com/courses/learn-phaser/Treasure%20Hunter/Start%20Screen.png"
                      alt="Treasure Hunter"
                      width="100"
                      height="150"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://mole-unearther00.netlify.app/"
                    target="_blank"
                  >
                    Mole Unearther
                  </a>
                </div>
                <div>
                  <a href="https://bug-invaders.netlify.app/" target="_blank">
                    Bug Invaders
                    <img
                      src="https://i.postimg.cc/TPHrGx4t/one.png"
                      alt="Bug Invaders"
                      width="100"
                      height="150"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://bug-dodger.netlify.app/" target="_blank">
                    Bug Dodger
                    <img
                      src="https://i.postimg.cc/Y043W9JG/trdownload.png"
                      alt="Bug Dodger"
                      width="100"
                      height="150"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://adventure-game00.netlify.app/"
                    target="_blank"
                  >
                    Adventure Game
                  </a>
                </div>
                <div>
                  <a
                    href="https://color-a-pegasus.netlify.app/"
                    target="_blank"
                  >
                    Color a Pegasus
                  </a>
                </div>
              </div>
              <div className="div2">
                <p>Comand line programs:</p>
                <div>
                  <a
                    href="https://replit.com/@pseno/nodejs-random-color-generator#index.js"
                    target="_blank"
                  >
                    Random color generator
                  </a>
                </div>
              </div>
              <div className="div3">
                <p>Web pages:</p>
                <div>
                  <a href="https://excursion.pseno.repl.co/" target="_blank">
                    Excursion
                  </a>
                </div>
                <div>
                  <a
                    href="https://colmar-academy.pseno.repl.co/"
                    target="_blank"
                  >
                    Colmar Academy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
