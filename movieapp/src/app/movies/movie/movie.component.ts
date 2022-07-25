import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies=[
    {id: 1,title: 'SHAZAM',description:"details of the movie",imageUrl:"1.jpeg"},
    { id: 2,title: 'AMAZING GRACE ARETHA FRANKLIN',description:"details of the movie",imageUrl:"2.jpeg"},
    {id: 3,title: 'HIGH LIFE',description:"details of the movie",imageUrl:"3.jpeg"},
    {id: 4,title: 'BILBOARD',description:"details of the movie",imageUrl:"4.jpeg"}
    
  ]

}
