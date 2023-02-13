import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from 'src/app/models/iplayer';
import { DataStateService } from 'src/app/services/datastate.service';

@Component({
  selector: 'app-generator-basic',
  templateUrl: './generator-basic.component.html',
  styleUrls: ['./generator-basic.component.scss']
})
export class GeneratorBasicComponent implements OnInit {
  private pageName = 'Basic Creator';
  // @Input() team1Players: IPlayer[] = [];
  // @Input() team2Players: IPlayer[] = [];
  playerListing: IPlayer[] = [];


  constructor(private dataService: DataStateService) {}

  ngOnInit(): void {
      this.dataService.updatePageTitle(this.pageName);
  }

  /**
   * support on Generate Click
   */
  public onGenerate() {
    console.log('onGenerate Clicked!');
    alert("generating now!!");
  }

  addItem(newItem: IPlayer) {
    this.playerListing.push(newItem);
  }
}
