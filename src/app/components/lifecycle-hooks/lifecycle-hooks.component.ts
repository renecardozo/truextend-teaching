import { Component, OnInit, OnDestroy, DoCheck, OnChanges } from '@angular/core';
@Component({
  selector: 'lifecycle-hooks',
  templateUrl: 'lifecycle-hooks.component.html',
  styleUrls: ['lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  constructor() {
    console.log('constructor')
  }
  ngOnInit() {}
  ngOnDestroy() {}
  ngOnChanges() {}
  ngDoCheck() {}
}