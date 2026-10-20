let name = document.querySelector(".name");
let character = document.querySelector(".character");

console.log(name);
console.log(character);
console.log("LET'S PLAY GTA VI!")

function chooseCharacter(characterName, characterImage, characterColor) {
    name.innerHTML = characterName;
    character.src = characterImage;
    name.style.color = characterColor;
}

function readImage(photoInput) {
    let reader = new FileReader() //= Create a new FileReader object
    reader.readAsDataURL(photoInput.files[0]) //= Read the image file as a data URL
    reader.onload = async function() {
   let draw = await puter.ai.txt2img("Transforme a pessoa desta foto em um personagem de videogame: contorno preto grosso, cores vivas, meio corpo, mantendo o rosto parecido. Fundo totalmente transparente: sem cenário, sem chão e sem sombra.",
            {
                model:"replicate:openai/gpt-image-2.5-flare",
                provider:"openai",
                input_image: reader.result,
                quality: "medium",
                providerOptions: { background: "transparent" }
            })

            chooseCharacter('You', draw, '#d9be0e')
    }

}

