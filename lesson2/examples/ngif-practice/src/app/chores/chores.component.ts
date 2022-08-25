import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Call Mom', 'Vacuum'];

   targetImage = 'https://cdn.pixabay.com/photo/2017/10/25/19/45/arrows-2889040__340.jpg';

   constructor() { }

   ngOnInit() {
   }

}
