import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'res-sideNav';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) { }

  ngAfterViewInit() {
    this.observer.observe(['(max-width:600px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over'
        this.sidenav.close()
      }
      else {
        this.sidenav.mode = 'side'
        this.sidenav.open()
      }
    })
  }
  openSideNav() {
    this.sidenav.open()
    if (this.sidenav.opened) {
    
    }
  }
  closeSideNav() {
    this.sidenav.close()
    
  }

}
