import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit{

  id = '';
  ngOnInit(): void {
    this.id = Math.random().toString(36).substring(3,9);
  }
}
