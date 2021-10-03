const pCard = document.querySelector('[data-card]');
const pNombre = document.querySelector('[data-name]');
const pImg = document.querySelector('[data-img]');
const pImgContainer = document.querySelector('[data-img-container]');
const pTipos = document.querySelector('[data-types]');
const pBase = document.querySelector('[data-base]');
const pAltura = document.querySelector('[data-altura]');
const pPeso = document.querySelector('[data-peso]');
const pDescripcion = document.querySelector('[data-info]');
const pId = document.querySelector('[data-id]');

const BuscarPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`http://localhost:3000/pokemon-informations`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ pokemon: value.toLowerCase() })
        })
        .then(data => data.json())
        .then(response => DatosPokemon(response))
        .catch(err => NoEncontrado())
}

const DatosPokemon = data => {
    const info = data.replies;
    pNombre.textContent = info[pDatos.nombre].content;
    pImg.setAttribute('src', info[pDatos.imagen].content);
    pId.textContent = info[pDatos.id].content;
    ColorImagen();
    DescripcionPokemon(info[pDatos.info].content);
    TiposPokemon(info[pDatos.tipo].content);
    Base_ExpPokemon(info[pDatos.experiencia].content);
    AlturaPokemon(info[pDatos.altura].content);
    PesoPokemon(info[pDatos.peso].content);
}

const ColorImagen = () => {
    pImg.style.background = `radial-gradient(DarkSalmon,Teal 33%)`;
    pImg.style.backgroundSize = ' 5px 5px';
}

const TiposPokemon = tipo => {
    pTipos.innerHTML = '';
    const typeTextElement = document.createElement("div");
    typeTextElement.textContent = tipo;
    pTipos.appendChild(typeTextElement);
}

const Base_ExpPokemon = experiencia => {
    pBase.innerHTML = '';
    const baseTextElement = document.createElement("div");
    baseTextElement.textContent = experiencia;
    pBase.appendChild(baseTextElement);
}

const AlturaPokemon = altura => {
    pAltura.innerHTML = '';
    const altTextElement = document.createElement("div");
    altTextElement.textContent = altura;
    pAltura.appendChild(altTextElement);
}

const PesoPokemon = peso => {
    pPeso.innerHTML = '';
    const pesoTextElement = document.createElement("div");
    pesoTextElement.textContent = peso;
    pPeso.appendChild(pesoTextElement);
}

const DescripcionPokemon = info => {
    pDescripcion.innerHTML = '';
    const infoTextElement = document.createElement("div");
    infoTextElement.textContent = info;
    pDescripcion.appendChild(infoTextElement);
}


const NoEncontrado = () => {
    pNombre.textContent = 'No encontrado';
    pImg.setAttribute('src', '/img/bola.png');

    pTipos.innerHTML = '';
    pDescripcion.innerHTML = '';
    pAltura.innerHTML = '';
    pBase.innerHTML = '';
    pPeso.innerHTML = '';
    pId.textContent = '';
}

const pDatos = {
    id: 0,
    nombre: 1,
    tipo: 2,
    altura: 3,
    peso: 4,
    experiencia: 5,
    info: 6,
    imagen: 7,

}