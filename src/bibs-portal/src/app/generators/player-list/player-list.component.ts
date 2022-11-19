import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IPlayer } from 'src/app/models/iplayer';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: IPlayer[] = [];
  @Input('childToMaster') inputPlayer: IPlayer | undefined;

  playersAvailable : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    
    this.players.push(changes['inputPlayer'].currentValue);
    //this.doSomething(changes.categoryId.currentValue);
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values
    
}

}
