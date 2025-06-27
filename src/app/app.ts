import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Datecompo } from './datecompo/datecompo';
import { Filtertabs } from './filtertabs/filtertabs';

@Component({
  selector: 'app-root',
  imports: [Header,Datecompo,Filtertabs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-project';
}
