import { Component } from '@angular/core';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'BookMonkey';
  test = 5.6;
  myUrl = 'http://www.google.de';

  myClick (x) {
    alert('hello: ' + x);
  }

}


