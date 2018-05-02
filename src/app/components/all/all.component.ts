import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero.model';
import { ClientMessage } from '../../models/client-message.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
    title = 'All Heroes';

    ngOnInit(){
      this.findAllHeroes();
    }

    constructor(private heroService: HeroService)
    {

    }

    // For databinding
    public heroes: Hero[] = [];

    public heroesData: Hero[] = [];

    public clientMessage: ClientMessage = new ClientMessage('');

    public findAllHeroes(): void {
      this.heroService.findAllHeroes().subscribe(
        data => this.heroesData = data,
        error => this.clientMessage.message = 'Could not get Hero'
      );
    }
    
}
