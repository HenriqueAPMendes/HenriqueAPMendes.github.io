const data = {
    "pt": {
        home: "Início",
        aboutMe: "Sobre Mim",
        projects: "Projetos",
        contact: "Contato",
        nav: '<li><a href="#home">Início</a></li><li><a href="#about-me">Sobre mim<a></li><li><a href="#projects">Projetos</a></li><li><a href="#contact">Contato</a></li> ',
        home: "<p>Olá, sou o Henrique.</p> <p> Sou desenvolvedor e atualmente trabalho com as seguintes tecnologias: </p>",
        others: "Outros",
        about: "<p>Cursei meu ensino Fundamental e Médio no Colégio da Polícia Militar do Paraná (CPMPR), em Curitiba, Brasil. </p><p>Atualmente cursando Engenharia de Computação na Universidade Tecnológica Federal do Paraná (UTFPR).</p><p> Sempre fui apaixonado por tecnologia e aprender a construir coisas.</p>",
        cards: ["Jogo em C++",
            "Em breve",
            "Em breve",
            "Em breve"
        ],
        submit: "Enviar",
        placeholders: [
            "Seu nome",
            "Seu e-mail",
            "Assunto",
            "Mensagem"
        ],
        sourceCode: "Saiba mais"
    },
    "en": {
        home: "Home",
        aboutMe: "About me",
        projects: "Projects",
        contact: "Contact",
        nav: '<li><a href="#home">Home</a></li><li><a href="#about-me">About me<a></li><li><a href="#projects">Projects</a></li><li><a href="#contact">Contact</a></li>',

        home: "<p>Hello, I'm Henrique.</p> <p>I'm a software developer currently working with these technologies: </p>",
        others: "Others",
        about: " <p>I attended elementary and high school at Colégio da Polícia Militar do Paraná (CPMPR), in Curitiba, Brazil. </p> <p> Nowadays, I'm studying Computer Engineering at Universidade Tecnológica Federal do Paraná (UTFPR). </p><p> I've always been in love with technology and learning to build things. </p>",
        cards: ["Game in C++",
            "Coming soon",
            "Coming soon",
            "Coming soon"
        ],
        submit: "Submit",
        placeholders: [
            "Your name",
            "Your e-mail",
            "Subject",
            "Message"
        ],
        sourceCode: "Read more"
    }
};

const switcher = document.querySelector('.switcher');
const homeText = document.querySelector('.home-text');
const aboutMeText = document.querySelector('.about-me-text');
const nav = document.querySelector('nav ul');
const readMoreBtns = document.querySelectorAll('.saiba-mais');
const sourceCodeBtns = document.querySelectorAll('.card button a');
const aboutMeTitle = document.querySelector('#about-me h2');
const projectsTitle = document.querySelector('#projects h2');
const contactTitle = document.querySelector('#contact h2');
const placeholders = document.querySelectorAll('.input-box .input ~ span');
const submitBtn = document.querySelector('form button');
const cardTitles = document.querySelectorAll('.card h3');
const others = document.querySelector('.others-stack h3');

export function listenSwitch() {
    switcher.addEventListener('click', () => {
        const lang = switcher.checked ? "pt" : "en";

        homeText.innerHTML = data[lang].home;
        aboutMeText.innerHTML = data[lang].about;

        aboutMeTitle.innerText = data[lang].aboutMe.toUpperCase();
        projectsTitle.innerText = data[lang].projects.toUpperCase();
        contactTitle.innerText = data[lang].contact.toUpperCase();

        nav.innerHTML = data[lang].nav;
        readMoreBtns.forEach(el => {
            el.innerHTML = data[lang].readMore;
        });
        sourceCodeBtns.forEach(el => {
            el.innerHTML = data[lang].sourceCode;
        });
        placeholders.forEach((el, i) => {
            el.innerHTML = data[lang].placeholders[i];
        });
        submitBtn.innerHTML = data[lang].submit;
        cardTitles.forEach((el, i) => {
            el.innerHTML = data[lang].cards[i];
        });
        others.innerHTML = data[lang].others;
    });
}