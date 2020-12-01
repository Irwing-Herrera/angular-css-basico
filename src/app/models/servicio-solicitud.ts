// TODO: Revisar atributos en firebase
export interface ServicioSolicitud {
  id?: string;
  duracion?: number;
  fecha: Date;
  hora: string;
  // Atributos de Origen
  lugar_origen: String; // TODO: checar que valor puede llevar
  calle: string;
  colonia: string;
  numero_exterior: number;
  numero_interior: number;
  pais: 'Mexico';
  estado: 'Puebla' | 'Oaxaca' | 'Chiguagua' | 'Queretaro';
  // Atributos de Destino
  lugar_destino: String; // TODO: checar que valor puede llevar
  called: string;
  coloniad: string;
  numero_exteriord: number;
  numero_interiord: number;
  paisd: 'Mexico';
  estadod: 'Puebla' | 'Oaxaca' | 'Chiguagua' | 'Queretaro';
}
