import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMoneyPage } from './add-money.page';

describe('AddMoneyPage', () => {
  let component: AddMoneyPage;
  let fixture: ComponentFixture<AddMoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
