import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.css']
})
export class UiInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("I'm in!");
  }

}
