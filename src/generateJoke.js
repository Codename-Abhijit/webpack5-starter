import axios from "axios";

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    };

    axios.get('https://icanhazdadjoke.com/', config)
        .then((res) => {
            console.log("🚀 ~ .then ~ res:", res);
            document.getElementById('joke').innerHTML = res.data.joke;
        });

}

export default generateJoke;