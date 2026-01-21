function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Todo request failed");
            }
            return response.json();
        });
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error("User request failed");
            }
            return response.json();
        });
}

const allPromisesResult = Promise.all([
    getTodo(),
    getUser()
]);

allPromisesResult
    .then((results) => {
        const todo = results[0];
        const user = results[1];

        console.log("Promise.all результат:");
        console.log("Todo:", todo);
        console.log("User:", user);
    })
    .catch((error) => {
        console.error("Promise.all помилка:", error.message);
    });


    const racePromisesResult = Promise.race([
    getTodo(),
    getUser()
]);

racePromisesResult
    .then((result) => {
        console.log("Promise.race результат:");
        console.log(result);
    })
    .catch((error) => {
        console.error("Promise.race помилка:", error.message);
    });
