import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact my-5 py-5" id="Contact">
        <div class="container-lg py-4">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title text-center">
                <h2 class="fw-bold mb-5">Contact Me</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="contact-item d-flex mb-3">
                <div class="icon fs-4 text-danger">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="text ms-3">
                  <h3 class="fs-5">email</h3>
                  <p class="text-muted">arth@gmail.com</p>
                </div>
              </div>
              <div class="contact-item d-flex mb-3">
                <div class="icon fs-4 text-danger">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="text ms-3">
                  <h3 class="fs-5">Phone</h3>
                  <p class="text-muted">9632587410</p>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="contact-form">
                <form action="">
                  <div class="row">
                    <div class="col-lg-6 mb-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        class="form-control form-control-lg fs-6 border-0 shadow-sm"
                      />
                    </div>
                    <div class="col-lg-6 mb-4">
                      <input
                        type="text"
                        placeholder="Your Email"
                        class="form-control form-control-lg fs-6 border-0 shadow-sm"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="mb-4">
                      <textarea
                        rows="5"
                        type="text"
                        placeholder="Message"
                        class="form-control form-control-lg fs-6 border-0 shadow-sm"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="">
                      <button type="submit" class="btn btn-danger px-3">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
