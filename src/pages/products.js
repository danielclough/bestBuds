import React from 'react';
import Layout from '../components/Layout';
import Image from "../components/Image"

const IndexPage = () => (
  <Layout activeLink="products">
    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Organic Pleasure
                </span>
                <span className="section-heading-lower">
                  Bomb Buds
                </span>
              </h2>
            </div>
          </div>
          <Image
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            fileName="products-01.jpg"
            alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                We take pride in our work, and it shows. Every time you order a
                pack from us, we guarantee that it will be an experience
                worth having. Whether it's our world famous Black Berry Soda,
                or a refreshing Sativa for the morning, or something as to
                put you on the couch for a few hours, you will be coming
                back for more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Like Magic Every Time
                </span>
                <span className="section-heading-lower">
                  Qualty You Can Trust
                </span>
              </h2>
            </div>
          </div>
          <Image
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            fileName="products-02.jpg"
            alt=""
          />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Harvest season is the most wonderful time of year, baked for good,
                we all love the freshest high! Organic weed grown under the free
                sunshine soaking up natural goodness from the pure earth!
                We are the most premium vendor of the most specialty goods!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Get Heavenly High
                </span>
                <span className="section-heading-lower">
                  Speciality Buds
                </span>
              </h2>
            </div>
          </div>
          <Image
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            fileName="products-03.jpg"
            alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Working hard to produce the very best quality buds is
                something take pride in. With us you'll always find
                the experience you are looking for.  Perfection is is 
                what we do, it's who we are, and it's good for you!
                We are pleased that that you feel so good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
