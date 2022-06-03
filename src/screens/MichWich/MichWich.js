import React from "react";

import {
  TintImage,
  ProjectCategory,
  List,
  Circle,
  HorizontalProjects,
} from "../../components/index";
import useLoad from "../../hooks/useLoad";

import { PROJECTS } from "../../Constants/Projects";

import "./MichWich.css";

import gradintCircles from "../../assets/gradientCircles.png";

import logos from "../../assets/allLogos.png";

import covid from "../../assets/covid.png";
import lady from "../../assets/lady.png";
import map from "../../assets/map.png";
import pencil from "../../assets/pencil.jpg";

import frida from "../../assets/frida.png";
import warren from "../../assets/warren.png";
import journeyMap from "../../assets/fridaGraph.png";

import questionMark from "../../assets/question.png";

import crazy8 from "../../assets/crazy8.png";
import phone1 from "../../assets/phone1.png";
import phone2 from "../../assets/phone2.png";

import ratings1 from "../../assets/instagram1.png";
import chart from "../../assets/pieChart.png";

import phone3 from "../../assets/phone3.png";
import phone4 from "../../assets/phone4.png";
import phone5 from "../../assets/phone5.png";
import phone6 from "../../assets/phone6.png";
import phone7 from "../../assets/phone7.png";
import phone9 from "../../assets/phone9.png";
import mockup from "../../assets/mockups.png";

import instaRows from "../../assets/instaRows.png";
import phone8 from "../../assets/phone8.png";

const PROJECT = PROJECTS[1];

const listOne = [
  {
    title: "Roles & Responsibilities",
    items: [
      "User Research: User Interviews, User Persona",
      "UX Design: Sketches, Wireframing, Usability Testing",
    ],
  },
  {
    title: "Project Context",
    items: ["Spring 2021", "Independent Research Project", "Team: Solo"],
  },
  {
    title: "Tools Used",
    items: ["Figma", "Photoshop"],
  },
];

// const listTwo = [
//   {
//     title: "EMPATHIZE",
//     text: "Conduct research in order to develop knowledge about what your users do, say, think, and feel.",
//     image: brain,
//   },
//   {
//     title: "DEFINE",
//     text: "Combine all your research and observe where your users problems exist.",
//     image: search,
//   },
//   {
//     title: "IDEATE",
//     text: "Ideation is a creative process where we generate ideas in sessions.",
//     image: lightbulb,
//   },
//   {
//     title: "PROTOTYPE",
//     text: "Build real, tactile representations for a subset of your ideas.",
//     image: prototype,
//   },
//   {
//     title: "TEST",
//     text: "Return to your users for feedback.",
//     image: test,
//   },
// ];

const listThree = [
  {
    title: "User Interviews(5)",
    text: "Analyzing the problem space and current state-of-the art solutions",
    image: pencil,
  },
  {
    title: "Persona Mapping(2)",
    text: "Understanding the user journey, user needs, and pain points of various stakeholders",
    image: lady,
  },
  {
    title: "Journey Mapping",
    text: "Understand how customers interact with the brand, document different stages, and address pain points.",
    image: map,
  },
  {
    title: "Covid-19 Friendly",
    text: "Understanding the pandemic's impact and affect of the Covid-19 pandemic on the online food delivery industry.",
    image: covid,
  },
];

const listFour = {
  title: "A few of the questions asked during the interview:",
  items: [
    "Have you ever ordered food via phone, online or on an app?",
    "How often do you order in a month? week?",
    "Can you describe your experience?",
    "Is there any challenges you face when making orders?",
    "What do you like or dislike? What can they improve on?",
    "What would you like to see implemented?",
    "Why do you choose one service over the other?",
    "Do allergies, diets and things of that nature influence your experience?",
    "What do you think is an acceptable time for you to recieve a meal?",
  ],
};

const listFive = [
  {
    title: "4 in 5",
    text: "Problem with delivery time",
  },
  {
    title: "3 in 5",
    text: "Phone lines were typically busy",
  },
  {
    title: "4 in 5",
    text: "Lack of photos",
  },
  {
    title: "2 in 5",
    text: "Lacks nutrition and allergy info",
  },
];

