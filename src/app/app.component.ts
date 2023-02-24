import { Component } from '@angular/core';
import { platformBrowser, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';
  public constructor(private titleService: Title){
    this.titleService.setTitle("Xevello | Rapid Result Lasting Value");
  }
}
