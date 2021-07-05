import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddReviewPage } from './add-review.page';

describe('AddReviewPage', () => {
  let component: AddReviewPage;
  let fixture: ComponentFixture<AddReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
