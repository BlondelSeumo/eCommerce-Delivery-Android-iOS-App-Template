import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnTheWayPage } from './on-the-way.page';

describe('OnTheWayPage', () => {
  let component: OnTheWayPage;
  let fixture: ComponentFixture<OnTheWayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnTheWayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnTheWayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
