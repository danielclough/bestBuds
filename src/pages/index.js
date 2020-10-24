import React from 'react';
import Layout from '../components/Layout';
import Image from "../components/Image"

const IndexPage = ({data}) => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <Image
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            fileName="intro.jpg"
            alt="Smoke With Us"
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Fresh Buds</span>
              <span className="section-heading-lower">Worth Smoking</span>
            </h2>
            <p className="mb-3">
              Every bud of our quality artisan Merry Jane starts with the highest
              quality home grown mothers. Once you try it, our buds will
              be a blissful addition to your everyday routine - we
              guarantee it!
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="/#">
                Check Out Our Buds!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Our Promise</span>
                <span className="section-heading-lower">To You</span>
              </h2>
              <p className="mb-0">
                When you walk into a shop to to pick your medicine, know we have dedicated
                our lives to providing you with the greatest value, and a welcoming buzz,
                 above all else. Excellent products are made with the greatest attention
                to detail. We know you will be satisfied, so please let us
                know, and tell your friends!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
