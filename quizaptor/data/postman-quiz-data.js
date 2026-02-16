// postman-quiz-data.js - Postman API Testing Quiz Questions

const postmanQuizData = {
    id: 'postman-fundamentals',
    title: 'Postman - API Testing',
    description: 'Quiz completo sobre Postman para pruebas de APIs RESTful',
    timeLimit: 40, // minutes
    passingScore: 70, // percentage
    questions: [
        {
            id: 1,
            question: '¿Qué es Postman principalmente?',
            options: [
                'Un servidor de correo electrónico',
                'Una herramienta de colaboración para desarrollo y testing de APIs',
                'Un framework de automatización web',
                'Un sistema de gestión de bases de datos'
            ],
            correctAnswer: 1,
            explanation: 'Postman es una plataforma de colaboración para desarrollo, testing y documentación de APIs.',
            multipleAnswers: false
        },
        {
            id: 2,
            question: '¿Cuáles son métodos HTTP válidos en Postman?',
            options: [
                'GET',
                'POST',
                'PUT',
                'DELETE'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'GET, POST, PUT y DELETE son todos métodos HTTP estándar soportados por Postman, junto con PATCH, HEAD, OPTIONS, etc.',
            multipleAnswers: true
        },
        {
            id: 3,
            question: '¿Dónde se escriben los tests en Postman?',
            options: [
                'En la pestaña Pre-request Script',
                'En la pestaña Tests',
                'En la pestaña Body',
                'En la pestaña Headers'
            ],
            correctAnswer: 1,
            explanation: 'Los tests se escriben en la pestaña "Tests" y se ejecutan después de recibir la respuesta.',
            multipleAnswers: false
        },
        {
            id: 4,
            question: '¿Qué lenguaje se utiliza para escribir scripts en Postman?',
            options: [
                'Python',
                'Java',
                'JavaScript',
                'Ruby'
            ],
            correctAnswer: 2,
            explanation: 'Postman utiliza JavaScript para escribir pre-request scripts y tests.',
            multipleAnswers: false
        },
        {
            id: 5,
            question: '¿Cuál es la sintaxis correcta para verificar un código de estado 200?',
            options: [
                'pm.expect(pm.response.code).to.equal(200)',
                'pm.test("Status code is 200", () => { pm.response.to.have.status(200); });',
                'assert.equals(response.status, 200)',
                'pm.response.assertStatus(200)'
            ],
            correctAnswer: 1,
            explanation: 'La sintaxis correcta usando Chai es pm.test() con pm.response.to.have.status(200).',
            multipleAnswers: false
        },
        {
            id: 6,
            question: '¿Cuáles son tipos de variables en Postman?',
            options: [
                'Global variables',
                'Collection variables',
                'Environment variables',
                'Local variables'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Postman soporta variables Global, Collection, Environment y Local (dentro de scripts).',
            multipleAnswers: true
        },
        {
            id: 7,
            question: '¿Cómo se accede a una variable de entorno llamada "baseURL"?',
            options: [
                '{{baseURL}}',
                '${baseURL}',
                '%baseURL%',
                '@baseURL'
            ],
            correctAnswer: 0,
            explanation: 'Las variables en Postman se acceden usando doble llave: {{nombreVariable}}.',
            multipleAnswers: false
        },
        {
            id: 8,
            question: '¿Qué hace pm.environment.set("key", "value")?',
            options: [
                'Crea una variable global',
                'Establece una variable de entorno',
                'Crea una cookie',
                'Configura un header'
            ],
            correctAnswer: 1,
            explanation: 'pm.environment.set() establece el valor de una variable de entorno en el script.',
            multipleAnswers: false
        },
        {
            id: 9,
            question: '¿Cuáles son formatos de body soportados en Postman?',
            options: [
                'form-data',
                'x-www-form-urlencoded',
                'raw (JSON, XML, Text)',
                'binary'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Postman soporta form-data, x-www-form-urlencoded, raw (JSON, XML, Text, HTML), binary y GraphQL.',
            multipleAnswers: true
        },
        {
            id: 10,
            question: '¿Qué es un Pre-request Script?',
            options: [
                'Un script que se ejecuta antes de enviar la request',
                'Un script que valida la respuesta',
                'Una configuración de headers',
                'Un tipo de autenticación'
            ],
            correctAnswer: 0,
            explanation: 'Pre-request Scripts se ejecutan antes de enviar la petición, útiles para configurar variables, generar tokens, etc.',
            multipleAnswers: false
        },
        {
            id: 11,
            question: '¿Cómo se puede ejecutar una colección desde la línea de comandos?',
            options: [
                'Usando Postman CLI',
                'Usando Newman',
                'No es posible',
                'Solo con Postman Enterprise'
            ],
            correctAnswer: 1,
            explanation: 'Newman es la herramienta de línea de comandos de Postman para ejecutar colecciones.',
            multipleAnswers: false
        },
        {
            id: 12,
            question: '¿Cuáles son características de Postman Collections?',
            options: [
                'Agrupan requests relacionadas',
                'Pueden compartirse con el equipo',
                'Permiten ejecutar requests en secuencia',
                'Soportan variables a nivel de colección'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Las Collections agrupan requests, se pueden compartir, ejecutar en secuencia y tienen variables propias.',
            multipleAnswers: true
        },
        {
            id: 13,
            question: '¿Qué es Collection Runner?',
            options: [
                'Un plugin para correr más rápido',
                'Una herramienta para ejecutar todas las requests de una colección',
                'Un tipo de autenticación',
                'Un servidor de Postman'
            ],
            correctAnswer: 1,
            explanation: 'Collection Runner ejecuta todas las requests de una colección en secuencia, útil para testing automatizado.',
            multipleAnswers: false
        },
        {
            id: 14,
            question: '¿Cómo se verifica que una respuesta JSON contiene una propiedad "name"?',
            options: [
                'pm.expect(pm.response.json()).to.have.property("name")',
                'pm.test("Has name", () => { pm.expect(jsonData).to.have.property("name"); });',
                'assert.hasProperty(response, "name")',
                'pm.response.hasProperty("name")'
            ],
            correctAnswer: 1,
            explanation: 'Se usa pm.test() con pm.expect() y Chai assertions para verificar propiedades en JSON.',
            multipleAnswers: false
        },
        {
            id: 15,
            question: '¿Cuáles son tipos de autenticación soportados en Postman?',
            options: [
                'Basic Auth',
                'Bearer Token',
                'OAuth 2.0',
                'API Key'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Postman soporta Basic Auth, Bearer Token, OAuth 1.0/2.0, API Key, AWS Signature, Digest Auth, entre otros.',
            multipleAnswers: true
        },
        {
            id: 16,
            question: '¿Qué hace pm.response.json()?',
            options: [
                'Convierte la respuesta a formato JSON',
                'Parsea el cuerpo de la respuesta como JSON',
                'Envía un JSON',
                'Valida que la respuesta sea JSON'
            ],
            correctAnswer: 1,
            explanation: 'pm.response.json() parsea el cuerpo de la respuesta como un objeto JavaScript desde JSON.',
            multipleAnswers: false
        },
        {
            id: 17,
            question: '¿Cómo se puede parametrizar una request en Postman?',
            options: [
                'Usando variables {{variable}}',
                'Usando data files en Collection Runner',
                'Usando environments diferentes',
                'Todas las anteriores'
            ],
            correctAnswer: 3,
            explanation: 'Todas las opciones son formas válidas de parametrizar requests en Postman.',
            multipleAnswers: false
        },
        {
            id: 18,
            question: '¿Cuáles son snippets comunes en Postman Tests?',
            options: [
                'Status code is 200',
                'Response time is less than 200ms',
                'Response body contains string',
                'Content-Type header is present'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Todos son snippets comunes disponibles en la pestaña Tests de Postman.',
            multipleAnswers: true
        },
        {
            id: 19,
            question: '¿Qué es Postman Monitor?',
            options: [
                'Una herramienta para monitorear el rendimiento de la computadora',
                'Un servicio para ejecutar colecciones de forma programada',
                'Un plugin de navegador',
                'Una extensión de Chrome'
            ],
            correctAnswer: 1,
            explanation: 'Postman Monitor permite ejecutar colecciones de forma programada para monitoreo continuo de APIs.',
            multipleAnswers: false
        },
        {
            id: 20,
            question: '¿Cómo se puede documentar una API en Postman?',
            options: [
                'Agregando descripciones a las requests',
                'Usando Postman Documentation',
                'Generando documentación automática desde colecciones',
                'Todas las anteriores'
            ],
            correctAnswer: 3,
            explanation: 'Postman permite documentar APIs agregando descripciones, usando la herramienta de documentación y generándola automáticamente.',
            multipleAnswers: false
        },
        {
            id: 21,
            question: '¿Cuáles comandos de Newman son válidos?',
            options: [
                'newman run collection.json',
                'newman run collection.json -e environment.json',
                'newman run collection.json --reporters cli,html',
                'newman run collection.json --iteration-data data.csv'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Todos son comandos válidos de Newman para ejecutar colecciones con diferentes configuraciones.',
            multipleAnswers: true
        },
        {
            id: 22,
            question: '¿Qué es pm.sendRequest()?',
            options: [
                'Envía la request actual',
                'Permite enviar una request asíncrona desde un script',
                'Reenvía la última request',
                'Cancela la request actual'
            ],
            correctAnswer: 1,
            explanation: 'pm.sendRequest() permite enviar requests HTTP adicionales de forma asíncrona desde dentro de scripts.',
            multipleAnswers: false
        },
        {
            id: 23,
            question: '¿Cómo se puede validar un schema JSON en Postman?',
            options: [
                'pm.response.to.have.jsonSchema(schema)',
                'Usando la librería tv4 incluida en Postman',
                'pm.expect(pm.response.json()).to.matchSchema(schema)',
                'No es posible validar schemas'
            ],
            correctAnswer: 1,
            explanation: 'Postman incluye la librería tv4 para validación de JSON Schema.',
            multipleAnswers: false
        },
        {
            id: 24,
            question: '¿Cuáles son formas de compartir colecciones?',
            options: [
                'Exportar como archivo JSON',
                'Compartir link via Postman Cloud',
                'Publicar en Postman API Network',
                'Enviar por Git'
            ],
            correctAnswer: [0, 1, 2],
            explanation: 'Las colecciones se pueden exportar como JSON, compartir via link en Postman Cloud, o publicar en API Network. No hay integración nativa con Git.',
            multipleAnswers: true
        },
        {
            id: 25,
            question: '¿Qué hace postman.setNextRequest()?',
            options: [
                'Programa la próxima ejecución',
                'Establece qué request ejecutar a continuación en un workflow',
                'Configura el siguiente environment',
                'Crea una nueva request'
            ],
            correctAnswer: 1,
            explanation: 'postman.setNextRequest() controla el flujo de ejecución especificando qué request ejecutar a continuación.',
            multipleAnswers: false
        }
    ]
};
