import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero.model';
import { ClientMessage } from '../../models/client-message.model';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {
    title = 'Find Hero';

    constructor(private heroService: HeroService)
    {

    }

    // To Capture user input to present received hero
    public hero: Hero = new Hero(0, '', '', false);

    public heroData: Hero = new Hero(0, '', '', false);

    public clientMessage: ClientMessage = new ClientMessage('');

    public findHero(): void {
      this.heroService.findHero(this.hero).subscribe(
        data => this.heroData = data,
        error => this.clientMessage.message = 'Could not get Hero'
      );
    }
}
