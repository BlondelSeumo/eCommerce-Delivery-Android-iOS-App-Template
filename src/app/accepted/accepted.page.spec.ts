import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceptedPage } from './accepted.page';

describe('AcceptedPage', () => {
  let component: AcceptedPage;
  let fixture: ComponentFixture<AcceptedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
