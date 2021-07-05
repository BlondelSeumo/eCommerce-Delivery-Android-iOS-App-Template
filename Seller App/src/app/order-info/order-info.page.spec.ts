import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderInfoPage } from './order-info.page';

describe('OrderInfoPage', () => {
  let component: OrderInfoPage;
  let fixture: ComponentFixture<OrderInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
