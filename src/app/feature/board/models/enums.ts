export enum Types {
  'Food'= 'Comida',
  'Sport' = 'Deporte',
  'Work' = 'Trabajo',
  'JOURNEY' = 'Viaje',
  'Study' = 'Estudio',
  'Other' = 'Otro'

}

export enum Status {
  'PENDING' = 'Pendiente',
  'TODO' = 'Por hacer',
  'IN_PROGRESS' = 'En progreso',
  'DONE' = 'Hecho'
}

export const getTypes:Types[] = Object.values(Types);
export const getStatus:Status[] = Object.values(Status);
