# paw-tp3
Trabajo Practico N°3 de Programacion en Ambiente Web - UNLu

## Consignas
<p><b>1) ¿Qué significa que los estilos se apliquen en cascada? ¿cómo aplica la herencia de estilos?</b></p>
<p> El significado de la aplicación de estilos en cascada hace referencia a que seguirá un patrón a la hora de aplicar el estilo a los elementos de forma masiva, el cual tendrá en cuenta las relaciones de herencia entre unos y otros, yendo desde lo más general a lo más específico.</P>
<p>Esta herencia que determina CSS se basa en qué elementos del HTML cumplen con una determinada característica para aplicarles un estilo particular, y por ende tendrán ese estilo todos los elementos que se consideren dentro del grupo que cumple esas características. Así, para los  elementos que formen parte de varios estilos definidos, se tomara siempre la definición que haya sido mas especifica, y tambien se afectara de igual forma a los proximos elementos que esten dentro de estos antes mencionados.</p>  
<p>A la hora de aplicar los estilos a un grupo de elementos tiene en cuenta la importancia dentro del código (indicada por el programador), la especificidad (cuantas mas características tenga en cuenta, se aplicará mas particularmente en lugar de tener los estilos mas genericos) y el orden en el código.</p>
<br>
<p><b>2) ¿Por qué es necesario utilizar un CSS de Reset?</b></p>
<p> Los Reset son definiciones del CSS para propiedades problemáticas que los diseñadores necesitan unificar desde un principio.</p>
<p> Son necesarios para limpiar todas las propiedades de CSS que aplican por defecto los navegadores web y que son diferentes en cada uno de ellos. De esta manera, la hoja de estilo que definamos, será lo más homogénea posible en todos los navegadores web que existen, a pesar de sus diferencias. </p>
<br>
<p><b>3) ¿Qué es el CSS box model?</b></p>
<p> Es un estandar para el diseño de CSS en el cual se considera cada elemento que conforma el HTML como una caja rectangular, la cual posee 4 principales caracteristicas, que se pueden editar para variar el tamaño y forma del contenido):</p>
  <p> <b>Content:</b> limita el area del contenido, como texto, imagen, video, etc</p>
  <p> <b>Padding:</b> Extiende el área del contenido para incluir el relleno del elemento,>
  <p> <b>Border:</b> pertenece al elemento y sirve para extender el borde por sobre el padding.>
  <p> <b>Margin:</b> Distancia que guardará con respecto a los demás elementos</p>
<p>Vale aclarar que cuando se editan las propiedades Width y Height solo se estan refiriendo al contenido de la caja..</p>  
<br>
<p><b>4) ¿Cuál es el código que hay que insertar en una hoja de estilo para poder usar WebFonts?</b></p>
<p> La WebsFonts nos facilitan el diseño ya que en lugar de depender de las fuentes instaladas en el ordenador del usuario que visite la pagina, el S.O, o algun otro factor externo, las WebFonts se almacenan en un propio servidor (externo), se descargan junto con las imágenes y el resto de recursos, y son formateables. Las mas usadas en la actualidad son las fuentes libres de Google: Google Fonts </p>
<p>  Para poder insertar una fuente de este tipo en nuestra hoja de estilos debemos insertar el siguiente codigo:</p>
<p><cite>@import url("https://fonts.googleapis.com/css?family=Mystery+Quest");</cite></p>
<p> En donde el link citado de ejemplo corresponderá a la fuente desde donde queramos importar ese tipo de letra. Luego bastará con setear el valor de Font-Family de algun elemento del HTML con el nombre de la letra importada. Para este caso, quedaría asi:
<p> <cite> body{  font-family: "Mystery Quest";   } </cite></p> 
<br>
<p><b>5) ¿Qué son y para qué sirven los pseudoElementos?</b></p>
<p> Son caracteristicas adicionales de los selectores con una sintaxis especial que se usan para poder aplicar estilos a algunos elementos particulares, con caracteristicas que no captan los selectores comunes. Referencian partes mas concretas de un elemento  seleccionado siguiendo un patron como "Lo que viene despues de", o "la primera linea de". </p>
<br>
<p><b>6) ¿Cómo se calcula la prioridad de una regla CSS? Expresarlo como una fórmula matemática.</b></p>
<p> 
Para calcular la prioridad de una regla CSS se deben tener en cuenta las siguientes reglas. Tendrán mayor prioridad los estilos marcados como !important. SI hay varios estilos marcados como !important se elegirá al de mayor peso. 
El peso está dado por la cantidad de selectores que posea el estilo:<br>
Peso = ABC (número de 3 cifras, cada una de las cuales se calcula contando los selectores de cada tipo según se indica a continuación)
A = nº de selectores de ID (selectores que acceden al atributo “id” del elemento mediante “#”)<br>
B = nº de selectores de CLASE (selectores que acceden al atributo “class” del elemento mediante “.”)<br>
C = nº de selectores de HTML (selectores que acceden al tag html)<br>
Ejemplos ordenados de más a menos peso:<br>
#id1 .clase1 a (A=1, B=1, C=1 –> peso = 111)<br>
div#id1 a (A=1, B=0, C=2 –> peso = 102)<br>
.clase1 li.clase2 a (A=0, B=2, C=2 –> peso = 22)<br>
.clase1 (A=0, B=1, C=0 –> peso = 10)<br>
div a (A=0, B=0, C=2 –> peso = 2)<br>
En segundo lugar, luego de los estilos marcados !important, se toma en cuenta el origen de las reglas. Las reglas del autor de la web prevalecerán sobre las reglas del lector de similar peso. Y ambas prevalecen sobre las reglas del navegador.
En caso de coincidir en el peso se da prioridad a la última regla establecida.
 
!important>reglas del autor>reglas del lector> reglas del navegador.
 </p>
<br>
<p><b>7) ¿Qué es el view port? ¿Cómo se configura? ¿qué problema soluciona?</b></p>
<p> Es una ventana grafica que representa la parte visible del contenido en la pantalla del navegador. Es un tamaño teórico que tiene la pantalla ya que no tiene que coincidir necesariamente con su resolución real (pixeles en pantalla).</p>
<p> Se puede configurar en el HEAD del HTML de nuestra pagina, con la etiqueta META como en el siguiente ejemplo en donde se establece ancho y escala:</p>
<p>"< meta name="viewport" content="width=device-width, initial-scale=1.0" "</p>
<p>Es una forma de aplicar un diseño responsivo a la pagina y resolver el problema de sitios no optimizados para móviles ya que la resolucion en los diferentes tipos de dispositivos nunca es homogenea, logrando que se vean mejor definiendo el ancho, alto y escala del área usada por el navegador para mostrar contenido y no agregarle doble trabajo al usuario a la hora de navegar por el sitio.</p>
<br>