const listSix = [
  "Pictures were added to give users a visual sense of what they can expect.",
  "Food contents and nutritional information were added for our health conscious customers.",
  "General ingredients are preselected here and customers have the choice to add extra ingredients.",
];

const listSeven = [
  "This live map allows the customer to see the delivery driver's progress.",
  "Two progress bars provide the customer with visual progress and eta.",
  "Users can also tip seperately.",
];

const listEight = [
  {
    title: "Scenario 1:",
    text: "Let's say you're buying breakfast and you're buying a meal that typically contains dairy in it but you want to remove those items. Could you show me how you would go about doing that.",
  },
  {
    title: "Scenario 2:",
    text: "Let's say a few minutes ago you added a dish to your cart and did not buy for some reason. Now you want to add an item to the cart and place the delivery order. Could you show me how you would do that.",
  },
  {
    title: "Scenario 3:",
    text: "Say you left the app and return to look at your already completed order. The screen is no longer there. Could you show me where you would go to view your current order.",
  },
];

const listNine = [
  "Ability to locate store quickly",
  "Abilitiy to complete order",
  "Ability to find nutrititonal information",
  "Switch between order details and tracker",
  "Ability to locate tracker easily",
  "Understood how to remove items from order",
];

const listTen = [
  "Is there anything you would change about this process?",
  "What do you think about the layout?",
  "If you were looking for nutritional information where would you look for it?",
  "What frustrates/excites you when using this product? What keeps you engaged?",
  "What do you like or dislike about the app?",
  "How did you feel about the checkout process?",
  "What is the progress of your delivery?",
  "Initially how long is pick up or delivery going to take?",
  "What was the delivery fee?",
  "If you had a magic wand and there's was one thing that you could change or improve, what would that be?",
];

const list11 = [
  "Made sure that call to action button is placed in same place through different pages",
  "Used easily recognizable icons to provide visual context",
  "Used imagery and high contrast to ensure content can be read by everyone",
  "Created simple list style for easer readibility and navigation",
  "Use larger map for viewability when tracking delivery.",
];

const list12 = [
  "Takeaways: The app makes users feel connected with the store constantly informing users throughout the process.",
  "One quote from peer feedback: “The app is reliable and is everything the store needed. Its bright and it's easy to use and best of all it's another way for me to track my health”.",
  "Sometimes you can't get everything done you'll have to do your best and get as much as you can accomplish in the give timeframe",
];

const list13 = [
  "Conduct another round of usabilitiy studies to validate wheter the pain points users experienced were effectively addressed.",
  "Conduct more user research to deteremine any new ares of needs",
  "Do a ride along with or observation with the drivers and get a view of what happens at the restaurant.",
];

