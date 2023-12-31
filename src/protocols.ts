export type ApplicationError = {
  name: string;
  message: string;
};

export type BookingCounts = {
  bookedRooms: number;
  hotelId: number;
};

export type ViaCEPAddress = {
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,

};

//Regra de Negócio
export type AddressEnrollment = {
  logradouro: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string,
  error?: string

}

export type RequestError = {
  status: number,
  data: object | null,
  statusText: string,
  name: string,
  message: string,
};

export type TicketTypeId = {
  ticketTypeId: number;
};

export type Activity = {
  id: number;
  title: string;
  capacity: number;
  startsAt: Date;
  endsAt: Date;
  ActivitieBooking: { id: number }[]; // Substitua pelo tipo correto se necessário
};

export type ActivitiesByDayOfWeek = {
  [dayOfWeek: string]: Activity[];
};
