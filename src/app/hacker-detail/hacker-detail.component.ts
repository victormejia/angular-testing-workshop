import { Component, OnInit, Input } from '@angular/core';
import { Hacker } from '../core/hacker.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-hacker-detail',
  templateUrl: './hacker-detail.component.html',
  styleUrls: ['./hacker-detail.component.scss']
})
export class HackerDetailComponent implements OnInit {
  @Input() id: string;
  hacker: Hacker;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.renderDetails(this.id);
    });
  }

  renderDetails(id: string) {
    this.api.getHackerDetails(id)
      .then((data) => {
        this.hacker = data;
      });
  }

}
