import { format, parseISO } from 'date-fns';

export function formatDate(dateParams: string) {
 const resultDate =  format(
    parseISO(dateParams),
    'dd/MM/yyyy',
  )
  return resultDate;
}

export function dateToISOString() {
  const event = new Date()
  return event.toISOString();
}