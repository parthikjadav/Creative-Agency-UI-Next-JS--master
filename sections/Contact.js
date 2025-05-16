"use client";

import { Title, TitleSm } from "@/components/common/Title";
import React, { useState } from "react";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    phone: "",
    projectDetails: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.projectType === "" ||
      formData.projectDetails === ""
    ) {
      setStatus("unfilled");
      return;
    }
    setStatus("loading");

    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });
    submissionData.append("access_key", "9702021e-e77d-4306-9743-7b0ee93e7e5f");

    const object = Object.fromEntries(submissionData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>+91 8849547853</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>jadavparthik000@gmail.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
              </div>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our proposal.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      className="input-contact"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Deo"
                      required
                    />
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      className="input-contact"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="google@gmail.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Your Phone</span>
                    <input
                      type="text"
                      name="phone"
                      className="input-contact"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 8849547853"
                      required
                    />
                  </div>
                  <div className="inputs">
                    <span>Project Type</span>
                    <select
                      name="projectType"
                      className="input-contact select-c"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select a Service
                      </option>
                      <option value="Custom Web Design & Development">
                        Custom Web Design & Development
                      </option>
                      <option value="E-commerce Solutions">E-commerce Solutions</option>
                      <option value="Content Management Systems (CMS)">
                        Content Management Systems (CMS)
                      </option>
                      <option value="Search Engine Optimization (SEO)">
                        Search Engine Optimization (SEO)
                      </option>
                      <option value="Web Application Development">
                        Web Application Development
                      </option>
                      <option value="Maintenance & Support">Maintenance & Support</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Lead Generation">Lead Generation</option>
                      <option value="Facebook, Instagram, TikTok Marketing">
                        Facebook, Instagram, TikTok Marketing
                      </option>
                      <option value="Google Ads">Google Ads</option>
                    </select>
                  </div>
                </div>
                <div className="inputs">
                  <span>Write if you have any other question.</span>
                  <textarea
                    name="projectDetails"
                    cols="10"
                    rows="5"
                    className="input-contact"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Write Your Message Here..."
                    required
                  ></textarea>
                </div>
                <p style={{ padding: "20px 0px" }} className="">
                  {status === "loading" ? <p>Loading...</p> : null}
                  {status === "success" ? <p className="Success">Success!</p> : null}
                  {status === "error" ? <p className="Error">Error!</p> : null}
                  {status === "unfilled" ? <p className="Error">Please fill out all fields</p> : null}
                </p>
                <button className="button-primary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
