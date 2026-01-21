function textOutput(text) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, 1000);
    });
}

textOutput("Привіт").then((data) => {
    console.log("Результат проміса:", data);
});