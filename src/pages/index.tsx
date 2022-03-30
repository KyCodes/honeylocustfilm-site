import React, { Fragment } from 'react';
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

export default function componentName() {
  return (
    <Fragment>
      <Helmet>
        <title>Honey Locust</title>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="KyCodes offers unique, optimized, and accessible application development so you can make more." />
        <meta name="keywords" content="HTML, CSS, JS, JavaScript, React, React Native, Website, App" />
        <meta name="author" content="Kyler Fullerton" />
      </Helmet>
      <div className='card'>
        <StaticImage placeholder='blurred' src='../images/honeylocust-banner.webp' alt="Honey Locust Film Banner" />
        <p>Honey Locust Film</p>
      </div>
      <h1><a href='https://ky.codes/'>Coming soon...</a></h1>
    </Fragment>

  );
}
