import { animate, style, transition, trigger } from "@angular/animations";

export const FadeAnimation = trigger("fadeAnimation", [
  transition("void => *", [
    style({ opacity: 0 }),
    animate(500, style({ opacity: 1 })),
  ])
]);
