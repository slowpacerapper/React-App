import { useRef, useEffect } from "react";
import { Context } from "../ScrollEffects";
import React from "react";
import styled, { css } from "styled-components";
import SatisfiedClients from "../SatisfiedClients";
import Quality from "../images/quality.png";
import Relation from "../images/relation.png";
import Support from "../images/support.png";
import Credibility from "../images/credibility.png";
import Training from "../images/training.jpeg";
import Guidance from "../images/guidance.jpeg";
import Consulting from "../images/consulting.jpeg";
import About1 from "../images/about3.jpeg";
import Trustee1 from "../images/trustee4.jpeg";
import Trustee2 from "../images/trustee5.jpeg";
import Trustee3 from "../images/trustee6.jpeg";
import Trustee4 from "../images/trustee7.jpeg";
import Trustee5 from "../images/trustee8.jpeg";
import Trustee6 from "../images/trustee9.jpeg";

const TestimonyData = [
  {
    id: 1,
    title: "Bakare Ayodeji",
    image: Trustee1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Bakare Temitayo",
    image: Trustee2,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Bakare Titilayo",
    image: Trustee3,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    title: "Bakare Abosede",
    image: Trustee4,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    title: "Bakare Temitope",
    image: Trustee5,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    title: "Chukwudalu Francis",
    image: Trustee6,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 7,
    title: "Daniel Ekundayo",
    image: Trustee3,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const TeamData = [
  {
    id: 101,
    title: "Bakare Ayodeji",
    image: Trustee1,
    job: "FrontEnd Dev",
  },
  {
    id: 102,
    title: "Bakare Temitayo",
    image: Trustee2,
    job: "Dev Ops",
  },
  {
    id: 103,
    title: "Daniel Ekundayo",
    image: Trustee3,
    job: "FrontEnd Dev",
  },
  {
    id: 104,
    title: "Seun Somefun",
    image: Trustee4,
    job: "BackEnd Dev",
  },
  {
    id: 105,
    title: "Chukwudalu Francis",
    image: Trustee5,
    job: "Backend Dev",
  },
  {
    id: 106,
    title: "Chioma Eleje",
    image: Trustee6,
    job: "Medical Doctor",
  },
];

const GLBtns = styled.button`
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid #f8ecd6;
  color: #f8ecd6;
  position: absolute;
  left: ${(props) => (props.rightBtn ? "57%" : "43%")};
  transform: translateX(-50%);
  transition: all 0.3s linear;
  &:hover {
    background: #f8ecd6;
    color: #187e5f;
    border: 1px solid #187e5f;
  }
`;

const Main = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 90%;
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  background: #187e5f;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  span {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 2rem;
    height: 2rem;
    filter: invert();
  }
`;

const ContentPara = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: white;
  width: 10rem;
`;

//What we do section

const WhatWeDo = styled.div`
  width: 100%;
  opacity: 0.4;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8ecd6;
  overflow: hidden;
  transition: all 0.8s ease-in-out;
  &.clear {
    opacity: 1;
  }
`;

const WWDHeading = styled.p`
  position: relative;
  font-size: 2.5rem;
  letter-spacing: -1.5px;
  word-spacing: -1.5px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  z-index: 100;
  @media (max-width: 575px) {
    font-size: 1.5rem;
  }
`;

const HeaderPara = styled.p`
  font-weight: 500;
  color: #333;
  text-align: center;
  margin-top: 0.9rem;
  text-transform: uppercase;
`;

const WWDContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: flex-start;
  padding: 2rem 0;
  transition: all 1s ease-in-out;
`;

const WWDDetails = styled.div`
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  flex-flow: column;
  width: 300px;
  justify-content: flex-start;
  background: rgb(24, 126, 95);
  height: 450px;
  gap: 1rem;
  box-shadow: 2px 3px 3px rgba(24, 126, 95, 0.4);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(5px);
    box-shadow: none;
  }
  span {
    display: flex;
    flex-flow: column;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
  }
`;

const DetailsTitle = styled.h1`
  position: relative;
  width: 90%;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  color: #f8ecd6;
  &::before {
    content: "";
    position: absolute;
    width: 4rem;
    height: 3px;
    background: #f8ecd6;
    left: 0;
    bottom: -4px;
  }
`;

const DetailsBody = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6rem;
  width: 90%;
  color: #f8ecd6;
`;

//About us section

const About = styled.section`
  position: relative;
  opacity: 0.4;
  margin-top: -4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #f8ecd6;
  padding: 4rem 0;
  transition: all 0.8s ease-in-out;
  transform: translateY(5%);
  &.clear {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutPara = styled(HeaderPara)`
  text-transform: none;
  max-width: 90%;
  font-size: 0.9rem;
  min-width: 300px;
  text-align: justify;
  margin: 0;
  flex: 1;
  line-height: 1.5rem;
  font-weight: 400;
