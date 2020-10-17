import React from 'react';
import { ItemContainer } from "../../../component";
import CourseItem from "./coursesItem";
import './courses.css';

const courses = [
  {
    id:1,
    name:"MATEMATIKA (boshlang'ich)",
    options:1971,
    tasks:2785,
    icon:"course_math",
  },
  {
    id:2,
    name:"FIZIKA",
    options:985,
    tasks:2785,
    icon:"course_physic",
  },
  {
    id:3,
    name:"KIMYO",
    options:785,
    tasks:2475,
    icon:"course_chemistry",
  },
  {
    id:4,
    name:"BIOLOGIYA",
    options:1971,
    tasks:2785,
    icon:"course_biology",
  },
  {
    id:5,
    name:"HORIJIY TILLAR",
    options:2140,
    tasks:2455,
    icon:"course_foreign",
  },
  {
    id:6,
    name:"Informatika",
    options:2140,
    tasks:2455,
    icon:"course_it",
  },
  {
    id:7,
    name:"TARIX",
    options:2140,
    tasks:2455,
    icon:"course_history",
  },
  {
    id:8,
    name:"ONA TILI VA ADABIYOT",
    options:2140,
    tasks:2455,
    icon:"course_native",
  },
  {
    id:9,
    name:"GEOMETRIYA",
    options:1971,
    tasks:2785,
    icon:"course_geometry",
  }
];
const Courses = () => {
  return(
    <ItemContainer title="O'QUV KURSLARIMIZ">
      <div className="course-container">
        {
          courses.map(course => 
            <CourseItem
              key={course.id} 
              name={course.name}
              options={course.options} 
              tasks={course.tasks}
              icon={course.icon} />)
        }
      </div>
      <a href="#" className="more-subjects">barcha fanlar</a>
    </ItemContainer>
  );
}

export default Courses;