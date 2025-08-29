<template>
     <footer class="footer">
          <div class="footer-content">
               <div class="footer-brand">
                    <h2>Lucas Waldes</h2>
                    <p>{{ tm('fullstackDeveloper') }} | {{ tm('cybersecurity') }}</p>
               </div>
               
               <div class="footer-links">
                    <div class="links-group">
                         <h3>Links</h3>
                         <ul>
                              <li><NuxtLink to="#about">{{ tm('navAbout') }}</NuxtLink></li>
                              <li><NuxtLink to="#services">{{ tm('navServices') }}</NuxtLink></li>
                              <li><NuxtLink to="#contact">{{ tm('navContact') }}</NuxtLink></li>
                         </ul>
                    </div>
                    <div class="links-group">
                         <h3>Social</h3>
                         <ul>
                              <li><a href="https://github.com/lucaswaldes" target="_blank" rel="noopener">GitHub</a></li>
                              <li><a href="https://linkedin.com/in/lucaswaldes" target="_blank" rel="noopener">LinkedIn</a></li>
                              <li><a href="https://instagram.com/lucaswaldes" target="_blank" rel="noopener">Instagram</a></li>
                         </ul>
                    </div>
               </div>
          </div>
          
          <div class="footer-bottom">
               <p>© 2025 Lucas Waldes. {{ tm('copyright') }}</p>
          </div>
     </footer>
</template>

<script setup>

import { useI18n } from 'vue-i18n'

const { tm, locale } = useI18n()
</script>

<style scoped>
.footer {
     /* border-top: 1px solid white; */
     background: var(--bg-secondary-color);
     color: red !important;
     padding: 50px 20px 20px;
     font-family: 'Inter', sans-serif;
}

.footer-content {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     max-width: 1200px;
     margin: 0 auto 30px;
     gap: 40px;
}

.footer-brand h2 {
     font-size: 24px;
     margin: 0 0 10px;
}

.footer-brand p {
     font-size: 16px;
     margin: 0;
     color: var(--text-color);
}

.footer-links {
     display: flex;
     gap: 50px;
}

.links-group h3 {
     margin-bottom: 10px;
     font-size: 16px;
     color: var(--text-color);

}

.links-group ul {
     list-style: none;
     padding: 0;
     margin: 0;
}

.links-group li {
     margin-bottom: 8px;
}

.links-group a,
.links-group a:visited,
.links-group NuxtLink {
     color: var(--text-color);

     text-decoration: none;
     transition: all 0.3s ease;
}

.links-group a:hover,
.links-group NuxtLink:hover {
     color: #00ffe0;
     transform: translateX(5px);
}

.footer-bottom {
     text-align: center;
     border-top: 1px solid rgba(255, 255, 255, 0.2);
     padding-top: 20px;
     font-size: 14px;
     color: #aaa;
}

/* Mobile */
@media (max-width: 768px) {
     .footer-content {
          flex-direction: column;
          align-items: center;
          gap: 30px;
     }
     
     .footer-links {
          flex-direction: column;
          align-items: center;
          gap: 20px;
     }
}
</style>
