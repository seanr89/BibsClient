import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from 'src/app/models/iplayer';
import { DataStateService } from 'src/app/services/datastate.service';
import { TeamGenerator } from 'src/app/services/generator.service';

@Component({
  selector: 'app-generator-basic',
  templateUrl: './generator-basic.component.html',
  styleUrls: ['./generator-basic.component.scss']
})
export class GeneratorBasicComponent implements OnInit {
  private pageName = 'Basic Creator';
  team1Players: IPlayer[] = [];
  team2Players: IPlayer[] = [];
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
    alert("generating player lists now!!");

    let playerLists = TeamGenerator.GenerateShuffle(this.playerListing);
    
    this.team1Players = playerLists[0];
    this.team2Players = playerLists[1];

    console.log(`Processed team 1 players ${this.team1Players.length}`);
    console.log(`Processed team 2 players ${this.team2Players.length}`);
  }

  /**
   * 
   * @param newItem 
   */
  addItem(newItem: IPlayer) {
    console.log("addItem called");
    this.playerListing.push(newItem);
  }
}
