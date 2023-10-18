import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'botica-webapp';

  constructor(private router: Router) { }

  refreshPage() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
