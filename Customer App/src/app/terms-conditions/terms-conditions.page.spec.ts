import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermsConditionsPage } from './terms-conditions.page';

describe('TermsConditionsPage', () => {
  let component: TermsConditionsPage;
  let fixture: ComponentFixture<TermsConditionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsConditionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermsConditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
