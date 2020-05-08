function hora(){

    const hora = new Date();
    
    var horas       =   hora.getHours();
    var minutos     =   hora.getMinutes();
    var segundos    =   hora.getSeconds();
    //var milis       =   hora.getMilliseconds();

    
    
    //** Hora **
    //Mostrar esta condición para que a partir de la hora 1 se vea así :01 y no así :0
    if(horas < 10){
        horas = "0" + horas;
    }
    //Mostrar esta condición para que a partir del minuto 1 se vea así :01 y no así :0
    if(minutos < 10){
        minutos = "0" + minutos;
    }
    //Mostrar esta condición para que a partir del segundo 1 se vea así :01 y no así :1,2,3...
    if(segundos < 10){
        segundos = "0" + segundos; 
    }
    
    //obtener id de hora, minuto y segundo del HTML para sobreescribirlo con .innerHTML y
    //darle valor de los datos obtenidos de la fecha (Date).
    document.getElementById('hora') .innerHTML   =   horas;
    document.getElementById('min')  .innerHTML   =   ":" + minutos;
    document.getElementById('seg')  .innerHTML   =   ":" + segundos;
    //document.getElementById('milis').innerHTML   =   ":" + milis;
}

function fecha(){
    
    const fecha = new Date();

    var dia = fecha.getDate();//se obtiene el día, si se usa get.day() se obtiene el número de la semana empezando con 0
    var mes = fecha.getMonth() + 1;//los meses empiezan desde 0 y finaliza en el mes 11.
    var anio = fecha.getFullYear();
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    //** Fecha **
    if(dia < 10){
        dia = "0" + dia;
    }

    if(mes < 10 ){
        mes = "0" + mes;
    }

    if(mes == 1){
        mes = meses[0];
    }else if(mes == 2){
        mes = meses[1];
    }else if(mes == 3){
        mes = meses[2];
    }else if(mes == 4){
        mes = meses[3];
    }else if(mes == 5){
        mes = meses[4];
    }else if(mes == 6){
        mes = meses[5];
    }else if(mes == 7){
        mes = meses[6];
    } else if(mes == 8){
        mes = meses[7];
    }else if(mes == 9){
        mes = meses[8];
    }else if(mes == 10){
        mes = meses[9];
    }else if(mes == 11){
        mes = meses[10];
    }else if(mes == 12){
        mes = meses[11];
    }

    document.getElementById('dia').innerHTML = dia;
    document.getElementById('mes').innerHTML = " - " + mes;
    document.getElementById('anio').innerHTML = " - " + anio;

}

setInterval( hora   , 1000 );
setInterval( fecha  , 1000 );

console.log( "Creado por: 'Tu Nombre'" );