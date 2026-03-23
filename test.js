// const getData = () => {
//     setTimeout(() => {
//         console.log("Data loaded");
//     }, 2000);
// }

// const run = () => {
//     const result = getData();
//     console.log("Finished");
// }

// run();

const getData = () => {
    return new Promise((done) => {
        setTimeout(() => {
            done("Data loaded");
        }, 2000);
    });
}

const run = async () => {
    const result = await getData();
    console.log(result);
    console.log("Finished");
}

run();