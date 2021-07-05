import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetLocationPage } from './set-location.page';

describe('SetLocationPage', () => {
  let component: SetLocationPage;
  let fixture: ComponentFixture<SetLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
