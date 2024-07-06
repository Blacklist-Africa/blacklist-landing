import * as React from "react";
import { Breadcrumbs } from "../../components";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const { values, isSubmitting, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: (values, helpers) => {
        window.open(
          `mailto:blacklist.alu@gmail.com?subject=${encodeURIComponent(
            values.subject
          )}&body=${encodeURIComponent(
            `Hello, \n\n My name is ${values.name} and my email is ${values.email}, I am sending this mail with the following message: \n\n ${values.message} \n\n Best Regards,\n\n${values.name}`
          )}`,
          "_blank"
        );

        helpers.setSubmitting(false);
      },
    });

  const error = React.useMemo(() => {
    if (!Object.keys(errors).length) {
      return "";
    }

    return Object.values(errors)[0];
  }, [errors]);

  return (
    <main className="main">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Contact Us</h1>
                <p className="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Breadcrumbs parent={{ link: "/contact", title: "Contact Us" }} />
      </div>

      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-5">
              <div className="col-lg-4">
                <div
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/24d9q32HngmsAU1g6",
                      "_blank"
                    )
                  }
                  className="info-item d-flex align-items-center"
                >
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Location</h3>
                    <p>
                      Bumbogo, Kigali Innovation City, Next to Azam, Kigali,
                      Rwanda
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  onClick={() => window.open("tel:+250794429917", "_blank")}
                  className="info-item d-flex align-items-center"
                >
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call</h3>
                    <p>+250 794 429 917</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  onClick={() =>
                    window.open("mailto:blacklist.alu@gmail.com", "_blank")
                  }
                  className="info-item d-flex align-items-center"
                >
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email</h3>
                    <p>blacklist.alu@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            className="php-email-form"
            data-aos="fade-up"
            data-aos-delay="300"
            onSubmit={handleSubmit}
          >
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="col-md-6 ">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div className="col-md-12 text-center">
                <div
                  className={`loading${isSubmitting ? " d-block" : ""}`}
                ></div>
                <div className={`error-message${error ? " d-block" : ""}`}>
                  {error}
                </div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>

                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
