// devtools-qa-quiz-data.js - Chrome DevTools for QA Quiz

const devtoolsQuizData = {
    id: 'devtools-qa',
    title: 'Chrome DevTools para QA',
    description: 'Quiz sobre uso de Chrome DevTools en testing',
    timeLimit: 35,
    passingScore: 70,
    questions: [
        {
            id: 1,
            question: '¿Cuáles son las pestañas principales de Chrome DevTools?',
            options: [
                'Elements',
                'Console',
                'Network',
                'Performance'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Elements, Console, Network, Performance, Sources, Application, Security son pestañas principales de DevTools.',
            multipleAnswers: true
        },
        {
            id: 2,
            question: '¿Para qué sirve la pestaña Network?',
            options: [
                'Monitorear requests HTTP',
                'Ver tiempos de carga',
                'Analizar headers y responses',
                'Modificar HTML'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'Network permite monitorear todas las requests, ver tiempos de carga, headers, payloads y responses. Elements modifica HTML.',
            multipleAnswers: true
        },
        {
            id: 3,
            question: '¿Qué permite hacer la pestaña Elements?',
            options: [
                'Inspeccionar y modificar HTML/CSS en vivo',
                'Ver el DOM tree',
                'Editar estilos CSS',
                'Ejecutar JavaScript'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'Elements permite inspeccionar/modificar HTML/CSS y ver el DOM. Console ejecuta JavaScript.',
            multipleAnswers: true
        },
        {
            id: 4,
            question: '¿Cómo se abre Chrome DevTools?',
            options: [
                'F12',
                'Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac)',
                'Click derecho → Inspect',
                'Todas las anteriores'
            ],
            correctAnswer: 3,
            explanation: 'DevTools se puede abrir con F12, Ctrl+Shift+I (Cmd+Option+I en Mac), o haciendo clic derecho e "Inspect".',
            multipleAnswers: false
        },
        {
            id: 5,
            question: '¿Qué muestra la pestaña Console?',
            options: [
                'Mensajes de log',
                'Errores JavaScript',
                'Warnings',
                'Permite ejecutar código JavaScript'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Console muestra logs, errores, warnings y permite ejecutar JavaScript directamente.',
            multipleAnswers: true
        },
        {
            id: 6,
            question: '¿Para qué sirve la función copy() en Console?',
            options: [
                'Copiar texto',
                'Copiar un objeto al portapapeles',
                'Duplicar elementos',
                'Hacer backup'
            ],
            correctAnswer: 1,
            explanation: 'copy() copia objetos JavaScript al portapapeles, útil para extraer datos de la consola.',
            multipleAnswers: false
        },
        {
            id: 7,
            question: '¿Cuáles son métodos útiles de console?',
            options: [
                'console.log()',
                'console.table()',
                'console.time()/timeEnd()',
                'console.assert()'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Todos son métodos útiles: log (mensaje), table (tablas), time/timeEnd (medir tiempo), assert (validaciones).',
            multipleAnswers: true
        },
        {
            id: 8,
            question: '¿Qué hace el Network throttling?',
            options: [
                'Simula diferentes velocidades de conexión',
                'Bloquea requests',
                'Encripta el tráfico',
                'Comprime archivos'
            ],
            correctAnswer: 0,
            explanation: 'Network throttling simula diferentes velocidades de red (3G, 4G, etc.) para probar performance.',
            multipleAnswers: false
        },
        {
            id: 9,
            question: '¿Cuáles son usos de la pestaña Application?',
            options: [
                'Ver/editar cookies',
                'Inspeccionar Local Storage',
                'Ver Session Storage',
                'Gestionar Service Workers'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Application permite gestionar cookies, localStorage, sessionStorage, IndexedDB, Service Workers y más.',
            multipleAnswers: true
        },
        {
            id: 10,
            question: '¿Qué permite hacer Device Mode?',
            options: [
                'Simular diferentes dispositivos móviles',
                'Probar responsive design',
                'Emular touch events',
                'Formatear el disco'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'Device Mode permite emular diferentes dispositivos, probar responsive design y simular touch events.',
            multipleAnswers: true
        },
        {
            id: 11,
            question: '¿Para qué sirven los Breakpoints en Sources?',
            options: [
                'Pausar la ejecución de JavaScript',
                'Depurar código',
                'Ver valores de variables',
                'Eliminar código'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'Breakpoints pausan la ejecución para depurar, inspeccionar el stack y ver valores de variables.',
            multipleAnswers: true
        },
        {
            id: 12,
            question: '¿Qué es el Performance profiling?',
            options: [
                'Medir el rendimiento de la página',
                'Identificar cuellos de botella',
                'Analizar tiempos de carga',
                'Optimizar CSS'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'Performance profiling mide el rendimiento, identifica bottlenecks y analiza tiempos. No optimiza código directamente.',
            multipleAnswers: true
        },
        {
            id: 13,
            question: '¿Qué hace Preserve log en Network?',
            options: [
                'Mantiene los logs entre navegaciones',
                'Guarda logs en un archivo',
                'Imprime logs',
                'Encripta logs'
            ],
            correctAnswer: 0,
            explanation: 'Preserve log mantiene los requests en el panel Network incluso después de navegar a otra página.',
            multipleAnswers: false
        },
        {
            id: 14,
            question: '¿Cuáles son filtros útiles en Network?',
            options: [
                'XHR',
                'JS',
                'CSS',
                'Img'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Network permite filtrar por tipo: XHR (Ajax), JS, CSS, Img, Media, Font, Doc, etc.',
            multipleAnswers: true
        },
        {
            id: 15,
            question: '¿Qué muestra la pestaña Security?',
            options: [
                'Información sobre el certificado SSL',
                'Problemas de seguridad',
                'Conexiones no seguras',
                'Todas las anteriores'
            ],
            correctAnswer: 3,
            explanation: 'Security muestra información del certificado SSL, problemas de seguridad y recursos no seguros.',
            multipleAnswers: false
        },
        {
            id: 16,
            question: '¿Para qué sirve el comando $0 en Console?',
            options: [
                'Retorna el último elemento inspeccionado',
                'Selecciona el primer elemento',
                'Ejecuta la última función',
                'Limpia la consola'
            ],
            correctAnswer: 0,
            explanation: '$0 retorna el último elemento seleccionado en Elements. $1, $2, etc. retornan los anteriores.',
            multipleAnswers: false
        },
        {
            id: 17,
            question: '¿Cuáles son comandos útiles en Console?',
            options: [
                '$(selector) - equivalente a querySelector',
                '$$(selector) - equivalente a querySelectorAll',
                'clear() - limpiar consola',
                'keys()/values() - obtener keys/values de objetos'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Todos son comandos útiles del Console API para manipular el DOM y objetos.',
            multipleAnswers: true
        },
        {
            id: 18,
            question: '¿Qué permite hacer Edit as HTML en Elements?',
            options: [
                'Modificar el HTML en vivo',
                'Probar cambios sin modificar archivos',
                'Compilar HTML',
                'Validar HTML'
            ],
            correctAnswer: [0, 1],
            explanation: 'Edit as HTML permite modificar el HTML en vivo para probar cambios temporalmente.',
            multipleAnswers: true
        },
        {
            id: 19,
            question: '¿Qué es Coverage en DevTools?',
            options: [
                'Muestra código CSS/JS no utilizado',
                'Ayuda a optimizar el bundle',
                'Identifica código muerto',
                'Ejecuta tests'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'Coverage muestra qué porcentaje de CSS/JS se usa, ayudando a identificar código no utilizado.',
            multipleAnswers: true
        },
        {
            id: 20,
            question: '¿Para qué sirve Block request URL?',
            options: [
                'Bloquear requests específicas para testing',
                'Simular fallos de red',
                'Probar manejo de errores',
                'Todas las anteriores'
            ],
            correctAnswer: 3,
            explanation: 'Block request URL permite bloquear requests para simular fallos y probar el manejo de errores.',
            multipleAnswers: false
        }
    ]
};
