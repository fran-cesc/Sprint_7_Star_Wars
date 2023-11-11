import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsPageComponent } from './starshipsPage.component';
import { compileNgModule } from '@angular/compiler';

describe('StarshipsComponent', () => {
  let component: StarshipsPageComponent;
  let fixture: ComponentFixture<StarshipsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarshipsPageComponent]
    });
    fixture = TestBed.createComponent(StarshipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
