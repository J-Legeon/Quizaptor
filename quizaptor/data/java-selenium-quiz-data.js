// java-selenium-quiz-data.js - Java con Selenium Quiz

const javaSeleniumQuizData = {
    id: 'java-selenium',
    title: 'Java con Selenium WebDriver',
    description: 'Quiz sobre integración de Java con Selenium para automatización',
    timeLimit: 50,
    passingScore: 70,
    questions: [
        {
            id: 1,
            question: '¿Cuál es la forma correcta de inicializar ChromeDriver en Java?',
            options: [
                'WebDriver driver = new ChromeDriver();',
                'ChromeDriver driver = new WebDriver();',
                'Driver driver = new Chrome();',
                'Browser driver = new ChromeDriver();'
            ],
            correctAnswer: 0,
            explanation: 'WebDriver driver = new ChromeDriver(); es la forma correcta. WebDriver es la interfaz y ChromeDriver la implementación.',
            multipleAnswers: false
        },
        {
            id: 2,
            question: '¿Cuáles son imports necesarios para usar Selenium en Java?',
            options: [
                'org.openqa.selenium.WebDriver',
                'org.openqa.selenium.chrome.ChromeDriver',
                'org.openqa.selenium.By',
                'org.openqa.selenium.WebElement'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Todos son imports comunes para trabajar con Selenium WebDriver en Java.',
            multipleAnswers: true
        },
        {
            id: 3,
            question: '¿Cómo se configura la ubicación del ChromeDriver?',
            options: [
                'System.setProperty("webdriver.chrome.driver", "path/to/chromedriver")',
                'WebDriverManager.chromedriver().setup()',
                'Agregando chromedriver al PATH del sistema',
                'Todas las anteriores'
            ],
            correctAnswer: 3,
            explanation: 'Se puede configurar con System.setProperty, usando WebDriverManager, o agregándolo al PATH.',
            multipleAnswers: false
        },
        {
            id: 4,
            question: '¿Cuál es la diferencia entre findElement y findElements?',
            options: [
                'findElement retorna un WebElement, findElements retorna List<WebElement>',
                'findElement lanza excepción si no encuentra, findElements retorna lista vacía',
                'Ambas diferencias son correctas',
                'No hay diferencia'
            ],
            correctAnswer: 2,
            explanation: 'findElement retorna un solo WebElement y lanza NoSuchElementException; findElements retorna List y lista vacía si no encuentra.',
            multipleAnswers: false
        },
        {
            id: 5,
            question: '¿Cuáles son formas de configurar esperas implícitas?',
            options: [
                'driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10))',
                'driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)',
                'new WebDriverWait(driver, 10)',
                'Thread.sleep(10000)'
            ],
            correctAnswer: [0, 1],
            explanation: 'implicitlyWait se configura con Duration o TimeUnit. WebDriverWait es para esperas explícitas, Thread.sleep no es recomendado.',
            multipleAnswers: true
        },
        {
            id: 6,
            question: '¿Cómo se crea una espera explícita para un elemento clickeable?',
            options: [
                'WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10)); wait.until(ExpectedConditions.elementToBeClickable(locator));',
                'driver.wait(10).until(clickable(element));',
                'ImplicitWait.elementClickable(element, 10);',
                'driver.explicitWait(element, 10);'
            ],
            correctAnswer: 0,
            explanation: 'Se usa WebDriverWait con ExpectedConditions.elementToBeClickable() para esperar que un elemento sea clickeable.',
            multipleAnswers: false
        },
        {
            id: 7,
            question: '¿Cuáles son métodos de la clase Actions?',
            options: [
                'moveToElement()',
                'clickAndHold()',
                'dragAndDrop()',
                'build().perform()'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Actions permite acciones complejas. build().perform() ejecuta la cadena de acciones.',
            multipleAnswers: true
        },
        {
            id: 8,
            question: '¿Cómo se ejecuta JavaScript en Selenium con Java?',
            options: [
                'JavascriptExecutor js = (JavascriptExecutor) driver; js.executeScript("código");',
                'driver.executeJavaScript("código");',
                'driver.runScript("código");',
                'JavaScript.execute(driver, "código");'
            ],
            correctAnswer: 0,
            explanation: 'Se castea el driver a JavascriptExecutor y se usa executeScript().',
            multipleAnswers: false
        },
        {
            id: 9,
            question: '¿Cuáles son opciones de ChromeOptions?',
            options: [
                'addArguments("--headless")',
                'setHeadless(true)',
                'addArguments("--disable-gpu")',
                'setPageLoadStrategy(PageLoadStrategy.NORMAL)'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'ChromeOptions permite configurar argumentos del navegador, modo headless, estrategia de carga, etc.',
            multipleAnswers: true
        },
        {
            id: 10,
            question: '¿Cómo se toma un screenshot en Selenium con Java?',
            options: [
                'File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);',
                'driver.takeScreenshot();',
                'Screenshot.capture(driver);',
                'driver.getScreenshot();'
            ],
            correctAnswer: 0,
            explanation: 'Se castea el driver a TakesScreenshot y se usa getScreenshotAs(OutputType.FILE).',
            multipleAnswers: false
        },
        {
            id: 11,
            question: '¿Cuáles son anotaciones de TestNG para Selenium?',
            options: [
                '@BeforeClass / @AfterClass',
                '@BeforeMethod / @AfterMethod',
                '@Test',
                '@DataProvider'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'TestNG proporciona anotaciones para setup/teardown y parametrización de tests.',
            multipleAnswers: true
        },
        {
            id: 12,
            question: '¿Cómo se trabaja con Select en Selenium Java?',
            options: [
                'Select dropdown = new Select(driver.findElement(By.id("select")));',
                'dropdown.selectByVisibleText("Option");',
                'dropdown.selectByValue("value");',
                'dropdown.selectByIndex(0);'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'La clase Select permite seleccionar opciones de dropdown por texto, valor o índice.',
            multipleAnswers: true
        },
        {
            id: 13,
            question: '¿Qué es Page Factory en Selenium?',
            options: [
                'Una implementación de Page Object Model',
                'Usa @FindBy annotations',
                'Inicializa elementos con PageFactory.initElements()',
                'Todas las anteriores'
            ],
            correctAnswer: 3,
            explanation: 'Page Factory es una implementación de POM que usa @FindBy y PageFactory.initElements().',
            multipleAnswers: false
        },
        {
            id: 14,
            question: '¿Cuáles son estrategias de @FindBy?',
            options: [
                '@FindBy(id = "elementId")',
                '@FindBy(xpath = "//div[@class=\'test\']")',
                '@FindBy(css = ".className")',
                '@FindBy(name = "elementName")'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: '@FindBy soporta múltiples estrategias: id, xpath, css, name, className, linkText, etc.',
            multipleAnswers: true
        },
        {
            id: 15,
            question: '¿Cómo se maneja un Alert en Java con Selenium?',
            options: [
                'Alert alert = driver.switchTo().alert(); alert.accept();',
                'driver.alert().accept();',
                'AlertHandler.accept(driver);',
                'driver.manage().alert().accept();'
            ],
            correctAnswer: 0,
            explanation: 'Se usa driver.switchTo().alert() y luego accept(), dismiss() o getText().',
            multipleAnswers: false
        },
        {
            id: 16,
            question: '¿Cuáles son métodos para manejar ventanas?',
            options: [
                'driver.getWindowHandle()',
                'driver.getWindowHandles()',
                'driver.switchTo().window(handle)',
                'driver.close() y driver.quit()'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'getWindowHandle/s() obtiene handles, switchTo().window() cambia ventana, close/quit() las cierra.',
            multipleAnswers: true
        },
        {
            id: 17,
            question: '¿Cuál es la diferencia entre driver.close() y driver.quit()?',
            options: [
                'close() cierra la ventana actual, quit() cierra todas las ventanas y termina la sesión',
                'quit() es más rápido que close()',
                'close() libera recursos, quit() no',
                'No hay diferencia'
            ],
            correctAnswer: 0,
            explanation: 'close() cierra solo la ventana actual; quit() cierra todas las ventanas y termina la sesión del driver.',
            multipleAnswers: false
        },
        {
            id: 18,
            question: '¿Cuáles son mejores prácticas en Selenium con Java?',
            options: [
                'Usar Page Object Model',
                'Implementar esperas explícitas',
                'Cerrar driver con @AfterMethod o try-finally',
                'Usar WebDriverManager para gestionar drivers'
            ],
            correctAnswer: [0, 1, 2, 3],
            explanation: 'Todas son mejores prácticas para tests mantenibles, estables y fáciles de configurar.',
            multipleAnswers: true
        },
        {
            id: 19,
            question: '¿Cómo se crea un custom ExpectedCondition?',
            options: [
                'Implementar ExpectedCondition<T>',
                'Sobrescribir el método apply()',
                'Retornar el valor esperado o null',
                'Todas las anteriores'
            ],
            correctAnswer: 3,
            explanation: 'Se implementa ExpectedCondition<T>, se sobrescribe apply() y se retorna el valor o null.',
            multipleAnswers: false
        },
        {
            id: 20,
            question: '¿Cuáles son frameworks de testing con Selenium Java?',
            options: [
                'TestNG',
                'JUnit',
                'Cucumber',
                'Todas las anteriores'
            ],
            correctAnswer: 3,
            explanation: 'TestNG, JUnit y Cucumber son frameworks populares que se integran con Selenium.',
            multipleAnswers: false
        }
    ]
};
