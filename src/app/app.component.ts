import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Felipe Alves #9419515';

  userData = {
    email: 'felipe.alves@synvia.com',
    role: 'Admin',
  };

  title = 'helloworld';
}
