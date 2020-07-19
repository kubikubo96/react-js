import React, {Component} from 'react';
import './App.css';
import Course from "./components/Course";

class App extends Component{
  render() {
      const items = [
          {
              name: 'ReactJS',
              time: '30h',
              free: true,
              desc: 'ReactJS is very simple!'
          },
          {
              name: 'Angular 4x',
              time: '40h',
              free: false,
          },
          {
              name: 'NodeJS',
              time: '70h',
              free: true,
          }
      ];

      const elmCourse = items.map((item, index) =>
          <Course key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Course>
      );

      return (
          <div>
              <div className="row">
                  {elmCourse}
              </div>

          </div>
      );
  }
}

export default App;
