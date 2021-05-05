import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {CoursesService} from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //courses;
  courses$ : Observable<Course[]>;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    console.log(this.coursesService);

    this.courses$ = this.coursesService.loadCourses();

    //this.http.get('/api/courses', {params})
      //.subscribe(
        //val => console.log(val)
        //courses => this.courses = courses
      //);
  }

  save(course:Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved!')
      );
  }
}
