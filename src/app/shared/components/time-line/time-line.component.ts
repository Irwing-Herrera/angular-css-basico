import { Component, Input, OnInit } from '@angular/core';
import { TimeEvent } from 'src/app/models';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {

  constructor() { }

  @Input() dataTimeEvent: TimeEvent;

  ngOnInit() {
  }

}
