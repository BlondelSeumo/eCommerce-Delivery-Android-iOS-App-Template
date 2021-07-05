import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VtPopupPage } from './vt-popup.page';

describe('VtPopupPage', () => {
  let component: VtPopupPage;
  let fixture: ComponentFixture<VtPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtPopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VtPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
