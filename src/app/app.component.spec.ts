import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component'; // Added
import { FormsModule } from '@angular/forms'; // Added
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card'; // Added
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field'; // Added
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'; // Added
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list'; // Added
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox'; // Added
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'; // Added
import { MatIconModule } from '@angular/material/icon'; // Added
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule, // Added
        MatCardModule, // Added
        MatFormFieldModule, // Added
        MatInputModule, // Added
        MatListModule, // Added
        MatCheckboxModule, // Added
        MatButtonModule, // Added
        MatIconModule, // Added
        BrowserAnimationsModule // Added
      ],
      declarations: [
        AppComponent,
        TodoComponent // Added
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todo-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todo-app');
  });
});
