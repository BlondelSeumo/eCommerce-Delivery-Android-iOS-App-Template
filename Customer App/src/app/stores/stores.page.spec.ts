import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoresPage } from './stores.page';

describe('StoresPage', () => {
  let component: StoresPage;
  let fixture: ComponentFixture<StoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
