document.addEventListener('DOMContentLoaded', () => {
    const languageNav = document.querySelector('.language-nav');
  
    // Función para cargar las traducciones
    const fetchTranslations = async (lang) => {
      try {

        const response = await fetch('./menu.json'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const translations = await response.json();
        updateContent(translations[lang]);
      } catch (error) {
        console.error("No se pudieron cargar las traducciones:", error);
      }
    };
  
    // Función para actualizar el contenido de la página
    const updateContent = (langData) => {
      document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (langData[key]) {
          element.innerHTML = langData[key];
        }
      });
      document.title = langData.pageTitle;
    };
    
    // Función para manejar el cambio de idioma
    const handleLanguageChange = (e) => {
      e.preventDefault();
      const target = e.target;
  
      if (target.tagName === 'A') {
        const lang = target.getAttribute('data-lang');
        if (target.classList.contains('active')) return;
  
        languageNav.querySelector('a.active').classList.remove('active');
        target.classList.add('active');
        
        fetchTranslations(lang);
      }
    };
  
    // Añadir el listener al contenedor de navegación
    languageNav.addEventListener('click', handleLanguageChange);
  
    // Cargar el idioma por defecto (castellano) al iniciar
    fetchTranslations('es');
  });