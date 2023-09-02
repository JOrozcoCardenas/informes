// Función para establecer el valor del campo de mes al mes actual
function setMonthToCurrent() {
    // Obtener la fecha actual
    var today = new Date();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    
    // Formatear el mes y el año en el formato "YYYY-MM"
    var formattedMonth = year + "-" + (month < 10 ? "0" + month : month);
    
    // Establecer el valor del campo de mes
    document.getElementById("month").value = formattedMonth;
}