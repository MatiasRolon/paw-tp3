## Consideraciones
<ul>
 <li> El puntaje es contemplado a partir del total de respuestas correctas que tenga el test. Una vez sabido esto, las respuestas tildadas que sean correctas sumaran puntos, las tildadas incorrectas restaran, y las no tildadas que sean correctas no afectaran el puntaje. Ejemplo: Si en total hay 20 respuestas correctas posibles (sera el maximo puntaje a lograr), el usuario tilda en 15 que son correctas y en 7 que no son correctas conseguira un total de 8 puntos sobre 20. </li>
 <li> Una vez mostrados los resultados no tendran mas efecto tanto la cuenta regresvia como el boton "Puntutar" sobre el puntaje del test, para no tener resultados ambiguos o nuevas oportunidades de realizarlo un mismo usuario. Para reiniciar la encuesta se tendra que volver a la pantalla principal o bien actualizar la pagina.</li>
 </ul>
 
### Ejemplos de Test 
 Para facilitar el testing del ejercicio de realizaron 2 ejemplos para que el usuario pueda copiarlos y pegarlo en la pantalla principal de carga segun el que desee en cada momento, ahorrandole tiempo.
<br></br>
-------EJEMPLO 1 : FUTBOL ------------------------------------------------------
<p>{
"titulo": "Futbol",
"preguntas": [{
"pregunta": "¿Cual de estos Jugadores ha jugado en la Juventus?",
"respuestas": ["Alesandro Del Piero", "Martin Palermo", "Cristiano Ronaldo", "Romario"],
"correctas": [0,2]
},
{
"pregunta": "¿Que años gano la Champions League el Real Madrid",
"respuestas": ["2003", "2002", "2008", "2010","2017"],
"correctas": [1, 4]
},
{
"pregunta": "¿En cual de estos clubes de Europa ha jugado Juan Roman Riquelme?",
"respuestas": ["Villareal", "Barcelona", "Valencia", "Porto"],
"correctas": [0, 1]
},
{
"pregunta": "¿Que años gano Lionel Messi el Balon de Oro?",
"respuestas": ["2018", "2015", "2010", "2009"],
"correctas": [1,2,3]
},
{
"pregunta": "¿Cual de estos equipos nunca salio campeon del la Liga Argentina?",
"respuestas": ["Argentinos Juniors", "Banfield", "Gimnacia y Esgrima de La Plata", "Rosario Central","Velez"],
"correctas": [2]
},
{
"pregunta": "¿Que mundiales de futbol salio campeon Fancia?",
"respuestas": ["Francia 1938", "España 1982", "Francia 1998", "Alemania 2006","Rusia 2018"],
"correctas": [2,4]
}
],
"cantidadAPreguntar": "4",
"tiempoDeTrabajo": "117"
}</p>


-------EJEMPLO 2 : JUEGO DE TRONOS ------------------------------------------------------
<p>{
"titulo": "Game of Thrones",
"preguntas": [{
"pregunta": "¿Cual de estos son libros publicados por George R.R. Martin?",
"respuestas": ["Tormenta de espadas", "Danza de Unicornios", "Vientos de Otoño", "Fuego y Sangre"],
"correctas": [0,3]
},
{
"pregunta": "¿Cuales de estas NO es una casa en la Serie?",
"respuestas": ["Baratheon", "Lannister", "Magisterion", "Mormont","Lothbrok"],
"correctas": [2, 4]
},
{
"pregunta": "¿Quienes de estos personajes han sido asesinados por Arya?",
"respuestas": ["Walder Frey", "Meñique", "Cercei", "Ramsay Bolton"],
"correctas": [0, 1]
},
{
"pregunta": "¿Cual es el verdadero nombre de Jon Snow como Targaryen?",
"respuestas": ["Aemon", "Aegon", "Aerys", "JonSnowarys"],
"correctas": [1]
},
{
"pregunta": "¿Cuales de estos personajes son de la casa Stark",
"respuestas": ["Arya", "Sam", "Bran", "Robb","Jaime"],
"correctas": [0,2,3]
},
{
"pregunta": "¿Quienes de estos personajes son Salvajes?",
"respuestas": ["Tordmund", "Ygritte", "Jorah", "Khal Drogo","Mance Rayder"],
"correctas": [0,1,4]
}
],
"cantidadAPreguntar": "4",
"tiempoDeTrabajo": "120"
}
</p>
