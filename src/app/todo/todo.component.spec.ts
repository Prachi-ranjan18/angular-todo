import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Added
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card'; // Added
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field'; // Added
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'; // Added
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list'; // Added
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox'; // Added
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'; // Added
import { MatIconModule } from '@angular/material/icon'; // Added
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      imports: [ // Added
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
