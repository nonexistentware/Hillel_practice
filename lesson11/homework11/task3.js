async function getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
        throw new Error("Todo request failed");
    }

    const todo = await response.json();
    return todo;
}

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
        throw new Error("User request failed");
    }

    const user = await response.json();
    return user;
}

async function runAll() {
    try {
        const allPromisesResult = await Promise.all([
            getTodo(),
            getUser()
        ]);

        const todo = allPromisesResult[0];
        const user = allPromisesResult[1];

        console.log("Promise.all результат:");
        console.log("Todo:", todo);
        console.log("User:", user);
    } catch (error) {
        console.error("Promise.all помилка:", error.message);
    }
}

runAll();

async function runRace() {
    try {
        const racePromisesResult = await Promise.race([
            getTodo(),
            getUser()
        ]);

        console.log("Promise.race результат:");
        console.log(racePromisesResult);
    } catch (error) {
        console.error("Promise.race помилка:", error.message);
    }
}

runRace();
