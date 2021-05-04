import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'tagger-form-field',
  templateUrl: './tagger-form-field.component.html',
  styleUrls: ['./tagger-form-field.component.css']
})
export class TaggerFormFieldComponent implements OnInit {

  envSelected = '';
  selectedValue = '';

  @Input()
  name:String;

  constructor() { }

  ngOnInit(): void {
  }

}
