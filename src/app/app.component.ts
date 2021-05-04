import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;
  title = this.courses[0].description;
  price = 9.9934123423423;
  rate = 0.67;
  course = COURSES[0];
  startDate = new Date(2000,0,1)
  onCardClicked() {
    console.log("App component - click event from course-card component bubbled up..........")
  }

  onCourseSelected(course:Course) {
    console.log("App component - courseSelected event...", course)
  }
}
