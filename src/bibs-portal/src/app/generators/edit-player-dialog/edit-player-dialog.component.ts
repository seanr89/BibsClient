import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPlayer } from 'src/app/models/iplayer';

@Component({
  selector: 'app-edit-player-dialog',
  templateUrl: './edit-player-dialog.component.html',
  styleUrls: ['./edit-player-dialog.component.scss']
})
export class EditPlayerDialogComponent {
  player: IPlayer | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IPlayer) {
    this.player = data;
  }

}
