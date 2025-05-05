/**
 * Numix UI – JavaScript Utilities
 * Theme toggling with persistent storage
 * Author: LoboGuardian
 * License: GPL-3.0
 */

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
  
    // DOM Elements
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
  
    // SVG Paths for Icons
    const LIGHT_ICON = `
      <path d="M12 3v1m9 8h-1m-9 8v-1m-5-5h1m-6-2l1-1m18 0l-1 1m-4 3h-1m15-5v1m-1-1l-1-1M5.636 5.636l.707.707m12.728 0l-.707.707M6.343 17.657l.707-.707M17.657 6.343l-.707-.707z"/>
      <circle cx="12" cy="12" r="3"/>
    `;
    const DARK_ICON = `
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
    `;
  
    /**
     * Applies the given theme to the document.
     * @param {'light' | 'dark'} theme - Theme to apply
     */
    function setTheme(theme) {
      const isDark = theme === 'dark';
  
      body.classList.toggle('dark-theme', isDark);
      themeText.textContent = isDark ? 'Light' : 'Dark';
      themeIcon.innerHTML = isDark ? LIGHT_ICON : DARK_ICON;
  
      localStorage.setItem('theme', theme);
    }
  
    /**
     * Loads the saved theme or defaults to light.
     */
    function initializeTheme() {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
    }
  
    /**
     * Attaches event listeners.
     */
    function setupListeners() {
      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          const currentTheme = localStorage.getItem('theme') || 'light';
          setTheme(currentTheme === 'light' ? 'dark' : 'light');
        });
      }
    }
    
    /**
     * Enables dismissible alerts by attaching click listeners to all .close-button elements.
    */
   function setupDismissibleAlerts() {
     document.querySelectorAll('.n-alert .close-button').forEach((button) => {
       button.addEventListener('click', () => {
         const alert = button.closest('.n-alert');
         if (alert) {
           alert.style.display = 'none';
          }
        });
      });
    }
  
    // Initialize
    initializeTheme();
    setupListeners();
    setupDismissibleAlerts();
  });
  