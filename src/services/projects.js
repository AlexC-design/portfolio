import React from "react";

export const projects = [
  {
    name: "movie-cluster",
    title: "Movie Cluster",
    type: "WEB APP",
    tech: "React, Redux, Redux-thunk, React-router, Axios, TMDB API, Figma",
    description:
      "Designed and built a responsive SPA using React and Redux, that allows you to browse movies by categories, genres, search for specific movies, view details about movies or save them to your list.",
    link: "testlink",
    code: "testcodelink",
    process: (
      <>
        <p>This is a re-make of a similar project I've done in the past.</p>
        <p>
          I liked the original idea of the app, but I wasn't very happy with the
          end result, as I had built the original app when I was still new to my
          journey in web development.
        </p>
        <br />
        <p>
          So armed with new knowledge and skills I set out to re-build the
          website.
        </p>
        <br />
        <p>
          I already had a pretty good idea of what I want to make, and I was
          already familiar with the tMDB API, so I started this one out with
          some design exploration in Figma for the styling of the UI, as this
          was one of the main areas I wanted to improve.
        </p>
        <br />
        <p>
          Once I found something that I was happy with, I started focusing on
          the structure of the website. I wanted to do something similar to the
          previous version, but improve the UX based on the feedback I've
          received over the time from people who have used the website, and from
          using it myself.
        </p>
        <br />
        <p>
          With the high fidelity wireframes ready, I began coding the website in
          React, working from big to small, first laying out the routing, main
          structure of the pages, and connecting them to the tMDB API, then
          building each of the pages features and functionality, focusing on
          user interaction as this is something I really enjoy doing.
        </p>
        <br />
        <p>
          I really like how the website turned out and I had a lot of fun
          working on this project. Given that I was already familiar with the
          API and more experienced in React than the first time I attempted it,
          I was really able to focus more on the design and interactions and
          produce a much better result in less than half the time it took me the
          first time.
        </p>
        <br />
      </>
    )
  },
  {
    name: "fin",
    title: "Fin",
    type: "WEB APP",
    tech: "React, Redux, React-router, Redux-persist, Chart.js, Figma",
    description:
      "Frontend personal finance application, where you can view payments breakdown and history charts, send/receive payments, manage cards, change payment methods and more.",
    link: "testlink",
    code: "testcodelink",
    process: (
      <>
        <p>
          For this project I wanted to build something that will allow me to
          learn and work with a javascript charting library, therefore I chose
          to build a financial application.
        </p>
        <br />
        <p>
          I started out by researching apps such as Revolut and Monzo, which are
          apps that I use myself, as well as other similar financial
          applications that I have heard of.
        </p>
        <br />
        <p>
          Once I had an idea about the features I want to include in my app, I
          created some mid fidelity wireframes in Figma, to figure out the
          structure of the application.
        </p>
        <br />
        <p>
          Following this step, I focused on the design of the UI. I knew I
          wanted to have a theme changing option in the application because this
          was also something that I wanted to learn more about and work with, so
          I kept that in mind while working on the designs.
        </p>
        <br />
        <p>
          With the high fidelity designs ready, and a pretty good idea about the
          flow of the application, I started coding the basic structure of the
          pages in React, then focused on adding the charts.
        </p>
        <br />
        <p>
          It was quite challenging as I've never worked with a charting library
          before, nor have I done dynamic theming. I also might have been a bit
          overzealous in deciding how many features I wanted to include in the
          app.
        </p>
        <p>
          Once I started coding the application I realised it might be a bit too
          much to finalize it within the timeframe that I initially had in mind,
          but I did not want to exclude any of them, so I had to sacrifice from
          the time spent on the design and interactions to be able to finish it
          in a timely manner.
        </p>
        <br />
        <p>
          All in all, I am happy with the result and it was a really good
          experience as not only I've learned a lot of new stuff, but it also
          helped me improve my time manangement and prioritisation abilities.
        </p>
        <br />
      </>
    )
  },
  {
    name: "beacon",
    title: "Beacon",
    type: "WEB APP",
    tech: "React, Redux, React-router, Figma, Photoshop",
    description:
      "Designed and built a responsive website in React, focusing mainly on visual design, vector illustrations and CSS animations.",
    link: "testlink",
    code: "testcodelink",
    process: (
      <>
        <p>
          This is a project that I've built to practice complex CSS animations
          and to brush up on vector illustration skills, as well as applying the
          lessons I've learned in the previous project about dynamic theming.
        </p>
        <br />
        <p>
          I started out by looking for inspiration for the illustration. I had
          an idea for the composition and the type of animations that I wanted,
          but I didn't know exactly what the subject would be.
        </p>
        <br />
        <p>
          Once I decided on the theme of the illustration, I did some rough
          sketches in photoshop and then brought them over to Figma to create
          the final vector illustrations, keeping in mind that these will need
          to be animated. I then prepared the assets for animation and built the
          website in React.
        </p>
        <br />
        <p>
          This was a short and fun project to work on. I wanted to do something
          like this for a really long time and I am very happy with the result.
        </p>
        <br />
      </>
    )
  },
  {
    name: "bug-tracker",
    title: "Bug Tracker",
    type: "WEB APP",
    tech:
      "React, Redux, Redux-thunk, React-router, React-dnd, Redux-saga, Redux-persist, Axios",
    description:
      "Full stack application built using the MERN stack (Mongo, Express, React, Node). Created a system that contributes to the development of a project by managing and maintaining a list of development related issues.",
    link: "testlink",
    code: "testcodelink",
    process: (
      <>
        <p>
          I built this project to learn more about backend APIs and databases,
          in order to get a more thorough understanding of the entire process of
          web development.
        </p>
        <p>
          I started by sketching out a rough idea of the features I wanted to
          include in the app, such as user authentication, the project
          management screen, users and tasks, and all the individual aspecs of
          each feature.
        </p>
        <p>
          I then moved into Figma and built the wireframes for all of the
          screens.
        </p>
        <br />
        <p>
          Once I had the main structure of the app layed out, I started working
          on the high fidelity designs for the UI and then implemented them.
        </p>
        <br />
        <p>
          I started with the user authentication as this was what I considered
          to be the hardest part and it also gave me a good staring point for
          building out the backend.
        </p>
        <p>
          It was quite challenging, because on top of the fact that I was doing
          backend development for the first time, I've also decided to use
          redux-saga for handling asynchronous actions on the front end, which
          was a noticeably more complex library than the redux-thunk I was used
          to.
        </p>
        <br />
        <p>
          This was the most challenging feature I had to implement on a website
          until then and it took a lot of trial and error, but in the end I
          managed to do it and I've learned a lot of valuable lessons along the
          way as well.
        </p>
        <br />
        <p>
          After I got the hang of it, the rest of the features were a lot easier
          to implement. This was still the project that I've spent the most time
          on.
        </p>
        <p>
          I am very happy with the result and with the fact that I've expanded
          my knowledge into backend developement, but I have to admit, I am more
          interested in fronted, bulding the UI designs, user interactions and
          visuals.
        </p>
        <br />
        <p>
          Nevertheless, I think it was a worthwile experience and the knowledge
          I've gained is certainly going to be beneficial when working on the
          frontend as well.
        </p>
        <br />
      </>
    )
  },
  {
    name: "new-folio",
    title: "Current portfolio",
    type: "WEB APP",
    tech: "React, Redux, React-router, Simplebar-react, Figma",
    description:
      "Portfolio website for showcasing my latest projects. Designed in Figma, built with React and Redux.",
    link: "testlink",
    code: "testcodelink",
    process: (
      <>
        <p>
          This was a re-make of my previous protfolio website. Based on the
          feedback I've recieved, I decided it could use a lot of improvements,
          not only in terms of visual design, but also in regards to how the
          projects are presented.
        </p>
        <br />
        <p>
          I decided to play it safe on this one. I tried to keep it simple and
          only use technologies I was familiar with, so that I can focus more on
          design and UX, and to make sure the quality of the website is as high
          as possible.
        </p>
        <br />
        <p>
          Like a lot of my projects, I started by sketching out different
          layouts in Figma and once I found something I was happy with I began
          working on the visual design.
        </p>
        <br />
        <p>
          Once the high fidelity wireframes were ready I started building it out
          in React. The design I've chosen for the most complex page, the
          project page, happened to have an image carousel and a dropdowns
          section, which coincidentally are two visual elements which I've had a
          lot of experince building and working with lately, so everything went
          really smmootly.
        </p>
        <br />
        <p>
          One of the most demanding parts of building the website was actually
          writing about the projects and describing the process.
        </p>
        <p>
          This has always been really challenging. Trying to strike a good
          balance between keeping the descriptions short and concise while
          giving enough information without making it boring.
        </p>
        <br />
        <p>
          I hope I did a good job and while I've kept the descriptions brief and
          more general, I'd be happy to go into more detail about any of the
          projects during the interview.
        </p>
        <br />
      </>
    )
  },
  {
    name: "old-folio",
    title: "Previous protfolio",
    type: "WEB APP",
    tech: "React, JavaScript, HTML/CSS, Sass, Figma, Photoshop",
    description:
      "The previous version of my protfolio website, built in React.",
    link: "testlink",
    code: "testcodelink",
    process: (
      <>
        <p>
          This was my first portfolio website that I've built to showcase the
          projects I was working on at the time.
        </p>
        <br />
        <p>
          Like most of the projects, I started out with some low fidelity
          wireframes in Figma to figure out the main structure of the website
          and the general flow.
        </p>
        <br />
        <p>
          Once those were completed and I had a general layout for all of the
          pages, I began doing some design exploration for the visual aspect of
          the UI.
        </p>
        <br />
        <p>
          One of the parts that I've spent the most time on, was making the
          graphics for the project cards and the project page hero section, as
          well as the animated GIFs in some of the projects descriptions, which
          in hindsight was probably something I shouldn't have prioritised.
        </p>
        <p>
          I feel that it took way too much effort compared to how little impact
          it has on the website and that time could have been better spent on
          improving the website's UX and the way the projects are presented.
        </p>
        <br />
        <p>
          This is probably the website that I've asked for the most feedback on,
          and I've tried to apply all of the feedback that I've gathered over
          time when building my new portfolio.
        </p>
        <br />
      </>
    )
  },
  {
    name: "ui-components",
    title: "UI Components",
    type: "UI DESIGN",
    tech: "Figma",
    description:
      "Designed and built a responsive SPA built using react and redux, that allows you to browse movies by categories, genres, search for specific movies, view details about movies or save them to your list.",
    link: "testlink",
    code: "testcodelink",
    process: "test process"
  }
];
