import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {
  tableData: Array<any> = [];
  name = 'angular';


  constructor() { }

  ngOnInit() {
    for (let i = 0; i <= 1000; i++) {
      this.tableData.push({
        name: 'Name' + i,
        id: i
      });
    }
  }
}
