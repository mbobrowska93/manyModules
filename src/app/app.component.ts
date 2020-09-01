import { Component } from '@angular/core';
import { MethodsService } from './methods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manyModules';

  public name: string;

  constructor(private _methodsService: MethodsService) {
    this.name = this._methodsService.returnString();
  }

}
