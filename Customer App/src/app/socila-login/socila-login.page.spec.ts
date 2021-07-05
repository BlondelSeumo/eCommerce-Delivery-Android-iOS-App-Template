import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocilaLoginPage } from './socila-login.page';

describe('SocilaLoginPage', () => {
  let component: SocilaLoginPage;
  let fixture: ComponentFixture<SocilaLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocilaLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocilaLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
