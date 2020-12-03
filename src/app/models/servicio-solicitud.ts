export interface ServicioSolicitud {
  id?: string;
  duracion?: number;
  fecha: number;
  activo: 'en espera' | 'activo' | 'finalizado';
  lugar_origen: String;
  lugar_destino: String;
  auto: {
    modelo: string;
    ano: number;
    comentarios: {
      lateral_izquierdo: string;
      lateral_derecho: string;
      frontal: string;
      trasero: string;
    };
  };
}
