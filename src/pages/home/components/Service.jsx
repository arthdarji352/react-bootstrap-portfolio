import React from "react";

const Service = () => {
  return (
    <>
      <section class="services text-center py-5 my-5" id="Services">
        <div class="container-lg py-4">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title text-center">
                <h2 class="fw-bold mb-5">What I do</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="service-item shadow-sm p-4 rounded">
                <div class="icon my-3 text-danger fs-2">
                  <i class="fas fa-code"> </i>
                </div>
                <h3 class="fs-5 py-2">Web Development</h3>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="service-item shadow-sm p-4 rounded">
                <div class="icon my-3 text-danger fs-2">
                  <i class="fas fa-lightbulb"> </i>
                </div>
                <h3 class="fs-5 py-2">Design</h3>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="service-item shadow-sm p-4 rounded">
                <div class="icon my-3 text-danger fs-2"></div>
                <h3 class="fs-5 py-2">PhotoShop</h3>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
