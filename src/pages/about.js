import React from 'react';

import Layout from '../components/Layout';

import about from '../assets/images/about.jpg';
const IndexPage = () => (
  <Layout activeLink="about">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={about}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    Strong Bud, Strong Roots
                  </span>
                  <span className="section-heading-lower">About Our Operation</span>
                </h2>
                <p>
                  Amazing! Fantastic! Awesome! Our super wonderful establishment
                  of voluminous buds with considerable richness of extreme high. Artisan farmers
                  with abundant green and strong stupendous fragrence. Extensive big league products
                  dedicated to tremendous and extravagant enjoyment. Finding the best buds is easy
                  beacause you have found us! Bringing immense pleasure to you here in our hearts!
                </p>
                <p className="mb-0">
                  We guarantee that you will fall in <em>lust</em> with our
                  decadent buds the moment you wiff the aroma of perfected
                  crafts-person-ship. Join us in your daily routine, and smile with
                  the gods, or simply just to enjoy some time in heaven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;


    
 