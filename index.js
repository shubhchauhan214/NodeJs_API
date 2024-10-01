const express = require('express');
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//Routes

app.get("/api/users", (req, res) =>{
    return res.json(users);
});

// app.get("/users", (req, res) => {
//     const html = `
//     <ul>
//       ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>`;
//     res.send(html);
// });

app.get("/api/users/:id", (req, res) =>{
    const id = Number(req.params.id);                             //fetch id
    const user = users.find((user)=> user.id ===id);              //find id from mock_data.json
    return res.json(user);
});


app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));