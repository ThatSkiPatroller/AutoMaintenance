import React from "react";
import { Carousel, Container } from "react-bootstrap";
import TestCard from "../TestimonialCard";
import "../TestimonialCard/style.scss";
import users from "../TestimonialCard/users.json";

export default function Testimonail() {
  return (
    <div>
      <Container className="mx-auto">
        <Carousel>
          <Carousel.Item interval={5000}>
            <TestCard
              img={users[0].img}
              name={users[0].name}
              city={users[0].city}
              body={users[0].body}
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <TestCard
              img={users[1].img}
              name={users[1].name}
              city={users[1].city}
              body={users[1].body}
            />
          </Carousel.Item>
          <Carousel.Item>
            <TestCard
              img={users[2].img}
              name={users[2].name}
              city={users[2].city}
              body={users[2].body}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
