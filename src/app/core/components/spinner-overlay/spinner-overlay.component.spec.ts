import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SpinnerOverlayService } from '../../services/spinner-overlay.service';
import { SpinnerOverlayComponent } from './spinner-overlay.component';

describe('SpinnerOverlayComponent', () => {
  let service: SpinnerOverlayService;
  let component: SpinnerOverlayComponent;
  let fixture: ComponentFixture<SpinnerOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerOverlayComponent],
    }).compileComponents();
    service = TestBed.inject(SpinnerOverlayService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  
  });

  it('should not be visible when created', () => {
    fixture.detectChanges();
    let spinnerImage = fixture.nativeElement.querySelector('img');
    expect(component.isShown).toBeFalsy();
    expect(spinnerImage).toBeFalsy();
  });

  it('should appear when service calls show() method', fakeAsync(() => {
    fixture.detectChanges();
    component.ngOnInit();
    service.show();
    fixture.detectChanges();
    expect(component.isShown).toBeTruthy();
  }));

  it('should not appear when service calls hide() method', fakeAsync(() => {
    component.isShown = true;
    component.ngOnInit();
    fixture.detectChanges();
    
    //  Confirm that its visible
    let spinnerImage = fixture.nativeElement.querySelector('img');
    expect(component.isShown).toBeTruthy();
    expect(spinnerImage).toBeTruthy();

    service.hide();
    fixture.detectChanges();

    //  Confirm that it was hidden
    spinnerImage = fixture.nativeElement.querySelector('img');
    expect(component.isShown).toBeFalsy();
    expect(spinnerImage).toBeFalsy();
  }));

});
