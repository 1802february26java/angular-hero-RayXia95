import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero.model';
import { ClientMessage } from '../../models/client-message.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    title = 'Register Hero';

    // Constructor Injection
    constructor(private heroService: HeroService)
    {

    }

    // For databinding
    public hero: Hero = new Hero(0, '', '', false);

    public clientMessage: ClientMessage = new ClientMessage('');

    registerHero(): void {
      this.heroService.registerHero(this.hero).subscribe(
        data => this.clientMessage = data,
        error => this.clientMessage.message = 'Registration Failure.'
      );
    }
}
