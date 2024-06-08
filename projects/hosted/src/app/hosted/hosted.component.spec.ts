import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostedComponent } from './hosted.component';

describe('HostedComponent', () => {
  let component: HostedComponent;
  let fixture: ComponentFixture<HostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
