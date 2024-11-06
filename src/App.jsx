import React from "react";
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
  return (
    <div className="App">
      <div className="Header_site">
        <div className="cabecalho">
          <img
            src={logo}
            alt=""
            style={{ width: 101, height: 94, flexShrink: 0 }}
          />
          <nav>
            <p>DesenrolaJá</p>
            <a href="/home">Home</a>
            <a href="/sobre">Sobre</a>
            <a href="/servico">Serviços</a>
            <a href="/ctt2">Contato</a>
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
          {" "}
          Me chamo Orea Seca e trabalho de pedreiro desde os 15 anos, já tenho
          mais de 20 anos de experiência na área, tendo feito todo tipo de
          serviço.
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="240"
        viewBox="0 0 375 240"
        fill="none"
        className="botao_saiba"
      >
        <g filter="url(#filter0_dddddd_1_232)">
          <path d="M80 2H295V60H80V2Z" fill="#F5B91E" />
        </g>
        <text
          x="50%"
          y="14%"
          text-anchor="middle"
          dominant-baseline="middle"
          fill="#313131"
          font-family="AlfaSlab"
          font-size="18px"
          font-weight="400"
        >
          Saiba mais
        </text>
        <defs>
          <filter
            id="filter0_dddddd_1_232"
            x="0"
            y="0.703704"
            width="375"
            height="239.296"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.85185" />
            <feGaussianBlur stdDeviation="1.57407" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0.0240741 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_232"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="8.14815" />
            <feGaussianBlur stdDeviation="3.25926" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0.0392593 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1_232"
              result="effect2_dropShadow_1_232"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="6.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_dropShadow_1_232"
              result="effect3_dropShadow_1_232"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="38.5185" />
            <feGaussianBlur stdDeviation="12.7407" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0.0607407 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_dropShadow_1_232"
              result="effect4_dropShadow_1_232"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="64.8148" />
            <feGaussianBlur stdDeviation="23.4259" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0.0759259 0"
            />
            <feBlend
              mode="normal"
              in2="effect4_dropShadow_1_232"
              result="effect5_dropShadow_1_232"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="100" />
            <feGaussianBlur stdDeviation="40" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect5_dropShadow_1_232"
              result="effect6_dropShadow_1_232"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect6_dropShadow_1_232"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <div className="img_oreacara">
        <img
          src={cara_oreia}
          alt=""
          style={{ width: 548, height: 591, flexShrink: 0 }}
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="234"
        height="91"
        viewBox="0 0 234 91"
        fill="none"
        className="seta"
      >
        <path
          d="M96.5714 13.3471L96.0637 12.4855L96.5714 13.3471ZM87.2857 89.7447L87.1026 90.7278L87.2857 89.7447ZM3 71.6099L11.3196 63.6026L0.225236 60.4012L3 71.6099ZM233.768 77.9146C220.15 61.5893 196.964 38.7219 171.63 23.1731C146.363 7.66516 118.581 -0.783689 96.0637 12.4855L97.0791 14.2086C118.562 1.54897 145.422 9.43429 170.584 24.8777C195.679 40.2802 218.707 62.9813 232.232 79.1957L233.768 77.9146ZM96.0637 12.4855C68.3624 28.8097 60.1761 47.211 62.0383 62.2817C63.886 77.2347 75.6301 88.5908 87.1026 90.7278L87.4688 88.7616C76.8804 86.7893 65.7674 76.1521 64.0232 62.0364C62.2935 48.0385 69.7804 30.2955 97.0791 14.2086L96.0637 12.4855ZM87.1026 90.7278C95.4523 92.2831 102.98 87.0603 108.537 78.882C114.118 70.6688 117.914 59.2218 118.818 47.6204C119.722 36.0237 117.745 24.1378 111.617 15.1183C105.454 6.04633 95.1736 0 79.7857 0V2C94.5764 2 104.207 7.77022 109.963 16.2422C115.755 24.7667 117.706 36.1521 116.824 47.465C115.943 58.7733 112.24 69.8742 106.883 77.758C101.502 85.6768 94.6548 90.1001 87.4688 88.7616L87.1026 90.7278ZM79.7857 0C36.2058 0 13.0122 37.7363 4.54941 62.6373L6.44304 63.2808C14.8343 38.5902 37.5595 2 79.7857 2V0Z"
          fill="#F5B91E"
        />
      </svg>

      <div className="exp_borda">
        <h2>Experiência em:</h2>
        <p>Alvenaria | Escavação | Pisos | Reboco | Telhados</p>{" "}
        <p>Acabamentos Finos e muito mais </p>
      </div>
      <section className="melhores_servicos">
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
            <img src={banheiro} alt="Predinho" />
            <p>Banheiro</p>
            <p>★★★★★</p>
          </div>
          <div className="servico_item">
            <img src={telhado} alt="Forja" />
            <p>Telhado</p>
            <p>★★★★★</p>
          </div>
          <div className="servico_item">
            <img src={casa} alt="Casarão" />
            <p>Casa Completa</p>
            <p>★★★★★</p>
          </div>
        </div>
        <button className="btn_saiba">Explore Tudo</button>
      </section>
      <section className="como_trabalho">
        <h2>
          Como <span>Trabalho</span>
        </h2>
        <div className="trabalho_items">
          <div className="trabalho_item">
            <h3>Agenda de Horários</h3>
            <p>
              Agendar horário a partir do site para orçamento, verificar
              disponibilidade de horários e dias
            </p>
            <button className="btn_saiba">Saiba Mais</button>
          </div>
          <div className="trabalho_item">
            <h3>Orçamentos</h3>
            <p>
              Serviços simples como colocar pisos, rebocar paredes, fazer
              aterramento entre outros possuem o preço tabelado por dia de
              serviço, coisas mais complexas necessitam de orçamento
            </p>
            <button className="btn_saiba">Saiba Mais</button>
          </div>
          <div className="trabalho_item">
            <h3>Planejamento</h3>
            <p>
              Para serviços mais complexos será necessário um período de até 1
              semana entre o orçamento e o início das obras por conta do
              planejamento que será feito com acompanhamento do cliente
            </p>
            <button className="btn_saiba">Saiba Mais</button>
          </div>
        </div>
      </section>
      <section className="comentarios_clientes">
        <h2>
          Comentários de <span>Clientes</span>
        </h2>
        <div className="comentario_item">
          <img src={cliente} alt="cliente" />
          <div className="comentario_texto">
            <p class="avaliacao_texto">"Esse caba é bão."</p>
            <p class="descricao_trabalho">
              Chamei ele lá em casa pra o bicho desenrolar um banheiro novo e
              ele resolveu tudo certo e ainda pedi tbm pra ele rebocar a parede
              do quarto de mainha e ele fez isso num dia só, RECEBA!! :D
            </p>
            <p class="avaliacao_estrelas">★★★★★</p>
            <p class="autor_avaliacao">- Sr. Reseba</p>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="card">
          <h2>Reparos</h2>
          <p className="price">R$150/Dia</p>
          <ul>
            <li>Armador Padrão</li>
            <li>Pequenos Reajustes</li>
            <li>Trocar Azulejos</li>
            <li>Rebaixar Gesso em Serviços</li>
            <li>Alinhamento</li>
          </ul>
          <button>Quero esse!</button>
        </div>

        <div className="card highlight-card">
          <h2>Serviços Simples</h2>
          <p className="price">R$300/Dia</p>
          <ul>
            <li>Rebocar Paredes</li>
            <li>Alinhamento Fino</li>
            <li>Acabamento</li>
            <li>Levantar Muros</li>
            <li>Colocar Metais</li>
            <li>Mais...</li>
          </ul>
          <button>Quero esse!</button>
        </div>

        <div className="card">
          <h2>Personalizado</h2>
          <p className="price">R$: A Combinar</p>
          <ul>
            <li>Serviço mais complexo ou sob medida</li>
            <li>Discussão de preço com o cliente</li>
            <li>Orçamento feito conforme necessidades</li>
          </ul>
          <button>Quero esse!</button>
        </div>
      </section>

      <section className="faq">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h3>
            <span className="faq-icon">-</span> Você realiza orçamentos
            gratuitos?
          </h3>
          <p>
            O Primeiro orçamento é gratuito, já os posteriores serão cobrados o
            valor simbólico de R$25,00
          </p>
        </div>
        <div className="faq-item">
          <h3>
            <span className="faq-icon">+</span> Você fornece o material ou o
            cliente precisa comprar?
          </h3>
        </div>
        <div className="faq-item">
          <h3>
            <span className="faq-icon">+</span> Quais formas de pagamento você
            aceita?
          </h3>
        </div>
        <div className="faq-item">
          <h3>
            <span className="faq-icon">+</span> Você faz limpeza do local após a
            conclusão dos trabalhos?
          </h3>
        </div>
      </section>

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
    </div>
  );
}

export default App;
