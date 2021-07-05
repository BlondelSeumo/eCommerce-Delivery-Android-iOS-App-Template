import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProductPage } from './add-product.page';

describe('AddProductPage', () => {
  let component: AddProductPage;
  let fixture: ComponentFixture<AddProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
