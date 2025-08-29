<template>
    <!-- <NetworkBg></NetworkBg> -->
    <Header />
    <div>
        <section class="inicio">
            
            <div class="container">
                
                <div class="main">
                    <span>{{ tm('welcome') }}</span>
                    <h1>Lucas Waldes</h1>
                    <TypingEffect />
                    <!-- <p>
                        Desenvolvedor focado em performance e automação, com experiência na criação de sites modernos, APIs eficientes e bots personalizados para plataformas como 
                        <span style="color: #7289da; font-weight: 700;">Discord</span> e <span style="color: #25d366; font-weight: 700;">WhatsApp</span>. 
                        Transformo demandas complexas em soluções ágeis, intuitivas e prontas para escalar.
                    </p> -->
                    
                    <p v-html="$t('descriptionWelcome')">
                    </p>
                    
                    
                    <div class="wrapper">
                        <button>{{ tm('buttonWelcome') }}</button>
                        <!-- <svg
                        xmlns="http://www.w3.org/2000/svg"
                        :width="40"
                        :height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="linkedin-icon"
                        >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                        
                    </svg> -->
                    <div class="icons">
                        <a href="https://www.linkedin.com/in/lucaswaldes/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 448 512" fill="#3b5af6"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </a>
                        <a href="https://wa.me/5511985038413" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="#3b5af6" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                        </a>
                        <a href="mailto:waldeslucas@gmail.com" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="#3b5af6"  viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg>
                        </a>
                        <a href="https://github.com/lucaswaldes/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="#3b5af6"  viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                        </a>
                    </div>
                </div>
                
            </div>
            <div class="right">
                <img src="/img/me.png" alt="">
            </div>
            
            <a href="#about" class="scroll-indicator">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM303 441L223 361C213.6 351.6 213.6 336.4 223 327.1C232.4 317.8 247.6 317.7 256.9 327.1L295.9 366.1L295.9 216C295.9 202.7 306.6 192 319.9 192C333.2 192 343.9 202.7 343.9 216L343.9 366.1L382.9 327.1C392.3 317.7 407.5 317.7 416.8 327.1C426.1 336.5 426.2 351.7 416.8 361L336.8 441C327.4 450.4 312.2 450.4 302.9 441z"/></svg>
            </a>
        </div>
    </section>
    <section class="about" id="about">
        <div class="container">
            <div class="content">
                <div class="left">
                    
                    <img src="/img/hacker4.png" alt="">
                    
                </div>
                <div class="right">
                    <h3>{{ tm('about') }}</h3>
                    <!-- <p>
                        <br>        
                        Sou Lucas Waldes, desenvolvedor fullstack com foco em <strong>soluções web, automações e segurança da informação</strong>. Minha jornada começou no Instituto PROA, onde aprendi lógica de programação e boas práticas essenciais para o desenvolvimento de software confiável.
                        <br><br>
                        Atualmente, curso <strong>Análise e Desenvolvimento de Sistemas na FATEC Zona Leste</strong>, aprofundando meus conhecimentos em engenharia de software, banco de dados, arquitetura de aplicações e fundamentos de cibersegurança.
                        <br><br>
                        Tenho experiência em <strong>desenvolvimento de sites responsivos, APIs RESTful e bots personalizados</strong>, usando tecnologias como <strong>Python, Django, JavaScript, Angular e FastAPI</strong> — sempre com atenção à performance, escalabilidade e mitigação de riscos.
                        <br><br>
                        Sou movido por desafios e acredito que <strong>segurança e inovação</strong> devem caminhar juntas, criando soluções que otimizam processos e protegem dados de pessoas e empresas.
                    </p> -->
                    <p v-html="$t('aboutDescription')"></p>
                </div>
            </div>   
            
            <!-- <div class="skills">
                <div style="display: flex; align-items: center;">
                    <h4 style="align-self: center; display: inline-block; white-space: nowrap;">Tecnologias e ferramentas</h4>
                    <span style="width: 100%; height: 2px; background-color: #295eff;  margin: 0 !important;"></span>
                </div>
                <div class="track">
                    <div class="loop">
                        <span v-for="(skill, index) in skills" :key="index">
                            <img :src="skill.icon" :alt="skill.name" />
                            {{ skill.name }}
                        </span>
                    </div>
                    <div class="loop">
                        <span v-for="(skill, index) in skills" :key="'clone-' + index">
                            <img :src="skill.icon" :alt="skill.name" />
                            {{ skill.name }}
                        </span>
                    </div>
                </div>
                <span style="width: 100vw !important; height: 2px; background-color: #656565; margin: 0 !important;"></span>
                
            </div> -->
        </div>
    </section>
    
    <section class="services" id="services">
        <div class="container">
            <h3>{{ tm('service') }}</h3>
            <p>{{ tm('serviceDescription') }}</p>
            <div class="content">
                <div class="service">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/></svg>
                    <h4 style="color: var(--text-color);" v-html="$t('servicesList.websites.title')"></h4>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg> 
                            {{ $t('servicesList.websites.items[0]') }}
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg> 
                            {{ $t('servicesList.websites.items[1]') }}
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg> 
                            {{ $t('servicesList.websites.items[2]') }}
                        </li>
                    </ul>
                </div>
                <div class="service">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 576 512"><path d="M550.5 241l-50.1-86.8c1.1-2.1 1.9-4.6 1.9-7.2 0-8-6.7-14.7-14.7-15l-55.4-95.9c.5-1.6 1.1-3.2 1.1-4.8 0-8.6-7-15.3-15.3-15.3-4.8 0-8.8 2.1-11.8 5.6H299.5C296.8 18.1 292.8 16 288 16s-8.8 2.1-11.5 5.6H170.4C167.5 18.1 163.4 16 158.6 16c-8.3 0-15.3 6.7-15.3 15.3 0 1.6 .5 3.5 1.1 4.8l-56 97.2c-5.4 2.4-9.1 7.5-9.1 13.7 0 .5 .3 1.1 .3 1.6l-53.3 92.1c-7.2 1.3-12.6 7.5-12.6 15 0 7.2 5.1 13.4 12.1 15l55.2 95.4c-.5 1.6-.8 2.9-.8 4.8 0 7.2 5.1 13.4 12.1 14.7l51.7 89.7c-.5 1.6-1.1 3.5-1.1 5.4 0 8.6 7 15.3 15.3 15.3 4.8 0 8.8-2.1 11.5-5.4h106.9C279.2 493.9 283.4 496 288 496s8.8-2.1 11.5-5.4h107.1c2.7 2.9 6.7 4.8 11 4.8 8.6 0 15.3-7 15.3-15.3 0-1.6-.3-2.9-.8-4.3l51.7-90.3c7-1.3 12.1-7.5 12.1-14.7 0-1.6-.3-3.2-.8-4.8l54.9-95.4c7-1.3 12.3-7.5 12.3-15 0-7.2-5.1-13.4-11.8-14.7zM153.5 450.7l-43.7-75.8h43.7v75.8zm0-83.8h-43.7c-.3-1.1-.8-2.1-1.3-3.2l45-47.4v50.6zm0-62.4l-50.4 53.3c-1.3-.5-2.7-1.3-4-1.6L43.4 259.8c.5-1.3 .5-2.7 .5-4s0-2.4-.3-3.5l52-90c2.7-.3 5.4-1.1 7.8-2.7l50.1 52v92.9zm0-102.3l-45.8-47.4c1.3-2.1 2.1-4.8 2.1-7.8 0-.3-.3-.8-.3-1.1l43.9-15.8v72.1zm0-80.6l-43.7 15.8 43.7-75.5v59.7zm326.5 39.1l.8 1.3L445.5 329.1l-63.8-67.2 98-101.5 .3 .3zM291.8 355.1l11.5 11.8H280.5l11.3-11.8zm-.3-11.3l-83.3-85.4 79.6-84.4 83 87.6-79.3 82.2zm5.4 5.9l79.3-82.2 67.5 71.3-5.9 28.1H313.7l-16.9-17.1zM410.4 44.4c1.1 .5 2.1 1.1 3.5 1.3l57.9 100.7v.5c0 2.9 .8 5.6 2.1 7.8L376.4 256l-83-87.6L410.4 44.4zm-9.1-2.1L287.7 162.5l-57.1-60.3 166.3-60h4.3zm-123.5 0c2.7 2.7 6.2 4.3 10.2 4.3s7.5-1.6 10.2-4.3h75L224.8 95.8 173.9 42.3h103.9zm-116.2 5.6l1.1-2.1a33.8 33.8 0 0 0 2.7-.8l51.2 53.8-54.9 19.8V47.9zm0 79.3l60.8-22 59.7 63.2-79.6 84.1-41-42.1v-83.3zm0 92.7L198 257.6l-36.4 38.3v-76.1zm0 87.9l42.1-44.5 82.8 86-17.1 17.7H161.6v-59.2zm7 162.1c-1.6-1.6-3.5-2.7-5.9-3.5l-1.1-1.6v-89.7h99.9l-91.6 94.8h-1.3zm129.9 0c-2.7-2.4-6.4-4.3-10.4-4.3s-7.8 1.9-10.4 4.3h-96.4l91.6-94.8h38.3l91.6 94.8H298.4zm120-11.8l-4.3 7.5c-1.3 .3-2.4 .8-3.5 1.3l-89.2-91.9h114.4l-17.4 83zm12.9-22.2l12.9-60.8h22l-34.8 60.8zm34.8-68.8h-20.4l4.6-21.2 17.1 18.2c-.5 .8-1.1 1.9-1.3 2.9zm66.2-107.4l-55.4 96.7c-1.3 .5-2.7 1.1-4 1.9l-20.6-22 34.6-163.9 45.8 79.3c-.3 1.3-.8 2.7-.8 4.3 0 1.3 .3 2.4 .5 3.8z"/></svg>
                    <h4 style="color: var(--text-color);" v-html="$t('servicesList.apis.title')"></h4>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg>  
                            {{ $t('servicesList.apis.items[0]') }}
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg> 
                            {{ $t('servicesList.apis.items[1]') }}
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg> 
                            {{ $t('servicesList.apis.items[2]') }}
                        </li>
                    </ul>
                </div>
                <div class="service">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 640 512"><path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"/></svg>
                    <h4 style="color: var(--text-color);" v-html="$t('servicesList.bots.title')"></h4>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg> 
                            {{ $t('servicesList.bots.items[0]') }}
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg> 
                            {{ $t('servicesList.bots.items[1]') }}
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg> 
                            {{ $t('servicesList.bots.items[2]') }}
                        </li>
                    </ul>
                </div>
                <div class="service">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="80" viewBox="0 0 640 640"><path d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z"/></svg>
                    <h4 style="color: var(--text-color);" v-html="$t('servicesList.security.title')"></h4>
                    <ul>
                        <!-- <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg> Hardening de servidores e aplicações.</li> -->
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg> 
                            {{ $t('servicesList.security.items[0]') }}
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg> 
                            {{ $t('servicesList.security.items[1]') }}
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"/></svg> 
                            {{ $t('servicesList.security.items[2]') }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="button-wrapper">
                <button class="button-green"><a href="https://wa.me/5511985038413" target="_blank">{{ tm("contractMeButton") }}</a></button>
                <button class="button-white"><a href="mailto:waldeslucas@gmail.com"  target="_blank">{{ tm("emailButton") }}</a></button>
            </div>
        </div>
    </section>
    
    <section class="timeline-section" id="timeline">
        <h3>Timeline</h3>
        <div class="timeline-container">
            <h4>{{ tm('educationTitle') }}</h4>
            <div class="timeline-cards">
                <div
                v-for="(item, index) in educationList"
                :key="index"
                class="timeline-card"
                >
                <h5>{{ item.title }}</h5>
                <p style="color: var(--primary-color)" class="institution">{{ item.institution }}</p>
                <span class="date">{{ item.date }}</span>
                <p class="description">{{ item.description }}</p>
            </div>
        </div>
    </div>
    <div class="timeline-container">
        <h4>{{ tm('experienceTitle') }}</h4>
        <div class="timeline-cards">
            <div
            v-for="(item, index) in experienceList"
            :key="index"
            class="timeline-card"
            >
            <h5>{{ item.title }}</h5>
            <p style="color: var(--primary-color)" class="institution">{{ item.company }}</p>
            <span class="date">{{ item.date }}</span>
            <p class="description">{{ item.description }}</p>
        </div>
    </div>
</div>
</section>
<section id="feedback">
    <div class="feedback-container">
        <h3>{{ tm('feedbackTitle') }}</h3>
        
        <div
        v-for="(fb, index) in feedbackList"
        :key="index"
        :class="['feedback-block', fb.align]"
        >
        <img :src="fb.img" :alt="fb.alt" class="avatar" />
        <div class="bubble">
            <p>{{ fb.text }}</p>
            <span>- {{ fb.author }}</span>
        </div>
    </div>
</div>
</section>

<Footer />
</div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

interface Feedback {
    img: string
    alt: string
    text: string
    author: string
    align: 'left' | 'right'
}

import { useI18n } from 'vue-i18n'

interface Experience {
    title: string
    company: string
    date: string
    description: string
}

interface Education {
    title: string
    institution: string
    date: string
    description: string
}

const { tm, locale } = useI18n()

const experienceList = computed<Experience[]>(() =>
tm('experienceList') as Experience[]
)

const educationList = computed<Education[]>(() =>
tm('educationList') as Education[]
)

const feedbackList = computed<Feedback[]>(() =>
tm('feedbackList') as Feedback[]
)

</script>

<style lang="scss" scoped>


.inicio {
    width: 100%;
    // height: calc(100vh - 80px);
    height: 100vh;

    @media (max-width: 768px) {
        height: auto !important;
        margin-top: 120px;
    }
    
    .container {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
        justify-content: center;

        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;

            .main {
                width: 100%;
                height: auto;
                
                h1 {
                    font-size: 45px;
                }
                
                h2 {
                    font-size: 20px;
                }
                
                p {
                    font-size: 16px;
                }
            }
            .right {
                margin-top: 70px;
                
                img {
                    width: 50vw;
                }
            }
            
            .scroll-indicator {
                display: none;
            }

            .right {
                padding: 0 !important;
                margin: 40px !important;

            }
        }
        .scroll-indicator {
            position: absolute !important; 
            bottom: 50px;
            width: 80px;
            height: 80px;
            background-color: var(--bg-secondary-color);
            border-radius: 50%;
            animation: bounce 1.5s infinite;
            cursor: pointer;
            
            svg {
                fill: var(--primary-color)
            }
        }
    }
    
    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
        height: 100%;
        position: relative !important; 
        // margin: 0 auto;
        
        
        
        /* Animação da bolinha */
        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(20px);
            }
        }
        
        
        h1 {
            font-size: 60px;
            margin-bottom: 20px;
            font-weight: 900;
            font-family: "Orbitron", sans-serif;
            color: var(--primary-color);
            align-self: flex-start;
        }
        
        span {
            text-align: left;
            align-self: flex-start;
        }
        
        h2 {
            text-align: left;
            align-self: flex-start;
            font-size: 28px;
            font-weight: 700;
        }
        p {
            text-align: left;
            margin-top: 20px;
        }
        
        .wrapper {
            display: flex;
            width: 100%;
            gap: 20px;
            align-items: center;

             @media (max-width: 768px) {
                flex-direction: column;
             }
            button {
                // align-self: flex-start;
                margin-top: 20px;
            }
            
            .icons {
                display: flex;
                gap: 30px;
            }
            
            a {
                align-self: center;
                svg {
                    margin-top: 20px;
                    align-self: center;
                    fill: var(--text-color);
                    transition: 0.2s all ease-in-out;
                }
                
                :hover {
                    fill: var(--primary-color)
                }
            }
        }
    }
    
    .right {
        width: 40%;
        display: flex;
        justify-content: center;
        padding: 40px;
        img {
            width: 40vw;
            max-width: 400px;
            align-self: self-end;
            border-radius: 50%;
        }
    }
}

