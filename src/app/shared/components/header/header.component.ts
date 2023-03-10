import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAnchorClick(id:any) {
    window.scrollTo(0,0);
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
    }
  }
  
  openMenu(){
    let toggleMenu = document.querySelector('.toggleMenu')
    let navigation = document.getElementById('nav')!
    navigation.classList.toggle('active')
  }
}
