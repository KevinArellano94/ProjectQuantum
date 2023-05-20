import { Component } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faUsers,
  faLaptopCode,
  faServer,
  faCode
} from '@fortawesome/free-solid-svg-icons';

// import {
//   faSquare as farSquare,
//   faCheckSquare as farCheckSquare,
// } from '@fortawesome/free-regular-svg-icons';

// import {
//   faStackOverflow,
//   faGithub,
//   faMedium,
// } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faUsers,
      faLaptopCode,
      faServer,
      faCode
      // farSquare,
      // farCheckSquare,
      // faStackOverflow,
      // faGithub,
      // faMedium
    );
  }
}
