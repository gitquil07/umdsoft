import React from 'react';

const CourseItem = ({name, options, tasks, icon}) => {
  return(
    <div className="course-item">
      <img src={require(`../../../svg/${icon}.svg`)} alt={name}/>
      <div className="course-tasks">
        <a href="#">
          {name}
        </a>
        <div>
          {options} ta variant, {tasks} ta topshiriq
        </div>
      </div>
    </div>
  );
}

export default CourseItem;