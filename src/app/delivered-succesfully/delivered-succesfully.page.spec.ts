import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliveredSuccesfullyPage } from './delivered-succesfully.page';

describe('DeliveredSuccesfullyPage', () => {
  let component: DeliveredSuccesfullyPage;
  let fixture: ComponentFixture<DeliveredSuccesfullyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredSuccesfullyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveredSuccesfullyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
