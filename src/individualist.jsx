// individualist.js - Certificate page for Individualist profile
document.addEventListener('DOMContentLoaded', function() {
  // Get URL parameters to check language and scores
  const urlParams = new URLSearchParams(window.location.search);
  const language = urlParams.get('lang') || 'nl';
  
  // Set scores (default to 100% if not provided)
  const idealistScore = parseInt(urlParams.get('idealist')) || 0;
  const loyalistScore = parseInt(urlParams.get('loyalist')) || 0;
  const pragmatistScore = parseInt(urlParams.get('pragmatist')) || 0;
  const individualistScore = parseInt(urlParams.get('individualist')) || 100;
  
  // Content for certificate based on language
  const content = {
    nl: {
      title: "Electio Certificaat",
      profileTitle: "De Individualist – Volgt eigen pad",
      description: "Deze persoon laat zich niet beïnvloeden door verwachtingen van anderen – maakt keuzes op basis van wat zij het belangrijkst vindt. Deze persoon heeft een sterke persoonlijkheid en volgt een eigen visie, zelfs als dat betekent dat soms tegen de stroom in wordt gegaan. Onafhankelijk en authentiek, maar waarschuwing: let op het behouden van belangrijke connecties.",
      traits: "Onafhankelijk, zelfverzekerd, ambitieus, rebels",
      dateLabel: "Datum:",
      scoreLabel: "Profiel Scores:",
      idealistLabel: "Idealist:",
      loyalistLabel: "Loyalist:",
      pragmatistLabel: "Pragmaticus:",
      individualistLabel: "Individualist:",
      poweredBy: "Aangedreven door Electio - Ontdek je morele kompas"
    },
    en: {
      title: "Electio Certificate",
      profileTitle: "The Individualist – Follows own path",
      description: "This person doesn't let themselves be influenced by others' expectations - makes choices based on what they find most important. They have a strong personality and follow their own vision, even if it means sometimes going against the flow. Independent and authentic, but caution: be careful not to lose important connections by always choosing your own way.",
      traits: "Independent, confident, ambitious, rebellious",
      dateLabel: "Date:",
      scoreLabel: "Profile Scores:",
      idealistLabel: "Idealist:",
      loyalistLabel: "Loyalist:",
      pragmatistLabel: "Pragmatist:",
      individualistLabel: "Individualist:",
      poweredBy: "Powered by Electio - Discover your moral compass"
    }
  };
  
  // Create the certificate HTML
  document.body.innerHTML = `
    <div class="certificate">
      <div class="certificate-header">
        <h1>${content[language].title}</h1>
      </div>
      
      <div class="certificate-content">
        <h2 class="profile-title">${content[language].profileTitle}</h2>
        
        <div class="certificate-description">
          <p>${content[language].description}</p>
        </div>
        
        <div class="certificate-traits">
          <p><strong>${content[language].traits}</strong></p>
        </div>
        
        <div class="certificate-scores">
          <h3>${content[language].scoreLabel}</h3>
          <div class="score-grid">
            <div class="score-item idealist">
              <span>${content[language].idealistLabel}</span>
              <div class="score-bar-container">
                <div class="score-bar" style="width: ${idealistScore}%"></div>
                <span class="score-value">${idealistScore}%</span>
              </div>
            </div>
            <div class="score-item loyalist">
              <span>${content[language].loyalistLabel}</span>
              <div class="score-bar-container">
                <div class="score-bar" style="width: ${loyalistScore}%"></div>
                <span class="score-value">${loyalistScore}%</span>
              </div>
            </div>
            <div class="score-item pragmatist">
              <span>${content[language].pragmatistLabel}</span>
              <div class="score-bar-container">
                <div class="score-bar" style="width: ${pragmatistScore}%"></div>
                <span class="score-value">${pragmatistScore}%</span>
              </div>
            </div>
            <div class="score-item individualist">
              <span>${content[language].individualistLabel}</span>
              <div class="score-bar-container">
                <div class="score-bar" style="width: ${individualistScore}%"></div>
                <span class="score-value">${individualistScore}%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="certificate-date">
          <p>${content[language].dateLabel} ${new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div class="certificate-footer">
        <p>${content[language].poweredBy}</p>
      </div>
    </div>
  `;
  
  // Add styles for the certificate
  const style = document.createElement('style');
  style.textContent = `
    body {
      font-family: 'Roboto', 'Open Sans', sans-serif;
      background-color: #F5F5F5;
      margin: 0;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    
    .certificate {
      background-color: white;
      border: 1px solid #DDD;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
      padding: 40px;
      position: relative;
      overflow: hidden;
    }
    
    .certificate::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(171, 71, 188, 0.1) 0%, transparent 50%);
      z-index: 0;
    }
    
    .certificate-header {
      text-align: center;
      position: relative;
      z-index: 1;
    }
    
    .certificate-header h1 {
      color: #333;
      margin-bottom: 30px;
      font-size: 36px;
      border-bottom: 3px solid #AB47BC;
      display: inline-block;
      padding-bottom: 10px;
    }
    
    .certificate-content {
      position: relative;
      z-index: 1;
    }
    
    .profile-title {
      color: #AB47BC;
      font-size: 28px;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .certificate-description {
      margin-bottom: 30px;
      font-size: 18px;
      line-height: 1.6;
      text-align: center;
    }
    
    .certificate-traits {
      margin-bottom: 30px;
      padding: 15px;
      background-color: rgba(171, 71, 188, 0.1);
      border-radius: 8px;
      text-align: center;
      font-size: 20px;
    }
    
    .certificate-scores {
      margin-bottom: 30px;
    }
    
    .certificate-scores h3 {
      margin-bottom: 15px;
      font-size: 22px;
      color: #333;
    }
    
    .score-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
    }
    
    .score-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    
    .score-item span {
      flex: 0 0 150px;
      font-weight: 500;
      font-size: 18px;
    }
    
    .score-bar-container {
      flex: 1;
      height: 25px;
      background-color: #EEE;
      border-radius: 12px;
      position: relative;
      overflow: hidden;
      margin-left: 20px;
    }
    
    .score-bar {
      height: 100%;
      border-radius: 12px;
      position: relative;
    }
    
    .idealist .score-bar {
      background-color: #66BB6A;
    }
    
    .loyalist .score-bar {
      background-color: #42A5F5;
    }
    
    .pragmatist .score-bar {
      background-color: #FFA726;
    }
    
    .individualist .score-bar {
      background-color: #AB47BC;
    }
    
    .score-value {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      color: #333;
      font-weight: 700;
    }
    
    .certificate-date {
      text-align: right;
      margin-bottom: 40px;
      font-style: italic;
      font-size: 16px;
    }
    
    .certificate-footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #DDD;
      font-size: 14px;
      color: #777;
      position: relative;
      z-index: 1;
    }
    
    @media print {
      body {
        background-color: white;
        padding: 0;
      }
      
      .certificate {
        box-shadow: none;
        border: none;
        padding: 0;
      }
    }
  `;
  document.head.appendChild(style);
});