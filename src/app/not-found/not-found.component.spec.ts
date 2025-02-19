import { TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

// Example Unit Test Setup. Nothing to actually test here.
// Using the Angular Testing Library would have been my preference,
// but no time, no time!

// Class name property for easy renaming
describe(NotFoundComponent.name, () => {
  // No before each: prevents variables dripping through your tests
  const arrange = () => {
    TestBed.configureTestingModule({ imports: [NotFoundComponent] });
    const fixture = TestBed.createComponent(NotFoundComponent);
    const component = fixture.componentInstance;

    return { component, fixture };
  };

  // Loosely based on AAA pattern, mostly for readability,
  // and completely permitted to use multiple of each
  it('should create', () => {
    // Arrange
    const { fixture } = arrange();

    // Act
    fixture.detectChanges();

    // Assert
    const element: HTMLElement = fixture.nativeElement;
    const result = element.textContent || '';
    const expected =
      "I am so sorry We didn't find what you are looking for. It was possibly destroyed by a Death Star.";
    expect(result.trim()).toBe(expected);
  });
});
