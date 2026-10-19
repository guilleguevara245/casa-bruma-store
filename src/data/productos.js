const productos = [
 {
 id: 1,
 nombre: "Remera roja",
 categoria: "Indumentaria",
 precio: 1300,
 imagen: "/img/remera-roja.webp",
 descripcion: "Remera clásica de diseño versátil, confeccionada con tela suave y cómoda para el uso diario. Su corte moderno y su estilo minimalista la convierten en una prenda ideal para combinar con jeans, pantalones o bermudas. Perfecta para cualquier ocasión, ofrece comodidad y estilo durante todo el día.",
 descBreve: "Remera manga corta para festejar año nuevo chino",
 stock: 1
 },
 {
 id: 2,
 nombre: "Remera blanca",
 categoria: "Indumentaria",
 precio: 1200,
 imagen: "/img/remera.webp",
 descripcion: "Remera clásica de diseño versátil, confeccionada con tela suave y cómoda para el uso diario. Su corte moderno y su estilo minimalista la convierten en una prenda ideal para combinar con jeans, pantalones o bermudas. Perfecta para cualquier ocasión, ofrece comodidad y estilo durante todo el día.",
 descBreve: "Remera manga corta ideal para comer tuco",
 stock: 13
 },
 {
 id: 3,
 nombre: "Camisa negra",
 categoria: "Indumentaria",
 precio: 1200,
 imagen: "/img/remera.webp",
 descripcion: "Remera clásica de diseño versátil, confeccionada con tela suave y cómoda para el uso diario. Su corte moderno y su estilo minimalista la convierten en una prenda ideal para combinar con jeans, pantalones o bermudas. Perfecta para cualquier ocasión, ofrece comodidad y estilo durante todo el día.",
 descBreve: "Camisa negra lisa con botones dorados ideal para velorios",
 stock: 0
 },
 {
 id: 4,
 nombre: "pantalon clasico",
 categoria: "Indumentaria",
 precio: 1000,
 imagen: "/img/pantalon-negro.webp",
 descripcion: "Remera clásica de diseño versátil, confeccionada con tela suave y cómoda para el uso diario. Su corte moderno y su estilo minimalista la convierten en una prenda ideal para combinar con jeans, pantalones o bermudas. Perfecta para cualquier ocasión, ofrece comodidad y estilo durante todo el día.",
 descBreve: "Pantalon de gala ideal para eventos formales",
 stock: 0
 },
 {
 id: 5,
 nombre: "Remera negra",
 categoria: "Indumentaria",
 precio: 1300,
 imagen: "/img/remera-negra.webp",
 descripcion: "Remera de algodón peinado en color negro, con cuello redondo reforzado y costuras dobles. Mantiene el color lavado tras lavado y combina con absolutamente todo.",
 descBreve: "La remera negra básica que nunca falla",
 stock: 18
 },
 {
 id: 6,
 nombre: "Remera azul marino",
 categoria: "Indumentaria",
 precio: 1300,
 imagen: "/img/remera-azul.webp",
 descripcion: "Remera de algodón en azul marino, de calce regular y tacto suave. Un básico sobrio para usar sola o debajo de una camisa abierta.",
 descBreve: "Azul marino, para cuando el negro ya aburre",
 stock: 9
 },
 {
 id: 7,
 nombre: "Remera verde oliva",
 categoria: "Indumentaria",
 precio: 1350,
 imagen: "/img/remera-verde.webp",
 descripcion: "Remera de algodón teñida en verde oliva, con cuello redondo y mangas con dobladillo. Ideal para looks casuales en tonos tierra.",
 descBreve: "Verde oliva de calce relajado",
 stock: 6
 },
 {
 id: 8,
 nombre: "Remera gris melange",
 categoria: "Indumentaria",
 precio: 1250,
 imagen: "/img/remera-gris.webp",
 descripcion: "Remera gris melange de algodón y poliéster, liviana y respirable. Pensada para el día a día y también para entrenar.",
 descBreve: "Gris melange, cómoda para todo el día",
 stock: 22
 },
 {
 id: 9,
 nombre: "Remera arena",
 categoria: "Indumentaria",
 precio: 1350,
 imagen: "/img/remera-arena.webp",
 descripcion: "Remera en tono arena, de algodón suave y caída liviana. Un color neutro que queda bien con jeans, chinos y bermudas.",
 descBreve: "Tono arena para looks neutros",
 stock: 4
 },
 {
 id: 10,
 nombre: "Remera bordó",
 categoria: "Indumentaria",
 precio: 1400,
 imagen: "/img/remera-bordo.webp",
 descripcion: "Remera de algodón en bordó intenso, con costuras reforzadas en hombros y cuello. Suma color sin perder sobriedad.",
 descBreve: "Bordó intenso para salir de los básicos",
 stock: 0
 },
 {
 id: 11,
 nombre: "Pantalón beige",
 categoria: "Indumentaria",
 precio: 2100,
 imagen: "/img/pantalon-beige.webp",
 descripcion: "Pantalón de corte recto en beige, con pretina con botón, pinzas marcadas al frente y bolsillos laterales. Un clásico versátil que funciona tanto de día como de noche.",
 descBreve: "Beige de corte recto, elegante y cómodo",
 stock: 10
 },
 {
 id: 12,
 nombre: "Pantalón azul marino",
 categoria: "Indumentaria",
 precio: 2200,
 imagen: "/img/pantalon-azul.webp",
 descripcion: "Pantalón de vestir azul marino de corte recto, en tela con leve elasticidad. Pinzas al frente y bolsillos laterales para un look prolijo sin resignar comodidad.",
 descBreve: "Azul marino para la oficina",
 stock: 5
 },
 {
 id: 13,
 nombre: "Pantalón gris",
 categoria: "Indumentaria",
 precio: 2000,
 imagen: "/img/pantalon-gris.webp",
 descripcion: "Pantalón gris de corte recto con pretina con botón y pinzas al frente. Combina con camisas, remeras y buzos por igual.",
 descBreve: "Gris de corte recto, combina con todo",
 stock: 0
 },
 {
 id: 14,
 nombre: "Pantalón verde militar",
 categoria: "Indumentaria",
 precio: 2100,
 imagen: "/img/pantalon-verde.webp",
 descripcion: "Pantalón en verde militar de corte recto, con bolsillos laterales y pinzas al frente. Ideal para looks urbanos en tonos tierra.",
 descBreve: "Verde militar de corte recto",
 stock: 8
 },
 {
 id: 15,
 nombre: "Buzo con capucha gris",
 categoria: "Indumentaria",
 precio: 3400,
 imagen: "/img/buzo-capucha-gris.webp",
 descripcion: "Buzo canguro de frisa con capucha, cordón ajustable y bolsillo frontal. Puños y cintura de rib que mantienen la forma después de cada lavado.",
 descBreve: "Buzo canguro gris, abrigado y clásico",
 stock: 12
 },
 {
 id: 16,
 nombre: "Buzo con capucha negro",
 categoria: "Indumentaria",
 precio: 3400,
 imagen: "/img/buzo-capucha-negro.webp",
 descripcion: "Buzo canguro negro de frisa, con capucha, cordón ajustable y bolsillo frontal. Puños y cintura de rib para un calce cómodo.",
 descBreve: "Buzo canguro negro para todos los días",
 stock: 9
 },
 {
 id: 17,
 nombre: "Buzo cuello redondo bordó",
 categoria: "Indumentaria",
 precio: 3000,
 imagen: "/img/buzo-bordo.webp",
 descripcion: "Buzo de frisa liviana con cuello redondo, puños y cintura de rib. Ideal para media estación, solo o con una camisa debajo.",
 descBreve: "Buzo bordó de frisa liviana",
 stock: 6
 },
 {
 id: 18,
 nombre: "Buzo cuello redondo verde",
 categoria: "Indumentaria",
 precio: 3000,
 imagen: "/img/buzo-verde.webp",
 descripcion: "Buzo de frisa liviana en verde salvia, con cuello redondo, puños y cintura de rib. Un color suave que combina con jeans y pantalones claros.",
 descBreve: "Verde salvia para media estación",
 stock: 3
 },
 {
 id: 19,
 nombre: "Buzo medio cierre crema",
 categoria: "Indumentaria",
 precio: 3700,
 imagen: "/img/buzo-medio-cierre-crema.webp",
 descripcion: "Buzo de algodón con cuello alto y medio cierre metálico. Puños y cintura de rib, ideal para usar sobre una remera o una camisa.",
 descBreve: "Medio cierre y cuello alto",
 stock: 5
 },
 {
 id: 20,
 nombre: "Campera puffer negra",
 categoria: "Indumentaria",
 precio: 8900,
 imagen: "/img/campera-puffer-negra.webp",
 descripcion: "Campera inflable con relleno sintético, cuello alto y cierre frontal. Liviana y muy abrigada, con puños elastizados que frenan el viento.",
 descBreve: "Puffer negra para los días más fríos",
 stock: 4
 },
 {
 id: 21,
 nombre: "Campera de jean",
 categoria: "Indumentaria",
 precio: 6200,
 imagen: "/img/campera-jean.webp",
 descripcion: "Campera de jean clásica con botones metálicos, bolsillos con tapa en el pecho y costuras en contraste. Una prenda que mejora con el uso.",
 descBreve: "La campera de jean de siempre",
 stock: 7
 },
 {
 id: 22,
 nombre: "Campera de cuero marrón",
 categoria: "Indumentaria",
 precio: 12500,
 imagen: "/img/campera-cuero-marron.webp",
 descripcion: "Campera de cuero estilo motociclista con cuello con broches, cierre frontal y bolsillos con cierre. La cintura se ajusta con broches laterales.",
 descBreve: "Cuero marrón estilo motociclista",
 stock: 2
 },
 {
 id: 23,
 nombre: "Campera bomber verde",
 categoria: "Indumentaria",
 precio: 7400,
 imagen: "/img/campera-bomber-verde.webp",
 descripcion: "Campera bomber de nylon en verde militar, con cuello, puños y cintura de rib. Tiene bolsillo con cierre en la manga y bolsillos laterales.",
 descBreve: "Bomber verde militar con bolsillo en la manga",
 stock: 6
 },
 {
 id: 24,
 nombre: "Rompevientos azul",
 categoria: "Indumentaria",
 precio: 5800,
 imagen: "/img/campera-rompevientos-azul.webp",
 descripcion: "Campera rompevientos liviana con capucha, cierre frontal y bolsillo con cierre en el pecho. Repele la llovizna y se guarda fácil en la mochila.",
 descBreve: "Rompevientos liviano con capucha",
 stock: 0
 },
];
export default productos;