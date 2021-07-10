import { format, parseISO } from "date-fns";

export const formatDate = (date) => format(parseISO(date), "dd MMMM, yyyy");
