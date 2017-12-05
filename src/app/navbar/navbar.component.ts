import {Component, OnInit} from '@angular/core';


import {NgModule, ModuleWithProviders} from '@angular/core';


import {RouterModule, Routes, Router} from '@angular/router';


import {HomeComponent} from '../home/home.component';





@Component({


  selector: 'app-navbar',


  templateUrl: './navbar.component.html',


  styleUrls: ['./navbar.component.css']


})


export class NavbarComponent {


  constructor(private router: Router) {


  }


  goHome() {


    alert('hi');


    this.router.navigate(['home']);


  }


  goAboutus() {


    alert('asf');


    this.router.navigate(['aboutus']);


  }


  goGallery() {


    this.router.navigate(['gallery']);


  }

  goContact() {


    this.router.navigate(['contact']);


  }


  goActivities() {


    this.router.navigate(['activities']);


  }


  // About us sub menu


  goSchool() {

    alert('school');
    this.router.navigate(['aboutus', 'school']);


  }

  goPrincipal() {


    this.router.navigate(['aboutus', 'principal']);


  }

  goStaff() {


    this.router.navigate(['aboutus', 'staff']);


  }


  goOutdoor() {


    this.router.navigate(['activities', 'outdoor']);


  }

  goMusic() {

    alert('music');
    this.router.navigate(['activities', 'indoor', 'music']);


  }

  goWaterPlay() {


    this.router.navigate(['activities', 'outdoor', 'WaterPlay']);


  }

  goPicnic() {


    this.router.navigate(['activities', 'outdoor', 'picnic']);


  }


  goIndoor() {


    this.router.navigate(['activities', 'indoor', 'music']);


  }

  goStoryTelling() {


    this.router.navigate(['activities', 'indoor', 'StoryTelling']);


  }

  goShows() {


    this.router.navigate(['activities', 'indoor', 'Shows']);


  }

  goBlockPlay() {


    this.router.navigate(['activities', 'indoor', 'BlockPlay']);


  }


  goActivitiespics() {

    alert('hsdvbib');
    this.router.navigate(['activitiespics']);


  }


  goGeneralpics() {


    this.router.navigate(['general']);


  }


  goLatestevents() {

    alert('hello');
    this.router.navigate(['latestevents']);


  }

  goAdmissions() {


    alert('asf');


    this.router.navigate(['admissions']);


  }


  goAnnouncements() {


    alert('asf');


    this.router.navigate(['announcements']);


  }

  goCelebrations() {


    alert('celeb');


    this.router.navigate(['activities', 'celebrations']);


  }

  goEvents() {


    alert('events');


    this.router.navigate(['activities', 'events']);


  }


}

























