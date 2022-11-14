import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from 'src/app/models/iplayer';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  teamPlayers: IPlayer[] = [];
  @Input('childToMaster') inputPlayer: IPlayer | undefined;

  playersAvailable : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
