import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Gallery1 from "./images/gallery1.webp";
import Gallery2 from "./images/gallery2.webp";
import Gallery3 from "./images/gallery3.jpeg";
import Gallery4 from "./images/gallery4.jpeg";
import Gallery5 from "./images/gallery5.jpeg";
import Gallery6 from "./images/gallery6.jpeg";
import Gallery7 from "./images/gallery7.jpeg";
import Gallery8 from "./images/gallery8.jpeg";
import Gallery9 from "./images/gallery9.jpeg";
import Gallery10 from "./images/gallery10.webp";
import Gallery11 from "./images/gallery11.webp";
import Gallery12 from "./images/gallery12.webp";
import Gallery13 from "./images/gallery13.jpeg";
import Gallery14 from "./images/gallery14.jpeg";
import Gallery15 from "./images/gallery15.jpeg";
import Gallery16 from "./images/gallery16.webp";
import Gallery17 from "./images/gallery17.webp";
import Gallery18 from "./images/gallery18.webp";
import Gallery19 from "./images/gallery19.webp";
import Gallery20 from "./images/gallery20.jpg";
import Gallery21 from "./images/gallery21.jpeg";
import Gallery22 from "./images/gallery22.jpeg";
import Gallery23 from "./images/gallery23.jpeg";
import Gallery24 from "./images/gallery24.jpg";
import Gallery25 from "./images/gallery25.jpeg";
import GalleryHeaderImg from "./images/galleryheader.jpeg";

const galleryData = [
  {
    id: 201,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "01",
    image: Gallery1,
  },
  {
    id: 202,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "02",
    image: Gallery2,
  },
  {
    id: 203,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "03",
    image: Gallery3,
  },
  {
    id: 204,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "04",
    image: Gallery4,
  },
  {
    id: 205,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "05",
    image: Gallery5,
  },
  {
    id: 206,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "06",
    image: Gallery6,
  },
  {
    id: 207,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "07",
    image: Gallery7,
  },
  {
    id: 208,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "08",
    image: Gallery8,
  },
  {
    id: 209,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "09",
    image: Gallery9,
  },
  {
    id: 210,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "10",
    image: Gallery10,
  },
  {
    id: 211,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "11",
    image: Gallery11,
  },
  {
    id: 212,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "12",
    image: Gallery12,
  },
  {
    id: 213,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "13",
    image: Gallery13,
  },
  {
    id: 214,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "14",
    image: Gallery14,
  },
  {
    id: 215,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "15",
    image: Gallery15,
  },
  {
    id: 216,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "16",
    image: Gallery16,
  },
  {
    id: 217,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "17",
    image: Gallery17,
  },
  {
    id: 218,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "18",
    image: Gallery18,
  },
  {
    id: 219,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "19",
    image: Gallery19,
  },
  {
    id: 220,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "20",
    image: Gallery20,
  },
  {
    id: 221,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "21",
    image: Gallery21,
  },
  {
    id: 222,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "22",
    image: Gallery22,
  },
  {
    id: 223,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "23",
    image: Gallery23,
  },
  {
    id: 224,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "24",
    image: Gallery24,
  },
  {
    id: 225,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique nostrum excepturi nobis, hic architecto!",
    number: "25",
    image: Gallery25,
  },
];
const Gallery = () => {
  const Gallery__Grid = useRef();
  const Last__Child = useRef();
  const [digits, setDigits] = useState(10);

  // Declaring some variables
  let numberOfVisibleCards = [];
  let currentNumberOfCards = digits;

  // The callback function that is called when the target is intersecting
  const callback4 = (entries) => {
    if (entries[0].isIntersecting) {
      if (currentNumberOfCards <= galleryData.length - 1) {
        currentNumberOfCards += 5;
        setTimeout(() => {
          setDigits(currentNumberOfCards);
        }, 1000);
      }
    }
  };

  for (let i = 0; i < currentNumberOfCards; i++) {
    numberOfVisibleCards.push(galleryData[i]);
  }

  // creating the observer function here and getting the element to be observed;
  const observer4 = new IntersectionObserver(callback4, { threshold: 0.9 });
  useEffect(() => {
    const theElement = Gallery__Grid.current;
    Last__Child.current = theElement.children[digits - 1];
    observer4.observe(Last__Child.current);
  }, [Last__Child.current]);

  // useEffect(() => {});
  return (
    <Galleree>
      <GalleryHeader>
        <img src={GalleryHeaderImg} alt="" />
        <h3>The SPINK Gallery</h3>
        <h4>Welcome to the Spink Gallery</h4>
      </GalleryHeader>
      <Container>
        <GalleryGrid ref={Gallery__Grid}>
          {numberOfVisibleCards.map(({ id, description, number, image }) => {
            return (
              <GalleryCard className="gallery__card" key={id}>
                <div className="image__container">
                  <img src={image} alt="" />
                </div>
                <div className="content__container">
                  <span className="number">{number}</span>
                  <p className="content">{description}</p>
                </div>
              </GalleryCard>
            );
          })}
        </GalleryGrid>
        <div
          className={
            digits < galleryData.length - 1
              ? "loading__info"
              : "not__loading__info"
          }
        >
          {digits < galleryData.length - 1
            ? "Loading more images"
            : "No more images"}
        </div>
      </Container>
    </Galleree>
  );
};

const Galleree = styled.section`
  width: 100%;
  padding: 0 0 4rem 0;
  background: #f8ecd6;
  min-height: 100vh;
  .loading__info {
    width: max-content;
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    opacity: 0.2;
    background: #187e5f;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: #f8ecd6;
    margin: 2rem auto;
    animation: flash 0.5s ease-in-out alternate infinite;
    @keyframes flash {
      100% {
        opacity: 1;
      }
    }
  }
  .not__loading__info {
    width: max-content;
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    background: #187e5f;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: #f8ecd6;
    margin: 2rem auto;
    animation: none !important;
  }
`;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  /* padding: 3rem; */
`;
const GalleryHeader = styled.div`
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  h3 {
    position: absolute;
    color: #f8ecd6;
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 768px) {
      top: 50%;
      width: 100%;
      text-align: center;
      font-size: 1.9rem;
    }
    @media (max-width: 425px) {
      top: 45%;
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
    }
  }
  h4 {
    position: absolute;
    color: #f8ecd6;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 575px) {
      width: 100%;
      text-align: center;
    }
  }
  /* background: rgba(248, 236, 214, 0.7); */
`;

const GalleryGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 3rem 0;
  .gallery__card:nth-child(2n + 0) {
    flex-flow: row-reverse;
    flex-wrap: wrap-reverse;
  }
`;
const GalleryCard = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap-reverse;
  min-height: 300px;
  justify-content: center;
  .image__container {
    flex: 1;
    max-width: 500px;
    min-width: 300px;
    height: inherit;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content__container {
    padding: 1.5rem;
    flex: 1;
    max-width: 500px;
    min-width: 300px;
    background: white;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .number {
      width: 100%;
      font-weight: 600;
      font-size: 1.3rem;
      text-align: center;
    }
    .content {
      width: 100%;
      text-align: center;
      font-weight: 400;
      line-height: 1.6rem;
    }
  }
`;
export default Gallery;
