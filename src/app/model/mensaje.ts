import {Chat} from './chat';

export class Mensaje{
  id?: number;
  contenido: string;
  fechaenvio: Date;
  chat: Chat;
  esPropio?: boolean;
}
