export class Usuario {
  correo: string;
  nombre?: string;
  password: string;
}

export class SolicitudCrearUsuario {
  /**
   * El correo electrónico que debe crear el usuario.
   */
  email: string;
  /**
   * La contraseña que debe crear el usuario.
   */
  password: string;
  /**
   * Si devolver o no un ID y un token de actualización. Siempre debe ser verdad.
   */
  returnSecureToken: boolean;
}

export class RespuestaCrearUsuario {
  /**
   * El correo electrónico del usuario recién creado.
   */
  email: string;
  /**
   * La cantidad de segundos en los que caduca el token de ID.
   */
  expiresIn: string;
  /**
   * Un token de ID de autenticación de Firebase para el usuario recién creado.
   */
  idToken: string;
  /**
   * No se ocupa.
   */
  kind: string;
  /**
   * El uid del usuario recién creado.
   */
  localId: string;
  /**
   * Un token de actualización de autenticación de Firebase para el usuario recién creado.
   */
  refreshToken: string;
}

export class RespuestaIniciarUsuario {
  /**
   * Nombre del usuario.
   */
  displayName: string;
  /**
   * El correo electrónico del usuario recién creado.
   */
  email: string;
  /**
   * La cantidad de segundos en los que caduca el token de ID.
   */
  expiresIn: string;
  /**
   * Un token de ID de autenticación de Firebase para el usuario recién creado.
   */
  idToken: string;
  /**
   * No se usa.
   */
  kind: string;
  /**
   * El uid del usuario recién creado.
   */
  localId: string;
  /**
   * Un token de actualización de autenticación de Firebase para el usuario recién creado.
   */
  refreshToken: string;
  /**
   * Si el correo electrónico es para una cuenta existente.
   */
  registered: boolean;
}