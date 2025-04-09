import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowthJobComponent } from './growth-job.component';
import { GrowthJob } from 'apps/towers-view/src/app/simulation/growth-job';

describe('GrowthJobComponent', () => {
  let component: GrowthJobComponent;
  let fixture: ComponentFixture<GrowthJobComponent>;
  let expectedGrowthJob: GrowthJob;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthJobComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrowthJobComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();

    // mock the growth job supplied by the parent component
    expectedGrowthJob = new GrowthJob('Fruit', 50);
      
    // simulate the parent setting the input property with that hero
    fixture.componentRef.setInput('growthJob', expectedGrowthJob);
    // wait for initial data binding
    await fixture.whenStable();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('GrowthJob: ' + expectedGrowthJob.name);
  });

  it('it should have progress bar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const progressBarElem = compiled.querySelector('.progress-bar');
    expect(progressBarElem).toBeTruthy();
    if (progressBarElem)
      expect(getComputedStyle(progressBarElem).width).toEqual(expectedGrowthJob.progressPercentage + '%');
  });
});
