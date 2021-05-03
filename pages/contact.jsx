import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">You can contact me:</p>
            <ul className="contact-links">
              <li className="contact-item">Email: pasalicseno@hotmail.com</li>
              <li className="contact-item">Phone: +421914242569</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
