// const url = fetch("http://www.weather.com");
// // console.log(url);
//
// url.then(res => console.log(res));

const url = "https://api.sampleapis.com/coffee/hot";
async function fetchData() {
    const res = await fetch(url);
    let text = await res.json();
    // console.log(text);
    console.log(JSON.stringify(text, null, 15));

    // console.log(JSON.parse(text));


    // JSON.parse(data)
    console.log("test 1")

}
fetchData();

// async function statusCheck(res) {
//     if (!res.ok) {
//         throw new Error(await res.text());
//     }
//     return res;
// }


// fetch("https://api.sampleapis.com/coffee/hot")
//     .then(resp => resp.json())
//     .then(data => console.log(data[0].title))
//     .catch(err => console.log(err));