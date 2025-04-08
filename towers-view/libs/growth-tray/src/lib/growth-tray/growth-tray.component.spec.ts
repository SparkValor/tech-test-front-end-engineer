import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowthTrayComponent } from './growth-tray.component';

describe('GrowthTrayComponent', () => {
  let component: GrowthTrayComponent;
  let fixture: ComponentFixture<GrowthTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthTrayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrowthTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('GrowthTray ');
  });
});
