/**
 * Trasforma la fecha de un objeto a un string con formato 'HH:ii:ss'.
 * 
 * @param {Date} date 
 */

export function dateToString(date){
    if(typeof date != "object"){
        return '··:··:··';
    }

    const formattedDate = new Intl.DateTimeFormat("es-AR", {
        hour:"2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(date);

    return formattedDate;
}