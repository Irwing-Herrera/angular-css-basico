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
   * Imagen del usuario, solo se muestra si este a ingresado una imagen.
   */
  profilePicture?: string =
    "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80";
  /**
   * Un token de actualización de autenticación de Firebase para el usuario recién creado.
   */
  refreshToken: string;
  /**
   * Si el correo electrónico es para una cuenta existente.
   */
  registered: boolean;
}

export class SolicitudActualizarPerfil {
  idToken: string;
  displayName: string;
  photoUrl: string;
  deleteAttribute: string[] = null;
  returnSecureToken: boolean = false;
}
export class RespuestaActualizarPerfil {
  localId: string;
  email: string;
  displayName: string;
  photoUrl: string;
  passwordHash: string;
  providerUserInfo: any[];
  idToken: string;
  refreshToken: string;
  expiresIn: string;
}

export class RespuestaObtenerUsuario {
  /**
   * El uid del usuario actual.
   */
  localId: string;
  /**
   * El correo electrónico de la cuenta.
   */
  email: string;
  /**
   * Si se ha verificado o no el correo electrónico de la cuenta.
   */
  emailVerified: boolean;
  /**
   * El nombre para mostrar de la cuenta.
   */
  displayName: string;
  /**
   * Lista de todos los objetos de proveedor vinculados que contienen "providerId" y "federatedId".
   */
  providerUserInfo: any[];
  /**
   * La URL de la foto de la cuenta.
   */
  photoUrl: string;
  /**
   * Versión hash de la contraseña.
   */
  passwordHash: string;
  /**
   * La marca de tiempo, en milisegundos, en la que se cambió por última vez la contraseña de la cuenta.
   */
  passwordUpdatedAt: number;
  /**
   * La marca de tiempo, en segundos, que marca un límite, antes del cual el token de ID de Firebase se considera revocado.
   */
  validSince: string;
  /**
   * Si la cuenta está deshabilitada o no.
   */
  disabled: boolean;
  /**
   * La marca de tiempo, en milisegundos, en la que la cuenta inició sesión por última vez.
   */
  lastLoginAt: string;
  /**
   * La marca de tiempo, en milisegundos, en la que se creó la cuenta.
   */
  createdAt: string;
  /**
   * 	Si la cuenta está autenticada por el desarrollador.
   */
  customAuth: boolean;
}
