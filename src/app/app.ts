import { Component } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { AboutUs } from "./components/about-us/about-us";
import { Contact } from "./components/contact/contact";
import { Schedule } from "./components/schedule/schedule";
import { Live } from "./components/live/live";

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Hero, AboutUs, Contact, Schedule, Live],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ls94.1fm-landing-page';
}
