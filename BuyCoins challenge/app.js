const fetch = require("node-fetch");
require("dotenv").config();
var query = `query {
    viewer {
      name
       repositories(last: 4) {
         nodes {
           name
          description
          primaryLanguage{
            name
          }
          forkCount
          updatedAt
          stargazerCount
         }
       }
     }
  }`;

const ul = document.getElementById("text__heading");

fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: process.env.TOKEN,
  },
  body: JSON.stringify({ query }),
})
  .then((r) => r.json())
  .then((dta) =>
    console.log(
      dta.data.viewer.repositories.nodes.map((el) => (ul.innerHTML = el.name))
    )
  )
  .catch((err) => console.log(err));

// setTimeout(() => {
//   console.log(getdata());
// }, 10000);

function changeText() {
  document.getElementById("text__heading").innerHTML = "changed text";
}
changeText();
