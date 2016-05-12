import React from 'react';
export class Home extends React.Component {
  render() {
    return (
      <div className="default-page">
        <div className="header">
          <h1 id="main-title" className="container">API сервер "ЄДР"</h1>
          <h3 className="container">Це сервер API-доступу до відкритих даних Єдиного державного реєстру юридичних осіб</h3>
        </div>
        <div className="main container clearfix">
          <ul className="getting-started">
            <li className="clearfix">
              <div className="step">
                <h3>Приклад використання</h3>
                <p>Пагінація: <a href="http://edr.data-gov-ua.org/api/companies?limit=10&skip=20&sort=id">/api/companies?limit=10&skip=20&sort=id</a></p>
                <p>Пошук: <a href='http://edr.data-gov-ua.org/api/companies?where={"officialName":{"contains":"комунальне"}}'>{'/api/companies?where={"officialName":{"contains":"комунальне"}}'}</a></p>
              </div>
            </li>
            <li className="clearfix">
              <div className="step">
                <h3>Документація</h3>
                <p>Документація знаходиться за адресою: <a href="http://edr.data-gov-ua.org/docs/#!/default/get_companies">http://edr.data-gov-ua.org/docs/#!/default/get_companies</a></p>
              </div>
            </li>
            <li className="clearfix">
              <div className="step">
                <h3>Сирцевий код</h3>
                <p>
                  Хочете запустити на власному сервері? Завітайте на <a href="https://github.com/datagovua/edrpou-api">GitHub-сторінку</a>.
                </p>
                <p>
                  Сирцевий код надається за <a href="https://github.com/datagovua/edrpou-api/blob/master/LICENCE.md">ліцензією MIT</a>.
                </p>
              </div>
            </li>
            <li className="clearfix">
              <div className="step">
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
}
