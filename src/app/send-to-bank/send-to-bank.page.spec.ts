import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendToBankPage } from './send-to-bank.page';

describe('SendToBankPage', () => {
  let component: SendToBankPage;
  let fixture: ComponentFixture<SendToBankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendToBankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendToBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