.about {
    background: var(--bg-color);
    
    // padding: 40px;
    height: 85vh;
    max-height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: auto !important;
        max-height: none !important;
    }

    .container {
        
        .content {
            // background-color: var(--bg-secondary-color);
            border-radius: 15px;
            display: flex;
            padding: 20px;
            
            @media (max-width: 768px) {
                flex-direction: column-reverse;
                align-items: center;
                
                .right {
                    width: 100% !important;
                }
                
                .left {
                    width: 100% !important;
                    padding: 0px !important;
                    
                    
                    img {
                        align-self: center;
                        width: 60vw !important;
                    }
                }
            }
            
            
            .left {
                width: 35%;
                height: auto;
                padding-right: 30px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                img {
                    width: 100%;
                    border-radius: 15px;
                }
                
            }
            
            .right {
                width: 65%;
                // background-color: var(--bg-thirty-color);
                // margin-left: 30px;
                border-radius: 15px;
                padding: 30px;
                
                // padding: 40px;
                
                h3 {
                    font-size: 32px;
                    color: var(--primary-color);
                    font-family: "Orbitron", sans-serif;
                }
                
                p {
                    margin-top: 20px;
                }
            }
        }
        
        .skills {
            overflow: hidden;
            width: 100%;
            position: relative;
            // background-color: var(--bg-secondary-color);
            //   padding-top: 30px;
            padding-bottom: 30px;
            border-radius: 15px;
            
            h4 {
                font-size: 20px;
                color: var(--primary-color);
                font-family: "Orbitron", sans-serif;
            }
        }
        .track {
            display: flex;
            width: fit-content;
            animation: scroll 45s linear infinite;
            padding-top: 20px;
        }
        
        .loop {
            display: flex;
        }
        
        .skills span {
            display: inline-flex;
            align-items: center;
            margin-right: 2rem;
            white-space: nowrap;
            font-weight: bold;
            font-size: 1rem;
        }
        
        .skills img {
            width: 24px;
            height: 24px;
            margin-right: 8px;
        }
        
        @keyframes scroll {
            0% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(-50%);
            }
        }
    }
}

