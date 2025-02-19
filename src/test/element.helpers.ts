/* eslint-disable @typescript-eslint/no-explicit-any */
import { DebugElement, Type } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';

export const getChildComponent = <T>(
  fixture: ComponentFixture<any>,
  directive: Type<T>,
): T => fixture.debugElement.query(By.directive(directive))?.componentInstance;

export const getDebugElement = (
  fixture: ComponentFixture<any>,
  dataTestAttribute: string,
): DebugElement =>
  fixture.debugElement.query(By.css(`[data-test-id="${dataTestAttribute}"]`));

export const getDebugElements = (
  fixture: ComponentFixture<any>,
  dataTestAttribute: string,
): DebugElement[] =>
  fixture.debugElement.queryAll(
    By.css(`[data-test-id="${dataTestAttribute}"]`),
  );

export const getElement = (
  fixture: ComponentFixture<any>,
  dataTestAttribute: string,
): HTMLElement => getDebugElement(fixture, dataTestAttribute)?.nativeElement;

export const getElements = (
  fixture: ComponentFixture<any>,
  dataTestAttribute: string,
): HTMLElement[] =>
  getDebugElements(fixture, dataTestAttribute).map(
    (debugElement) => debugElement?.nativeElement,
  );
