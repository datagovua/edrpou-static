import React from "react";
import { Link } from 'react-router'
import Helmet from 'react-helmet';
import { SearchBox, Hits, HitsStats, NoHits, Layout,
  LayoutBody, TopBar, LayoutResults, ActionBar, ActionBarRow,
  Pagination, InitialLoader, SideBar, RefinementListFilter,
  SelectedFilters, ResetFilters
  } from 'searchkit';


const InitialLoaderComponent = (props) => (
  // TODO props.bemBlocks.item() doesn't work in SSR
  //<div className={props.bemBlocks.item().mix(props.bemBlocks.container("item"))}>
  <div className="sk-no-hits">  Завантажується, почекайте...</div>
  //</div>
)

const CompanyRow = (props) => {
  const {bemBlocks, result} = props
  const company = result._source;
  company.name = company.name.trim();
  if (company.name === "-"  || company.name === "НЕМАЄ" ||
      company.name === "НЕМАЭ" || company.name === "НЕ МАЄ") {
    company.name = undefined;
  }
  const html = (company.name||company.officialName);

  return (
    <div className={bemBlocks.item().mix(bemBlocks.container("item"))} data-qa="hit">
      <div className="sk-hits-list-hit__subtitle">
        {company.edrpou}
      </div>&nbsp;
      <Link to={ `/organizations/${company.edrpou}` } >
        <div data-qa="title" className={bemBlocks.item("title")}
             dangerouslySetInnerHTML={{__html:html}}>
        </div>
      </Link>
    </div>
  );
}

const Search = (props) => {
  return (<div>
    <Helmet
      title="Пошук"
    />
    <Layout>
      <TopBar>
        <SearchBox
          autofocus={true}
          searchOnChange={true}
          prefixQueryFields={["name^1","mainPerson^2","address","officialName^10", "edrpou"]}
        />
      </TopBar>
      <LayoutBody>

      <SideBar>
        <RefinementListFilter id="status" title="Статус" field="status.raw" operator="OR" size={10}/>
        <RefinementListFilter id="occupation" title="Діяльність" field="occupation.raw" operator="OR" size={10}/>
      </SideBar>
      <LayoutResults>
      <ActionBar>

          <div className="sk-action-bar__info">
            <HitsStats/>
          </div>
          <div className="sk-action-bar__filters">
            <SelectedFilters/>
            <ResetFilters/>
          </div>

      </ActionBar>
        <div>
          <Pagination showNumbers={true}/>
        </div>
        <Hits mod="sk-hits-list" hitsPerPage={18} itemComponent={CompanyRow}
            sourceFilter={["edrpou", "name", "officialName"]}/>
        <InitialLoader component={InitialLoaderComponent}/>
        <NoHits/>
        <div>
          <Pagination showNumbers={true}/>
        </div>
      </LayoutResults>
      </LayoutBody>
    </Layout>
  </div>);
};

export default Search;
