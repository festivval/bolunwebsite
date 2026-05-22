const prefersDarkColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

if (localStorage.getItem("theme") === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
} else if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    const target = prefersDarkColorScheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem("theme", target);
}

$(document).ready(load);

//setup listener for changing themes
function load() {
    const toggleSwitch = document.getElementById("colors-toggle");
    toggleSwitch.addEventListener('click', switchTheme);
}

//function that changes the theme, and sets a localStorage variable to track the theme between page loads
function switchTheme() {
    const target = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem("theme", target);
}