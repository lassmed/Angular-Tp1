import { CanDeactivateFn } from '@angular/router';
import {AddCvComponent} from "../cv/components/add-cv/add-cv.component";

export const UnsavedChangesGuard: CanDeactivateFn<AddCvComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
