import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificationPage } from './verification.page';

describe('VerificationPage', () => {
  let component: VerificationPage;
  let fixture: ComponentFixture<VerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
