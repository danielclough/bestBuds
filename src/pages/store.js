import React from 'react';

import Layout from '../components/Layout';

import shop from '../assets/images/shop.jpg';

const IndexPage = () => (
  <Layout activeLink="store">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-upper">High All The Time</span>
                <span className="section-heading-lower">We're Baked</span>
              </h2>
              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                <li className="list-unstyled-item list-hours-item d-flex">
                  Sunday
                  <span className="ml-auto">Two Joints In The Morning</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Monday
                  <span className="ml-auto">Two Joints At Night</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Tuesday
                  <span className="ml-auto">Two Joints In The Afternoon</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Wednesday
                  <span className="ml-auto">It Makes Us Feel Alright</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Thursday
                  <span className="ml-auto">Two Joints In Time Peace</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Friday
                  <span className="ml-auto">And, Two In Time Of War</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Saturday
                  <span className="ml-auto">We Smoke Two Joints </span>
                </li>
              </ul>
              <p className="address mb-5">
                <em>
                  <strong>And Then We  </strong>
                  <br />
                  Smoke Two More
                </em>
              </p>
              <p className="mb-0">
                <small>
                  <em>Call Anytime</em>
                </small>
                <br />
                (TWO) 2-JOINTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={shop}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    Strong Buds, Strong Roots
                  </span>
                  <span className="section-heading-lower">High All The Time</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