.tecnologies {
    .container {  
        width: 100% !important; 
        h4 {
            font-size: 25px;
            color: var(--primary-color);
            font-weight: 700;
            font-family: "Orbitron", sans-serif;
            text-align: center;
            padding-left: 30px;
        } 
        
        
    }
}

.services {
    // padding-top: 40px;
    // height: 100vh;
    display: flex;
    background: var(--bg-color);
    
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        .button-wrapper {
            display: flex;
            gap: 20px;
            margin-top: 30px;

            @media (max-width: 768px) {
                gap: 0 !important;
                flex-direction: column !important;
            }
            
            button {
                width: 250px !important;
            }
            
            a {
                display: block;
                
                width: 100% !important;
                text-decoration: none;
            }
            .button-green {
                &:hover {
                    a {
                        color: #000000 !important;
                        
                    }
                }
            }
            
            .button-white {
                background-color: #ffffff;
                
                transition: .2s all ease-in-out;
                border: 1px solid #1A1A1A;
                width: 100%;
                
                a {
                    color: #000000;
                }
                &:hover {
                    border: none;
                    
                    a {
                        color: #ffffff;
                    }
                    background-color: var(--primary-color);
                }
            }
        }
        
        h3 {
            font-size: 32px;
            font-family: "Orbitron", sans-serif;
            color: var(--primary-color);
        }
        
        button {
            margin-top: 30px;
        }
        
        .content {
            margin-top: 80px;
            display: flex;
            flex-wrap: wrap;
            gap: 25px;
            
            // border: 1px solid #656565;
            // border-radius: 15px;
            // padding: 20px;
            
            justify-content: center;
            .service {
                flex: 1 1 250px;   /* largura mínima de 250px */
                max-width: 300px; /* não cresce demais */
                padding: 20px;
                background-color: var(--bg-secondary-color);
                border-radius: 15px;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                transition: .3s ease-in-out;
                border: 1px solid #656565;
                svg {
                    //fill: #656565;
                    fill: var(--primary-color);
                    margin-bottom: 15px;
                }
                
                &:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                    
                    // svg {
                    //     fill: var(--accent-color);
                    //     // width: 100px;
                    // }
                }
                
                h4 {
                    font-size: 20px;
                    color: var(--primary-color);
                    font-family: "Orbitron", sans-serif;
                    margin-bottom: 10px;
                }
                
                li {
                    text-align: left;
                    list-style: none;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    margin-left: 5px;
                    gap: 10px;
                    font-size: 18px;
                    
                    svg {
                        width: 30px;
                        // background-color: yellow;q
                        // position: absolute;
                        flex: 0 0 auto;
                    }
                }
                p, 
                ul {
                    padding-top: 10px;
                    font-size: 15px;
                    line-height: 1.5;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                
                &:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                    
                }
                
                
                
                
            }
            
            
        }
    }
}

