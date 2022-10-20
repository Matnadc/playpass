/**
 * Trasforma la fecha de un objeto a un string con formato 'dd-mm-aaaa HH:ii:ss'.
 * 
 * @param {Date} date 
 */

export function dateToString(date){
    const formattedDate = new Intl.DateTimeFormat("es-AR", {
        hour:"2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(date);

    return formattedDate;
}