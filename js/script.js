 /* Arrow Function, age da mesma maneira que um Function, mas é mais prático */
var toggleMode = () => {
    const html = document.documentElement;

    html.classList.toggle("light");

    const isLight = html.classList.contains("light");
    const srcValue = isLight ? "../img/avatar2.jpg" : "../img/avatar.jpg";
    const altValue = isLight ? "Imagem de perfil no modo claro, com um avatar de Among Us na cor preta e fundo amarelo." : "Imagem de perfil no modo escuro, com um avatar de Among Us na cor roxa e fundo amarelo.";

    document.querySelector("#profile img").setAttribute("src",srcValue);
    document.querySelector("#profile img").setAttribute("alt",altValue);
}