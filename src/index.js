import generateJoke from "./generateJoke";
import './styles/main.scss';
import Logo from './assets/logo-white.png';

const imgTag = document.getElementById('dummyImg');

imgTag.src = Logo;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.onclick = generateJoke;