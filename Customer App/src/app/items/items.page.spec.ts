import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemsPage } from './items.page';

describe('ItemsPage', () => {
  let component: ItemsPage;
  let fixture: ComponentFixture<ItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
