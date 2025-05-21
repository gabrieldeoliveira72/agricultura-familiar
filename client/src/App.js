import React, { useState } from 'react';
import './App.css'; // Vamos criar este arquivo em seguida

function App() {
  const [activeTab, setActiveTab] = useState('producao');

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="app">
      <header>
        🌾 Agricultura Familiar Transparente
      </header>

      <main>
        <nav>
          <button 
            className={`tab-button ${activeTab === 'producao' ? 'active' : ''}`} 
            onClick={() => openTab('producao')}
          >
            🌽 Dados de Produção
          </button>
          <button 
            className={`tab-button ${activeTab === 'cadastro' ? 'active' : ''}`} 
            onClick={() => openTab('cadastro')}
          >
            📝 Cadastro de Produtores
          </button>
          <button 
            className={`tab-button ${activeTab === 'sindicatos' ? 'active' : ''}`} 
            onClick={() => openTab('sindicatos')}
          >
            🤝 Integração com Sindicatos
          </button>
          <button 
            className={`tab-button ${activeTab === 'pesquisa' ? 'active' : ''}`} 
            onClick={() => openTab('pesquisa')}
          >
            🔍 Pesquisa e Filtro
          </button>
          <button 
            className={`tab-button ${activeTab === 'relatorios' ? 'active' : ''}`} 
            onClick={() => openTab('relatorios')}
          >
            📊 Relatórios e Gráficos
          </button>
        </nav>

        <div id="producao" className={`tab-content ${activeTab === 'producao' ? 'active' : ''}`}>
          <h2>🌽 Exibição de Dados de Produção</h2>
          <ul>
            <li>Informações sobre tipos de cultivo (cereais, legumes, frutas, etc.).</li>
            <li>Volume produzido e sazonalidade de cada cultura.</li>
            <li>Localização geográfica das produções (exibição em mapa).</li>
            <li>Filtros por tipo de cultura, data de plantio e região.</li>
          </ul>
          <button className="btn">🌎 Visualizar Mapa</button>
          <button className="btn">🔄 Atualizar Dados</button>
        </div>

        <div id="cadastro" className={`tab-content ${activeTab === 'cadastro' ? 'active' : ''}`}>
          <h2>📝 Cadastro de Produtores</h2>
          <ul>
            <li>Cadastro com dados pessoais e da propriedade.</li>
            <li>Registro de tipos de cultivo e área de plantio.</li>
            <li>Atualização simples e rápida dos dados de produção.</li>
          </ul>
          <button className="btn">➕ Novo Cadastro</button>
          <button className="btn">✏️ Editar Produtor</button>
        </div>

        <div id="sindicatos" className={`tab-content ${activeTab === 'sindicatos' ? 'active' : ''}`}>
          <h2>🤝 Integração com sindicatos</h2>
          <ul>
            <li>Conexão com sindicatos locais para capacitação.</li>
            <li>Eventos de treinamento e políticas agrícolas.</li>
            <li>Comunicação direta entre produtores e sindicatos.</li>
          </ul>
          <button className="btn">📅 Ver Eventos</button>
          <button className="btn">💬 Falar com Sindicato</button>
        </div>

        <div id="pesquisa" className={`tab-content ${activeTab === 'pesquisa' ? 'active' : ''}`}>
          <h2>🔍 Pesquisa e Filtro de Dados</h2>
          <ul>
            <li>Busca por produtores ou tipos de cultura.</li>
            <li>Filtros por localização e sazonalidade.</li>
            <li>Filtros avançados como tipo, volume e qualidade da produção.</li>
          </ul>
          <button className="btn">🔎 Iniciar Pesquisa</button>
          <button className="btn">⚙️ Filtros Avançados</button>
        </div>

        <div id="relatorios" className={`tab-content ${activeTab === 'relatorios' ? 'active' : ''}`}>
          <h2>📊 Relatórios e Gráficos</h2>
          <ul>
            <li>Relatórios locais com gráficos comparativos por período.</li>
            <li>Exportação em PDF ou CSV.</li>
            <li>Gráficos de tendências de produção (crescimento, sazonalidade).</li>
          </ul>
          <button className="btn">📥 Exportar PDF</button>
          <button className="btn">📈 Ver Gráficos</button>
        </div>
      </main>

      <footer>
        Desenvolvido Pela Equipe 10 | 🌱 Since 2025
      </footer>
    </div>
  );
}

export default App;
