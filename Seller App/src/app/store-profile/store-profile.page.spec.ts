import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoreProfilePage } from './store-profile.page';

describe('StoreProfilePage', () => {
  let component: StoreProfilePage;
  let fixture: ComponentFixture<StoreProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
