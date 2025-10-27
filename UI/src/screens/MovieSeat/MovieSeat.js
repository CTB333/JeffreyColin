import React from "react";

import { PROJECTS } from "../../Constants/Projects";
import {
  TintImage,
  ProjectCategory,
  List,
  HorizontalProjects,
} from "../../components/index";
import useLoad from "../../hooks/useLoad";

import gradintCircles from "../../assets/gradientCircles2.png";

import pencil from "../../assets/pencil2.png";
import clipboard from "../../assets/clipboard.png";
import man from "../../assets/man.png";
import notebook from "../../assets/notebook.png";

import analysis from "../../assets/analysis.png";
import theatreCards from "../../assets/theatreCards.png";

import tasha from "../../assets/tasha.png";
import guershom from "../../assets/guershom.png";

import question from "../../assets/question2.png";

import sitemap from "../../assets/sitemap.png";
import wireframe from "../../assets/wireframe.png";
import wireframe2 from "../../assets/wireframe2.png";
import wireframe3 from "../../assets/wireframe3.png";
import wireframe4 from "../../assets/wireframe4.png";

import wireframe5 from "../../assets/wireframe5.png";
import wireframe6 from "../../assets/wireframe6.png";
import wireframe7 from "../../assets/wireframe7.png";
import wireframe8 from "../../assets/wireframe8.png";

import computer from "../../assets/computer.png";
import computer2 from "../../assets/computer2.png";
import computer3 from "../../assets/computer3.png";
import computer4 from "../../assets/computer4.png";

import mockup from "../../assets/mockup.png";
import mockup2 from "../../assets/mockup2.png";

import ending from "../../assets/ending.png";

import "./MovieSeat.css";

const PROJECT = PROJECTS[0];

const listOne = [
  {
    title: "Roles & Responsibilities",
    items: [
      "User Research: Competitive Analysis, User Interviews, User Persona",
      "UX Design: Sketches, Wireframing, Usability Testing",
    ],
  },
  {
    title: "Project Context",
    items: ["Fall 2021", "Independent Research Project", "Team: Solo"],
  },
  {
    title: "Tools Used",
    items: ["Adobe XD", "Photoshop", "Whimsical"],
  },
];

const listTwo = [
  {
    title: "User Interviews(5)",
    text: "Analyzing the problem space and current state-of-the art solutions",
    image: pencil,
  },
  {
    title: "Competitive Analysis",
    text: "Analyzing the problem space and current state-of-the art solutions",
    image: clipboard,
  },
  {
    title: "Persona Mapping (2)",
    text: "Gathering information about users to represent the very real needs and goals of the users.",
    image: man,
  },
  {
    title: "3 Rounds of Design Iterations",
    text: "Sketches, to wireframes, to high fidelity prototype. Supplemented with user feedback at each stage",
    image: notebook,
  },
];

const listThree = [
  "What does your typical work day look like?",
  "Tell me about the last experience you had when going to the movies?",
  "What are some of the apps/ sites you used most when purchasing movie tickets?",
  "What other products or tools do you use? How did you hear about these?",
  "What do you like or dislike about these products or tools?",
  "What do you expect to gain/ lose from using this product?",
  "What are some factors that prevent you from watching a movie?",
  "What would you like to see or have the next time you go on a site?",
  "What do you think can be improved?",
];

const listFour = [
  {
    title: "Scenario 1:",
    text: "Let's say you're going out with your significant other and they love action movies. You want to take them to watch Jungle Cruise at the cinema closest to the ferris wheel. Please put your relevant preference through the filters and select the correct theater to purchase the tickets",
  },
  {
    title: "Scenario 2:",
    text: "Imagine you wanted to watch a movie with a large group of 8. You guys decide to watch Free Guy. Please show me how you would go about doing that and let me know what seats you've chosen.",
  },
  {
    title: "Scenario 3:",
    text: "Say you and a few friends were watching The Green Knight and noticed the actor who played Gawain did a phenomenoal acting job and you wanted to look him up so that you can see his other work. Could you show me two ways you could go about doing that.",
  },
];

const listFive = [
  "What is your first impression? Is there anything confusing?",
  "What are you thinking as you look at this?",
  "What do you like or dislike about this product or tool?",
  "What frustrates/excites you when using this product? What keeps you engaged?",
  "If you had a magic wand and could change anything what would that be?",
  "What is something you want to keep/rid in this product?",
  "What would you like to see or have the next time you go on this site?",
  "What do you think can be improved?",
  "If you were looking for more trailers where would you expect to find it?",
  "Where do you expect to find the rating info?",
  "Scroll through the page and tell me something you like and something you dislike?",
  "How would you improve the process?",
  "What do you think about the interface",
  "Why would you keep using this site? Why not?",
  "What do you think about the way the features and information are presented?",
  "How frequent would you use this feature? How would you improve it?",
  "Is this memorable?",
  "What do you think should happen after your movie, theater, time, date selections?",
  "What do you think about the page assignment",
];

