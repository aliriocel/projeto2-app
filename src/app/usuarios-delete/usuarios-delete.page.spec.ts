import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuariosDeletePage } from './usuarios-delete.page';

describe('UsuariosDeletePage', () => {
  let component: UsuariosDeletePage;
  let fixture: ComponentFixture<UsuariosDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
