class TextService {
    textOutput(text, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(text);
            }, delay);
        });
    }
}

const textService = new TextService();

textService.textOutput("Привіт", 1000)
    .then((data) => {
        console.log("Результат проміса:", data);
    })
    .catch((error) => {
        console.error("Помилка:", error);
    });
