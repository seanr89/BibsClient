import { Component, OnInit } from '@angular/core';
import { DataStateService } from 'src/app/services/datastate.service';

@Component({
  selector: 'app-generator-basic',
  templateUrl: './generator-basic.component.html',
  styleUrls: ['./generator-basic.component.scss']
})
export class GeneratorBasicComponent implements OnInit {
  private pageName = 'Basic Create';

  constructor(private dataService: DataStateService) {}

  ngOnInit(): void {
      this.dataService.updatePageTitle(this.pageName);
  }

}
