import React, {Component} from 'react';
import {v4} from 'node-uuid';

class TestComponent extends Component{
  constructor(){
    super();
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      courses: [],
      newCourse: {title: '', id: v4()}
    }
  }

  onTitleChange(event){
    this.state.newCourse.title = event.target.value;
  }

  onClickSave(){
    const {courses} = this.state;
    this.state.newCourse.id = v4();
    courses.push(Object.assign({},this.state.newCourse));
    this.setState(courses);
  }

  render(){
    return (
      <div>
        <h1>Add Courses</h1>
        <input
          type="text" onChange={this.onTitleChange}/>
        <input
          type="submit" onClick={this.onClickSave}/>
        {this.state.courses.map(course => <h1 key={course.id}>{course.title}</h1>)}
      </div>
    );
  }
}

export default TestComponent;
