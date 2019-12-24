const express = require("express");

const app = express();
const port = 3001;

function promiseTimer(msg, time) {
    return new Promise((((resolve, reject) => {
        setTimeout(() => {
            console.log(msg);
            resolve("anything");
        }, time);
    })));
}


// setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//         setTimeout(() => {
//             console.log("3");
//             setTimeout(() => {
//                 console.log("4");
//                 setTimeout(() => {
//                     console.log("5");
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 3000);

// setTimeout(() => {
//     promiseTimer("1", 2000)
//         .then(() => promiseTimer("2", 2000))
//         .then(() => promiseTimer("3", 2000))
//         .then(() => promiseTimer("4", 2000))
//         .then(() => promiseTimer("5", 2000));


//     // setTimeout(() => {
//     //     console.log("2");
//     //     setTimeout(() => {
//     //         console.log("3");
//     //         setTimeout(() => {
//     //             console.log("4");
//     //             setTimeout(() => {
//     //                 console.log("5");
//     //             }, 2000);
//     //         }, 2000);
//     //     }, 2000);
//     // }, 2000);
// }, 3000);

setTimeout(async () => {
    await promiseTimer("1", 2000);
    await promiseTimer("2", 2000);
    await promiseTimer("3", 2000);
    await promiseTimer("4", 2000);
    await promiseTimer("5", 2000);
}, 3000);

console.log("Print first");

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