// .experiences {
//     background-color: var(--bg-secondary-color);

//     .container {
//         padding: 50px;
//         h3 {
//             font-size: 32px;
//             text-align: center;
//             margin-bottom: 20px;
//         }
//         .content {
//             display: flex;
//             gap: 20px;
//             flex-direction: column;
//             .experience {
//                 display: flex;
//                 background-color: var(--bg-secondary-color);
//                 // border: 1px solid var(--text-color);
//                 padding: 20px;
//                 border-radius: 15px;
//                 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);


//                 .left {
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                     gap: 10px;

//                     img {
//                         width: 150px !important;
//                         height: 100px !important;
//                     }
//                 }



//                 div {
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: space-around;
//                     margin-left: 20px;
//                     .title {
//                         display: flex;
//                         flex-direction: row;
//                         justify-content: space-between;
//                         margin: 0;
//                         span {
//                             font-size: 20px;
//                             font-weight: 700;
//                         }
//                     }
//                     p {
//                         padding-top: 20px;
//                     }
//                 }
//             }
//         }
//     }
// }

.terminal {
    width: 100%;
    // padding: 80px;
    // height: calc(100vh - 80px);
    // // max-height: 800px;
    
    // @media (max-width: 768px) {
    //     // height: 80vh;
    // }
    position: relative;
    
    
    .container {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        // position: relative;
    }
}

