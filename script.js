function responder(pregunta) {

    const chat = document.getElementById("chat");

    // Mensaje del usuario
    chat.innerHTML += `
        <div class="mensaje usuario">${pregunta}</div>
    `;

    let respuesta = "";

    switch(pregunta) {

        case "¿Qué es el chatbot?":
            respuesta = "Es un sistema que permite agendar citas con docentes y rector de forma rápida y organizada.";
            break;

        case "Solicitar cita":
            respuesta = "Para solicitar una cita necesito: nombre del estudiante, curso, representante y el docente o rector con quien desea reunirse.";
            break;

        case "Horarios docentes":
            respuesta = "Los docentes atienden de lunes a viernes de 13:30 a 15:00, según disponibilidad registrada.";
            break;

        case "Horarios rector":
            respuesta = "El rector atiende de lunes a viernes de 09:00 a 12:00.";
            break;

        case "Cancelar cita":
            respuesta = "Puede cancelar la cita con al menos 24 horas de anticipación.";
            break;

        case "Reprogramar cita":
            respuesta = "Seleccione una nueva fecha disponible para reprogramar la reunión.";
            break;

        case "Disponibilidad semanal":
            respuesta = "Actualmente existen espacios disponibles esta semana. El sistema mostrará las fechas libres al momento de agendar.";
            break;

        case "Requisitos para una cita":
            respuesta = "Se requiere: nombre del estudiante, curso, representante y motivo de la reunión.";
            break;

        default:
            respuesta = "No entendí la consulta. Por favor seleccione una opción disponible.";
    }

    // Respuesta del bot
    setTimeout(() => {
        chat.innerHTML += `
            <div class="mensaje bot">${respuesta}</div>
        `;

        chat.scrollTop = chat.scrollHeight;
    }, 500);

    chat.scrollTop = chat.scrollHeight;
}
function enviarMensaje(){

    const input = document.getElementById("mensaje");
    const texto = input.value.toLowerCase().trim();

    if(texto === "") return;

    const chat = document.querySelector(".chat");

    chat.innerHTML += `
    <div class="mensaje usuario">
        ${input.value}
    </div>
    `;

    let respuesta = "Lo siento, no entendí tu consulta.";

    if(texto.includes("cita")){
        respuesta = "Para agendar una cita indique el nombre del docente.";
    }

    else if(texto.includes("rector")){
        respuesta = "El rector atiende de lunes a viernes de 09:00 a 12:00.";
    }

    else if(texto.includes("horario")){
        respuesta = "Los docentes atienden según los horarios registrados en el sistema.";
    }

    else if(texto.includes("cancelar")){
        respuesta = "Puede cancelar su cita con 24 horas de anticipación.";
    }

    else if(texto.includes("reprogramar")){
        respuesta = "Indique una nueva fecha disponible para reprogramar.";
    }

    chat.innerHTML += `
    <div class="mensaje bot">
        ${respuesta}
    </div>
    `;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}