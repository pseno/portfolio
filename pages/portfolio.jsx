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
                    <img
                      src="https://i.postimg.cc/CKpJZkCW/numbr-guesser.png"
                      alt="Number Guesser"
                      width="150"
                      height="200"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://cube-matcher.netlify.app/" target="_blank">
                    Cube Matcher
                    <img
                      src="https://content.codecademy.com/courses/learn-phaser/cube-matcher/start.png"
                      alt="Cube Matcher"
                      width="150"
                      height="200"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://electric-mouse.netlify.app/" target="_blank">
                    Electric Mouse
                    <img
                      src="https://content.codecademy.com/courses/learn-phaser/electric-mouse/start.png"
                      alt="Electric Mouse"
                      width="150"
                      height="200"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://business-outfitted-bob.netlify.app/"
                    target="_blank"
                  >
                    Business Outfitted Bob
                    <img
                      src="https://content.codecademy.com/courses/learn-phaser/BOB/Start%20screen.png"
                      alt="Business Outfitted Bob"
                      width="150"
                      height="200"
                    />
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
                      width="150"
                      height="200"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://mole-unearther00.netlify.app/"
                    target="_blank"
                  >
                    Mole Unearther
                    <img
                      src="https://content.codecademy.com/courses/learn-phaser/mole-unearther/start.png"
                      alt="Mole Unearther"
                      width="150"
                      height="200"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://bug-invaders.netlify.app/" target="_blank">
                    Bug Invaders
                    <img
                      src="https://i.postimg.cc/TPHrGx4t/one.png"
                      alt="Bug Invaders"
                      width="150"
                      height="200"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://bug-dodger.netlify.app/" target="_blank">
                    Bug Dodger
                    <img
                      src="https://i.postimg.cc/Y043W9JG/trdownload.png"
                      alt="Bug Dodger"
                      width="150"
                      height="200"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://adventure-game00.netlify.app/"
                    target="_blank"
                  >
                    Adventure Game
                    <img
                      src="https://i.postimg.cc/Bv3yrdzL/adventuregame.png"
                      alt="Adventure Game"
                      width="150"
                      height="200"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://color-a-pegasus.netlify.app/"
                    target="_blank"
                  >
                    Color a Pegasus
                    <img
                      src="https://i.postimg.cc/ncZ3cvkg/pegasus.png"
                      alt="Color a Pegasus"
                      width="150"
                      height="200"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://codey-game.netlify.app/" target="_blank">
                    Codey Game
                    <img
                      src="https://i.postimg.cc/LXQFx8D3/codey.png"
                      alt="Codey Game"
                      width="150"
                      height="200"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://codeys-counting-conundrum.netlify.app/"
                    target="_blank"
                  >
                    Codey's Counting Conundrum
                    <img
                      src="https://i.postimg.cc/13Mgyp3m/codey2.png"
                      alt="Codey's Counting Conundrum"
                      width="150"
                      height="200"
                    />
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
                    <img
                      src="https://i.postimg.cc/fywCRsNp/colorgeneratorpng.png"
                      alt="Random Color Generator"
                      width="150"
                      height="200"
                    />
                  </a>
                </div>
              </div>
              <div className="div3">
                <p>Web pages:</p>
                <div>
                  <a href="https://excursion.pseno.repl.co/" target="_blank">
                    Excursion
                    <img
                      src="https://i.postimg.cc/SRvVsDbc/excrs.png"
                      alt="Excursion"
                      width="150"
                      height="200"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://colmar-academy.pseno.repl.co/"
                    target="_blank"
                  >
                    Colmar Academy
                    <img
                      src="https://i.postimg.cc/L512CQDs/Screenshot-2021-06-11-165747.png"
                      alt="Colmar Academy"
                      width="150"
                      height="200"
                    />
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
