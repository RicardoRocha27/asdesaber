import React from "react";
import Hero from "../components/Hero";
import Data from "../data/courses/data.json";
import CoursesAreas from "../components/CoursesAreas";
import Footer from "../components/Footer";

const Courses = () => {
  return (
    <>
      <Hero
        title={Data.Hero.title}
        subtitle={Data.Hero.subtitle}
        img={Data.Hero.img}
        noButton={Data.Hero.noButton}
        firstButton={Data.Hero.firstButton}
        href={Data.Hero.href}
      />
      <CoursesAreas
        title="Cursos disponíveis"
        subtitle="Online e presenciais"
        courses={Data.Courses.courses}
      />
      <Footer />
    </>
  );
};

export default Courses;
