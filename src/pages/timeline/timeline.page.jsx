import React from "react";
import {
  TimelineContainer,
  TimelinePage,
  TimelinePageHeader,
  TimelineInfo,
  TimelineInfoDescription,
} from "./timeline.page.styles";
import Cart from "../../components/cartInfo/cart.component";

const Timeline = () => {
  const rightTrue = true;
  const rightFalse = false;

  return (
    <TimelinePage id="timeline">
      <TimelinePageHeader>
        <TimelineInfo>My timeline</TimelineInfo>
        <TimelineInfoDescription>
          Time-what? Yes timeline. I've created timeline that represents my
          "curve" of studying, success and failures that I've encountered.
          <br /> <br />
          Why? Reason is simple: I'm a junior.
          <br /> <br /> I don't have so much commercial experience which I can
          show to my client or some software house HRs. That's why this is some
          sort of "proof" about what I'm doing and what can I do.
        </TimelineInfoDescription>
      </TimelinePageHeader>
      <TimelineContainer>
        <Cart
          date={"Jan 18 2015"}
          description={
            "First serious contact with programming - School GameDev contest"
          }
          right={rightFalse}
        />
        <Cart
          date={"Jan 5 2016"}
          description={
            "First internship as a graphic-frontend programmer at MobiTouch Rzeszów"
          }
          right={rightFalse}
        />
        <Cart
          date={"October 12 2017"}
          description={
            "Started to learn Java and making simple and funny desktop apps"
          }
          platform="YouTube"
          right={rightTrue}
        />
        <Cart
          date={"January 3 2018"}
          description={"Started to learn Spring Boot for backend development"}
          platform="YouTube"
          right={rightTrue}
        />
        <Cart
          date={"January 29 2018"}
          description={"My own test about Spring Boot - created simple CRUD"}
          link="https://github.com/Bartoszkie/SpringBoot-excercisesDB"
          platformTitle="Repo Link"
          bgLink={true}
          right={rightTrue}
        />
        <Cart
          date={"May 5 2018"}
          description={"It's frontend time! Started to learn HTML 5, CSS 3"}
          platform="YouTube"
          right={rightTrue}
        />
        <Cart
          date={"July 20 2018"}
          description={
            "Joined to FreeCodeCamp community and started learning JS"
          }
          platform="FreeCodeCamp"
          right={rightTrue}
        />
        <Cart
          date={"October 2018"}
          description={
            "Started participating to JavaDevs workshops organised by PGS Software"
          }
          platform="PGS Software"
          right={rightFalse}
        />
        <Cart
          date={"October 2018"}
          description={
            "Started participating to FrontEnd workshops organised by PGS Software"
          }
          platform="PGS Software"
          right={rightFalse}
        />
        <Cart
          date={"December 2018"}
          description={
            "Finished JavaDevs workshops with honors organised by PGS Software"
          }
          platform="PGS Software"
          right={rightFalse}
        />
        <Cart
          date={"January 2019"}
          description={"Started preparings for summer internships"}
          platform="Everything"
          right={rightTrue}
        />
        <Cart
          date={"February 2019"}
          description={
            "IV place in hackathon 'Hackerz Rzeszow' which took place at Jasionka"
          }
          platform="Front-End"
          right={rightFalse}
        />
        <Cart
          date={"June - July 2019"}
          description={
            "Started internship at IDEO Software as FrontEnd Developer"
          }
          right={rightFalse}
        />
        <Cart
          date={"September 2019"}
          description={
            "Failed to join to PGS Software but created small and simple recruitment task. I need to learn more!"
          }
          link="https://github.com/Bartoszkie/PGS-Software---iTunes"
          platformTitle="Repo Link"
          bgLink={true}
          right={rightTrue}
        />
        <Cart
          date={"October 2019"}
          platform="Everything"
          description={"Learning advanced CSS and Sass! Part 1 - Floats"}
          link="https://github.com/Bartoszkie/Float-project---Natoure"
          platformTitle="Repo Link"
          bgLink={true}
          right={rightFalse}
        />
        <Cart
          date={"October 2019"}
          platform="Everything"
          description={"Learning advanced CSS and Sass! Part 2 - CSS GRID"}
          link="https://github.com/Bartoszkie/CSS_GRID-project---Nexter"
          platformTitle="Repo Link"
          bgLink={true}
          right={rightFalse}
        />
        <Cart
          date={"October 2019"}
          platform="Everything"
          description={"Learning advanced CSS and Sass! Part 3 - FlexBox"}
          link="https://github.com/Bartoszkie/Flexbox-project---Trillo"
          platformTitle="Repo Link"
          bgLink={true}
          right={rightFalse}
        />
        <Cart
          date={"August 2019"}
          platform="Everything"
          description={"Started learning advanced JS and reading 'YDKJS book!'"}
          link="https://github.com/getify/You-Dont-Know-JS"
          platformTitle="Book Link"
          bgLink={true}
          right={rightTrue}
        />
        <Cart
          date={"November 2019 - present"}
          platform="Everything"
          description={"Started learning React.js"}
          link="https://github.com/Bartoszkie/E---kancelaria"
          platformTitle="Repo Link"
          bgLink={true}
          right={rightFalse}
        />
        <Cart
          date={"April 2020"}
          platform="WEB"
          description={
            "Programmed, tested and provided static webstie about child's holiday"
          }
          link="https://github.com/Bartoszkie/DWD"
          platformTitle="Repo Link"
          bgLink={true}
          right={rightTrue}
        />
        <Cart
          date={"June 2020"}
          platform="WEB"
          description={"Started learning backend with Node.js"}
          link="https://github.com/Bartoszkie/E---kancelaria"
          platformTitle="Repo Link"
          bgLink={true}
          right={rightFalse}
        />
        <Cart
          date={"April 2020"}
          platform="React.js"
          description={"Created simple and funny recruitmet app for TryCodnet"}
          link="https://github.com/Bartoszkie/Try-Codnet---recruitment-"
          platformTitle="Repo Link"
          bgLink={true}
          right={rightTrue}
        />
      </TimelineContainer>
    </TimelinePage>
  );
};

export default Timeline;
