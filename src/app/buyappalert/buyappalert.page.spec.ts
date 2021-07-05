import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyappalertPage } from './buyappalert.page';

describe('BuyappalertPage', () => {
  let component: BuyappalertPage;
  let fixture: ComponentFixture<BuyappalertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyappalertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyappalertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
