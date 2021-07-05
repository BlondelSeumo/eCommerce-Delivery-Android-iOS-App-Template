import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedAddressesPage } from './saved-addresses.page';

describe('SavedAddressesPage', () => {
  let component: SavedAddressesPage;
  let fixture: ComponentFixture<SavedAddressesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedAddressesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedAddressesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
