import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditProductPage } from './edit-product.page';

describe('EditProductPage', () => {
  let component: EditProductPage;
  let fixture: ComponentFixture<EditProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
