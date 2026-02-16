// java-fundamentals-data.js - Java Fundamentals Quiz Questions

const javaFundamentalsQuizData = {
    id: 'java-fundamentals',
    title: 'Java Fundamentals',
    description: 'Quiz de fundamentos de Java para automatización de pruebas',
    timeLimit: 40, // minutes
    passingScore: 70, // percentage
    questions: [
        {
            id: 1,
            question: '¿Cuál es la diferencia principal entre JDK, JRE y JVM?',
            options: [
                'JDK incluye JRE y JVM, JRE incluye JVM, JVM ejecuta bytecode',
                'Son lo mismo, solo diferentes nombres',
                'JVM incluye JDK y JRE',
                'JRE es para desarrollo, JDK es para ejecución'
            ],
            correctAnswer: 0,
            explanation: 'JDK (Java Development Kit) incluye herramientas de desarrollo + JRE. JRE (Java Runtime Environment) incluye bibliotecas + JVM. JVM (Java Virtual Machine) ejecuta el bytecode.'
        },
        {
            id: 2,
            question: '¿Qué es correcto sobre las variables en Java?',
            options: [
                'Las variables locales se inicializan automáticamente',
                'Las variables de instancia deben inicializarse explícitamente',
                'Las variables de instancia se inicializan con valores por defecto',
                'Todas las variables deben inicializarse manualmente'
            ],
            correctAnswer: 2,
            explanation: 'Las variables de instancia se inicializan automáticamente con valores por defecto (0, false, null), pero las variables locales deben inicializarse explícitamente.'
        },
        {
            id: 3,
            question: '¿Cuál es el modificador de acceso más restrictivo en Java?',
            options: [
                'public',
                'protected',
                'default (package-private)',
                'private'
            ],
            correctAnswer: 3,
            explanation: 'private es el modificador más restrictivo, solo permite acceso dentro de la misma clase.'
        },
        {
            id: 4,
            question: '¿Qué palabra clave se usa para heredar de una clase en Java?',
            options: [
                'implements',
                'inherits',
                'extends',
                'super'
            ],
            correctAnswer: 2,
            explanation: 'extends se usa para heredar de una clase. implements se usa para implementar interfaces.'
        },
        {
            id: 5,
            question: '¿Cuántas clases puede extender una clase en Java?',
            options: [
                'Infinitas',
                'Dos',
                'Una',
                'Ninguna'
            ],
            correctAnswer: 2,
            explanation: 'Java solo permite herencia simple, una clase puede extender solo una clase padre (no hay herencia múltiple de clases).'
        },
        {
            id: 6,
            question: '¿Qué es el polimorfismo en Java?',
            options: [
                'La capacidad de crear múltiples clases',
                'La capacidad de un objeto de tomar múltiples formas',
                'El uso de múltiples constructores',
                'La herencia de múltiples interfaces'
            ],
            correctAnswer: 1,
            explanation: 'El polimorfismo permite que un objeto tome múltiples formas, típicamente a través de herencia o implementación de interfaces.'
        },
        {
            id: 7,
            question: '¿Cuál es la diferencia entre == y .equals() en Java?',
            options: [
                'No hay diferencia',
                '== compara referencias, .equals() compara contenido',
                '== compara contenido, .equals() compara referencias',
                'Solo se pueden usar con números'
            ],
            correctAnswer: 1,
            explanation: '== compara referencias de objetos (si apuntan al mismo objeto en memoria), mientras que .equals() compara el contenido de los objetos.'
        },
        {
            id: 8,
            question: '¿Qué es una interfaz en Java?',
            options: [
                'Una clase abstracta con todos los métodos implementados',
                'Un contrato que define métodos que una clase debe implementar',
                'Una clase que no puede tener métodos',
                'Una clase final que no puede heredarse'
            ],
            correctAnswer: 1,
            explanation: 'Una interfaz es un contrato que especifica qué métodos debe implementar una clase, sin proporcionar la implementación (antes de Java 8).'
        },
        {
            id: 9,
            question: '¿Qué palabra clave se usa para implementar una interfaz?',
            options: [
                'extends',
                'inherits',
                'implements',
                'uses'
            ],
            correctAnswer: 2,
            explanation: 'implements se usa para implementar interfaces, mientras que extends se usa para heredar de clases.'
        },
        {
            id: 10,
            question: '¿Cuántas interfaces puede implementar una clase en Java?',
            options: [
                'Solo una',
                'Dos',
                'Múltiples',
                'Ninguna'
            ],
            correctAnswer: 2,
            explanation: 'Una clase puede implementar múltiples interfaces, lo que compensa la falta de herencia múltiple en Java.'
        },
        {
            id: 11,
            question: '¿Qué es una clase abstracta?',
            options: [
                'Una clase que no puede tener métodos concretos',
                'Una clase que no puede ser instanciada y puede tener métodos abstractos',
                'Una clase final',
                'Una interfaz con implementación'
            ],
            correctAnswer: 1,
            explanation: 'Una clase abstracta no puede ser instanciada directamente y puede contener tanto métodos abstractos (sin implementación) como concretos (con implementación).'
        },
        {
            id: 12,
            question: '¿Qué es el encapsulamiento?',
            options: [
                'Ocultar la implementación y exponer solo lo necesario',
                'Crear múltiples clases',
                'Heredar de múltiples clases',
                'Usar solo métodos públicos'
            ],
            correctAnswer: 0,
            explanation: 'El encapsulamiento es el principio de ocultar los detalles de implementación y exponer solo lo necesario a través de métodos públicos (getters/setters).'
        },
        {
            id: 13,
            question: '¿Qué es un constructor en Java?',
            options: [
                'Un método que retorna void',
                'Un método especial que se llama al crear un objeto',
                'Un método estático',
                'Un método abstracto'
            ],
            correctAnswer: 1,
            explanation: 'Un constructor es un método especial con el mismo nombre que la clase, que se ejecuta automáticamente al crear una instancia del objeto.'
        },
        {
            id: 14,
            question: '¿Puede un constructor ser privado?',
            options: [
                'No, siempre debe ser público',
                'Sí, útil para patrones como Singleton',
                'Solo en clases abstractas',
                'Solo en interfaces'
            ],
            correctAnswer: 1,
            explanation: 'Sí, un constructor puede ser privado, lo cual es útil en patrones de diseño como Singleton para controlar la creación de instancias.'
        },
        {
            id: 15,
            question: '¿Qué es el método main() en Java?',
            options: [
                'Un método opcional',
                'El punto de entrada de la aplicación',
                'Un constructor especial',
                'Un método de instancia'
            ],
            correctAnswer: 1,
            explanation: 'El método main() es el punto de entrada de una aplicación Java, debe ser public static void main(String[] args).'
        },
        {
            id: 16,
            question: '¿Qué significa la palabra clave "static"?',
            options: [
                'El miembro pertenece a la clase, no a instancias',
                'El miembro no puede cambiar',
                'El miembro es privado',
                'El miembro es abstracto'
            ],
            correctAnswer: 0,
            explanation: 'static significa que el miembro (variable o método) pertenece a la clase en sí, no a instancias individuales de la clase.'
        },
        {
            id: 17,
            question: '¿Qué significa la palabra clave "final"?',
            options: [
                'Indica que es el último método',
                'Indica que no puede ser modificado/sobrescrito/heredado',
                'Indica que es estático',
                'Indica que es privado'
            ],
            correctAnswer: 1,
            explanation: 'final indica que una variable no puede cambiar, un método no puede sobrescribirse, o una clase no puede heredarse.'
        },
        {
            id: 18,
            question: '¿Qué es una excepción en Java?',
            options: [
                'Un error de sintaxis',
                'Un evento que interrumpe el flujo normal del programa',
                'Un método especial',
                'Una clase abstracta'
            ],
            correctAnswer: 1,
            explanation: 'Una excepción es un evento que ocurre durante la ejecución y que interrumpe el flujo normal del programa.'
        },
        {
            id: 19,
            question: '¿Cuál es la diferencia entre Exception y Error en Java?',
            options: [
                'No hay diferencia',
                'Exception es recuperable, Error generalmente no',
                'Error es recuperable, Exception no',
                'Solo Exception puede ser capturada'
            ],
            correctAnswer: 1,
            explanation: 'Exception representa condiciones que una aplicación puede capturar y manejar. Error representa problemas serios que generalmente no deberían ser capturados.'
        },
        {
            id: 20,
            question: '¿Qué hace el bloque try-catch?',
            options: [
                'Ejecuta código en paralelo',
                'Maneja excepciones que pueden ocurrir',
                'Crea un loop',
                'Define una clase'
            ],
            correctAnswer: 1,
            explanation: 'try-catch permite manejar excepciones: try contiene código que puede lanzar excepciones, catch las captura y maneja.'
        },
        {
            id: 21,
            question: '¿Qué es el bloque finally?',
            options: [
                'Se ejecuta solo si hay excepción',
                'Se ejecuta siempre, haya o no excepción',
                'Se ejecuta solo si no hay excepción',
                'Es lo mismo que catch'
            ],
            correctAnswer: 1,
            explanation: 'El bloque finally se ejecuta siempre, haya o no excepción, útil para liberar recursos como cerrar archivos o conexiones.'
        },
        {
            id: 22,
            question: '¿Qué colección en Java NO permite duplicados?',
            options: [
                'ArrayList',
                'LinkedList',
                'Set',
                'List'
            ],
            correctAnswer: 2,
            explanation: 'Set es una colección que no permite elementos duplicados, mientras que List (ArrayList, LinkedList) sí los permite.'
        },
        {
            id: 23,
            question: '¿Cuál es la diferencia entre ArrayList y LinkedList?',
            options: [
                'No hay diferencia',
                'ArrayList usa array dinámico, LinkedList usa nodos enlazados',
                'ArrayList es más lenta para acceso aleatorio',
                'LinkedList no puede almacenar objetos'
            ],
            correctAnswer: 1,
            explanation: 'ArrayList usa un array dinámico (acceso rápido por índice), LinkedList usa nodos doblemente enlazados (inserción/eliminación rápida).'
        },
        {
            id: 24,
            question: '¿Qué es un HashMap en Java?',
            options: [
                'Una lista ordenada',
                'Una colección de pares clave-valor',
                'Un array de objetos',
                'Una interfaz'
            ],
            correctAnswer: 1,
            explanation: 'HashMap es una estructura de datos que almacena pares clave-valor, permitiendo búsqueda rápida por clave.'
        },
        {
            id: 25,
            question: '¿Qué es el método toString()?',
            options: [
                'Convierte números a String',
                'Retorna una representación en String del objeto',
                'Convierte String a Object',
                'Es un método estático'
            ],
            correctAnswer: 1,
            explanation: 'toString() es un método heredado de Object que retorna una representación en String del objeto, útil para debugging.'
        },
        {
            id: 26,
            question: '¿Qué es la sobrecarga de métodos (overloading)?',
            options: [
                'Tener múltiples métodos con el mismo nombre pero diferentes parámetros',
                'Redefinir un método de la clase padre',
                'Crear métodos estáticos',
                'Usar el mismo método en múltiples clases'
            ],
            correctAnswer: 0,
            explanation: 'Sobrecarga (overloading) es tener múltiples métodos con el mismo nombre pero diferentes firmas (número o tipo de parámetros) en la misma clase.'
        },
        {
            id: 27,
            question: '¿Qué es la sobreescritura de métodos (overriding)?',
            options: [
                'Crear métodos con el mismo nombre en la misma clase',
                'Redefinir un método heredado de la clase padre',
                'Eliminar un método',
                'Hacer un método estático'
            ],
            correctAnswer: 1,
            explanation: 'Sobreescritura (overriding) es redefinir un método heredado de la clase padre en la clase hija con la misma firma.'
        },
        {
            id: 28,
            question: '¿Qué anotación se usa para indicar que un método sobrescribe otro?',
            options: [
                '@Overload',
                '@Override',
                '@Inherit',
                '@Super'
            ],
            correctAnswer: 1,
            explanation: '@Override es una anotación que indica que un método sobrescribe un método de la clase padre, ayuda a prevenir errores.'
        },
        {
            id: 29,
            question: '¿Qué es un String inmutable en Java?',
            options: [
                'Un String que puede modificarse',
                'Un String que no puede modificarse después de crearse',
                'Un String vacío',
                'Un String nulo'
            ],
            correctAnswer: 1,
            explanation: 'Los Strings en Java son inmutables, una vez creados no pueden modificarse. Cualquier "modificación" crea un nuevo String.'
        },
        {
            id: 30,
            question: '¿Para qué se usa StringBuilder?',
            options: [
                'Para crear Strings inmutables',
                'Para concatenar Strings de forma eficiente (mutables)',
                'Para convertir números a String',
                'Es lo mismo que String'
            ],
            correctAnswer: 1,
            explanation: 'StringBuilder es una clase mutable que permite concatenar y modificar Strings de forma eficiente, evitando crear múltiples objetos String.'
        }
    ]
};