`;
const AboutContent = styled.div`
  width: 100%;
  margin: auto;
  padding: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  transition: all 0.6s ease-in-out;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    width: 90%;
  }
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    top: 7.5rem;
    width: 90%;
    background: #187e5f;
  }
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    bottom: 4rem;
    width: 90%;
    background: #187e5f;
  }
  img {
    position: relative;
    min-width: 200px;
    flex: 1;
  }
`;

//Our Team section
const OurTeam = styled(About)`
  margin-top: -2rem;
  transition: all 0.8s ease-in-out;
  &.clear {
    opacity: 1;
  }
`;
const OurTeamTitle = styled(WWDHeading)``;
const OurTeamContent = styled.div`
  width: 100%;
  /* position: relative; */
  padding: 4rem 0;
  display: grid;
  grid-auto-flow: column;
  gap: 7rem;
  overflow: auto;
  transition: all 0.8s ease-in-out;
  scroll-snap-type: inline mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const TeamCard = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 150px;
  max-width: 250px;
  align-self: center;
  margin: auto;
  background: #187e5f;
  padding: 2rem;
  scroll-snap-align: start;
  img {
    height: 10rem;
    width: 10rem;
    border: 8px solid #187e5f;
    border-radius: 50%;
    margin-bottom: 2rem;
    box-shadow: 0px 10px 0px 9px #f8bc4c;
    object-fit: cover;
  }
`;
const TeamCardName = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  color: #f8ecd6;
`;

const TeamCardTitle = styled.h4`
  font-size: 0.7rem;
  font-weight: 400;
  color: #f8ecd6;
  text-align: center;
`;

const OurGLBtns = styled.button`
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid #187e5f;
  position: absolute;
  transition: all 0.3s linear;
  transform: translateX(-50%);
  color: #187e5f;
  left: ${(props) => (props.rightBtn ? "57%" : "43%")};
  &:hover {
    background: #187e5f;
    color: #f8ecd6;
    border: 1px solid #f8ecd6;
  }
`;

//Testimonies Section
const Testimonies = styled(About)`
  background: #187e5f;
  margin-top: 0;
  h3 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #f8ecd6;
    @media (max-width: 575px) {
      font-size: 1.5rem;
    }
  }
`;
const TestimoniesCont = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  overflow: auto;
  gap: 2rem;
  margin-bottom: 2rem;
  scroll-snap-type: inline mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const TestimonyCard = styled.div`
  display: flex;
  padding: 1rem;
  flex-flow: column;
  position: relative;
  min-width: 320px;
  box-shadow: 1px 2px 2px #f8ecd6;
  scroll-snap-align: start;
  /* border:3px solid black; */
  div {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-bottom: 1rem;
    span:last-child {
      color: #f8ecd6;
      font-weight: 500;
    }
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;
const TestimoniesInfo = styled.div`
  display: flex;
  height: max-content;
  flex: 1;
  p {
    height: max-content;
    width: 100%;
    font-weight: 300;
    color: #f8ecd6;
  }
