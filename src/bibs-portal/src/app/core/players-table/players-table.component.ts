import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { IPlayer } from 'src/app/models/iplayer';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.scss']
})
export class PlayersTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'rating', 'actions'];
  dataSource: IPlayer[] = [];
  @Input('childToMaster') inputPlayer: IPlayer | undefined;
  initialized=false;
  @ViewChild(MatTable) table: MatTable<IPlayer> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.initialized == false)
      return;
    this.dataSource.push(changes['inputPlayer'].currentValue);
    this.table!.renderRows();
  }

  onEdit(element: IPlayer): void{

  }

  onDelete(element: IPlayer): void {

  }

}
