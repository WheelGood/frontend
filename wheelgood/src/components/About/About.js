import React, { useState } from 'react';
import './About.scss';
import brandon from './brandon.jpg';
import eyv from './eyv.jpg';
import candace from './candace.jpg';
import mhart from './mhart.jpg';
import mikio from './mikio.jpg';
import jesse from './jesse.jpg';
import mtrew from './mtrew.jpg';

const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='heading'>
        <h1>WheelGood Team</h1>
      </div>

      <div className='cardWrapper'>
        <div className='cardContainer'>
          <img className='image' src={eyv} />
          <div className='devInfo'>
            <h1 className='devName'>Eyvonne </h1>
            <h1 className='devName'> Geordan</h1>

            <a className='github' href='https://github.com/Eyvonne'>
              {' '}
              <i className='fab fa-github'></i>
            </a>
          </div>
        </div>

        <div className='cardContainer'>
          <img className='image' src={mhart} />
          <div className='devInfo'>
            <h1 className='devName'>Michael </h1>
            <h1 className='devName'> Hart</h1>

            <a className='github' href='https://github.com/worksofhart'>
              {' '}
              <i className='fab fa-github'></i>
            </a>
          </div>
        </div>

        <div className='cardContainer'>
          <img className='image' src={brandon} />
          <div className='devInfo'>
            <h1 className='devName'>Brandon </h1>
            <h1 className='devName'> Allison</h1>

            <a className='github' href='https://github.com/BrandonJAllison'>
              {' '}
              <i className='fab fa-github'></i>
            </a>
          </div>
        </div>

        <div className='cardContainer'>
          <img className='image' src={candace} />
          <div className='devInfo'>
            <h1 className='devName'>Candace </h1>
            <h1 className='devName'> Wilson</h1>
            <a className='github' href='https://github.com/Candaceyw'>
              {' '}
              <i className='fab fa-github'></i>
            </a>
          </div>
        </div>

        <div className='cardContainer'>
          <img className='image' src={mikio} />
          <div className='devInfo'>
            <h1 className='devName'>Mikio </h1>
            <h1 className='devName'> Harman</h1>
            <a className='github' href='https://github.com/mpharm88'>
              {' '}
              <i className='fab fa-github'></i>
            </a>
          </div>
        </div>

        <div className='cardContainer'>
          <img className='image' src={mtrew} />
          <div className='devInfo'>
            <h1 className='devName'>Michael </h1>
            <h1 className='devName'> Trew</h1>
            <a className='github' href='https://github.com/mtrew2015'>
              {' '}
              <i className='fab fa-github'></i>
            </a>
          </div>
        </div>

        <div className='cardContainer'>
          <img className='image' src={jesse} />
          <div className='devInfo'>
            <h1 className='devName'>Jesse </h1>
            <h1 className='devName'> Otradovec</h1>

            <a className='github' href='https://github.com/JesseOtradovec'>
              {' '}
              <i className='fab fa-github'></i>
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className='writeUp1'>
          <h1>Data Collection, Write Up by Eyve </h1>
          <p>
            Collecting the data was an unexpected challenge for this project.
            Working through it, I kept thinking of the Thomas Edison quote 'I
            have not failed 1,000 times. I have successfully discovered 1,000
            ways NOT to make a light bulb.' I indeed found a lot of ways not to
            get any useful data. I worked extensively with the Google Maps API
            and came up with a lot of smart ways to manipulate the data and
            images that I got back. Still, ultimately I had very little success
            with actually getting useful pictures.{' '}
          </p>
          <br />

          <p>
            I initially wanted to use the Directions API to provide a user with
            the ability to request a route, pass that information through to
            Google Street View (GSV) and display a series of pictures from GSV
            to the user to allow them to decide how passible the curb ramps were
            along the route. By setting this information up to go into a
            database, this idea would have worked well to set up a data pipeline
            that would also create a training set for our model. Unfortunately,
            we ran into several issues with pulling out this data. The biggest
            problem, which would become a theme in the project, was that it's
            hard to find intersections.{' '}
          </p>
          <br />

          <p>
            The maps API doesn't have any function for getting specific
            intersections, meaning that any solution was going to require some
            engineering. I think my favorite options (neither of which I was
            able to explore fully) both would have involved using computer
            vision (CV) to 'spot' intersections either in a GSV image or from a
            top-down map view. After routing proved impossible in the time
            allotted I moved on to simply attempting to gather data on as many
            places as possible. This took the form of getting images from the
            Places API. This allowed me to pull down about 20 locations at a
            time and gave me a max of 10 photos for each place.
          </p>
          <br />

          <p>
            The only downside to these photos is that they are user-generated,
            or promotional, meaning that they aren't all focused on
            accessibility. Presenting these photos on their own doesn't do
            anything but provide a different viewport for Google Maps as well,
            so the plan was again to use CV to pick which ones might be the most
            helpful. In addition to the photos, the Places API gave me the
            locations of all the places that I was getting information about."
            it says this sentence is possible too wordy > The places API gave me
            the areas of sites I was getting photos of. I planned to eventually
            use this even to pull up a GSV image but ran out of time.
          </p>
          <br />

          <p>
            Given more time, I would like to finish building the pipeline that I
            have, so it also pulls GSV images. I would also like to create a
            simple flask app that allows the user to look at the pictures out of
            the pipeline and classify them as 'useful' or 'not useful' for
            accessibility. This would potentially create a training/test dataset
            for a model that would be used to predict if an image would be
            helpful (contains a ramp, shows the front door, shows stairs). It's
            possible that I'm overly hopeful about the power of simple
            classification, though. Given a substantial amount more time, I
            would like to participate on a team that built a web app dedicated
            to identifying curb ramps and classifying accessibility features.
          </p>
          <br />
        </div>

        <div className='writeUp2'>
          <h1>Data Collection, Write Up by Mikio </h1>
          <p>
            The Wheelgood Convolutional Neural Network (CNN) purpose was to
            identify storefronts and routes in cities and determine how
            accessible the building or route was to limited mobility users
            (wheelchair, walkers, canes, etc.). The model would also issue a
            confidence rating with each prediction on how sure it was that the
            building could be accessed.
          </p>{' '}
          <br />
          <p>
            A user could theoretically type in an address as they would in any
            maps interface, and the corresponding street view image(s) would be
            fed into the CNN to determine if the route and building front were
            accessible. If the recommended route were deemed inaccessible by the
            CNN the model would direct the user to an alternate route that the
            model determined to be accessible and provide a confidence rating of
            its prediction. Using computer vision, the model would identify
            small pieces of each image, such as edges, corners, curves, and so
            on until it could recognize an entire accessible or inaccessible
            feature. Initial tests of the model started by trying to identify
            curb cuts found in street view images. By manually gathering images
            from street view and reverse image search, we were able to collect
            111 images depicting what we deemed were accessible curb cuts and
            129 images that we determined to be inaccessible curb cuts. Moderns
            CNN's train, validate, and test on thousands of pictures, and our
            training and test sets became the bottleneck of our research while
            trying to complete our intended purpose in the time allotted (30
            hours).
          </p>{' '}
          <br />
          <p>
            To compensate for our lack of data, we applied data augmentation to
            the limited amount of photos. Data augmentation allows us to adjust
            each image slightly by rotating, zooming in, stretching, and
            flipping each image multiple times to artificially create more
            pictures and never letting our model to see the same image twice.
            After data augmentation, our entire image set increased to just
            under 2500 images. To combat overfitting our CNN due to artificially
            similar images being introduced, we incorporated a dropout layer to
            help regularize the network. We also included max-pooling to deal
            with overfitting and to reduce computational cost during repeated
            iterations.
          </p>{' '}
          <br />
          <p>
            Our mean baseline was 46.17%, and our highest iteration of our model
            was 51.67%. The model is not inherently useful and, in its current
            state, is not recommended as an indicator for determining if a route
            or building front is accessible to someone with limited mobility.
          </p>{' '}
          <br />
          <p>
            With more time, we would significantly increase the size of our
            training set along with increasing the diversity of images in the
            training set. The initial groundwork implemented by the Data Science
            team should be taken into future iterations of the project and used
            as a reference for decisions moving forward.
          </p>{' '}
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
