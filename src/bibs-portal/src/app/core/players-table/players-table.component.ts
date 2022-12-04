import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IPlayer } from 'src/app/models/iplayer';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.scss']
})
export class PlayersTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'rating'];
  dataSource: IPlayer[] = [];
  @Input('childToMaster') inputPlayer: IPlayer | undefined;
  initialized=false;

  constructor() { }

  ngOnInit(): void {
    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.initialized == false)
      return;
    this.dataSource.push(changes['inputPlayer'].currentValue);
  }

}
