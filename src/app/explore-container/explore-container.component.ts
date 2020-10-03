import { Component, OnInit, Input } from '@angular/core';
import { HandleDBService } from '../handleDB.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private test: HandleDBService) { }

  onTap(){
    this.test.test();
  }

  ngOnInit() {}

}
