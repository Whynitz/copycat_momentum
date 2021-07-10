const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    paintGreetings(username);
}

function onReSubmit(event) {
    const reInputForm = document.querySelector("#reinput-form");
    const reInput = reInputForm.querySelector("input");
    const reName = reInput.value;
    const name = document.querySelector("#name");
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, reName);
    reInputForm.remove();
    name.innerText = reName;
}

function paintGreetings(username) {
    const hello = document.createElement("span");
    const name = document.createElement("span");
    const punctuation = document.createElement("span");
    hello.innerText = "Hello, ";
    name.innerText = username;
    name.id = "name";
    punctuation.innerText = ".";
    name.ondblclick = function() {
        const val = this.innerHTML;
        const form = document.createElement("form");
		const input = document.createElement("input");
        form.id = "reinput-form";
        form.appendChild(input);
        form.addEventListener("submit", onReSubmit);

        input.id = "name-reinput";
		input.value=val;
        input.style.width = (input.value.length + 1) + 'ch';
        input.onkeydown = function() {
            this.style.width = (this.value.length+1) + 'ch';
        };

		this.innerHTML="";
		this.appendChild(form);
		input.focus();
    }
    greeting.appendChild(hello);
    greeting.appendChild(name);
    greeting.appendChild(punctuation);
    /*
    greeting.innerText = `Hello, ${username}.\n Keep going!`;
    */
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show greeting
    paintGreetings(savedUsername);
}