.timeline-section {
    padding: 2rem;
    background: var(--bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    // height: 100vh;
    justify-content: center;
    h3 {
        text-align: center;
        //     font-size: 2rem;
        font-size: 32px;
        margin-bottom: 2rem;
        color: var(--primary-color);
        font-family: "Orbitron", sans-serif;
        
    }
    
.timeline-container {
    h4 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-align: left;
        // color: var(--primary-color);
        font-family: "Orbitron", sans-serif;
        font-weight: 500;
    }

    .timeline-cards {
        display: flex;
        flex-wrap: wrap;          // permite quebra automática
        gap: 1rem;
        justify-content: flex-start;

        // Remove overflow scroll, já que vamos usar wrap
        overflow-x: hidden;

        .timeline-card {
            flex: 1 1 400px;      // grow, shrink e base width
            padding: 1.2rem;
            background: var(--bg-secondary-color);
            border-radius: 1rem;
            box-shadow: 0 6px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
            min-height: 150px;
            max-width: 500px;

            &:hover {
                transform: translateY(-5px) scale(1.05);
                box-shadow: 0 10px 15px rgba(0,0,0,0.15);
            }

            h5 {
                font-weight: bold;
                margin-bottom: 0.3rem;
                font-size: 25px;
            }

            .institution {
                font-size: 18px;
                font-weight: 700;
                color: var(--text-color);
            }

            .date {
                font-size: 0.75rem;
                color: #aaa;
            }

            .description {
                margin-top: 0.5rem;
                color: var(--text-color);
                font-size: 18px;
            }
        }
    }

    // Ajustes para telas pequenas
    @media (max-width: 768px) {
        .timeline-cards {
            justify-content: center; // centraliza os cards
            
            .timeline-card {
                flex: 1 1 70vw;      // ocupa mais espaço na tela pequena
                max-width: 90vw;     // não ultrapassa a tela
            }
        }
    }
}

}






