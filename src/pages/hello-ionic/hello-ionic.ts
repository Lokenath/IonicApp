import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  showMapActionContent: boolean;
  constructor() {
  	this.showMapActionContent = false;
  }

  mapActionContentToggle(){
  	this.showMapActionContent =  !this.showMapActionContent;
  }
}
