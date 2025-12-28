// Oniro - GitHub Pages Scripts

// Translations
const translations = {
  fr: {
    // Navigation
    nav_home: 'Accueil',
    nav_features: 'Fonctionnalites',
    nav_how_to_use: 'Utilisation',
    nav_privacy: 'Confidentialite',
    nav_terms: 'CGU',
    nav_contact: 'Contact',

    // Hero
    hero_title: 'Oniro',
    hero_subtitle: 'Votre interprete de reves personnel propulse par l\'IA',
    hero_description: 'Decouvrez la signification cachee de vos reves grace a l\'intelligence artificielle. Obtenez des interpretations personnalisees et des illustrations uniques.',
    btn_download: 'Telecharger',
    btn_learn_more: 'En savoir plus',

    // Features
    features_title: 'Fonctionnalites',
    features_subtitle: 'Tout ce dont vous avez besoin pour explorer vos reves',
    feature_1_title: 'Interpretation IA',
    feature_1_desc: 'Notre IA analyse votre reve et vous fournit une interpretation detaillee avec les symboles cles.',
    feature_2_title: 'Images Generees',
    feature_2_desc: 'Visualisez l\'essence symbolique de votre reve avec des illustrations artistiques uniques.',
    feature_3_title: 'Journal de Reves',
    feature_3_desc: 'Sauvegardez tous vos reves et leurs interpretations dans votre journal personnel.',
    feature_4_title: 'Saisie Vocale',
    feature_4_desc: 'Racontez votre reve a voix haute, Oniro le transcrit automatiquement.',
    feature_5_title: 'Multilingue',
    feature_5_desc: 'Disponible en francais et en anglais, avec plus de langues a venir.',
    feature_6_title: 'Partage Social',
    feature_6_desc: 'Partagez vos reves et leurs images sur Instagram, TikTok et autres reseaux.',

    // Footer
    footer_description: 'Explorez le monde mysterieux de vos reves avec l\'aide de l\'intelligence artificielle.',
    footer_product: 'Produit',
    footer_legal: 'Legal',
    footer_support: 'Support',
    footer_copyright: '2024 Oniro. Tous droits reserves.',

    // How to use page
    howto_title: 'Comment utiliser Oniro',
    howto_subtitle: 'Guide complet pour interpreter vos reves',
    howto_step1_title: 'Racontez votre reve',
    howto_step1_desc: 'Tapez ou dictez votre reve dans la zone de texte. Plus vous etes detaille, meilleure sera l\'interpretation.',
    howto_step2_title: 'Choisissez un style visuel',
    howto_step2_desc: 'Selectionnez parmi 4 styles artistiques : Onirique, Artistique, Realiste ou Abstrait.',
    howto_step3_title: 'Lancez l\'interpretation',
    howto_step3_desc: 'Appuyez sur le bouton pour lancer l\'analyse IA de votre reve.',
    howto_step4_title: 'Decouvrez les resultats',
    howto_step4_desc: 'Explorez l\'interpretation, les symboles cles, les conseils mystiques et l\'image generee.',
    howto_step5_title: 'Sauvegardez et partagez',
    howto_step5_desc: 'Retrouvez vos reves dans le journal et partagez-les sur les reseaux sociaux.',

    // Privacy page
    privacy_title: 'Politique de Confidentialite',
    privacy_subtitle: 'Derniere mise a jour : Decembre 2024',
    privacy_intro: 'Chez Oniro, nous respectons votre vie privee. Cette politique explique comment nous collectons, utilisons et protegeons vos donnees.',
    privacy_collect_title: 'Donnees Collectees',
    privacy_collect_content: 'Nous collectons uniquement les donnees necessaires au fonctionnement de l\'application : le texte de vos reves, les images generees, et un identifiant anonyme de votre appareil pour la gestion des credits.',
    privacy_use_title: 'Utilisation des Donnees',
    privacy_use_content: 'Vos reves sont envoyes a notre serveur pour l\'interpretation par IA. Les donnees sont traitees de maniere securisee et ne sont pas partagees avec des tiers.',
    privacy_storage_title: 'Stockage',
    privacy_storage_content: 'Vos reves sont stockes localement sur votre appareil. Les donnees sur nos serveurs sont conservees uniquement le temps necessaire au traitement.',
    privacy_rights_title: 'Vos Droits',
    privacy_rights_content: 'Vous pouvez supprimer vos donnees locales a tout moment en desinstallant l\'application. Pour toute demande concernant vos donnees, contactez-nous.',
    privacy_contact_title: 'Contact',
    privacy_contact_content: 'Pour toute question concernant cette politique, contactez-nous a contact@mcsedition.org',

    // Terms page
    terms_title: 'Conditions Generales d\'Utilisation',
    terms_subtitle: 'Derniere mise a jour : Decembre 2024',
    terms_accept_title: 'Acceptation des Conditions',
    terms_accept_content: 'En utilisant Oniro, vous acceptez ces conditions. Si vous n\'etes pas d\'accord, veuillez ne pas utiliser l\'application.',
    terms_service_title: 'Description du Service',
    terms_service_content: 'Oniro est une application d\'interpretation de reves utilisant l\'intelligence artificielle. Les interpretations sont generees a des fins de divertissement uniquement.',
    terms_account_title: 'Compte Utilisateur',
    terms_account_content: 'Aucun compte n\'est requis. Un identifiant anonyme est genere automatiquement pour gerer vos credits et achats.',
    terms_ip_title: 'Propriete Intellectuelle',
    terms_ip_content: 'Tous les contenus de l\'application (textes, images, logos) sont la propriete d\'Oniro et proteges par les lois sur la propriete intellectuelle.',
    terms_premium_title: 'Abonnement Premium',
    terms_premium_content: 'L\'abonnement Premium est facture de maniere hebdomadaire. Vous pouvez annuler a tout moment depuis les parametres de votre compte App Store ou Google Play.',
    terms_liability_title: 'Limitation de Responsabilite',
    terms_liability_content: 'Les interpretations fournies sont generees par IA et ne constituent pas des conseils medicaux, psychologiques ou therapeutiques. Consultez un professionnel pour toute preoccupation de sante mentale.',
    terms_changes_title: 'Modifications',
    terms_changes_content: 'Nous nous reservons le droit de modifier ces conditions. Les utilisateurs seront informes des changements importants.',
    terms_contact_title: 'Contact',
    terms_contact_content: 'Pour toute question, contactez-nous a contact@mcsedition.org',

    // Disclaimer
    disclaimer_title: 'Avertissement Important',
    disclaimer_content: 'Les interpretations de reves fournies par Oniro sont generees par intelligence artificielle a des fins de divertissement uniquement. Elles ne constituent en aucun cas un avis medical, psychologique ou therapeutique.'
  },
  en: {
    // Navigation
    nav_home: 'Home',
    nav_features: 'Features',
    nav_how_to_use: 'How to Use',
    nav_privacy: 'Privacy',
    nav_terms: 'Terms',
    nav_contact: 'Contact',

    // Hero
    hero_title: 'Oniro',
    hero_subtitle: 'Your personal AI-powered dream interpreter',
    hero_description: 'Discover the hidden meaning of your dreams with artificial intelligence. Get personalized interpretations and unique illustrations.',
    btn_download: 'Download',
    btn_learn_more: 'Learn More',

    // Features
    features_title: 'Features',
    features_subtitle: 'Everything you need to explore your dreams',
    feature_1_title: 'AI Interpretation',
    feature_1_desc: 'Our AI analyzes your dream and provides a detailed interpretation with key symbols.',
    feature_2_title: 'Generated Images',
    feature_2_desc: 'Visualize the symbolic essence of your dream with unique artistic illustrations.',
    feature_3_title: 'Dream Journal',
    feature_3_desc: 'Save all your dreams and their interpretations in your personal journal.',
    feature_4_title: 'Voice Input',
    feature_4_desc: 'Tell your dream out loud, Oniro transcribes it automatically.',
    feature_5_title: 'Multilingual',
    feature_5_desc: 'Available in French and English, with more languages coming soon.',
    feature_6_title: 'Social Sharing',
    feature_6_desc: 'Share your dreams and their images on Instagram, TikTok and other networks.',

    // Footer
    footer_description: 'Explore the mysterious world of your dreams with the help of artificial intelligence.',
    footer_product: 'Product',
    footer_legal: 'Legal',
    footer_support: 'Support',
    footer_copyright: '2024 Oniro. All rights reserved.',

    // How to use page
    howto_title: 'How to Use Oniro',
    howto_subtitle: 'Complete guide to interpreting your dreams',
    howto_step1_title: 'Tell your dream',
    howto_step1_desc: 'Type or dictate your dream in the text area. The more detailed you are, the better the interpretation.',
    howto_step2_title: 'Choose a visual style',
    howto_step2_desc: 'Select from 4 artistic styles: Dreamy, Artistic, Realistic or Abstract.',
    howto_step3_title: 'Start interpretation',
    howto_step3_desc: 'Press the button to launch the AI analysis of your dream.',
    howto_step4_title: 'Discover the results',
    howto_step4_desc: 'Explore the interpretation, key symbols, mystic advice and generated image.',
    howto_step5_title: 'Save and share',
    howto_step5_desc: 'Find your dreams in the journal and share them on social networks.',

    // Privacy page
    privacy_title: 'Privacy Policy',
    privacy_subtitle: 'Last updated: December 2024',
    privacy_intro: 'At Oniro, we respect your privacy. This policy explains how we collect, use and protect your data.',
    privacy_collect_title: 'Data Collected',
    privacy_collect_content: 'We only collect data necessary for the application to function: the text of your dreams, generated images, and an anonymous device identifier for credit management.',
    privacy_use_title: 'Use of Data',
    privacy_use_content: 'Your dreams are sent to our server for AI interpretation. Data is processed securely and is not shared with third parties.',
    privacy_storage_title: 'Storage',
    privacy_storage_content: 'Your dreams are stored locally on your device. Data on our servers is kept only for the time necessary for processing.',
    privacy_rights_title: 'Your Rights',
    privacy_rights_content: 'You can delete your local data at any time by uninstalling the application. For any request regarding your data, contact us.',
    privacy_contact_title: 'Contact',
    privacy_contact_content: 'For any questions about this policy, contact us at contact@mcsedition.org',

    // Terms page
    terms_title: 'Terms of Service',
    terms_subtitle: 'Last updated: December 2024',
    terms_accept_title: 'Acceptance of Terms',
    terms_accept_content: 'By using Oniro, you agree to these terms. If you do not agree, please do not use the application.',
    terms_service_title: 'Service Description',
    terms_service_content: 'Oniro is a dream interpretation application using artificial intelligence. Interpretations are generated for entertainment purposes only.',
    terms_account_title: 'User Account',
    terms_account_content: 'No account is required. An anonymous identifier is automatically generated to manage your credits and purchases.',
    terms_ip_title: 'Intellectual Property',
    terms_ip_content: 'All content in the application (texts, images, logos) is the property of Oniro and protected by intellectual property laws.',
    terms_premium_title: 'Premium Subscription',
    terms_premium_content: 'The Premium subscription is billed weekly. You can cancel at any time from your App Store or Google Play account settings.',
    terms_liability_title: 'Limitation of Liability',
    terms_liability_content: 'Interpretations provided are AI-generated and do not constitute medical, psychological or therapeutic advice. Consult a professional for any mental health concerns.',
    terms_changes_title: 'Changes',
    terms_changes_content: 'We reserve the right to modify these terms. Users will be notified of important changes.',
    terms_contact_title: 'Contact',
    terms_contact_content: 'For any questions, contact us at contact@mcsedition.org',

    // Disclaimer
    disclaimer_title: 'Important Disclaimer',
    disclaimer_content: 'Dream interpretations provided by Oniro are generated by artificial intelligence for entertainment purposes only. They do not constitute medical, psychological or therapeutic advice in any way.'
  }
};

// Current language
let currentLang = localStorage.getItem('oniro-lang') || 'fr';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Set initial language
  setLanguage(currentLang);

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.textContent = nav.classList.contains('active') ? '✕' : '☰';
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav) nav.classList.remove('active');
      if (mobileMenuBtn) mobileMenuBtn.textContent = '☰';
    });
  });

  // Language switcher buttons
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      setLanguage(lang);
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Add scroll animations
  observeElements();
});

// Set language
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('oniro-lang', lang);

  // Update language switcher buttons
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Get translation
function t(key) {
  return translations[currentLang][key] || translations['en'][key] || key;
}

// Observe elements for scroll animations
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .step, .info-box').forEach(el => {
    observer.observe(el);
  });
}

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.boxShadow = 'none';
  }

  lastScroll = currentScroll;
});
