import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderPlacedPage } from './order-placed.page';

describe('OrderPlacedPage', () => {
  let component: OrderPlacedPage;
  let fixture: ComponentFixture<OrderPlacedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPlacedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderPlacedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
