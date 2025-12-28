const users = [
    {
        name: "Evelyn",
        secondName: "Mortimer",
        email: "evelyn.mor@microsoft.com",
        age: 30,
        country: "USA",
        city: "Jacksonville",
        isActive: true
    },

    {
        name: "Eberardo",
        secondName: "Cocci",
        email: "Eberardo@gmail.com",
        age: 24,
        country: "Italy",
        city: "Florence",
        isActive: false
    },

    {
        name: "Frédérique",
        secondName: "Abril",
        email: "frédérique.abril@mailchimp.com",
        age: 37,
        country: "France",
        city: "Marseille",
        isActive: true
    },
]

for (const { name, secondName, email, age, country, city, isActive } of users) {
    console.log(`===============================================`);
    console.log(`User: ${name} ${secondName}`);
    console.log(`Email: ${email}`);
    console.log(`Ager: ${age}`);
    console.log(`Place of residence: ${city}, ${country}`);
    console.log(`Status: ${isActive ? "Active" : "Not active"}`);
}