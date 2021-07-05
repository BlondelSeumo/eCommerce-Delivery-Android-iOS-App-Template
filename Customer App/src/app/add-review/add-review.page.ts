import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss'],
})
export class AddReviewPage implements OnInit {

   ratingIcon1 = false;
    ratingIcon2 = false;
    ratingIcon3 = false;
    ratingIcon4 = false;
    ratingIcon5 = false;
  constructor( ) { }

  ngOnInit() {
  }

 toggleRatingIcon1(){
   this.ratingIcon1 = !this.ratingIcon1;
   } 
 toggleRatingIcon2(){
   this.ratingIcon2 = !this.ratingIcon2;
   }
 toggleRatingIcon3(){
   this.ratingIcon3 = !this.ratingIcon3;
   }
 toggleRatingIcon4(){
   this.ratingIcon4 = !this.ratingIcon4;
   } 
 toggleRatingIcon5(){
   this.ratingIcon5 = !this.ratingIcon5;
   }
}
