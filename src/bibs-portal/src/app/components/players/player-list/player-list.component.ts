import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IPlayer } from 'src/app/models/iplayer';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit, OnChanges {
  players: IPlayer[] = [];
  @Input('childToMaster') inputPlayers: IPlayer[] | undefined;
  initialized=false;


  constructor() { }

  ngOnInit(): void {
    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.initialized == false)
      return;
    this.players = changes['inputPlayers'].currentValue;
  }

}
