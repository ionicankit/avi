import {NgModule, ModuleWithProviders} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';

import {ContactComponent} from './contact/contact.component';

import {HomeComponent} from './home/home.component';



// import {GalleryComponent} from 'app/gallery/gallery.component';

// import { CalendarComponent2 } from 'app/calendar/calendar.component';



// Route Configuration

export const appRouting: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  // {path: 'gallery', component: GalleryComponent},
  //
  // {path: 'aboutus', component: AboutusComponent},
  //
  // {path: 'aboutus/school', component: AboutSchoolComponent},
  // {path: 'aboutus/principal', component: AboutPrincipalComponent},
  // {path: 'aboutus/staff', component: AboutStaffComponent},
  //
  //
  // {path: 'admissions', component: AdmissionsComponent},
  //
  // {path: 'announcements', component: AnnouncementsComponent},
  //
  //
  //
  // // ACTIVITIES
  // {path: 'activities', component: ActivitiesComponent},
  // {path: 'activities/outdoor', component: ActivitiesComponent},
  //
  // // outdoor
  // {path: 'activities/outdoor/WaterPlay', component: OutdoorWaterplayComponent},
  // {path: 'activities/outdoor/picnic', component: OutdoorPicnicsComponent},
  // // indoor
  //
  //
  // {path: 'activities/indoor/Shows', component: IndoorStageshowsComponent},
  // {path: 'activities/indoor/StoryTelling', component: IndoorStorytellingComponent},
  // {path: 'activities/indoor/music', component: IndoorMusicComponent},
  // {path: 'activities/celebrations', component: CelebrationsComponent},
  // {path: 'activities/events', component: EventsComponent},
  //
  // // GALLERY
  // {path: 'gallery/activitiespics', component: GalleryActivitiesComponent},
  // {path: 'gallery/general', component: GalleryGeneralComponent},
  // {path: 'gallery/latestevents', component: GalleryLatesteventsComponent},

  {path: 'contact', component: ContactComponent}


];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRouting);





