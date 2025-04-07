import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowthJobComponent } from './growth-job.component';

describe('GrowthJobComponent', () => {
  let component: GrowthJobComponent;
  let fixture: ComponentFixture<GrowthJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthJobComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrowthJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
