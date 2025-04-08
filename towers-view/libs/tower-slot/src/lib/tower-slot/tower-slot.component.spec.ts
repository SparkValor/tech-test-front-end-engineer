import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TowerSlotComponent } from './tower-slot.component';

describe('TowerSlotComponent', () => {
  let component: TowerSlotComponent;
  let fixture: ComponentFixture<TowerSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowerSlotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TowerSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('Slot ');
  });
});