<p><b>8) ¿Qué son las media querys? Enumere los distintos tipos de medios y las principales
características de cada uno de ellos.</b></p>
<p> Las media query son una técnica de CSS introducida en CSS3. Incluyen un bloque de propiedades solo si es verdadera una determinada condición, utilizando la regla @media.
Son útiles cuando se desea ajustar la aplicación o página web a diferentes tipos de dispositivos contemplando que el tamaño de pantalla u otras características son diferentes entre los mismos.

Los tipos de medios son los que describen la categoría general de un dispositivo. Entre ellos se encuentran:

- All: Apto para todos los dispositivos
- Print: Destinado a documentos vistos en una pantalla en modo de vista previa de impresión.
- Screen: Destinado principalmente a pantallas color de computadoras, tablets, Smart-phones, etc.
- Speech: Destinado para lectores de pantalla que leen la página en voz alta.
- Braille: Dispositivos tactiles con braille.
- Embossed: Usada para las impresoras de braille paginadas.
- Handheld: usada para dispositivos de mano.
- Projection: Usada para presentaciones proyectadas, como las diapositivas.
- Tty: Usada para medios que usen una grilla de caracteres con ancho fijo, como las terminales.
 </p>
<br>
<p><b>9) ¿En qué circunstancias se pueden utilizar las variables css? ¿Qué problemas pueden traer
aparejadas? ¿Cuándo consideras que sería bueno utilizarlas?</b></p>
<p> Las variables CSS se utilizan cuando se desea definir un mismo valor para que lo utilicen múltiples selectores. Su uso es beneficioso en el momento que el valor de la variable se quiera modificar, permitiendo que solo modificando la variable los cambios se realicen en cada selector donde se esté utilizando.
Declaración de una variable:<br>
elemento { --main-bg-color: brown; }<br>
Utilización de la variable:<br>
elemento { background-color: var(--main-bg-color);<br> 
 
La desventaja de las variables consiste en que si su nombramiento no es descriptivo, el uso de una gran cantidad de variables puede generar dificultad a la hora de la lectura del documento. 
El problema principal del uso de las variables es que algunos browsers no las soportan completamente.
 </p>
<br>
<p><b>10) CSS Grid Layout ¿Qué es? Explicar las reglas que intervienen en el armado de una grilla.
¿Qué ventajas y desventajas tiene frente a otros Layouts?</b></p>
<p> CSS Grid Layout es un módulo que permite la distribución de los elementos de las páginas web teniendo en cuenta dos dimensiones(filas,columnas). 
Para el armado de la grilla se define un elemento contenedor mediante display:grid, para definir la cantidad de columnas y filas se utiliza grid-template-columns y grid-template-rows  respectivamente. Y para colocar los elementos hijos en la grilla se utiliza grid-columny grid-row.
CSS puede colocarlos en cualquier orden facilitando la reorganización de la grilla mediante media.querys. Frente a otros layouts tiene la ventaja de poder ordenar sus elementos sin la necesidad de la utilización de propiedades como float o position.
Puede ser no apto para diseños responsive.
 </p>
<br>
<p><b>11) ¿Qué puntos en común y en que se diferencian las Material Design Guidelines de Google y
las Human Interface Guidelines de Apple?</b></p>
<p> Ambas guías buscan la implementación de buenas prácticas para desarrollar aplicaciones que sean de uso fácil para el usuario final. Para lograr esto coinciden en el uso inteligente de colores para resaltar los elementos funcionales para el usuario, texto legible, iconos que representen cual es su función. Buscan realizar transiciones entre páginas permitiendo al usuario saber en todo momento en que sitio se encuentra. <br>
Se diferencian en elementos de diseño como, por ejemplo, la cantidad de botones para controles generales de flujo, en el caso de Android posee 3 botones mientras que ios posee 2. O también, en los títulos de las aplicaciones o sus secciones siendo que en ios están resaltados con negrita. 
 </p>
<br>
