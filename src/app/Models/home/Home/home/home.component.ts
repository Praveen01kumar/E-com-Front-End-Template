import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  
  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  constructor() { }

  ngOnInit(): void {
  }

  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        (document.getElementById("myBtn") as HTMLInputElement).style.display = "block";
    } else {
        (document.getElementById("myBtn") as HTMLInputElement).style.display = "none";
    }
}
topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
} 

}
