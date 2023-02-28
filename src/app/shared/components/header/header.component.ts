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

  openMenu(){
    let toggleMenu = document.querySelector('.toggleMenu')
    let navigation = document.getElementById('nav')!
    navigation.classList.toggle('active')
  }
}
