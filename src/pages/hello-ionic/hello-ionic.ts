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

  ionViewDidEnter(){
  	let acc = document.getElementsByClassName("accordion");
	let i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    let panel = this.nextElementSibling;
	    if (panel.style.maxHeight){
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + "px";
	    } 
	  });
	}
  };

  mapActionContentToggle(){
  	this.showMapActionContent =  !this.showMapActionContent;
  }
}
