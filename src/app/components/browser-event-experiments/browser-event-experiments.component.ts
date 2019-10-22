import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {

  hoverSection: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    // 1. Analogy: Subscribe to the stream of data
    this.hoverSection.addEventListener('mousemove', onMouseMove);
  }

  unsubscribe() {
    console.log('Called unsubscribe()');
    // 1. Analogy: Unsubscribe from the stream of data
    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }

} // end component code

// 2. Analogy: React to the arrival of new data
function onMouseMove(e: MouseEvent) {
  console.log(e);
}
