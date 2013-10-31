/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "JavaScript",
		"%l_lessontitle": "JavaScript",
		"%l_subtitle": "Titanium Certified Developer (TCD) Training",
		"%l_slidenote_titleslide": "",
		"%l_qa_slide": "Q&amp;A",
		"%l_slidenote_qa": ""
	},
	"ja": {
		"%l_filetitle": "はじめに",
		"%l_lessontitle": "はじめに"
	},
	"es": {
		"%l_filetitle": "JavaScript",
		"%l_lessontitle": "JavaScript",
		"%l_subtitle": "Titanium Certified Developer (TCD) Training",
		"%l_slidenote_titleslide": "",
		"%l_qa_slide": "Q&amp;A",
		"%l_slidenote_qa": "",
		"%l_agenda_title" : "En esta lección usted:",
		"%l_agenda1" : "Examinará las bases de JavaScript",
		"%l_agenda2" : "Entenderá sobre variables y alcance (scope)",
		"%l_agenda3" : "Creará y usará funciones",
		"%l_agenda4" : "Creará y usará objectos y manejará herencia",
		"%l_agenda5" : "Escribirá modulos en CommonJS",
		"%l_agenda6" : "Escribirá código que implmenta las mejores practicas de JavaScript",
		"%l_tryit" : "Intentalo mientras aprendemos",
		"%l_tryit1" : "Usa la consola de tu navegador, o",
		"%l_tryit2" : "Visita <a href='http://jsbin.com/''>jsbin.com</a> (desactiva el panel de HTML y activa el panel de JavaScript, Consola y Salida (Output)",
		"%l_topic" : "Tema",
		"%l_core" : "JavaScript Básico",
		"%l_bldblocks" : "Elementos de construcción en JavaScript",
		"%l_bldblocks0" : "Tipos de datos",
		"%l_bldblocks1" : "Variables",
		"%l_bldblocks2" : "Declaraciones (\"Comandos\")",
		"%l_bldblocks3" : "Sentencias de control y condicionales",
		"%l_bldblocks4" : "Funciones",
		"%l_bldblocks5" : "Objetos",
		"%l_datatypes" : "Tipos de datos",
		"%l_var1" : "Siempre declare usando la palabra reservada <code>var</code>",
		"%l_statements" : "Declaraciones",
		"%l_statements1" : "Expresiones que crean un resultado",
		"%l_statements2" : "Terminan con un semicolon (;)",
		"%l_comments" : "Comentarios",
		"%l_controlstatement" : "Condicionales y sentencias de control",
		"%l_cstatments2" : "Ciclos for",
		"%l_cstatments3" : "Ciclos while",
		"%l_cstatments4" : "Sentencias switch",
		"%l_comparison" : "Operadores de comparación",
		"%l_equalsdammit1" : "El operador == automaticamente hace la conversión de tipo de datos para que sean compatibles y luego realiza la comparación del valor",
		"%l_equalsdammit2" : "El operador === debe tener el mismo valor y el mismo tipo de datos, no hay conversión de tipo de datos",
		"%l_ternary" : "Operadores ternarios",
		"%l_ortrick" : "Un truco de asignación",
		"%l_functions" : "Declaración de funciones",
		"%l_functions1" : "Bloques de código reusables",
		"%l_functions2" : "Los argumentos pasan datos a la función",
		"%l_functions3" : "Regresa un valor al final con <code>return</code>",
		"%l_functionsc" : "Sentencias de funciones",
		"%l_functionsc0" : "En escencia son identicos a la forma anterior de declaración",
		"%l_functionsc1" : "Se esta definiendo una variable que contendrá a la función",
		"%l_functionsc2" : "Resalta que la función son ciudadanos de primera clase ('first class citizens') en JavaScript",
		"%l_functionsc3" : "Se puede pasar una función como argumento a otra función",
		"%l_functioncallbacks" : "Funciones Callback",
		"%l_functioncallbacks1" : "Excelente para cuando 'getAsyncData()' podría tomar demasiado tiempo en ejecutarse (como cuando se accede por medio de internet)",
		"%l_objects" : "Objetos",
		"%l_hostcore" : "Núcleo (Core) vs. Host",
		"%l_corevshost1" : "Núcleo de JavaScript",
		"%l_corelist0" : "Reglas y sintaxis del lenguaje en general",
		"%l_corelist1" : "Operadores del núcleo",
		"%l_corelist2" : "Objetos como Date y Math",
		"%l_corevshost2" : "Entorno 'host' añade sus propios objetos",
		"%l_host0" : "Navegador web (DOM)",
		"%l_host1" : "Node.js (Funcionalidad del lado del servidor)",
		"%l_host2" : "Titanium (Objeto Ti para componentes móviles)",
		"%l_corevshost3" : "Librerías que se importan (APIs)",
		"%l_ecma" : "La evolución de ECMA y JavaScript",
		"%l_ecma1" : "Liberado originalmente a finales de 1995",
		"%l_ecma2" : "Standarizado por ECMA en 1998",
		"%l_ecma3" : "Actual ECMA estandar es ECMAScript 5 (2010)",
		"%l_ecma4" : "JavaScriptCore es el motor de JavaScript de Apple, usado por Titanium para iOS",
		"%l_ecma5" : "V8 es el motor de JavaScript de Chrome, usado por Titanium en Android",
		"%l_ecma6" : "V8 y JSCore, además de Titanium, soportan casi completo el ECMAScript 5",
		"%l_typeconversions" : "Tipos de conversión",
		"%l_typeconversions1" : "Automatico",
		"%l_typeconversions2" : "Funciones de ayuda",
		"%l_typeconversions3" : "Casting",
		"%l_scope" : "Alcance de variables",
		"%l_scope1" : "Alcance global",
		"%l_scope2" : "Alcance de función",
		"%l_scope3" : "Alcance de bloque (ECMA 6)",
		"%l_scope4" : "'Accidentes' globales",
		"%l_hoisting" : "Elevación de variables",
		"%l_hoisting1" : "Declaraciones con <code>var</code> son movidas al inicio",
		"%l_hoisting2" : "Inicializaciónes con <code>var</code> no",
		"%l_hoisting3" : "Declaraciones de funciones son elevadas (movidas)",
		"%l_hoisting4" : "Sentencias de funciones no",
		"%l_hostingtryit" : "¿Cuál es la salida?",
		"%l_hoistinganswer" : "Respuesta: I am NOT Android - por que la declaración de foo() es elevada",
		"%l_functionst" : "Funciones",
		"%l_args" : "Argumentos",
		"%l_args2" : "Las funciones de JavaScript pueden aceptar un número variable de argumentos sin errores",
		"%l_args1" : "<code>arguments</code> - es un objeto tipo arreglo",
		"%l_args3" : "Pero no es un arreglo, no hay propiedades más que el largo del objeto",
		"%l_passbyref" : "Pase de paramtros, ¿por referencia o valor?",
		"%l_passbyref1" : "Las variables simples son pasadas por valor",
		"%l_passbyref2" : "Objetos son pasados por referencia",
		"%l_passbyref3" : "Todo es pasado por valor, pero los objetos el valor es una referencia al objeto",
		"%l_this" : "¿Qué es 'this'?",
		"%l_this1" : "Se refiere al objeto asociado con la función",
		"%l_this2" : "Cuando las funciones son metodos, 'this' = el objeto",
		"%l_this3" : "Con funciones 'normales', 'this', = el objecto, pero el objeto es el objecto global",
		"%l_call" : "Usando 'call'",
		"%l_call1" : "Define que es 'this' para la función",
		"%l_call2" : "Sin 'call' explicito, basicamente estamos pasando el objecto global con call",
		"%l_selfcalling" : "Sunciones que se llaman a si mismas",
		"%l_selfcalling1" : "Define, entonces ejecuta una función",
		"%l_selfcalling2" : "Envuelve una definición de función en ()",
		"%l_selfcalling3" : "Agrega () al final (para llamar la función)",
		"%l_selfcalling4" : "Funciona con sentencias de funciones",
		"%l_closures" : "Closures",
		"%l_closures1" : "Variables dentro de funciones que se salen del alcance cuando la función termina",
		"%l_closures2" : "Las closures dejn preservar un valor local de la variable",
		"%l_closures3" : "En este ejemplo, increment(), decrement() y value() son todas closures",
		"%l_closures4" : "Las closures pueden causar fugas de memoria",
		"%l_objectliteral" : "Literales de objetos",
		"%l_objectliteral1" : "Define objetos con {}",
		"%l_objectliteral2" : "Agregar propiedades luego o acceder a ellas via notación con punto",
		"%l_objectliteral3" : "Pueden definirse propiedades al momento de la creación",
		"%l_constructors" : "Funciones como constructores",
		"%l_constructors1" : "Funciones que crean objetos",
		"%l_constructors2" : "Cuidado con omitir 'new'",
		"%l_constructors3" : "'this' == al objeto que se instancia con 'new'",
		"%l_constructors4" : "'this' == al objeto global sin el 'new'",
		"%l_implicit" : "'Returns' implicitos y explicitos",
		"%l_implicit1" : "Implicito = no sentencia <code>return</code>",
		"%l_implicit2" : "Usado con un constructor, regresa el objeto que fue creado",
		"%l_implicit3" : "'Returns' implicitos pueden causar problemas si luego olvidas 'new'",
		"%l_prototypes" : "Herencia prototipada",
		"%l_crockfordquote" : "<em>He aprendido a abrazar completamente el prototipalismo (prototypalism), y ahora me he liberado de los confines del modelo clasico.</em> -- Douglas Crockford",
		"%l_prototypes1" : "JavaScript es un lenguaje orientado a objetos libre de clases",
		"%l_prototypes2" : "La herencia es via prototipos, no clases",
		"%l_prototypes3" : "Un prototipo es un objeto desde el cual otros objetos pueden heredar propiedades",
		"%l_prototypes4" : "Cualquier objeto puede ser un prototipo",
		"%l_prototypes5" : "Todo objeto tiene un prototipo excepto el objeto de nivel superior",
		"%l_prototypes6" : "<code>__proto__</code> es una forma de acceder al prototipo del objeto",
		"%l_prototypeexample" : "Ejemplo de prototipo",
		"%l_inheritance" : "Herencia - Busqueda de propiedades/metodos",
		"%l_inheritance1" : "Busca primero en el objeto especifico <br/><code>son.hasOwnProperty(whoami)==false</code>",
		"%l_inheritance2" : "Busca hacía arriba en la cadena de prototipos <br/><code>Child.hasOwnProperty(whoami)==false</code><br/><code>Parent.hasOwnProperty(whoami)==true</code>",
		"%l_inheritance3" : "Continua buscando hasta que alcanza el Objecto, el prototipo de todos los objetos. Si no lo encuentra, regresa <code>undefined</code>",
		"%l_parasitic" : "Herencia paracitaria",
		"%l_parasiticpara" : "Simple patron para la herencia en JavaScript",
		"%l_modules" : "Modulos",
		"%l_commonjs" : "CommonJS",
		"%l_commonjs1" : "Manera estandar para crear funcionalida auto-contenida y exportable. Revisar commonjs.org para más información",
		"%l_commonjs2" : "Objetivos:",
		"%l_commonjs3" : "Dentro de cada modulo, <code>exports</code> es un objeto al cual se pueden agregar propiedades",
		"%l_commonjs4" : "Se puede remplazar ese objeto configurando <code>module.exports</code>",
		"%l_commonjs5" : "Los modulos son importados con la función global <code>require()</code>",
		"%l_helpers" : "Ayudantes / Librerias de patrones",
		"%l_factory" : "Patron de fabrica (factory)",
		"%l_moduletitanium" : "Modulos en TItanium",
		"%l_moduletitanium1" : "Caché -- el modulo no es re-evaluado en los siguientes require()",
		"%l_moduletitanium2" : "Se omite '/' al inicio ... <code>require('ui/somemodule')</code>",
		"%l_moduletitanium3" : "Las rutas son relativas al directorio Resources",
		"%l_moduletitanium4" : "Se le pasa los datos necesarios para la creación del modulo (p.e. un objeto usuario)",
		"%l_moduletitanium5" : "Se tiene que hacer require a cualquier librería/modulo que el modulo pueda necesitar (p.e. el modulo de base de datos)",
		"%l_moduletitanium6" : "En titanium, un modulo tiene acceso a su objeto global, pero no cuenten con ello",
		"%l_bestpractices" : "Mejores practicas",
		"%l_maintain" : "Codifica para legibilidad",
		"%l_maintain1" : "Nombra variables y objetos",
		"%l_maintain2" : "Espacio e indentación",
		"%l_maintain3" : "Pasar {} en lugar de una lista de argumentos",
		"%l_maintain4" : "Comentar",
		"%l_garbagecollection" : "Colector de basura",
		"%l_garbage1" : "Automatico via 'marcar y borrar'",
		"%l_garbage2" : "Cuando los objetos recolectados no tienen referencias a ellos",
		"%l_garbage3" : "Nada en el espacio global puede ser recolectado nunca",
		"%l_garbage4" : "'Forzar' la recolección encapsulando dentro de funciones o modulos que irán fuera del alcance",
		"%l_avoidingleaks" : "Evitando fugas de memoria",
		"%l_avoidleaks1" : "No almacenar variables en el alcance global",
		"%l_avoidleaks2" : "Asignar los objetos a null cuando ya no se necesitan",
		"%l_avoidleaks3" : "Observar por referencias 'ocultas' en funciones, closures, event listener y asingaciones globales erroneas",
		"%l_avoidleaks4" : "Perfilar la aplicación",
		"%l_performance" : "Codificando al rendimiento",
		"%l_perf1" : "Diferir la ejecución - cargar modulos cuando se ocupen y no usar Ti.include()",
		"%l_perf2" : "Los modulos son almacenados en cache, así que no se re-evaluan",
		"%l_perf3" : "Evitar el alcance global",
		"%l_perf4" : "Usar closures escasamente",
		"%l_perf5" : "Evitar <code>eval()</code> y evaluaciones implicitas",
		"%l_perf6" : "No cambiar el tipo de dato almacenado en una variable",
		"%l_perfloops" : "Ciclos de alto rendimiento",
		"%l_perfloops1" : "Asignar el tamaño total del ciclo antes de ejecutarlo",
		"%l_perfloops2" : "Ciclos for/in son más lentos que while",
		"%l_perfloops3" : "Definir referencias como locales",
		"%l_perfloops4" : "Los operadores son más rapidos que las funciones",
		"%l_summary" : "Resumen",
		"%l_summarypara" : "En esta lección, usted:",
		"%l_summary1" : "Examinó las bases del lenguaje JavaScript",
		"%l_summary2" : "Entendio sobre las variables y los alcances",
		"%l_summary3" : "Aprendió como crear y usar funciones",
		"%l_summary4" : "Aprendió como crear y usar objetos y como manejar la herencia",
		"%l_summary5" : "Examinó modulos de CommonJS",
		"%l_summary6" : "Examinó código que implementa las mejores practicas de JavaScript",
		"%l_lab" : "Objetivos del laboratorio",
		"%l_labintro" : "En este laboratorio, usted:"
	}
});








