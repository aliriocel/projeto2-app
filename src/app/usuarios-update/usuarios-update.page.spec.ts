import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuariosUpdatePage } from './usuarios-update.page';

describe('UsuariosUpdatePage', () => {
  let component: UsuariosUpdatePage;
  let fixture: ComponentFixture<UsuariosUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
