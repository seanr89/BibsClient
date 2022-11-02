import { Component, OnInit } from '@angular/core';
import { DataStateService } from 'src/app/services/datastate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private pageName = 'Home';

  constructor(private dataService: DataStateService) {
    this.dataService.updatePageTitle(this.pageName);
  }

  ngOnInit(): void {
  }

}
