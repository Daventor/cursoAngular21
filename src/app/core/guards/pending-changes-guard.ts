import { CanDeactivateFn } from '@angular/router';
import { Reviews } from '../../pages/routing/reviews/reviews';

export const pendingChangesGuard: CanDeactivateFn<Reviews> = (component, currentRoute, currentState, nextState) => {
  if(!component.hasChanges()){
    return true; // Continua con normalidad
  }

  return confirm('Tiene cambios sin guardar, ¿Seguro que quiere salir?');

  // Para formularios
  //return component.form()?.dirty() ? confirm(): true;

  // Para popups personalizados
  //return component.confirmLeave(); // Observable<boolean>
};
