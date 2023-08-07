function updateSelect() {
    // ID del archivo de Google Sheets
    var spreadsheetId = '1JWs9za4xtOHW9vgi-qXAsK66vNI6YSZghfyLgMYgzrg';
    

    // Rango que contiene los nombres (ej. columna A)
    var range = 'Hoja 3!A1:A20';

    // Autenticación con la API de Google
    gapi.client.init({
        'apiKey': 'AIzaSyCBl2mg8VKEHc1vDB-O0J7T4qXxJZrYEFw',
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        // Consulta a la API para obtener los datos del rango especificado
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: range,
        }).then(function(response) {
            var values = response.result.values;
            if (values && values.length > 0) {
                // Actualizar el selector con la lista de nombres
                var select = document.getElementById('nombre');
                select.innerHTML = '';
                for (var i = 0; i < values.length; i++) {
                    var option = document.createElement('option');
                    option.value = values[i][0];
                    option.text = values[i][0];
                    select.appendChild(option);
                }
            }
        });
    });
}
