// app.animations.ts
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const slideIn = trigger('slideIn', [
  state(
    'in',
    style({
      transform: 'translateX(0)',
      opacity: 1,
    })
  ),
  transition(':enter', [
    style({
      transform: 'translateX(100%)', // Initial state: slide in from the right
      opacity: 0,
    }),
    animate('500ms ease-out'),
  ]),
  transition(':leave', [
    animate(
      '500ms ease-in',
      style({
        transform: 'translateX(100%)', // Slide out to the right
        opacity: 0,
      })
    ),
  ]),
]);
