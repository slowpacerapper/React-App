import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Logo1 from "./images/logo1.png";
import Logo2 from "./images/logo2.png";
import Logo4 from "./images/logo4.png";

const SatisfiedClients = () => {
  const scrCont = useRef();
  const Clients = useRef();

  useEffect(() => {
    const observer3 = new IntersectionObserver(callback3, { threshold: 0.8 });
    const clients = Clients.current;
    observer3.observe(clients);
  }, []);

  const callback3 = (entries) => {
    if (entries[0].isIntersecting) {
      const rootContainer = scrCont.current;
      const target = rootContainer.children[0];
      const target2 = rootContainer.children[rootContainer.children.length - 1];
      // this is the function that is called on the object as soon as it intersects
      const scroller = () => {
        rootContainer.scrollBy({ top: 0, left: 200, behavior: "smooth" });
      };

      // this is the function that is called on the object as soon as it intersects
      const scroller2 = () => {
        rootContainer.scrollBy({ top: 0, left: -200, behavior: "smooth" });
      };

      //I set this variables to be able to clear out the intervals
      let scrollLeft, scrollRight, currentScrollDirection;

      //This is the callback function that is called when the target is intersecting
      const callback1 = (entries) => {
        if (entries[0].isIntersecting) {
          clearInterval(scrollLeft);
          scrollRight = setInterval(scroller, 3000);
          currentScrollDirection = scroller;
        }
      };

      //This is the callback function that is called when the target is intersecting
      const callback2 = (entries) => {
        if (entries[0].isIntersecting) {
          clearInterval(scrollRight);
          scrollLeft = setInterval(scroller2, 3000);
          currentScrollDirection = scroller2;
        }
      };

      //This are the options for the intersection observer
      const option1 = { root: rootContainer, threshold: 0.9 };

      //This is the intiallization of the intersection observers
      const observer1 = new IntersectionObserver(callback1, option1);
      const observer2 = new IntersectionObserver(callback2, option1);

      //This the code that tells observer function what to observe
      observer1.observe(target);
      observer2.observe(target2);

      //This code snippet halts the scroll function to stop
      rootContainer.addEventListener("mouseenter", () => {
        clearInterval(scrollRight);
        clearInterval(scrollLeft);
      });

      //This code snippet tells the scroll function to continue
      rootContainer.addEventListener("mouseleave", () => {
        currentScrollDirection === scroller
          ? (scrollRight = setInterval(scroller, 3000))
          : (scrollLeft = setInterval(scroller2, 3000));
      });
    }
  };

  return (
    <SatifiedClient ref={Clients}>
      <h3>Satisfied Clients</h3>
      <Container>
        <SatisfiecGrid ref={scrCont}>
          <SatisfiedCard>
            <span>
              <img src={Logo1} alt="" />{" "}
            </span>
          </SatisfiedCard>
          <SatisfiedCard>
            <span>
              <img src={Logo2} alt="" />{" "}
            </span>
          </SatisfiedCard>
          <SatisfiedCard>
            <span>
              <img src={Logo4} alt="" />{" "}
            </span>
          </SatisfiedCard>
          <SatisfiedCard>
            <span>
              {" "}
              <img src={Logo1} alt="" />{" "}
            </span>
          </SatisfiedCard>
          <SatisfiedCard>
            <span>
              {" "}
              <img src={Logo2} alt="" />{" "}
            </span>
          </SatisfiedCard>
          <SatisfiedCard>
            <span>
              {" "}
              <img src={Logo4} alt="" />{" "}
            </span>
          </SatisfiedCard>
          <SatisfiedCard>
            <span>
              {" "}
              <img src={Logo2} alt="" />{" "}
            </span>
          </SatisfiedCard>
          <SatisfiedCard>
            <span>
              {" "}
              <img src={Logo4} alt="" />{" "}
            </span>
          </SatisfiedCard>
        </SatisfiecGrid>
      </Container>
    </SatifiedClient>
  );
};

const SatifiedClient = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #f8ecd6;
  padding: 4rem 0;
  h3 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    @media (max-width: 575px) {
      font-size: 1.5rem;
    }
  }
`;
const Container = styled.div`
  width: 90%;
`;
const SatisfiecGrid = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  overflow: hidden;
  gap: 2rem;
  scroll-snap-type: inline mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SatisfiedCard = styled.div`
  width: 150px;
  padding: 1rem;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  border: 1px solid #187e5f;
  border-radius: 5px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2rem;
    color: #f8ecd6;
    img {
      width: 100%;
    }
  }
`;

export default SatisfiedClients;
