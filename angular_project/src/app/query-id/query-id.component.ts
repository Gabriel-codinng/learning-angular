import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-query-id',
  templateUrl: './query-id.component.html',
  styleUrls: ['./query-id.component.css']
})
export class QueryIdComponent implements OnInit {
  id!: string

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }
}
