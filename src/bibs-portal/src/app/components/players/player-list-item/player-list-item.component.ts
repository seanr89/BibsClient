import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPlayerDialogComponent } from 'src/app/generators/edit-player-dialog/edit-player-dialog.component';
import { IPlayer } from 'src/app/models/iplayer';

@Component({
  selector: 'app-player-list-item',
  templateUrl: './player-list-item.component.html',
  styleUrls: ['./player-list-item.component.scss']
})
export class PlayerListItemComponent implements OnInit {
  @Input() player: IPlayer | undefined;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onEditButtonClick(){
    alert("Not yet implemented!!");
    // const dialogRef = this.dialog.open(EditPlayerDialogComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  onRemoveButtonClick(){
    alert("Not yet implemented!!");
  }
}