const MichWich = () => {
  // useLoad();
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

  return (
    <div className="michRoot">
      <div className="michHeader">
        <TintImage
          imgS={{ imageRendering: "initial" }}
          image={PROJECT.imageLarge}
          tint={PROJECT.color}
        />
      </div>
      <div style={{ marginBottom: 185 }} className="content">
        <p className="proxima-normal mainTitle">MichWich</p>
        <div className="categories">
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
          Creating a seamless application to enhance the experience for
          restaurants, drivers and customers
        </p>
        <div className="listBox">
          {listOne.map((v, i, _) => {
            let rootStyle = {
              minHeight: 200,
              flex: 1,
            };

            if (i == 2) {
              rootStyle.display = "flex";
              rootStyle.flexDirection = "column";
              rootStyle.alignItems = "center";
              rootStyle.justifyContent = "flex-start";
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
                titleS={{ ...fs4, fontWeight: 400 }}
                listS={{ maxWidth: 250 }}
                pS={{ ...fs7, lineHeight: "27px" }}
              />
            );
          })}
        </div>
        <p
          style={{ fontSize: 20, marginBottom: 75 }}
          className="proxima-normal"
        >
          While indoor dining has dropped way down during the pandemic, food
          delivery has grown considerably. DoorDash and Uber Eats, the largest
          delivery apps by market share, saw sales more than double from the end
          of 2019 to the end of 2020. While it might be an easy decision for
          customers to use these third-party delivery apps, the decision for
          restaurants isn't so easy. There's a lot to consider, and it's not a
          one-size-fits-all solution.
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
          People are pressed for time and often struggle to make out time to
          cook or sit down for a nice meal at a restaurant. A lot of times the
          restaurants that they frequent don't have mobile apps where people can
          get information or view what exactly they are about to consume.Those
          that choose delivery have to face the unexpected wait times often
          having to deal with unexpected delivery times therefore ending up with
          a unpleasant experience.
        </p>
        <p
          style={{ fontSize: 34, marginBottom: 30 }}
          className="proxima-normal"
        >
          Goal
        </p>
        <p style={{ fontSize: 20 }} className="proxima-normal">
          Design a mobile app with an on time delivery tracking system that lets
          users order meals from the Michwich app at their convenience. The
          challenge is to understand Michwich users current ordering process,
          discover pain points and propose a solution to improve their
          experiences.
        </p>
      </div>
      <div
        className="center"
        style={{
          position: "relative",
          marginBottom: 100,
        }}
      >
        <img style={{ width: 1175 }} src={gradintCircles} alt="circles" />
      </div>
      <div className="logos">
        <img src={logos} alt="logos" />
      </div>
      <div className="content">
        <p
          style={{ fontSize: 36, marginBottom: 15 }}
          className="proxima-normal"
        >
          Research
        </p>
        <div className="researchBox">
          {listThree.map((v, i, _) => {
            return (
              <div
                style={{ maxWidth: 175 }}
                className="researchItem center flex-column"
              >
                <div className="researchImg center">
                  <img
                    className="max-width max-height"
                    src={v.image}
                    alt={v.title}
                  />
                </div>
                <h3 style={fs4} className="proxima-normal">
                  {v.title}
                </h3>
                <p style={fs7} className="proxima-normal">
                  {v.text}
                </p>
              </div>
            );
          })}
        </div>
        <p
          style={{ fontSize: 20, marginBottom: 45 }}
          className="proxima-normal"
        >
          I conducted interviews to understand the users I'm designing for and
          their needs. The primary user group identified through research were
          working adults who don't have time to cook, they typically order food
          at least 2 times a week and their biggest frustration is with with not
          getting their meals in a timely manner.
        </p>
        <p style={{ fontSize: 20 }} className="proxima-normal">
          This user group of 5 confirmed initial assumptions about the Michwich
          process, but research also revealed that time was not the only factor
          limiting users from ordering. Other users issues included were
          unreliability, lack of visuals, uncertainty and lack of insight.
        </p>
        <div style={{ margin: "55px 10px 0px" }}>
          <List
            title={listFour.title}
            items={listFour.items}
            dotted={7}
            titleS={{ ...fs6, fontWeight: 500 }}
            itemStyle={{ margin: "21px 0px" }}
            pS={fs6}
          />
        </div>
        <p
          style={{ fontSize: 36, marginTop: 155, marginBottom: 55 }}
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
              Persona: Frida
            </h3>
            <p style={{ fontSize: 20 }} className="proxima-normal">
              Problem statement:
            </p>
            <p style={{ fontSize: 20 }} className="proxima-normal">
              Frida is an artist who needs a app that tells her when the food
              will be delivered because she doesn't want to eat her warm food
              cold.
            </p>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                marginTop: "70px",
              }}
            >
              <img
                style={{ imageRendering: "initial", width: 800 }}
                src={frida}
                alt="frida"
              />
            </div>
          </div>
          <div className="persona">
            <h3
              style={{ fontSize: 20, marginBottom: 33 }}
              className="proxima-normal"
            >
              Persona: Warren
            </h3>
            <p style={{ fontSize: 20 }} className="proxima-normal">
              Problem statement:
            </p>
            <p style={{ fontSize: 20 }} className="proxima-normal">
              Warren is a delivery driver who needs to see the times of the
              order because then he'll know whether or not to pick up the food
            </p>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                marginTop: "70px",
              }}
            >
              <img
                style={{ imageRendering: "initial", width: 800 }}
                src={warren}
                alt="warren"
              />
            </div>
          </div>
        </div>
        <p
          style={{ fontSize: 36, marginBottom: 45 }}
          className="proxima-normal"
        >
          User Journey Map
        </p>
        <p
          style={{ fontSize: 20, marginBottom: 65 }}
          className="proxima-normal"
        >
          “Take a walk in your customers' shoes” isn't just a phrase; it's a
          necessary process that positively impacts your business if done the
          right way. If you're wondering how to get into your customers' minds,
          the most effective way to do so is through customer journey mapping.
          Customer journey mapping creates a visual representation of what your
          customers go through with your brand or product. It helps to
          understand how your customers see your brand, how they interact with
          your products and gain insight into the pain points they're facing
          that keep them from purchasing. Customer journey mapping ensures that
          you address customer issues for a smooth experience.
        </p>
        <p style={{ fontSize: 30 }} className="proxima-normal">
          Journey Map: Frida
        </p>
        <p style={{ fontSize: 20 }} className="proxima-normal">
          Goal: A quick and convenient way to order a healthy meal
        </p>
        <div
          style={{ marginTop: 58, marginBottom: 185 }}
          className="center max-width"
        >
          <img style={{ width: 900 }} src={journeyMap} alt="Journey Map" />
        </div>
        <div
          style={{ alignItems: "flex-start" }}
          className="flex-row max-width center"
        >
          {listFive.map((v, i, _) => {
            return (
              <div
                style={{ margin: "0px 30px" }}
                className="center flex-column"
              >
                <Circle
                  size={225}
                  className={"center"}
                  style={{ backgroundColor: PROJECT.color }}
                >
                  <p
                    style={{ ...fs1, color: "white" }}
                    className="proxima-normal"
                  >
                    {v.title}
                  </p>
                </Circle>
                <p
                  style={{
                    ...fs6,
                    margin: "20px 0px",
                    textAlign: "center",
                    maxWidth: 175,
                    lineHeight: "20px",
                  }}
                  className="proxima-normal"
                >
                  {v.text}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{ padding: "0px 45px" }}>
          <p style={{ ...fs4, marginTop: 215 }} className="proxima-normal">
            Insights
          </p>
          <p style={{ fontSize: 20, marginTop: 30 }} className="proxima-normal">
            Based on the user interviews and user journey map, we generated the
            following insights.
          </p>
          <p
            style={{ fontSize: 30, paddingLeft: 30, margin: "30px 10px" }}
            className="proxima-normal"
          >
            Group 1: Insights Gathered
          </p>
          <div style={{ marginBottom: 175 }} className="insights flex-row">
            <div className="insight">
              <h3
                style={{ ...fs4, marginBottom: 10 }}
                className="proxima-normal"
              >
                COVID-19
              </h3>
              <p style={{ ...fs6 }} className="proxima-normal">
                <span>Restaurants</span> were{" "}
                <span>no longer allowing indoor dining</span> and{" "}
                <span>people</span> were{" "}
                <span>in fear to eat in public spaces</span>. Due to the
                pandemic we should put some priority on delivery.
              </p>
            </div>
            <div className="insight">
              <h3
                style={{ ...fs4, margin: "0px 20px", marginBottom: 10 }}
                className="proxima-normal"
              >
                BUSY
              </h3>
              <p style={{ ...fs6 }} className="proxima-normal">
                A lot of people call in to to make orders and the{" "}
                <span>phone lines are typically busy</span>. We could make their
                lives easier by allowing them to put an order at their own
                convenience
              </p>
            </div>
            <div className="insight">
              <h3
                style={{ ...fs4, marginBottom: 10 }}
                className="proxima-normal"
              >
                VISUALS
              </h3>

              <p style={{ ...fs6 }} className="proxima-normal">
                Users stated that very <span>few items had pictures</span> or{" "}
                <span>nutritional info</span>.{" "}
                <span>Pictures are universal</span> they can say a lot without
                actually saying much. Every item should include a picture with
                nutritional and allergy information because it could be a
                determining factor for the user.
              </p>
            </div>
            <div className="insight">
              <h3
                style={{ ...fs4, marginBottom: 10 }}
                className="proxima-normal"
              >
                TIME
              </h3>

              <p style={{ ...fs6 }} className="proxima-normal">
                Customers reported that the <span>delivery window</span> given
                by the host <span>could be wrong</span> sometimes{" "}
                <span>by 20-45 min</span> and sometimes didn't hear a knock or a
                ring when item was delivered. This is an opportunity to have
                some type of tracker that you get from companies like Uber.
              </p>
            </div>
            <div className="insight">
              <h3
                style={{ ...fs4, margin: "0px 20px", marginBottom: 10 }}
                className="proxima-normal"
              >
                REPEAT
              </h3>

              <p style={{ ...fs6 }} className="proxima-normal">
                <span>Customers</span> will typically{" "}
                <span>
                  purchase the same items on the same days at the same times
                </span>
                . Humans are creatures of habit and this may allow us to create
                things like a favorites page and a schedule notification.
              </p>
            </div>
            <div className="insight"></div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 175 }} className="center flex-column">
        <div style={{ position: "relative" }}>
          <p
            style={{
              fontSize: 42,
              color: "#f7c215",
              textAlign: "center",
            }}
            className="proxima-normal"
          >
            How might we make our users feel informed while making
          </p>
          <img
            style={{ position: "absolute", width: 200, top: -75, left: "37%" }}
            src={questionMark}
            alt="?"
          />
        </div>
        <p
          style={{
            fontSize: 42,
            color: "#f7c215",
            textAlign: "center",
          }}
          className="proxima-normal"
        >
          them feel confident that their orders will be delivered on time?
        </p>
      </div>
      <div className="content">
        <p
          style={{ fontSize: 36, marginBottom: 45 }}
          className="proxima-normal"
        >
          Crazy 8's
        </p>
        <p style={{ fontSize: 20 }} className="proxima-normal">
          In order to get a few ideas out quickly, I did a crazy 8's excercise.
          This helps me come up with a variety of ideas quickly without
          overthinking. This exercise allows me to easily iterate and collect
          feedback on the one board. That way I can preserve feedback plus I can
          easily expand and refine the ideas over time.
        </p>
        <div style={{ margin: "100px 0px" }} className="center">
          <img style={{ width: 650 }} src={crazy8} alt="Crazy 8's" />
        </div>
        <p
          style={{ fontSize: 36, marginBottom: 35 }}
          className="proxima-normal"
        >
          Digital Wireframes
        </p>
        <p
          style={{ fontSize: 20, marginBottom: 75 }}
          className="proxima-normal"
        >
          Easy navigation and having options was a key user need to address in
          the designs.
        </p>
        <div className="flex-row center">
          <div className="wireframe center">
            <img style={{ width: 600 }} src={phone1} alt="wireframe" />
          </div>
          <div className="wireframe center">
            <List
              titleS={{ paddingLeft: 20 }}
              title={"Upfront Info At A Glance"}
              items={listSix}
            />
          </div>
        </div>
        <div className="flex-row center">
          <div className="wireframe center">
            <div style={{ height: 335 }}>
              <List title={"Keeping Track Of Your Order"} items={listSeven} />
            </div>
          </div>
          <div className="wireframe center">
            <img style={{ width: 600 }} src={phone2} alt="wireframe" />
          </div>
        </div>
        <p
          style={{ fontSize: 36, margin: "70px 0px 33px" }}
          className="proxima-normal"
        >
          Usability Study
        </p>
        <p style={{ fontSize: 20 }} className="proxima-normal">
          After doing the crazy 8's exercise and/ developing the wireframes, I
          reached out to 5 of the initial interview participants from the
          research phase in order to evaluate the prototype. I conducted a
          moderated usability study with the 5 participants , each interview
          taking about 10-15 min.
        </p>
        <p style={{ fontSize: 20, marginTop: 55 }} className="proxima-normal">
          Scenarios
        </p>
        <div
          style={{ paddingLeft: 20, margin: "5px 0px 45px" }}
          className="flex-column"
        >
          {listEight.map((v, i, _) => {
            return (
              <div className="scenario">
                <p style={{ ...fs6 }} className="proxima-normal">
                  {v.title}
                </p>
                <p style={{ ...fs6 }} className="proxima-normal">
                  {v.text}
                </p>
              </div>
            );
          })}
        </div>
        <List
          title={"A few of the questions asked during the interview:"}
          items={listTen}
          dotted={7}
          rootS={{ margin: "70px 0px 60px" }}
          titleS={{ ...fs6, fontWeight: 500 }}
          listS={{ paddingLeft: 20, marginTop: 10 }}
          itemStyle={{ marginBottom: 25 }}
          pS={{ ...fs6 }}
        />
        <p
          style={{ fontSize: 20, margin: "0px 40px" }}
          className="proxima-normal"
        >
          We gathered a mostly positive response to the prototype. Participants
          were able to perform the benchmark tasks with ease, and usability test
          allowed me to obtain qualitative data about user's thoughts while
          using the site. However there are a few things we needed to work on.
          Here are a few highlights from the results
        </p>
        <div
          style={{ margin: "150px 0px", alignItems: "flex-start" }}
          className="center"
        >
          <img style={{ width: 800 }} src={ratings1} alt="" />
        </div>
        <p style={{ ...fs5, marginBottom: 30 }} className="proxima-normal">
          Insights
        </p>
        <p style={{ fontSize: 20 }} className="proxima-normal">
          I conducted two rounds of usability studies. Findings from the first
          study helped guide the designs from wireframes to mockups.The second
          study used a high-fidelity prototype and revealed what aspects of the
          mockups need refining.
        </p>

        <p
          style={{ fontSize: 30, paddingLeft: 50, margin: "45px 0px 0px" }}
          className="proxima-normal"
        >
          Usability Study: Findings
        </p>
        <div
          style={{ paddingTop: 30, marginBottom: 140 }}
          className="insights flex-row"
        >
          <div className="insight">
            <h3 style={{ ...fs4, marginBottom: 10 }} className="proxima-normal">
              Map
            </h3>

            <p style={{ ...fs6 }} className="proxima-normal">
              Many users felt that the <span>map</span> may be{" "}
              <span>too small</span> for them to see whats really going on.
            </p>
          </div>
          <div style={{ margin: "0px 20px" }} className="insight">
            <h3 style={{ ...fs4, marginBottom: 10 }} className="proxima-normal">
              Font
            </h3>

            <p style={{ ...fs6 }} className="proxima-normal">
              The <span>font was small</span> and some{" "}
              <span>users had trouble reading and guiding themselves</span> to
              the the next steps.
            </p>
          </div>
          <div className="insight">
            <h3 style={{ ...fs4, marginBottom: 10 }} className="proxima-normal">
              No option
            </h3>

            <p style={{ ...fs6 }} className="proxima-normal">
              There was <span>no option for pick up or delivery.</span>
            </p>
          </div>
          <div className="insight">
            <h3 style={{ ...fs4, marginBottom: 10 }} className="proxima-normal">
              Profile
            </h3>

            <p style={{ ...fs6 }} className="proxima-normal">
              There was <span>no profile page</span> to house their{" "}
              <span>card info, transaction history, and rewards.</span>
            </p>
          </div>
          <div style={{ margin: "0px 20px" }} className="insight">
            <h3 style={{ ...fs4, marginBottom: 10 }} className="proxima-normal">
              Losing Track
            </h3>

            <p style={{ ...fs6 }} className="proxima-normal">
              There was <span>no way to get back to the tracker</span> if you
              left.
            </p>
          </div>
          <div className="insight">
            <h3 style={{ ...fs4, marginBottom: 10 }} className="proxima-normal">
              Blurry
            </h3>

            <p style={{ ...fs6 }} className="proxima-normal">
              There was <span>too much items</span> and things{" "}
              <span>especially on the main</span> screen at once.
            </p>
          </div>
        </div>
        <div className="center">
          <img style={{ width: 1000 }} src={chart} alt="chart" />
        </div>
        <p
          style={{ fontSize: 36, margin: "150px 0px 120px" }}
          className="proxima-normal"
        >
          Refining the Design
        </p>
        <div style={{ marginBottom: 75 }} className="center flex-column">
          <p
            style={{ color: PROJECT.color, fontSize: 36, marginBottom: 75 }}
            className="proxima-normal"
          >
            Food Selection
          </p>
          <img style={{ width: 1000 }} src={phone3} alt={"Food Selection"} />
        </div>
        <div className="center flex-column">
          <p
            style={{ color: PROJECT.color, fontSize: 36, marginBottom: 45 }}
            className="proxima-normal"
          >
            Delivery Tracker
          </p>
          <img style={{ width: 1000 }} src={phone4} alt={"Food Selection"} />
        </div>
        <p style={{ fontSize: 20, marginTop: 45 }} className="proxima-normal">
          The usability study revealed frustrations with the live map, progress
          bar and the inability to locate the tracker afterwards . So I added a
          clickabe status bar at the the top that will allow users to get see
          their ongoing delivery. There is also a way to view view this in their
          transaction history in the account tab. I added a live map that took
          up more than half the screen for those with low vision. We made
          progress bars with incremental updates and ETA larger at the bottom
          portion of the screen
        </p>
        <p
          style={{ fontSize: 36, margin: "55px 0px 35px" }}
          className="proxima-normal"
        >
          Mockups
        </p>
      </div>
      <div className="slantedContainer">
        <div className="center flex-column">
          <p
            style={{
              color: PROJECT.color,
              fontSize: 36,
              margin: "35px 0px 15px",
            }}
            className="proxima-normal"
          >
            Select Category
          </p>
          <img style={{ width: 545 }} src={phone5} alt="phone" />
          <p
            style={{ fontSize: 20, padding: "0px 100px", margin: "35px 0px" }}
            className="proxima-normal"
          >
            While customers are searching for what they want to eat we made sure
            give them a simple list view of the items with pictures. We also
            wanted to make sure they knew where they were in the process once
            they clicked on something. At the top it will allow them to see the
            time for delivery and the location they chose which they can edit by
            tapping.
          </p>
        </div>
        <div style={{ marginTop: 105 }} className="center flex-column">
          <p
            style={{
              color: PROJECT.color,
              fontSize: 36,
              marginBottom: 20,
            }}
            className="proxima-normal"
          >
            Selected Item
          </p>
          <img style={{ width: 545 }} src={phone9} alt="phone" />
          <p
            style={{ fontSize: 20, padding: "0px 100px", margin: "35px 0px" }}
            className="proxima-normal"
          >
            Once they have made a selection they will be presented with a page
            that offers them a view of what they would like to order. This page
            also includes basic summuray, information and the ingredients of the
            selection. They can remove the items that they prefer not to have in
            their meal.
          </p>
        </div>
        <div style={{ marginTop: 105 }} className="center flex-column">
          <p
            style={{
              color: PROJECT.color,
              fontSize: 36,
              marginBottom: 20,
            }}
            className="proxima-normal"
          >
            Payment
          </p>
          <img style={{ width: 545 }} src={phone6} alt="phone" />
          <p
            style={{ fontSize: 20, padding: "0px 100px", margin: "35px 0px" }}
            className="proxima-normal"
          >
            The payment page is a necessary page as we would be avoiding contact
            with the customers so they wouldn't be able to pay with cash. This
            page will allow you to add you debit or credit details. For some
            users Apple Pay, GPay, Amazon Pay and Paypal are payment options
            that they can use so they don't have to enter any new information.
          </p>
        </div>
        <div style={{ marginTop: 105 }} className="center flex-column">
          <p
            style={{
              color: PROJECT.color,
              fontSize: 36,
              marginBottom: 20,
            }}
            className="proxima-normal"
          >
            Rewards
          </p>
          <img style={{ width: 545 }} src={phone7} alt="phone" />
          <p
            style={{ fontSize: 20, padding: "0px 100px", margin: "35px 0px" }}
            className="proxima-normal"
          >
            The company wanted to reward people for using the app as they knew
            it would make it easier for both parties but also because they knew
            that it was a tough time for everyone during this pandemic so we
            made sure to create a tab solely for that. This page would allow
            customers to get point for every purchase and then be able to claim
            something for free.
          </p>
        </div>
        <p
          style={{
            fontSize: 36,
            padding: "0px 93px",
            marginTop: 92,
            marginBottom: 100,
          }}
          className="proxima-normal"
        >
          Mockups
        </p>
        <img style={{ width: "100%" }} src={mockup} alt="Mockups" />
        <div className="slant flex-column">
          <div id="slantTop"></div>
          <div id="slantBottom"></div>
        </div>
      </div>
      <div style={{ marginTop: 105, marginBottom: 80 }} className="center">
        <img style={{ width: 1000 }} src={instaRows} alt="Comparisons" />
      </div>
      <div className="content">
        <p
          style={{ fontSize: 20, marginBottom: 170 }}
          className="proxima-normal"
        >
          I did a second usability study to ensure that some of the pain points
          we had in the first test were relieved. It revealed many frustrations
          which we improved on.
        </p>
        <p style={{ fontSize: 36 }} className="proxima-normal">
          Accessibility Considerations
        </p>
        <List
          numbering={true}
          items={list11}
          rootS={{ marginTop: 35, marginBottom: 50 }}
          listS={{ listStyle: "none" }}
          itemStyle={{ margin: 0 }}
          pS={{ fontSize: 20, margin: 0, marginLeft: 5 }}
        />
        <p
          style={{ fontSize: 36, marginBottom: 30 }}
          className="proxima-normal"
        >
          Going Forward
        </p>
        <List
          title={"Takeaways:"}
          items={list12}
          numbering={true}
          rootS={{ marginBottom: 125 }}
          titleS={{ fontSize: 20, fontWeight: 400 }}
          listS={{ listStyle: "none", paddingLeft: 10, marginTop: 5 }}
          itemStyle={{ margin: "5px 0px" }}
          pS={{ fontSize: 20, margin: 0, marginLeft: 5 }}
        />
        <p
          style={{ ...fs6, marginBottom: 30, fontWeight: 600 }}
          className="proxima-normal"
        >
          What I learned:
        </p>
        <p
          style={{ fontSize: 20, marginBottom: 25 }}
          className="proxima-normal"
        >
          Listen Up: While designing the Michwich app, I learned that the
          initial ideas for the app are only the beginning of the process. You
          should be genuinely interested and curious about the user story, it's
          a huge learning opportunity.
        </p>
        <p
          style={{ fontSize: 20, marginBottom: 35 }}
          className="proxima-normal"
        >
          Don't Reinvent The Wheel: There are so many well-known UI patterns
          (such as cards, profiles, "add" buttons), it's not always feasible nor
          practical to create new components or styles.
        </p>
        <List
          title={"Next Steps"}
          items={list13}
          numbering={true}
          titleS={{ fontSize: 30, fontWeight: 400 }}
          listS={{ listStyle: "none", paddingLeft: 15, marginTop: 15 }}
          itemStyle={{ margin: "5px 0px" }}
          pS={{ fontSize: 20 }}
        />
      </div>
      <div
        style={{ marginTop: 100, marginBottom: 125 }}
        className="center flex-column"
      >
        <img style={{ width: 700 }} src={phone8} alt="phones" />
        <p
          style={{ fontSize: 36, color: PROJECT.color, marginTop: 75 }}
          className="proxima-normal"
        >
          Thank You
        </p>
      </div>
      <div style={{ margin: "0px 70px" }}>
        <HorizontalProjects
          titleS={{ marginBottom: 35 }}
          rootS={{ width: "100%" }}
          leaveOut={["Michwich"]}
        />
      </div>
    </div>
  );
};

export default MichWich;
