import getData from "./getData.js";

(async () => {
    try {
        console.log(await getData(1));
    } catch(e){
        console.log("error: ", e);
    }
})();