const listSix = [
  "I used headings with different sized text and color for clear visual hierarchy",
  "I used white space and minimalism to help users navigate the site. We used big posters for movie selection and centered all the forthcoming actions.",
  "I designed the seating chart to be more legible. I added bigger buttons and larger text so that it would be easier to navigate and understand.",
];

const listSeven = [
  "Conduct follow-up usability testing on the new website",
  "Identify any additional areas of need and ideate on new features",
  "Discuss ways for a no payment reservation without compromising possible sale",
  "Covid-19 opporotunity- streaming / vod",
  "See if we can create our own rating system and community",
];

const MovieSeat = () => {
  useLoad();

  const fs1 = {
    fontSize: 36,
  };

  const fs2 = {
    fontSize: 34,
  };

  const fs3 = {
    fontSize: 30,
  };

  const fs4 = {
    fontSize: 28,
  };

  const fs5 = {
    fontSize: 26,
  };

  const fs6 = {
    fontSize: 20,
  };

  const fs7 = {
    fontSize: 16,
  };

  const color = {
    color: PROJECT.color,
  };

  return (
    <div className="movieSeat">
      <div className="movieHeader">
        <TintImage
          imgS={{ imageRendering: "initial" }}
          image={PROJECT.imageLarge}
          tint={PROJECT.color}
        />
      </div>
      <div style={{ marginBottom: 185 }} className="content">
        <p
          style={{ fontSize: 52, marginBottom: 33 }}
          className="proxima-normal"
        >
          MovieSeat
        </p>
        <div style={{ marginBottom: 21 }} className="categories">
          {PROJECT.categories.map((v, i, _) => {
            let circle = true;

            if (i === PROJECT.categories.length - 1) {
              circle = false;
            }

            return <ProjectCategory pS={fs6} text={v} circle={circle} />;
          })}
        </div>
        <p
          style={{ ...fs4, marginBottom: 15, maxWidth: "85%" }}
          className="proxima-normal"
        >
          Making it easier for film fanatics to explore film content and watch
          movies from the comfort of their couch
        </p>
        <div style={{ marginBottom: 9 }} className="flex-row">
          {listOne.map((v, i, _) => {
            let rootStyle = {
              minHeight: 200,
              flex: 0.3,
              minWidth: 350,
            };

            if (i === 2) {
              rootStyle.display = "flex";
              rootStyle.flexDirection = "column";
              rootStyle.maxWidth = 275;
              rootStyle.alignItems = "flex-start";
              rootStyle.justifyContent = "flex-start";
              rootStyle.marginLeft = "auto";
            }

            if (i == 1) {
              rootStyle.marginLeft = 150;
            }

            return (
              <List
                {...v}
                rootS={rootStyle}
                dotted={5}
                bulletStyle={{
                  alignItems: "flex-start",
                  paddingTop: 13,
                  margin: 0,
                }}
                listS={{ padding: 0, paddingLeft: 5 }}
                titleS={{ ...fs4, fontWeight: 400 }}
                pS={{ ...fs7, lineHeight: "27px" }}
              />
            );
          })}
        </div>
        <p
          style={{ fontSize: 20, marginBottom: 85 }}
          className="proxima-normal"
        >
          Movies have long been a staple of the entertainment industry in both
          the United States and across the globe. Around 19 percent of U.S.
          adults claim to watch or stream movies every day, while an additional
          26 percent state that they watch movies several times per week.
          Streaming services like Netflix and Hulu have provided consumers with
          a way to watch films on the go, while theatres continue to provide
          people with an entire movie-going experience. Despite this added
          competition from streaming services, annual ticket sales have remained
          relatively stable for the past years that is of course until 2020. The
          COVID-19 outbreak helps to understand what 2020 meant for filmmaking
          in the United States.
        </p>
        <p
          style={{ fontSize: 34, marginBottom: 35 }}
          className="proxima-normal"
        >
          Problem
        </p>
        <p
          style={{ fontSize: 20, marginBottom: 60 }}
          className="proxima-normal"
        >
          Users have difficulty engaging with online ticket purchasing websites
          due to cluttered designs, inefficient systems, and limited
          information. Currently movie ticketing websites are plagued by the
          lack of detailed information they provide on their sites especially
          for movie-goers and film fanatics which forces them to go to a few
          sites before actually making a purchase.
        </p>
      </div>
      <div
        className="center"
        style={{
          position: "relative",
          marginBottom: 185,
        }}
      >
        <img style={{ width: "82%" }} src={gradintCircles} alt="circles" />
      </div>
      <div className="content">
        <p
          style={{ fontSize: 36, marginBottom: 15 }}
          className="proxima-normal"
        >
          Research
        </p>
        <div
          style={{ paddingRight: 50, marginBottom: 10 }}
          className="researchBox"
        >
          {listTwo.map((v, i, _) => {
            return (
              <div
                style={{ maxWidth: 175, alignItems: "flex-start" }}
                className="researchItem center flex-column"
              >
                <div
                  style={{ marginBottom: 25 }}
                  className="researchImg center"
                >
                  <img
                    className="max-width max-height"
                    src={v.image}
                    alt={v.title}
                  />
                </div>
                <h3
                  style={{ ...fs4, marginBottom: 10 }}
                  className="proxima-normal"
                >
                  {v.title}
                </h3>
                <p
                  style={{ ...fs7, lineHeight: "22px" }}
                  className="proxima-normal"
                >
                  {v.text}
                </p>
              </div>
            );
          })}
        </div>
        <p
          style={{ fontSize: 20, marginBottom: 20 }}
          className="proxima-normal"
        >
          We decided to divide our research into two phases - a primary research
          phase where we understood the context of the problem,and conducted
          initial interviews.
        </p>
        <p style={{ fontSize: 20 }} className="proxima-normal">
          This was followed by a secondary research phase where we created a
          competitive analysis, 5 user interviews, and then synthesized all of
          this data into an personas.
        </p>
        <div style={{ margin: "55px 10px" }}>
          <List
            title={"A few of the questions asked during the interview:"}
            items={listThree}
            dotted={7}
            bulletStyle={{ margin: 0, padding: 0 }}
            titleS={{ ...fs6, fontWeight: 500 }}
            listS={{ margin: 0, paddingTop: 15 }}
            itemStyle={{ margin: "21px 0px" }}
            pS={fs6}
          />
        </div>
        <p
          style={{
            fontSize: 45,
            color: PROJECT.color,
            marginTop: 160,
            textAlign: "center",
            paddingLeft: 50,
            paddingRight: 70,
          }}
          className="proxima-normal"
        >
          One way that we can build great experiences is to learn from the best.
        </p>
        <p
          style={{ ...fs2, marginTop: 225, marginBottom: 35 }}
          className="proxima-normal"
        >
          Competitive Analysis
        </p>
        <p style={{ ...fs6 }} className="proxima-normal">
          I began doing some research to see what's out there currently. I
          wanted to identify the top 5 current and potential competitors,
          reflect on their strengths and weaknesses subsequently highlighting
          trends and uncovering opportunities that Movie Seat can fill.
        </p>
        <div style={{ margin: "30px 0px" }} className="center flex-column">
          <img
            style={{ width: "55%", margin: "65px 0px" }}
            src={analysis}
            alt="analysis"
          />
          <img
            style={{ width: "90%", marginTop: 130, marginBottom: 100 }}
            src={theatreCards}
            alt="Competitors"
          />
        </div>
        <p style={{ ...fs3, marginBottom: 27 }} className="proxima-normal">
          Insights
        </p>
        <p style={{ ...fs6 }} className="proxima-normal">
          Based on the research, we generated the following insights by grouping
          similar notes under similar headings.
        </p>
        <div
          style={{ padding: "0px 50px", marginTop: 15, marginBottom: 125 }}
          className="flex-column center"
        >
          <div>
            <div className="max-width">
              <p
                style={{ ...fs4, margin: "20px 0px 30px" }}
                className="proxima-normal"
              >
                Group 1:Pros
              </p>
            </div>
            <div
              style={{ alignItems: "flex-start" }}
              className="flex-row center"
            >
              <div
                style={{
                  flex: 0.3,
                  minWidth: 350,
                }}
                className="flex-column"
              >
                <p style={{ ...fs4, ...color }} className="proxima-normal">
                  INSIGHT 1
                </p>
                <p style={{ ...fs6 }} className="proxima-normal">
                  Customers wanted to{" "}
                  <span style={color}>
                    stay up to date on cast, crew, bts and what's coming out.
                  </span>
                </p>
              </div>
              <div
                style={{
                  flex: 0.3,
                  minWidth: 350,
                  margin: "0px 35px",
                }}
                className="flex-column"
              >
                <p style={{ ...fs4, ...color }} className="proxima-normal">
                  INSIGHT 2
                </p>

                <p style={{ ...fs6 }} className="proxima-normal">
                  Users were more <span style={color}>fond of</span> the sites
                  that exhibited{" "}
                  <span style={color}>big posters and trailers</span>.
                </p>
              </div>
              <div
                style={{
                  flex: 0.3,
                  minWidth: 350,
                }}
                className="flex-column"
              >
                <p style={{ ...fs4, ...color }} className="proxima-normal">
                  INSIGHT 3
                </p>

                <p style={{ ...fs6 }} className="proxima-normal">
                  A{" "}
                  <span style={color}>straightforward and easy to use UI</span>{" "}
                  was <span style={color}>pleasing</span> for users as a user
                  states{" "}
                  <span style={color}>
                    “This is how you do it, why can't they all be this way”
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 0, marginBottom: 20 }}>
            <div className="max-width">
              <p
                style={{ ...fs4, margin: "20px 0px 30px" }}
                className="proxima-normal"
              >
                Group 2:Cons
              </p>
            </div>
            <div
              style={{ alignItems: "flex-start" }}
              className="flex-row center"
            >
              <div
                style={{
                  flex: 0.3,
                  minWidth: 350,
                }}
                className="flex-column"
              >
                <p style={{ ...fs4, ...color }} className="proxima-normal">
                  INSIGHT 1
                </p>

                <p style={{ ...fs6 }} className="proxima-normal">
                  <span style={color}>Seating charts are small, illegible</span>{" "}
                  and sometimes <span style={color}>confusing</span> on most
                  sites. <span style={color}>1/5</span> of the seating charts{" "}
                  <span style={color}>easy to use.</span>
                </p>
              </div>
              <div
                style={{
                  flex: 0.3,
                  minWidth: 350,
                  margin: "0px 35px",
                }}
                className="flex-column"
              >
                <p style={{ ...fs4, ...color }} className="proxima-normal">
                  INSIGHT 2
                </p>

                <p style={{ ...fs6 }} className="proxima-normal">
                  <span style={color}>Most ads were bothersome</span> and take
                  away attention from the task at hand.
                </p>
              </div>
              <div
                style={{
                  flex: 0.3,
                  minWidth: 350,
                }}
                className="flex-column"
              >
                <p style={{ ...fs4, ...color }} className="proxima-normal">
                  INSIGHT 3
                </p>

                <p style={{ ...fs6 }} className="proxima-normal">
                  <span style={color}>
                    4/5 users would look for the rating before making a puchase.
                    Rotten Tomatoes
                  </span>{" "}
                  rating systems <span style={color}>confused users</span> while{" "}
                  <span style={color}>IMDB</span> scores{" "}
                  <span style={color}>made sense.</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="max-width">
              <p
                style={{ ...fs4, margin: "20px 0px 30px" }}
                className="proxima-normal"
              >
                Group 3:Neutral
              </p>
            </div>
            <div
              style={{ alignItems: "flex-start" }}
              className="flex-row center"
            >
              <div
                style={{
                  flex: 0.3,
                  minWidth: 350,
                }}
                className="flex-column"
              >
                <p style={{ ...fs4, ...color }} className="proxima-normal">
                  INSIGHT 1
                </p>

                <p style={{ ...fs6 }} className="proxima-normal">
                  <span style={color}>3/5 users wanted a quicker process</span>{" "}
                  of seeing the <span style={color}>seating chart.</span>
                </p>
              </div>
              <div
                style={{
                  flex: 0.3,
                  minWidth: 350,
                  margin: "0px 35px",
                }}
                className="flex-column"
              >
                <p style={{ ...fs4, ...color }} className="proxima-normal">
                  INSIGHT 2
                </p>

                <p style={{ ...fs6 }} className="proxima-normal">
                  Customers felt that many sites had{" "}
                  <span style={color}>movie info</span> but but wish it was{" "}
                  <span style={color}>
                    more detailed and properly displayed
                  </span>
                </p>
              </div>
              <div
                style={{
                  flex: 0.3,
                  minWidth: 350,
                }}
                className="flex-column"
              >
                <p style={{ ...fs4, ...color }} className="proxima-normal">
                  INSIGHT 3
                </p>

                <p style={{ ...fs6 }} className="proxima-normal">
                  <span style={color}>
                    3/5 users stated the puchasing process is annoying
                  </span>{" "}
                  on some sites which{" "}
                  <span style={color}>left users puzzled</span> ultimately
                  wasting time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p style={{ ...fs4, marginBottom: 40 }} className="proxima-normal">
          Key Takeaways
        </p>
        <div
          style={{ alignItems: "flex-start", marginBottom: 45 }}
          className="flex-row center"
        >
          <div style={{ flex: 0.3, maxWidth: 350 }} className="flex-column">
            <p
              style={{ ...fs4, ...color, marginBottom: 20, minHeight: 70 }}
              className="proxima-normal"
            >
              Understanding engagement
            </p>
            <p style={{ ...fs6 }} className="proxima-normal">
              We noticed that most users would try view a trailer before making
              a purchase. Trailers seem to be the most common feature to attract
              customers.
            </p>
          </div>
          <div
            style={{ flex: 0.3, maxWidth: 350, margin: "0px 40px" }}
            className="flex-column"
          >
            <p
              style={{ ...fs4, ...color, marginBottom: 20, minHeight: 70 }}
              className="proxima-normal"
            >
              Most ads delivered the wrong attention
            </p>
            <p style={{ ...fs6 }} className="proxima-normal">
              Users found some advertisements as appealing but most found
              advertisements as bothersome, in the way and a waste of time.
            </p>
          </div>
          <div style={{ flex: 0.3, maxWidth: 350 }} className="flex-column">
            <p
              style={{ ...fs4, ...color, marginBottom: 20 }}
              className="proxima-normal"
            >
              Rating the critics
            </p>
            <p style={{ ...fs6 }} className="proxima-normal">
              Most sites used Rotten Tomatoes as a feature to showcase upfront
              rating information, however 2 out 5 users stated that this didn't
              determine their choice, some stating they don't understand them
              and were more familiar with IMDB's rating system. Also a few users
              said depending on the site they sometimes didn't know where to
              find them or never even noticed them on most sites.
            </p>
          </div>
        </div>
        <p
          style={{ fontSize: 36, marginTop: 163, marginBottom: 58 }}
          className="proxima-normal"
        >
          Personas
        </p>
        <p style={{ fontSize: 20, maxWidth: "90%" }} className="proxima-normal">
          Personas are key to the design process because they reflect the
          lifestyles of our real target users and give the team an idea of how
          to meet our users needs or challenges. Personas are also one of the
          most effective ways to give a clear direction to our design solution.
          I created two personas to represent the users of this product
        </p>
        <div className="personaBox">
          <div className="persona">
            <h3
              style={{ fontSize: 20, marginBottom: 33 }}
              className="proxima-normal"
            >
              Persona: Tasha
            </h3>
            <p style={{ fontSize: 20 }} className="proxima-normal">
              Problem statement:
            </p>
            <p style={{ fontSize: 20 }} className="proxima-normal">
              Tasha is an educator who sometimes wants to watch movies at it
              allows her and the family to relax and unwind from work and
              school.
            </p>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                marginTop: 75,
              }}
            >
              <img
                style={{ imageRendering: "initial", width: "67%" }}
                src={tasha}
                alt="tasha"
              />
            </div>
          </div>
          <div style={{ marginBottom: 100 }} className="persona">
            <h3
              style={{ fontSize: 20, marginBottom: 35 }}
              className="proxima-normal"
            >
              Persona: Guerschom
            </h3>
            <p style={{ fontSize: 20 }} className="proxima-normal">
              Problem statement:
            </p>
            <p style={{ fontSize: 20 }} className="proxima-normal">
              Gershom is a football coach who needs to understand the details of
              the movie because he typically takes his team out to watch.
            </p>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                marginTop: 75,
              }}
            >
              <img
                style={{ imageRendering: "initial", width: "67%" }}
                src={guershom}
                alt="guershom"
              />
            </div>
          </div>
        </div>
        <p style={{ ...fs2, marginTop: 35 }} className="proxima-normal">
          Starting The Design
        </p>
        <div
          style={{ position: "relative", margin: "150px 0px 225px" }}
          className="center flex-column"
        >
          <p
            style={{
              ...color,
              fontSize: 45,
              letterSpacing: 4,
            }}
            className="proxima-normal"
          >
            How might we design a more engaging
          </p>
          <p
            style={{ ...color, fontSize: 45, letterSpacing: 4 }}
            className="proxima-normal"
          >
            and intuitive experience for users?
          </p>
          <img
            style={{ width: "17%", position: "absolute" }}
            src={question}
            alt="?"
          />
        </div>
        <p style={{ ...fs2, marginBottom: 30 }} className="proxima-normal">
          Sitemap
        </p>
        <p style={{ ...fs6, marginBottom: 30 }} className="proxima-normal">
          In order to priortitize specific information about the pages, videos,
          and other files on our site, and the relationships between them I
          created a sitemap. This is important because pages that we deem
          important can be reached efficiently through some form of navigation
          also aiding in providing valuable information about these files. This
          is also helps me brainstorm a bit.
        </p>
        <div
          style={{ margin: "100px 0px", marginBottom: 95 }}
          className="center"
        >
          <img style={{ width: "88%" }} src={sitemap} alt="sitemap" />
        </div>
        <p style={{ ...fs2, marginBottom: 43 }} className="proxima-normal">
          Paper Wireframes
        </p>
        <p style={{ ...fs6, marginBottom: 30 }} className="proxima-normal">
          In order to get a few ideas out quickly, I did a few paper wireframes.
          It is a cheap, fast and effective way to get ideas from your head on
          to a piece of paper before commiting to any ideas on any software.
        </p>

        <div
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 90,
            marginBottom: 137,
          }}
          className="flex-row"
        >
          <img style={{ width: "47%" }} src={wireframe} alt="wireframe" />
          <img style={{ width: "47%" }} src={wireframe2} alt="wireframe" />
        </div>
        <p style={{ ...fs2, marginBottom: 30 }} className="proxima-normal">
          Digital Wireframes
        </p>
        <p style={{ ...fs6, marginBottom: 30 }} className="proxima-normal">
          Moving from paper to digital wireframes made it easy to understand how
          the redesign could help address user pain points and improve the user
          experience.
        </p>
        <p style={{ ...fs6, marginBottom: 30 }} className="proxima-normal">
          Prioritizing useful button locations and visual element placement on
          the home page was a key part of my strategy.
        </p>
        <div style={{ marginTop: 65, marginBottom: 55 }} className="center">
          <img
            style={{ width: "78%" }}
            src={wireframe3}
            alt="digital wireframe"
          />
        </div>
        <p style={{ ...fs6 }} className="proxima-normal">
          Users have the option of easily selecting from a variety of genres
          with a quick selection. On the large movie poster they can view what's
          playing now, what's coming soon and the movie rating. Clicking the
          right or left arrows will slide the group of movie posters in the
          selected direction allowing users to be able to see what's available
          quickly.
        </p>
        <div style={{ marginTop: 78, marginBottom: 55 }} className="center">
          <img
            style={{ width: "78%" }}
            src={wireframe4}
            alt="digital wireframe"
          />
        </div>
        <p style={{ ...fs6, marginBottom: 157 }} className="proxima-normal">
          Users will have a much larger seating chart, this will include a
          legend and proper labeling so that users arent confused when selecting
          their seats.
        </p>
        <p style={{ ...fs2, marginBottom: 45 }} className="proxima-normal">
          Digital Wireframes: Screen Size Variations
        </p>
        <p style={{ ...fs6, marginBottom: 90 }} className="proxima-normal">
          Personas are key to the design process because they reflect the
          lifestyles of our real target users and give the team an idea of how
          to meet our users needs or challenges. Personas are also one of the
          most effective ways to give a clear direction to our design solution.
          I created two personas to represent the users of this product
        </p>
        <div
          style={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 85,
          }}
          className="flex-row"
        >
          <img style={{ width: "69%" }} src={wireframe5} alt="wireframe" />
          <img style={{ width: "25%" }} src={wireframe6} alt="wireframe" />
        </div>
        <p style={{ ...fs6, marginBottom: 70 }} className="proxima-normal">
          I added a banner and a carousel area for advertising. These 2 ad
          spaces would allow for a featured film typically something that is
          popular on the page to be displayed and a carousel which would cycle
          through 4+ movie automatically.
        </p>
        <p style={{ ...fs2, marginBottom: 30 }} className="proxima-normal">
          Usability Study
        </p>
        <p style={{ ...fs6, marginBottom: 93 }} className="proxima-normal">
          After developing the wireframes, I reached out to 5 of the initial
          interview participants from the research phase in order to evaluate
          the prototype. I conducted a moderated usability study with the 5
          participants , each interview taking about 10-15 min.{" "}
        </p>
        <p style={{ ...fs6, marginBottom: 2 }} className="proxima-normal">
          Scenarios
        </p>
        <div style={{ paddingLeft: 13, marginTop: 0 }} className="flex-column">
          {listFour.map((v, i, _) => {
            return (
              <div style={{ marginBottom: 0, padding: 0 }} className="scenario">
                <p
                  style={{ ...fs6, marginBottom: 0, padding: 0 }}
                  className="proxima-normal"
                >
                  {v.title}
                </p>
                <p style={{ ...fs6, padding: 0 }} className="proxima-normal">
                  {v.text}
                </p>
              </div>
            );
          })}
        </div>
        <List
          title={"A few of the questions asked during the interview:"}
          items={listFive}
          dotted={7}
          rootS={{ marginTop: 87, marginBottom: 65 }}
          titleS={{ ...fs6, fontWeight: 400 }}
          listS={{ paddingLeft: 20, marginTop: 25 }}
          itemStyle={{ marginBottom: 25 }}
          pS={{ ...fs6 }}
        />
        <p style={{ ...fs6 }} className="proxima-normal">
          We gathered a mostly positive response to the prototype. Participants
          were able to perform the benchmark tasks with ease, and usability test
          allowed me to obtain qualitative data about user's thoughts while
          using the site. Here are a few highlights from the results
        </p>
        <p
          style={{ ...fs3, marginTop: 145, marginBottom: 30 }}
          className="proxima-normal"
        >
          Insights
        </p>
        <p style={{ ...fs6 }} className="proxima-normal">
          Based on the usability testing, we generated the following insights by
          grouping similar notes under similar headings.
        </p>
        <div
          style={{
            padding: "0px 40px",
            marginTop: 35,
            paddingTop: 45,
            marginBottom: 285,
          }}
          className="flex-column center"
        >
          <div
            style={{ paddingLeft: 35, marginBottom: 30 }}
            className="max-width"
          >
            <p style={{ ...fs4 }} className="proxima-normal">
              Usability Study: Findings
            </p>
          </div>

          <div
            style={{ alignItems: "flex-start", marginBottom: 32 }}
            className="flex-row center"
          >
            <div
              style={{
                flex: 0.3,
                minWidth: 350,
              }}
              className="flex-column"
            >
              <p
                style={{ ...fs4, ...color, marginBottom: 20 }}
                className="proxima-normal"
              >
                Annoying Ads
              </p>
              <p style={{ ...fs6 }} className="proxima-normal">
                <span style={color}>3/5 users</span> seen the{" "}
                <span style={color}>ad space</span> and were{" "}
                <span style={color}>still annoyed</span> by them.
              </p>
            </div>
            <div
              style={{
                flex: 0.3,
                minWidth: 350,
                margin: "0px 35px",
              }}
              className="flex-column"
            >
              <p
                style={{ ...fs4, ...color, marginBottom: 20 }}
                className="proxima-normal"
              >
                Inconsistency
              </p>
              <p style={{ ...fs6 }} className="proxima-normal">
                <span style={color}>4/5 users loved the big poster flow</span>{" "}
                but found it <span style={color}>inconsistent</span> with the
                smaller version at the bottom.
              </p>
            </div>
            <div
              style={{
                flex: 0.3,
                minWidth: 350,
              }}
              className="flex-column"
            >
              <p
                style={{ ...fs4, ...color, marginBottom: 20 }}
                className="proxima-normal"
              >
                Confusion
              </p>
              <p style={{ ...fs6 }} className="proxima-normal">
                Based on what site the user typically uses they were{" "}
                <span style={color}>confused on the order of pages</span>
              </p>
            </div>
          </div>

          <div
            style={{ alignItems: "flex-start", margin: "30px 0px" }}
            className="flex-row center"
          >
            <div
              style={{
                flex: 0.3,
                minWidth: 350,
              }}
              className="flex-column"
            >
              <p
                style={{ ...fs4, ...color, marginBottom: 20 }}
                className="proxima-normal"
              >
                Seating Chart
              </p>
              <p style={{ ...fs6 }} className="proxima-normal">
                One of the main complaints was that there was{" "}
                <span style={color}>no legend and detailed labeling</span> on
                the seating chart.
              </p>
            </div>
            <div
              style={{
                flex: 0.3,
                minWidth: 350,
                margin: "0px 35px",
              }}
              className="flex-column"
            >
              <p
                style={{ ...fs4, ...color, marginBottom: 20 }}
                className="proxima-normal"
              >
                Font Size
              </p>
              <p style={{ ...fs6 }} className="proxima-normal">
                Users felt that in certain places{" "}
                <span style={color}>font size</span> could be a little bit{" "}
                <span style={color}>bigger.</span>
              </p>
            </div>
            <div
              style={{
                flex: 0.3,
                minWidth: 350,
              }}
              className="flex-column"
            >
              <p
                style={{ ...fs4, ...color, marginBottom: 20 }}
                className="proxima-normal"
              >
                Deatiled Ratings
              </p>

              <p style={{ ...fs6 }} className="proxima-normal">
                Users wanted to{" "}
                <span style={color}>see the ratings obviously displayed</span>{" "}
                and not hidden somewhere.
              </p>
            </div>
          </div>
        </div>
        <p style={{ ...fs2, marginTop: 30 }} className="proxima-normal">
          Refining the Design
        </p>
        <div style={{ marginBottom: 152 }} className="center flex-column">
          <p
            style={{ ...fs1, marginTop: 120, ...color, marginBottom: 70 }}
            className="proxima-normal"
          >
            Movie Flow
          </p>
          <p style={{ ...fs6 }} className="proxima-normal">
            Before Usabillity
          </p>
          <img
            style={{ width: "70%", marginTop: 53, marginBottom: 105 }}
            src={wireframe7}
            alt="wireframe"
          />
          <p style={{ ...fs6 }} className="proxima-normal">
            After Usabillity
          </p>
          <img
            style={{ width: "70%", marginTop: 40, marginBottom: 60 }}
            src={wireframe8}
            alt="wireframe"
          />
          <p style={{ ...fs6 }} className="proxima-normal">
            The first iteration of the home page had two ad sections and two
            movie flow sections - Now Playing and Coming Soon. What I noticed is
            that the ads were were brought up again during the usability testing
            and it was bothering the users so much that I went back to the
            drawing board. I looked back at some of our research for a possible
            solution. I discovered 4/5 of the sites that we previously looked
            at, main purpose for ads was to advertise for upcoming movies. To
            avoid frustration of the users I came up with the idea to just scrap
            the advetisement sections and just use the coming soon area to
            display the upcoming movies. This would allow the user to still feel
            like they are recieving the upcoming movies feature with out feeling
            bothered by the “ad feeling”. They can also watch trailers easily
            and get more information on these feature films.
          </p>
        </div>
        <div className="slanted">
          <p style={{ ...fs2, marginBottom: 70 }} className="proxima-normal">
            Mockups
          </p>
          <div className="center flex-column">
            <p
              style={{ fontSize: 45, ...color, marginBottom: 27 }}
              className="proxima-normal"
            >
              Big Posters
            </p>
            <img
              style={{ width: "90%", marginBottom: 20 }}
              src={computer}
              alt="computer"
            />
            <p style={{ ...fs6, marginBottom: 40 }} className="proxima-normal">
              While movie-goers are searching for something to watch, we wanted
              to make it easy for them to scan through films and find what
              they're looking for. We focused on creating these large movie
              posters that were easily recognizable and would capture the users
              attention. When hovered over you can view a trailer or get started
              on making a purchase. Above that are some buttons that will allow
              you to filter results based on genre and below are the main movie
              details which will show genre, rating, runtime, critic rating and
              release date. The rating is also in a different more bold color so
              that it's more noticable. When scrolling from either side it will
              cycle out all 4 posters allowing the user to have to do less find
              the movie they're searching for.
            </p>
            <p
              style={{ fontSize: 45, ...color, marginBottom: 30 }}
              className="proxima-normal"
            >
              Movie Info
            </p>
            <img
              style={{ width: "90%", marginBottom: 5 }}
              src={computer2}
              alt="computer"
            />
            <p style={{ ...fs6, marginBottom: 40 }} className="proxima-normal">
              Film fanatics often mentioned that they needed to go to multiple
              sites to get a deep dive into movie inormation because there
              wasn't a site that did it all. So our solution was to put as much
              information that we could in one location. Once you click on the a
              movie of your choice you'll be brought to this page which in the
              middle has the typical movie theaters where you select the type,
              date and time. On the left side you are drowning with information
              that will allow you to get a detailed synopsis and information
              about the cast & crew. The right side is what we considered the
              media hub, it will allow users to view all the videos and photos
              from the feature film including other trailers, movie premiere,
              behind the scenes, in scene, interviews and highlights.
            </p>

            <p
              style={{ fontSize: 45, ...color, marginBottom: 30 }}
              className="proxima-normal"
            >
              Seat Assignment
            </p>
            <img
              style={{ width: "90%", marginBottom: 5 }}
              src={computer3}
              alt="computer"
            />
            <p style={{ ...fs6 }} className="proxima-normal">
              When a theater and a movie choice is made most of the time you
              will be taken to a seating chart or ticket quantity page. Although
              3/5 of the sites we visited went to the ticket quantity first we
              decided to go with the seating chart first. After going back and
              forth through the research and usability testing we decided it was
              the best option for our users. More than half the users had
              complications with finding seats or finding enough consecutive
              seating causing them to go back 2 steps to make another selection.
              This could happen more than once. This however will allow them to
              immediately see whether this is a good choice to proceed with.
            </p>
            <p style={{ ...fs6, marginBottom: 60 }} className="proxima-normal">
              Another thing that is typical in this step is when you select a
              choice is that you are typically taken to the another page. Even
              thought this wasn't a pain point, one of the things I did is
              create the seating chart as an overlay allowing the user to still
              see that they really haven't left the page that they were just on.
              This would help if they had to make a change because they would be
              able to click anywhere outside of the chart to be back on the
              previous page. I also made sure to create a legend and labeling so
              users can understand where there seats are especially in refernce
              to the screen (front & back). Seats are labeled and choices are
              shown on the bottom left.
            </p>

            <p
              style={{ fontSize: 45, ...color, marginBottom: 30 }}
              className="proxima-normal"
            >
              Ticket Quanity
            </p>
            <img
              style={{ width: "90%", marginBottom: 7 }}
              src={computer4}
              alt="computer"
            />
            <p style={{ ...fs6, marginBottom: 140 }} className="proxima-normal">
              Users mentioned the need to be included in pricing especially when
              we're talking about seniors, military and students. We made sure
              to include everyone that we could. Before completing their
              purchase we still wanted to list their choices for confirmation
              with a little gif trailer playing at the top left.
            </p>
          </div>
          <p style={{ ...fs2, marginBottom: 90 }} className="proxima-normal">
            Mockups Screen Size Variations
          </p>
          <div
            style={{
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
            className="flex-row"
          >
            <img style={{ width: "69%" }} src={mockup} alt="wireframe" />
            <img style={{ width: "25%" }} src={mockup2} alt="wireframe" />
          </div>
          <div className="coloredBack flex-column">
            <div id="half1"></div>
            <div id="half2"></div>
            <div id="half3"></div>
          </div>
        </div>

        <div style={{ marginTop: 250, marginBottom: 105 }}>
          <List
            title={"Accessibility Considerations"}
            items={listSix}
            numbering={true}
            titleS={{ ...fs2, fontWeight: 400 }}
            listS={{ marginTop: 25 }}
            bulletStyle={{
              margin: 0,
              padding: 0,
              marginRight: 7,
              alignItems: "flex-start",
            }}
            itemStyle={{ marginBottom: 5, padding: 0 }}
            pS={{ ...fs6, margin: 0, padding: 0 }}
          />
        </div>
        <p style={{ ...fs2, marginBottom: 35 }} className="proxima-normal">
          Going Forward
        </p>
        <p style={{ ...fs6, marginBottom: 55 }} className="proxima-normal">
          Takeaways: Our target users shared that the design was intuitive to
          navigate through, more engaging with the images, and demonstrated a
          clear visual hierarchy. They were also estatic that they were able to
          watch movies from the comfort of their home.
        </p>
        <p style={{ ...fs6, marginBottom: 120 }} className="proxima-normal">
          What I learned: I learned that even a small design change can have a
          huge impact on the user experience. The most important takeaway for me
          is while designing the app, I came face to face with my designer bias
          and saw the impact of conducting interviews for the product which
          challenged my preconceived notions.
        </p>
        <List
          title={"Next Steps"}
          items={listSeven}
          numbering={true}
          rootS={{ marginBottom: 25 }}
          titleS={{ ...fs4, fontWeight: 400 }}
          listS={{ marginTop: 17 }}
          itemStyle={{ marginBottom: 5 }}
          pS={{ ...fs6 }}
        />
        <div style={{ marginBottom: 100 }} className="center flex-column">
          <img style={{ width: "97%" }} src={ending} alt="thank you" />
          <p style={{ fontSize: 42, ...color }} className="proxima-normal">
            Thank You!
          </p>
        </div>
      </div>
      <div style={{ margin: "0px 70px" }}>
        <HorizontalProjects
          titleS={{ marginBottom: 35 }}
          rootS={{ width: "100%" }}
          leaveOut={["MovieSeat"]}
        />
      </div>
    </div>
  );
};

export default MovieSeat;
