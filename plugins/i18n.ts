import { createI18n } from 'vue-i18n'
import { defineNuxtPlugin } from '#app'
const netoImg = '/img/neto.jpg'
const maiconImg = '/img/maicon.jpg'
const fileImg = '/img/file.jpeg'
const araujoImg = '/img/araujo.jpg'

export default defineNuxtPlugin((nuxtApp) => {
     
     const i18n = createI18n({
          legacy: false,           // permite API composition
          locale: 'pt',            // idioma padrão
          fallbackLocale: 'pt',    // fallback
          messages: {
               pt: {
                    welcome: 'Olá, eu sou',
                    descriptionWelcome: 'Desenvolvedor <strong>fullstack</strong> e entusiasta de <strong>cibersegurança</strong>. Crio sites, APIs e bots automatizados com <strong>foco em performance e confiabilidade</strong>, enquanto aprofundo meus conhecimentos em segurança digital para construir soluções cada vez mais seguras.',
                    buttonWelcome: 'Baixar currículo',
                    about: 'Sobre mim',
                    aboutDescription: `Sou <strong>Lucas Waldes</strong>, desenvolvedor fullstack focado em soluções web, automações e segurança da informação. <strong>Minha jornada começou no Instituto PROA</strong>, onde aprendi lógica de programação e boas práticas essenciais para criar softwares confiáveis.
<br><br>
Atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong> na FATEC Zona Leste, desenvolvendo habilidades técnicas e de gestão para criação e manutenção de sistemas, automações e soluções digitais.
<br><br>
Tenho experiência no desenvolvimento de sites responsivos, APIs RESTful e bots personalizados em Node.js, e <strong>conhecimento em frameworks</strong> backend como Django, Flask e FastAPI e frontend como Angular, React e Nuxt. Sempre busco entregar soluções eficientes, escaláveis e seguras, unindo inovação e proteção de dados.`,
                    service: 'Serviços que eu ofereço',
                    serviceDescription: 'Transformo ideias em soluções digitais funcionais e escaláveis.',
                    servicesList: {
                         websites: {
                              title: 'Sites Profissionais',
                              items: [
                                   'Criação de sites modernos e responsivos',
                                   'Otimização para conversão e performance',
                                   'Proteção de dados e boas práticas de segurança'
                              ]
                         },
                         apis: {
                              title: 'APIs e Integrações',
                              items: [
                                   'Desenvolvimento de APIs robustas',
                                   'Integração com sistemas externos (pagamentos, ERPs, CRMs)',
                                   'Autenticação segura e criptografia de dados'
                              ]
                         },
                         bots: {
                              title: 'Bots<br>Inteligentes',
                              items: [
                                   'Bots exclusivos para Discord e WhatsApp',
                                   'Comandos personalizados e automações',
                                   'Segurança para evitar falhas ou uso indevido'
                              ]
                         },
                         security: {
                              title: 'Segurança da Informação',
                              items: [
                                   'Implementação de autenticação segura e controle de acesso',
                                   'Análise de vulnerabilidades em sistemas e sites',
                                   'Relatórios com recomendações práticas para melhorar a proteção digital'
                              ]
                         }
                    },
                    contractMeButton: "Me contrate",
                    educationTitle: "Educacaçao",
                    emailButton: "Enviar e-mail",
                    educationList: [
                         { title: 'Técnico em Desenvolvimento de Sistemas', institution: 'Instituto Proa & Senac', date: 'fev 2022 - jul 2022', description: 'Curso técnico focado em desenvolvimento web, lógica de programação e boas práticas de software.' },
                         { title: 'Análise e Desenvolvimento de Sistemas', institution: 'FATEC Zona Leste', date: 'fev 2024 - Presente', description: 'Graduação em andamento, desenvolvendo habilidades técnicas e de gestão para criação e manutenção de sistemas, automações e soluções digitais.' }
                    ],
                    experienceTitle: "Experiência",
                    experienceList: [
                         { title: 'Desenvolvedor Backend', company: 'Hyper Scripts', date: 'mar 2020 - Presente', description: 'Desenvolvendo bots, sistemas web e integrações de API.' },
                         { title: 'Desenvolvedor Backend', company: 'Warp Store', date: 'ago 2024 - abr 2025', description: 'Desenvolvendo bots, sistemas web e integrações de API.' },
                         { title: 'Desenvolvimento Fullstack', company: 'Catskillet', date: 'jan 2023 - abr 2025', description: 'Criação de sites e manutenção de sistemas internos.' },
                    ],
                    feedbackTitle: "O que dizem sobre meu trabalho",
                    feedbackDescription: "",
                    feedbackList: [
                         {
                              img: netoImg,
                              alt: 'Neto',
                              text: 'O Lucas manja mesmo das coisas. Até achei que meu projeto ia virar bagunça, mas ele deixou tudo funcionando certinho.',
                              author: 'Neto',
                              align: 'left'
                         },
                         {
                              img: araujoImg,
                              alt: 'Henrique',
                              text: 'Trabalhar com ele é tranquilo, sempre explicando o que tá fazendo. Sem enrolação.',
                              author: 'Henrique',
                              align: 'right'
                         },
                         {
                              img: maiconImg,
                              alt: 'Maicon',
                              text: 'Ele não só entrega o que você pede, ele melhora o que você nem sabia que dava pra melhorar.',
                              author: 'Maicon',
                              align: 'left'
                         },
                         {
                              img: fileImg,
                              alt: 'Hauck',
                              text: 'Lucas consegue pegar ideias complicadas e transformar em algo simples de usar. Foi muito bom trabalhar com ele.',
                              author: 'Hauck',
                              align: 'right'
                         }
                    ],
                    fullstackDeveloper: "Desenvolvedor Fullstack",
                    cybersecurity: "Cibersegurança",
                    navAbout: "Sobre",
                    navServices: "Serviços",
                    navContact: "Contato",
                    navTimeline: "Timeline",
                    navFeedbacks: "Depoimentos",
                    copyright: "Todos os direito reservados."
                    
               },
               en: {
                    welcome: 'Hello, I am',
                    descriptionWelcome: 'Fullstack <strong>developer</strong> and <strong>cybersecurity enthusiast</strong>. I build websites, APIs, and automated bots with a <strong>focus on performance and reliability</strong>, while deepening my knowledge in digital security to create increasingly secure solutions.',
                    buttonWelcome: 'Download resume',
                    about: 'About me',
                    aboutDescription: `I'm <strong>Lucas Waldes</strong>, a fullstack developer focused on web solutions, automations, and information security. <strong>My journey began at Instituto PROA</strong>, where I learned programming logic and essential best practices to create reliable software.
<br><br>
I am currently pursuing a degree in <strong>Systems Analysis and Development</strong> at FATEC Zona Leste, developing technical and management skills for creating and maintaining systems, automations, and digital solutions.
<br><br>
I have experience in developing responsive websites, RESTful APIs, and custom bots in Node.js, and <strong>knowledge of backend frameworks</strong> such as Django, Flask, and FastAPI, <strong>as well as frontend frameworks</strong> like Angular, React, and Nuxt. I always strive to deliver efficient, scalable, and secure solutions, combining innovation with data protection.
`,
                    service: 'Services I Offer',
                    serviceDescription: 'I turn ideas into functional and scalable digital solutions.',
                    servicesList: {
                         websites: {
                              title: 'Professional Websites',
                              items: [
                                   'Creation of modern and responsive websites',
                                   'Optimization for conversion and performance',
                                   'Data protection and security best practices'
                              ]
                         },
                         apis: {
                              title: 'APIs & Integrations',
                              items: [
                                   'Development of robust APIs',
                                   'Integration with external systems (payments, ERPs, CRMs)',
                                   'Secure authentication and data encryption'
                              ]
                         },
                         bots: {
                              title: 'Smart<br>Bots',
                              items: [
                                   'Exclusive bots for Discord and WhatsApp',
                                   'Custom commands and automations',
                                   'Security to prevent failures or misuse'
                              ]
                         },
                         security: {
                              title: 'Information Security',
                              items: [
                                   'Implementation of secure authentication and access control',
                                   'Vulnerability analysis in systems and websites',
                                   'Reports with practical recommendations to improve digital protection'
                              ]
                         }
                    },
                    contractMeButton: "Hire me",
                    educationTitle: "Education",
                    emailButton: "Send mail",
                    educationList: [
                         { title: 'Technical Degree in Systems Development', institution: 'Instituto Proa & Senac', date: 'Feb 2022 - Jul 2022', description: 'Technical course focused on web development, programming logic, and software best practices.' },
                         { title: 'Analysis and Systems Development', institution: 'FATEC Zona Leste', date: 'Feb 2024 - Present', description: 'Currently pursuing a degree, developing technical and management skills for creating and maintaining systems, automations, and digital solutions.' }
                    ],
                    experienceTitle: "Experience",
                    experienceList: [
                         { title: 'Backend Developer', company: 'Hyper Scripts', date: 'Mar 2020 - Present', description: 'Developing bots, web systems, and API integrations.' },
                         { title: 'Backend Developer', company: 'Warp Store', date: 'Aug 2024 - Apr 2025', description: 'Developing bots, web systems, and API integrations.' },
                         { title: 'Fullstack Development', company: 'Catskillet', date: 'Jan 2023 - Apr 2025', description: 'Website creation and internal systems maintenance.' },
                    ],
                    feedbackTitle: "What they say about my work",
                    feedbackDescription: "",
                    feedbackList:
                    [
                         {
                              "text": "Lucas really knows his stuff. I even thought my project would be a mess, but he made everything work perfectly.",
                              "author": "Neto",
                              "align": "left",
                              "img": netoImg,
                              "alt": "João"
                         },
                         {
                              "text": "Working with him is easy, he always explains what he's doing. No fuss.",
                              "author": "Henrique",
                              "align": "right",
                              "img": araujoImg,
                              "alt": "Maria"
                         },
                         {
                              "text": "He not only delivers what you ask for, he improves what you didn’t even know could be better.",
                              "author": "Maicon",
                              "align": "left",
                              "img": maiconImg,
                              "alt": "Carlos"
                         },
                         {
                              "text": "Lucas can take complicated ideas and turn them into something simple to use. It was great working with him.",
                              "author": "Hauck",
                              "align": "right",
                              "img": fileImg,
                              "alt": "Carlos"
                         }
                    ],
                    fullstackDeveloper: "FUllstack Developer",
                    cybersecurity: "Cybersecurity",
                    navAbout: "About",
                    navServices: "Sevices",
                    navTimeline: "Timeline",
                    navFeedbacks: "Feedbacks",
                    navContact: "Contact",
                    copyright: "All rights reserved."
                    
                    
               }
          }
     })
     
     nuxtApp.vueApp.use(i18n)
})