`;

export default function Body() {
  const Services = useRef();
  const WWDC = useRef();
  const AboutCont = useRef();
  const OurTeamContainer = useRef();
  const TestimoniesContainer = useRef();
  const OurTeamCon = useRef();
  const Testi = useRef();

  const contIdentifier = (element, amount) => {
    element.current.scrollBy({
      top: 0,
      left: amount,
      behavior: "smooth",
    });
  };

  const scrollFunc = (e) => {
    const btn = e.target;
    if (btn.innerText === "<") {
      contIdentifier(OurTeamContainer, -200);
    }
    if (btn.innerText === ">") {
      contIdentifier(OurTeamContainer, 200);
    }
  };
  const scrollFuncTwo = (e) => {
    const btn = e.target;
    if (btn.innerText === "<") {
      contIdentifier(TestimoniesContainer, -200);
    }
    if (btn.innerText === ">") {
      contIdentifier(TestimoniesContainer, 200);
    }
  };

  useEffect(() => {
    window.document.onscroll = () => {
      const ServicesTop = Services.current.getBoundingClientRect().top;
      const AboutTop = AboutCont.current.getBoundingClientRect().top;
      const OurTeamConTop = OurTeamCon.current.getBoundingClientRect().top;
      const TestiTop = Testi.current.getBoundingClientRect().top;

      ServicesTop < 500
        ? Services.current.classList.add("clear")
        : Services.current.classList.remove("clear");

      AboutTop < 500
        ? AboutCont.current.classList.add("clear")
        : AboutCont.current.classList.remove("clear");

      OurTeamConTop < 500
        ? OurTeamCon.current.classList.add("clear")
        : OurTeamCon.current.classList.remove("clear");

      TestiTop < 600
        ? Testi.current.classList.add("clear")
        : Testi.current.classList.remove("clear");
    };
  }, []);

  return (
    <Main>
      <MainContent>
        <Container>
          <Content>
            <span>
              <img src={Relation} alt="" />
              <ContentPara>
                We are very intentional <br />
                about our relationship
                <br /> with our clients
              </ContentPara>
            </span>
            <span>
              <img src={Credibility} alt="" />
              <ContentPara>We maintain a 100% integrity at SPINK</ContentPara>
            </span>
            <span>
              <img src={Quality} alt="" />
              <ContentPara>Our services are 100% guaranteed</ContentPara>
            </span>
            <span>
              <img src={Support} alt="" />
              <ContentPara>
                We offer continuous support to our clients
              </ContentPara>
            </span>
          </Content>
        </Container>
      </MainContent>
      <WhatWeDo ref={Services} id="services">
        <Container>
          <WWDHeading>What we do @ spink</WWDHeading>
          <HeaderPara>Our core services includes the following</HeaderPara>

          <WWDContent ref={WWDC}>
            <WWDDetails>
              <img src={Training} alt="" />
              <span>
                <DetailsTitle>Training</DetailsTitle>
                <DetailsBody>
                  We equip clients with the knowledge, skills, and/or abilities
                  required to support the new roles, business processes and/or
                  technology.
                </DetailsBody>
              </span>
            </WWDDetails>
            <WWDDetails>
              <img src={Consulting} alt="" />
              <span>
                <DetailsTitle>Consulting</DetailsTitle>
                <DetailsBody>
                  Our company is made of bright and analytical people who work
                  closely with clients to help find solutions to difficult
                  business-related problems.
                </DetailsBody>
              </span>
            </WWDDetails>
            <WWDDetails>
              <img src={Guidance} alt="" />
              <span>
                <DetailsTitle>Guidiance</DetailsTitle>
                <DetailsBody>
                  We help both individuals and organisations discover and
                  develop their educational, vocational, and psychological
                  potentials.
                </DetailsBody>
              </span>
            </WWDDetails>
          </WWDContent>
        </Container>
      </WhatWeDo>
      <About ref={AboutCont} id="about">
        <Container>
          <WWDHeading>About us</WWDHeading>
          <AboutContent>
            <div>
              <img src={About1} alt="" />
              <img src={About1} alt="" />
            </div>
            <AboutPara>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              natus repellat ducimus accusantium vitae odio tempora enim modi
              quos asperiores qui, possimus, praesentium reprehenderit molestias
              ab non repellendus labore dolorem. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Minus natus repellat ducimus
              accusantium vitae odio tempora enim modi quos asperiores qui,
              possimus, praesentium reprehenderit molestias ab non repellendus
              labore dolorem. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Minus natus repellat ducimus accusantium vitae odio tempora
              enim modi quos asperiores qui, possimus, praesentium reprehenderit
              molestias ab non repellendus labore dolorem.
            </AboutPara>
          </AboutContent>
        </Container>
      </About>
      <OurTeam ref={OurTeamCon}>
        <Container>
          <OurTeamTitle>Our team</OurTeamTitle>
          <OurTeamContent ref={OurTeamContainer}>
            {TeamData.map(({ title, id, job, image }) => {
              return (
                <TeamCard key={id}>
                  <img src={image} alt="" />
                  <TeamCardName>{title}</TeamCardName>
                  <TeamCardTitle>{job}</TeamCardTitle>
                </TeamCard>
              );
            })}
          </OurTeamContent>
          <OurGLBtns onClick={scrollFunc}>&lt;</OurGLBtns>
          <OurGLBtns onClick={scrollFunc} rightBtn>
            &gt;
          </OurGLBtns>
        </Container>
      </OurTeam>
      <Testimonies ref={Testi}>
        <Container>
          <h3>Testimonies</h3>
          <TestimoniesCont ref={TestimoniesContainer}>
            {TestimonyData.map(({ id, title, image, message }) => {
              return (
                <TestimonyCard key={id}>
                  <div>
                    <span className="image">
                      <img src={image} alt="" />
                    </span>
                    <span className="name">{title}</span>
                  </div>
                  <TestimoniesInfo>
                    <p>{message}</p>
                  </TestimoniesInfo>
                </TestimonyCard>
              );
            })}
          </TestimoniesCont>
          <GLBtns onClick={scrollFuncTwo}>&lt;</GLBtns>
          <GLBtns onClick={scrollFuncTwo} rightBtn>
            &gt;
          </GLBtns>
        </Container>
      </Testimonies>
      <SatisfiedClients />
    </Main>
  );
}
