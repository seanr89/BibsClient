import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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
  selection = new SelectionModel<IPlayer>(true, []);
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
    alert("Not yet implemented!");
  }

  onDelete(element: IPlayer): void {
    alert("Not yet implemented!");
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IPlayer): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }

}
