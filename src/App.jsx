import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo_orea.png";
import cara_oreia from "./assets/images/cara_orea.png";
import muro from "./assets/images/muro.jpg";
import banheiro from "./assets/images/banheiro.jpg";
import telhado from "./assets/images/telhado.jpg";
import casa from "./assets/images/casa.jpg";
import cliente from "./assets/images/luvadepedreiro.jpg";
import "./css/fonts.css";
import "./css/styles.css";
import "./App.scss";

function App() {
  const [expandedFAQ, setExpandedFAQ] = useState(null); // Usar useState para controlar a expansão do FAQ

  const toggleFAQ = (index) => {
    // Alterna entre expandir e colapsar a FAQ
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="App">
      <div className="Header_site">
        <div className="cabecalho">
          <img
            src={logo}
            alt="Logo"
            style={{ width: 101, height: 94, flexShrink: 0 }}
          />
          <nav>
            <p>DesenrolaJá</p>
            <a href="#">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#servico">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
      <section className="text_oreia">
        <p>Oferecendo o Melhor </p>
        <div className="servico">Serviço</div>
      </section>

      <div className="resumo_oreia">
        <p>
          Me chamo Orea Seca e trabalho de pedreiro desde os 15 anos, já tenho
          mais de 20 anos de experiência na área, tendo feito todo tipo de
          serviço.
        </p>
      </div>

      <div className="img_oreacara">
        <img
          src={cara_oreia}
          alt="Orea"
          style={{ width: 548, height: 591, flexShrink: 0 }}
        />
      </div>

      <section className="melhores_servicos">
        <section id="servico">
          <h2>
            Melhores <span>Serviços</span>
          </h2>
          <div className="servicos_container">
            <div className="servico_item">
              <img src={muro} alt="Muro Simples" />
              <p>Muro Simples</p>
              <p>★★★★★</p>
            </div>
            <div className="servico_item">
              <img src={banheiro} alt="Banheiro" />
              <p>Banheiro</p>
              <p>★★★★★</p>
            </div>
            <div className="servico_item">
              <img src={telhado} alt="Telhado" />
              <p>Telhado</p>
              <p>★★★★★</p>
            </div>
            <div className="servico_item">
              <img src={casa} alt="Casa Completa" />
              <p>Casa Completa</p>
              <p>★★★★★</p>
            </div>
          </div>
          <button className="btn_saiba">Explore Tudo</button>
        </section>
      </section>

      <section className="faq">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h3 onClick={() => toggleFAQ(0)}>
            <span className="faq-icon">{expandedFAQ === 0 ? "-" : "+"}</span>
            Você realiza orçamentos gratuitos?
          </h3>
          <div className={`faq-answer ${expandedFAQ === 0 ? "expanded" : ""}`}>
            {expandedFAQ === 0 && (
              <p>
                O Primeiro orçamento é gratuito, já os posteriores serão
                cobrados o valor simbólico de R$25,00
              </p>
            )}
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleFAQ(1)}>
            <span className="faq-icon">{expandedFAQ === 1 ? "-" : "+"}</span>
            Você fornece o material ou o cliente precisa comprar?
          </h3>
          <div className={`faq-answer ${expandedFAQ === 1 ? "expanded" : ""}`}>
            {expandedFAQ === 1 && (
              <p>
                Em serviços simples, o cliente deve fornecer o material. Para
                serviços mais complexos, podemos fornecer o material mediante
                orçamento.
              </p>
            )}
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleFAQ(2)}>
            <span className="faq-icon">{expandedFAQ === 2 ? "-" : "+"}</span>
            Quais formas de pagamento você aceita?
          </h3>
          <div className={`faq-answer ${expandedFAQ === 2 ? "expanded" : ""}`}>
            {expandedFAQ === 2 && (
              <p>
                Eu aceito pagamentos via transferência bancária, PIX, e
                dinheiro.
              </p>
            )}
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleFAQ(3)}>
            <span className="faq-icon">{expandedFAQ === 3 ? "-" : "+"}</span>
            Você faz limpeza do local após a conclusão dos trabalhos?
          </h3>
          <div className={`faq-answer ${expandedFAQ === 3 ? "expanded" : ""}`}>
            {expandedFAQ === 3 && (
              <p>
                Sim, sempre faço uma limpeza básica no local após finalizar o
                serviço.
              </p>
            )}
          </div>
        </div>
      </section>

      <section id="contato">
        <footer>
          <h2>Se você gostou e deseja me contratar</h2>
          <button>Contato</button>
          <div className="footer-info">
            <p>DesenrolaJá</p>
            <p>© 2024 DryBer SMF. All Rights Reserved</p>
            <ul>
              <li>
                <a href="/insta">Instagram Profissional</a>
              </li>
              <li>
                <a href="/link">LinkedIn</a>
              </li>
              <li>
                <a href="/tik">TikTok</a>
              </li>
              <li>
                <a href="/ytb">Youtube</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/te">Termos e condições</a>
              </li>
              <li>
                <a href="/pp">Política de privacidade</a>
              </li>
              <li>
                <a href="/ctt">Contato</a>
              </li>
            </ul>
            <p>Contato: (851) 707070-707070</p>
            <p>Email: ORSL_SMF@gmail.com</p>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
