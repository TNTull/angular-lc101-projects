import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://windows10spotlight.com/wp-content/uploads/2022/07/4ab333eb4e32d4e88aa4b65a63262346-1024x576.jpg';
  image2 = 'https://windows10spotlight.com/wp-content/uploads/2022/08/3bc81171ce86a721132074252fb28e57-1024x576.jpg';
  image3 = 'https://windows10spotlight.com/wp-content/uploads/2022/07/97f8f7bc4b96d37d1242fa763742e04b-1024x576.jpg';

  constructor() { }

  ngOnInit() {
  }

}