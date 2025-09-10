import { createI18n } from 'vue-i18n'
import { defineNuxtPlugin } from '#app'
const netoImg = '/img/user.png'
const maiconImg = '/img/maicon.jpg'
const fileImg = '/img/file.jpeg'
const araujoImg = '/img/user.png'

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
                              title: 'Bots Personalizados',
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
                         { title: 'Técnico em Desenvolvimento Web', institution: 'Instituto Proa & Senac', date: 'fev 2022 - jul 2022', description: 'Curso técnico focado em desenvolvimento web, lógica de programação e boas práticas de software.' },
                         { title: 'Análise e Desenvolvimento de Sistemas', institution: 'FATEC Zona Leste', date: 'fev 2024 - Presente', description: 'Graduação em andamento, desenvolvendo habilidades técnicas e de gestão para criação e manutenção de sistemas, automações e soluções digitais.' }
                    ],
                    experienceTitle: "Experiência",
                    experienceList: [
                         { title: 'Desenvolvedor Backend', company: 'Hyper Scripts', date: 'mar 2020 - Presente', description: 'Desenvolvimento de bots personalizados para a plataforma Discord, focados em automação de processos, otimização de tarefas, integração com sistemas e suporte personalizado.' },
                         //{ title: 'Desenvolvedor Backend', company: 'Warp Store', date: 'ago 2024 - abr 2025', description: 'Desenvolvendo bots, sistemas web e integrações de API.' },
                         { title: 'Desenvolvimento Fullstack', company: 'Catskillet', date: 'jan 2023 - abr 2025', description: 'Desenvolvimento full-stack de aplicações web, criando sistemas internos e plataformas para clientes, colaborando em sprints ágeis e garantindo suporte eficiente, com foco em automação de processos e entregas de qualidade.' },
                    ],
                    feedbackTitle: "O que dizem sobre meu trabalho",
                    feedbackDescription: "",
                    feedbackList: [
                         {
                              img: netoImg,
                              alt: 'Neto',
                              text: 'Lucas e um profissional de extrema qualidade, com entrega dentro do prazo, assistência total após a entrega e padrão superior ao mercado, sempre se prontificando a resolver qualquer problema.',
                              author: 'Neto, CEO Hyper Scripts',
                              align: 'left'
                         },
                         {
                              img: araujoImg,
                              alt: 'Henrique',
                              text: 'Lucas é um profissional de excelência, sempre entregando resultados dentro do prazo, oferecendo suporte completo após a entrega e mantendo um padrão de qualidade acima do mercado, pronto para solucionar qualquer desafio.',
                              author: '',
                              align: 'right'
                         },
                         // {
                         //      img: maiconImg,
                         //      alt: 'Maicon',
                         //      text: 'Ele não só entrega o que você pede, ele melhora o que você nem sabia que dava pra melhorar.',
                         //      author: 'Maicon',
                         //      align: 'left'
                         // },
                         // {
                         //      img: fileImg,
                         //      alt: 'Hauck',
                         //      text: 'Lucas consegue pegar ideias complicadas e transformar em algo simples de usar. Foi muito bom trabalhar com ele.',
                         //      author: 'Hauck',
                         //      align: 'right'
                         // }
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
                              title: 'Customized Bots',
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
                         { 
                              title: 'Web Development Technician', 
                              institution: 'Instituto Proa & Senac', 
                              date: 'Feb 2022 - Jul 2022', 
                              description: 'Technical course focused on web development, programming logic, and software best practices.' 
                         },
                         { 
                              title: 'Systems Analysis and Development', 
                              institution: 'FATEC Zona Leste', 
                              date: 'Feb 2024 - Present', 
                              description: 'Ongoing undergraduate degree, developing technical and management skills for creating and maintaining systems, automations, and digital solutions.' 
                         }
                    ],
                    experienceTitle: "Experience",
                    experienceList: [
                         { 
                              title: 'Backend Developer', 
                              company: 'Hyper Scripts', 
                              date: 'Mar 2020 - Present', 
                              description: 'Development of custom bots for the Discord platform, focusing on process automation, task optimization, system integration, and personalized support.' 
                         },
                         //{ title: 'Backend Developer', company: 'Warp Store', date: 'Aug 2024 - Apr 2025', description: 'Developing bots, web systems, and API integrations.' },
                         { 
                              title: 'Fullstack Development', 
                              company: 'Catskillet', 
                              date: 'Jan 2023 - Apr 2025', 
                              description: 'Full-stack web application development, creating internal systems and client platforms, collaborating in agile sprints, and ensuring efficient support, focusing on process automation and quality delivery.' 
                         },
                    ],
                    feedbackTitle: "What they say about my work",
                    feedbackDescription: "",
                    feedbackList:
                    [
                         {
                              img: netoImg,
                              alt: 'Neto',
                              text: 'Lucas is a highly skilled professional, delivering on time, providing full support after delivery, and maintaining a standard above the market, always ready to solve any problem.',
                              author: 'Neto, CEO Hyper Scripts',
                              align: 'left'
                         },
                         {
                              img: araujoImg,
                              alt: 'Henrique',
                              text: 'Lucas is an excellent professional, consistently delivering results on time, offering complete support after delivery, and upholding a quality standard above the market, ready to tackle any challenge.',
                              author: '',
                              align: 'right'
                         },
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
