var console = console || {},
  buscaminas = buscaminas || {};

buscaminas.contenedor = "no";
buscaminas.niveles = [
  {
    nivel: "Principiante",
    ancho: 8,
    alto: 8,
    minas: 10
  },
  {
    nivel: "Intermedio",
    ancho: 16,
    alto: 16,
    minas: 40
  },
  {
    nivel: "Experto",
    ancho: 16,
    alto: 30,
    minas: 99
  }
];
