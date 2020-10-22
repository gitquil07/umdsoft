import React from "react";
import { ItemContainer } from '../../../component';
import Completed  from './completed';
import './completedCourses.css';

const completed = [
 {  
   id:0,
   name:"html",
   duration:10,
 },
 {  
  id:1,
  name:"css",
  duration:20,
 },
 {  
  id:2,
  name:"bootstrap",
  duration:35,
 },
 {  
  id:3,
  name:"js",
  duration:60,
 },
 {  
  id:4,
  name:"angular",
  duration:60,
 },
 {  
  id:5,
  name:"react",
  duration:"tugallanmagan",
 }
];

const CompletedCourses = () => {
  return (
    <ItemContainer title="O'tilgan kurslar">
      <div className="completed-container">
        {
          completed.map(course => <Completed key={course.id} name={course.name} duration={course.duration}/>)
        }
      </div>
    </ItemContainer>
  );
}

export default CompletedCourses;