#feedback {
    
    padding: 50px 20px;
    background-color: var(--bg-color);
    text-align: center;
    padding-bottom: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    
    height: 80vh;

    
    @media (max-width: 768px) {
        height: auto !important;
    }
    
    
    h3 {
        font-family: "Orbitron", sans-serif;
        color: var(--primary-color);
        padding-bottom: 60px;
        
    }
}

.feedback-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 1000px;
    margin: auto;
    
    h3 {
        font-size: 32px;
        
    }
}

.feedback-block {
    display: flex;
    align-items: flex-start;
    gap: 15px;
}

.feedback-block.left {
    flex-direction: row;
}

.feedback-block.right {
    flex-direction: row-reverse;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    // border: 2px solid #fff;
    transition: transform 0.3s;
}

.avatar:hover {
    transform: rotate(-10deg) scale(1.1);
}


.bubble {
    background-color: var(--bg-secondary-color);
    
    padding: 15px 20px;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
    max-width: 70%;
    position: relative;
}

.bubble::after {
    content: "";
    position: absolute;
    top: 15px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
}

.feedback-block.left .bubble::after {
    left: -20px;
    border-right-color: #ffffff;
}

.feedback-block.right .bubble::after {
    right: -20px;
    border-left-color: #ffffff;
}

.bubble p {
    margin: 0;
    font-size: 18px;
}

.bubble span {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    color: #555;
}



</style>

<style scoped>

</style>