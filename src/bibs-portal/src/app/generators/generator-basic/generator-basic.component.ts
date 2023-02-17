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

    let playerLists = TeamGenerator.GenerateShuffle(this.playerListing);
    
    let playersOne = playerLists[0];
    let playersTwo = playerLists[1];

    console.log(`Processed players`);
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
