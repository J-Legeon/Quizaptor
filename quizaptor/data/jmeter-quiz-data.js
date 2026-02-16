// jmeter-quiz-data.js - JMeter Performance Testing Quiz Questions

const jmeterQuizData = {
    id: 'jmeter-fundamentals',
    title: 'JMeter - Performance Testing',
    description: 'Quiz completo sobre Apache JMeter para pruebas de rendimiento',
    timeLimit: 45, // minutes
    passingScore: 70, // percentage
    questions: [
        {
            id: 1,
            question: '¿Qué es Apache JMeter?',
            options: [
                'Un framework para unit testing',
                'Una herramienta open-source para pruebas de carga y rendimiento',
                'Un servidor de aplicaciones',
                'Un IDE para Java'
            ],
            correctAnswer: 1,
            explanation: 'JMeter es una herramienta de código abierto diseñada para pruebas de carga y medición de rendimiento de aplicaciones.',
            multipleAnswers: false
        },
        {
            id: 2,
            question: '¿Cuáles son componentes principales de un Test Plan en JMeter?',
            options: [
                'Thread Group',
                'Sampler',
                'Listener',
                'Controller'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Un Test Plan incluye Thread Groups (hilos), Samplers (peticiones), Listeners (resultados), Controllers (lógica), entre otros.',
            multipleAnswers: true
        },
        {
            id: 3,
            question: '¿Qué representa un Thread Group?',
            options: [
                'El número de usuarios virtuales simultáneos',
                'Una base de datos',
                'Un tipo de protocolo',
                'Un servidor web'
            ],
            correctAnswer: 0,
            explanation: 'Thread Group define el número de usuarios virtuales, el ramp-up period y el número de iteraciones.',
            multipleAnswers: false
        },
        {
            id: 4,
            question: '¿Cuál es el propósito de los Samplers en JMeter?',
            options: [
                'Recopilar métricas del sistema',
                'Enviar requests a un servidor',
                'Almacenar resultados',
                'Configurar variables'
            ],
            correctAnswer: 1,
            explanation: 'Los Samplers son responsables de enviar diferentes tipos de requests (HTTP, FTP, JDBC, etc.) a un servidor.',
            multipleAnswers: false
        },
        {
            id: 5,
            question: '¿Cuáles son tipos de Listeners en JMeter?',
            options: [
                'View Results Tree',
                'Summary Report',
                'Graph Results',
                'Aggregate Report'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Todos son tipos comunes de Listeners que permiten visualizar y analizar los resultados de las pruebas.',
            multipleAnswers: true
        },
        {
            id: 6,
            question: '¿Qué es el Ramp-Up Period?',
            options: [
                'El tiempo total de la prueba',
                'El tiempo que tarda en iniciarse el servidor',
                'El tiempo que JMeter toma para iniciar todos los threads',
                'El tiempo de respuesta máximo aceptable'
            ],
            correctAnswer: 2,
            explanation: 'Ramp-Up Period es el tiempo que JMeter necesita para iniciar todos los threads/usuarios virtuales.',
            multipleAnswers: false
        },
        {
            id: 7,
            question: '¿Cuáles son tipos de Controllers en JMeter?',
            options: [
                'Logic Controller',
                'Recording Controller',
                'Simple Controller',
                'Transaction Controller'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'JMeter tiene varios tipos de Controllers para controlar el flujo de ejecución de las pruebas.',
            multipleAnswers: true
        },
        {
            id: 8,
            question: '¿Qué hace un HTTP Request Sampler?',
            options: [
                'Crea un servidor HTTP',
                'Envía una request HTTP a un servidor web',
                'Parsea respuestas HTML',
                'Genera reportes HTTP'
            ],
            correctAnswer: 1,
            explanation: 'HTTP Request Sampler envía peticiones HTTP/HTTPS a un servidor web y captura la respuesta.',
            multipleAnswers: false
        },
        {
            id: 9,
            question: '¿Cuáles son elementos de configuración en JMeter?',
            options: [
                'CSV Data Set Config',
                'HTTP Cookie Manager',
                'HTTP Header Manager',
                'User Defined Variables'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Todos son elementos de configuración que permiten personalizar las pruebas y manejar datos.',
            multipleAnswers: true
        },
        {
            id: 10,
            question: '¿Qué es un Assertion en JMeter?',
            options: [
                'Una configuración de seguridad',
                'Una validación de la respuesta del servidor',
                'Un tipo de thread',
                'Un protocolo de red'
            ],
            correctAnswer: 1,
            explanation: 'Assertions permiten validar que las respuestas del servidor cumplan ciertos criterios.',
            multipleAnswers: false
        },
        {
            id: 11,
            question: '¿Cuáles son tipos de Assertions comunes?',
            options: [
                'Response Assertion',
                'Duration Assertion',
                'Size Assertion',
                'JSON Assertion'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'JMeter proporciona varios tipos de Assertions para validar diferentes aspectos de las respuestas.',
            multipleAnswers: true
        },
        {
            id: 12,
            question: '¿Qué es el CSV Data Set Config?',
            options: [
                'Un formato de reporte',
                'Una forma de parametrizar tests usando datos de un archivo CSV',
                'Una base de datos',
                'Un tipo de sampler'
            ],
            correctAnswer: 1,
            explanation: 'CSV Data Set Config permite leer datos de archivos CSV para parametrizar las pruebas.',
            multipleAnswers: false
        },
        {
            id: 13,
            question: '¿Qué métricas proporciona JMeter?',
            options: [
                'Response Time',
                'Throughput',
                'Error Rate',
                'Latency'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'JMeter proporciona métricas como tiempo de respuesta, throughput (requests/sec), tasa de error y latencia.',
            multipleAnswers: true
        },
        {
            id: 14,
            question: '¿Qué es un Timer en JMeter?',
            options: [
                'Mide el tiempo de respuesta',
                'Agrega retrasos entre requests para simular comportamiento real',
                'Programa la ejecución de tests',
                'Calcula estadísticas de tiempo'
            ],
            correctAnswer: 1,
            explanation: 'Timers agregan pausas entre las requests de los threads para simular el comportamiento real de usuarios.',
            multipleAnswers: false
        },
        {
            id: 15,
            question: '¿Cuáles son tipos de Timers en JMeter?',
            options: [
                'Constant Timer',
                'Uniform Random Timer',
                'Gaussian Random Timer',
                'Synchronizing Timer'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'JMeter ofrece varios tipos de Timers para simular diferentes patrones de espera.',
            multipleAnswers: true
        },
        {
            id: 16,
            question: '¿Qué es el modo Non-GUI en JMeter?',
            options: [
                'Un modo sin interfaz gráfica para mejor rendimiento',
                'Un modo de depuración',
                'Un tipo de reporte',
                'Una configuración de red'
            ],
            correctAnswer: 0,
            explanation: 'El modo Non-GUI permite ejecutar JMeter sin interfaz gráfica, ideal para pruebas de carga reales con mejor rendimiento.',
            multipleAnswers: false
        },
        {
            id: 17,
            question: '¿Cómo se ejecuta JMeter en modo Non-GUI?',
            options: [
                'jmeter.bat -n -t test.jmx -l results.jtl',
                'jmeter -nogui -testplan test.jmx',
                'jmeter run test.jmx',
                'jmeter.sh execute test.jmx'
            ],
            correctAnswer: 0,
            explanation: 'Se usa: jmeter -n (non-gui) -t (test plan) archivo.jmx -l (log file) resultados.jtl',
            multipleAnswers: false
        },
        {
            id: 18,
            question: '¿Cuáles son plugins populares de JMeter?',
            options: [
                'JMeter Plugins Manager',
                'PerfMon Server Agent',
                '3 Basic Graphs',
                'Custom Thread Groups'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Estos son plugins populares que extienden la funcionalidad de JMeter.',
            multipleAnswers: true
        },
        {
            id: 19,
            question: '¿Qué es un Regular Expression Extractor?',
            options: [
                'Un validador de expresiones',
                'Extrae valores de respuestas usando regex para usarlos en requests siguientes',
                'Un formateador de texto',
                'Un tipo de assertion'
            ],
            correctAnswer: 1,
            explanation: 'Regular Expression Extractor permite extraer datos de las respuestas usando expresiones regulares.',
            multipleAnswers: false
        },
        {
            id: 20,
            question: '¿Qué es el Throughput en JMeter?',
            options: [
                'El tiempo de respuesta promedio',
                'El número de requests procesadas por unidad de tiempo',
                'El tamaño de los datos transferidos',
                'La tasa de error'
            ],
            correctAnswer: 1,
            explanation: 'Throughput es el número de requests que el servidor puede procesar por segundo/minuto.',
            multipleAnswers: false
        },
        {
            id: 21,
            question: '¿Cuáles son protocolos soportados por JMeter?',
            options: [
                'HTTP/HTTPS',
                'FTP',
                'JDBC',
                'SOAP/REST'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'JMeter soporta múltiples protocolos incluyendo HTTP/HTTPS, FTP, JDBC, SOAP, REST, JMS, LDAP, entre otros.',
            multipleAnswers: true
        },
        {
            id: 22,
            question: '¿Qué es el JMeter HTTP(S) Test Script Recorder?',
            options: [
                'Un editor de scripts',
                'Una herramienta para grabar navegación web y crear test plans',
                'Un reproductor de audio',
                'Un analizador de tráfico'
            ],
            correctAnswer: 1,
            explanation: 'HTTP(S) Test Script Recorder actúa como proxy para grabar la navegación del usuario y generar test plans.',
            multipleAnswers: false
        },
        {
            id: 23,
            question: '¿Cuáles son mejores prácticas en JMeter?',
            options: [
                'Usar modo Non-GUI para pruebas de carga',
                'No usar Listeners durante pruebas de carga',
                'Parametrizar datos usando CSV',
                'Monitorear recursos del sistema'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Todas son mejores prácticas para pruebas de rendimiento efectivas con JMeter.',
            multipleAnswers: true
        },
        {
            id: 24,
            question: '¿Qué es el Distributed Testing en JMeter?',
            options: [
                'Ejecutar tests en múltiples máquinas simultáneamente',
                'Distribuir datos entre threads',
                'Balanceo de carga',
                'Compartir test plans'
            ],
            correctAnswer: 0,
            explanation: 'Distributed Testing permite ejecutar pruebas en múltiples máquinas para generar mayor carga.',
            multipleAnswers: false
        },
        {
            id: 25,
            question: '¿Qué archivo contiene la definición del Test Plan?',
            options: [
                '.jmx',
                '.jtl',
                '.xml',
                '.properties'
            ],
            correctAnswer: 0,
            explanation: 'Los Test Plans de JMeter se guardan en archivos con extensión .jmx (XML format).',
            multipleAnswers: false
        }
    ]
};
