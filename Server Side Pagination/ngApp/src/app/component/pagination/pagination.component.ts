import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Pager } from 'src/app/shared/pager.model';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pager: Pager;
  pageOfItems = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
  }

  private loadPage(page) {
    this.http.get<any>(`http://localhost:3000/api/pagination?page=${page}`)
             .subscribe(x => {
               this.pager = x.pager;
               console.log(this.pager);

               this.pageOfItems = x.pageOfItems;
               console.log(this.pageOfItems);
             });
  }

}
