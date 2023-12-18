import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', './res-dashboard.css']
})
export class DashboardComponent {

  isDropdownOpen = false;
  constructor() { }


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}



