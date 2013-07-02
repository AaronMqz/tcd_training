/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Alloy Overview",
		"%l_lessontitle": "Alloy Overview",
		"%l_subtitle": "Titanium Certified Developer (TCD) Training",
		"%l_qa_slide": "Q&amp;A",
		"%l_slidenote_qa": ""
	},

	"es": {
		"%l_filetitle": "Alloy",
		"%l_lessontitle": "Alloy",
		"%l_subtitle": "Entrenamiento Titanium Certified Developer (TCD)",
		"%l_qa_slide": "Preguntas",
		"%l_slidenote_qa": "",
		"%l_agenda_title":"En esta lección, usted:",
		"%l_agenda1":"Identificará el rol de los componentes MVC de Alloy",
		"%l_agenda2":"Implementará un control UI utilizando Views y Styles",
		"%l_agenda3":"Habilitará interactividad con Controller",
		"%l_agenda4":"Identificará opciones para manejar diferencias de plataformas en Alloy",
		"%l_topic":"Tema",
		"%l_overview":"Objetivos de la Revisión",
		"%l_goals1":"<ul>MVC separa forma y función<li>Velocidad y simplicidad del desarrollo</li><li>Incrementa capacidad de mantenimiento</li></ul>",
		"%l_goals2":"Alloy es el framework MVC de Appcelerator para Titanium",
		"%l_viewpara":"Alloy View != Ti.UI.View (la parte <code>&lt;div></code>-). Hablamos de MVC aquí.",
		"%l_demoA":"Recorrido Alloy App",
		"%l_demoAurl":"Adaptado de https://github.com/aaronksaunders/alloy_fugitive",
		"%l_convention":"Comportamiento sobre Configuración",
		"%l_conventiontable":"<tr><th>Archivo/Direcorio</th><th>Contenidos &amp; Propósito</th></tr><tr><td>/app/config.json</td><td>Especificar valores globales, ambiente condicional y valores operacionales de sistema, y dependencias de widgets.</td></tr><tr><td>/app/views</td><td>Archivos XML View</td></tr><tr><td>/app/styles</td><td>Archivos TSS Style</td></tr><tr><td>/app/controllers</td><td>Archivos JavaScript Controller</td></tr><tr><td>/app/models</td><td>Archivos JavaScript Model </td></tr><tr><td>/app/migrations</td><td>Archvos JSON que describen cambios incrementales en la base de datos; en el formato <i>DATETIME</i>_<i>modelname</i>.json</td></tr><tr><td>/app/assets</td><td>Archivos de datos gráficos, y otros elementos visuales de sistema; no creados de manera predeterminada.</td></tr><tr><td>/app/lib</td><td>Archivos de librería específicos de la aplicación; no creados de manera predeterminada.</td></tr><tr><td>/app/themes</td><td>Archivos de tema y elementos para personalizar la UI, no creados de manera predeterminada.</td></tr><tr><td>/app/widgets</td><td>Archvos y elementos asociados con widgets (componentes auto-contenidos de aplicación)</td></tr>",
		"%l_alloyviewstyles":"Alloy Views &amp; Styles a detalle",
		"%l_viewtag":"Etiqueta View",
		"%l_requirepara":"Separa Views en mútiples archivos",
		"%l_nspara":"Crear elementos no en Ti.UI namespace",
		"%l_tss":"Archivos Style (Estilo)",
		"%l_tss1":"Component, class, y ID",
		"%l_tss2":"Global app.tss",
		"%l_tss3":"Constantes",
		"%l_tss4":"Funciones i18n",
		"%l_tss5":"Alloy Globals",
		"%l_topic":"Prueba",
		"%l_viewtss":"Examine AlloyHunter Views &amp; Styles",
		"%l_viewtss1":"Examine los archivos View utilizados por la app AlloyHunter para identificar los componentes UI que esta siendo definidos.",
		"%l_viewtss2":"Examine los archivos Style para correlacionar los componentes con sus selectores de estilo",
		"%l_topic":"Tema",
		"%l_controllerdetails":"Controllers a detalle",
		"%l_ctrllrs1":"Contiene la lógica de Aplicación",
		"%l_ctrllrs2":"Comunican entre Views y Models",
		"%l_ctrllrs3":"Manejan interacciones de usuario y actualizaciones dinámicas de UI",
		"%l_ctrllrs4":"Acceden a componentes a través de su atributo id: <code>$.idstring</code>",
		"%l_ctrlwoid":"Views sin IDs",
		"%l_events":"Manejo de Eventos",
		"%l_dynaview":"Creando Views dinámicamente",
		"%l_createcontroller":"<code>Alloy.createController</code> -- método para crear una instancia de Controller",
		"%l_getview":"<code>Controller.getView</code> -- regresa el View asociado con este Controller",
		"%l_createview":"Ejemplo de Views dinámicas",
		"%createviewexample":"Utilizando filas personalizadas en un Tableview",
		"%l_slidenote_createview":"El código muestra un ejemplo creado para cargar una serie de filas de tabla personalizadas (CustomRow) como datos dentro de una tabla.",
		"%l_arguments":"Pasando Argumentos",
		"%l_argpara":"Pasar argumentos cuando se inicia un Controller",
		"%l_topic":"Pruebe",
		"%l_tryctrllr":"Examine Controllers de AlloyHunter",
		"%l_tryctrllr1":"Examine el controller Fugitives.js:<br/><ul style='margin-left: 40px;'><li>el view creado dinámicamente en addNewFugitive()</li><li>el event listener</li><li>los argumentos pasados al view dinámico view dentro del listener</li></ul>",
		"%l_tryctrllr2":"Examine el controller FugitiveDetails.js:<br/><ul style='margin-left: 40px;'><li>accediendo a los argumentos</li><li>y ahora los datos del argumento son usados continuamente</li></ul>",
		"%l_topic":"Tema",
		"%l_platformspecifics":"Manejo de Plataforma",
		"%l_platform":"Factor forma de plataformas",
		"%l_platform1":"Código condicional",
		"%l_platform2":"Elementos visuales de app",
		"%l_platform3":"Folders de ejecución de plataforma",
		"%l_platform4":"Técnicas basadas en markup",
		"%l_platform5":"Calificadores basados en TSS",
		"%l_conditionalcode":"Código Condicional",
		"%l_conditionalcode1":"OS_IOS, OS_ANDROID, OS_MOBILEWEB",
		"%l_conditionalcode2":"ENV_DEV, ENV_TEST, ENV_PRODUCTION",
		"%l_assetfolders":"Folders de  elementos visuales",
		"%l_fassets1":"Añada en app/assets; son copiados al directorio Resources cuando compile",
		"%l_fassets2":"Mismos subdirectorios que sin utilizar Alloy",
		"%l_fassets3":"Agregue sus librerías y 'includes' en el folder lib",
		"%l_platformoverrides":"Overrides de Plataforma",
		"%l_slidenote_platformoverrides":"Usted puede crear versiones específicas de plataforma de views, controllers, y models para sobreescribir comportamientos base. Simplemente cree directorios de plataforma dentro de los folders /app/controllers, etc. y ponga sus archivos de override ahí.",
		"%l_platformmarkup":"Markup de Plataforma y Dispositivo",
		"%l_pselectors":"Calificadores basados en TSS",
		"%l_configs":"Configuraciones",
		"%l_themes":"Temas",
		"%l_themes1":"Nombrado colleciones de estilos y elementos",
		"%l_themes2":"Aplicado a través de ajuste en archivo config.json (puede ser específico de plataforma)",
		"%l_themes3":"Ajuste de tema sobreescribe estilos y elementos base",
		"%l_themes4":"Sobreescrituras son realizadas atributo por atributo, no archivos completos",
		"%l_tryplatform":"Examine Manejo de Plataforma en AlloyHunter",
		"%l_tryplatform1":"Examine el código condicional en Figitives.js y FugitiveDetails.js",
		"%l_tryplatform2":"Examine selectores de plataforma en FugitiveDetails.js",
		"%l_tryplatform3":"Compare los elementos gráficos para Android y iOS",
		"%l_alloyvsapi":"Alloy vs &ldquo;Tradicional&rdquo;",
		"%l_alloyvsapi1":"No es todo o nada &mdash; <code>Ti.UI.createView()</code> and its brethren still valid",
		"%l_alloyvsapi2":"Técnicas de API utilizadas entre controllers, en librerías de ayuda (redes, bases de datos, etc.)",
		"%l_alloyvsapi3":"Alloy es esencialmente un pre-compilador",
		"%l_alloyvsapi4":"Al final, Alloy crea código tradicional para usted &mdash; ¡Mire el Folder Resources!",
		"%l_summary":"Resumen",
		"%l_summarypara":"En esta lección, usted ha:",
		"%l_summary1":"Identificado el rol de los componentes Alloy MVC",
		"%l_summary2":"Implementado el control UI usando Views y Style",
		"%l_summary3":"Implementado interactividad con un Controller",
		"%l_summary4":"Identificado opciones para manejo de diferencias de plataforma en Alloy",
		"%l_lab":"Objetivos de Laboratorio",
		"%l_labobjective1":"Crea un proyecto basado en Alloy",
		"%l_labobjective2":"Implementar funcionalidad de aplicación con Views, Styles, y Controllers",
		"%l_solution":"Revisión de Solución"
	},

});
