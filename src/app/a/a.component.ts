import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit{

  idFromBComponent : string | null = "";

  constructor(private activatedRoute: ActivatedRoute){
  }
  
  ngOnInit(): void {
    this.idFromBComponent = this.activatedRoute.snapshot.paramMap.get('id');
  }



}
