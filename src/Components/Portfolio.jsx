/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Flutter & Riverpod",
    description: "A simple flutter app that implements it's state management using riverpod",
    url: "https://github.com/Quingsley/flutter-riverpod-2",
  },
  {
    title: "Flutter on the web",
    description:
      "A simple flutter web app, that was curiated while learning riverpod, animations with rive and responsive design",
    url: "https://portfolio-5348a.web.app/",
  },
  {
    title: "Flutter Fridays",
    description:
      "This repository contains materials and projects that we used as GDSC Moi while teaching flutter to beginners",
    url: "https://github.com/Quingsley/flutter-fridays",
  },
  {
    title: "School site",
    description: "Created a simple site using html, css and Js for my former high school",
    url: "https://quingtech.netlify.app/",
  },
  {
    title: "URL SHORTENER",
    description: "Created a simple node-js service that is used to shorten long URLS",
    url: "https://github.com/Quingsley/url-shortener-backend",
  },
  {
    title: "Image-Service",
    description:
      "A backend service that enables CRUD operations on images. Images are being stored using supabase",
    url: "https://github.com/Quingsley/image-service",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
