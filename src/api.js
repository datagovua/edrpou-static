import React from 'react';
import Helmet from 'react-helmet';


export const Api = () => {
  return (
    <div className="container">
      <Helmet title="Про API" />

      <div className="steps">
        <ul>
          <li>
            <div className="section">
              <h3>Що це?</h3>
              <p>Це сервер API-доступу до відкритих даних Єдиного державного реєстру юридичних осіб</p>
            </div>
          </li>
          <li>
            <div className="section">
              <h3>New! GraphQL</h3>
              <p>GraphQL - це принципово новий підхід до надання програмного інтерфейсу, що був представлений компанією Facebook у 2015 році. На відміну від REST, доступ до даних надається не за допомогою окремих ресурсів, а через єдиний URL у вигляді графа.</p>
              <p>Точка доступу до ЄДР GraphQL API знаходиться тут: <a href="/graphql">/graphql</a></p>
            </div>
          </li>
          <li>
            <div className="section">
              <h3>Приклад використання</h3>
              <p>Пагінація: <a href="http://edr.data-gov-ua.org/api/companies?limit=10&skip=20&sort=id">/api/companies?limit=10&skip=20&sort=id</a></p>
              <p>Пошук: <a href='http://edr.data-gov-ua.org/api/companies?where={"officialName":{"contains":"комунальне"}}'>{'/api/companies?where={"officialName":{"contains":"комунальне"}}'}</a></p>
            </div>
          </li>
          <li>
            <div className="section">
              <h3>Документація</h3>
              <p>Документація знаходиться за адресою: <a href="http://edr.data-gov-ua.org/docs/#!/default/get_companies">http://edr.data-gov-ua.org/docs/#!/default/get_companies</a></p>
            </div>
          </li>
          <li>
            <div className="section">
              <h3>Сирцевий код</h3>
              <p>
                Хочете запустити на власному сервері? Завітайте на <a href="https://github.com/datagovua/edrpou-api">GitHub-сторінку</a>.
              </p>
              <p>
                Сирцевий код надається за <a href="https://github.com/datagovua/edrpou-api/blob/master/LICENCE.md">ліцензією MIT</a>.
              </p>
            </div>
          </li>
          <li>
            <div className="section">
              <h3>Корректність інформації</h3>
              <p>
                Інформація надається "ЯК Є". Тобто цей сервіс не несе відповідальності за неповноту, некорректність інформації або шкоду, що завдана використанням цього сервісу.
              </p>
              <p>
                На даний момент цей ресурс знаходиться у тестовій  експлуатації та надається з метою заохочувати використання відкритих даних та відкритого коду в Україні.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
