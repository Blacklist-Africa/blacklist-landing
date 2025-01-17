import * as React from "react";

export interface BreadcrumbsElement {
  link: string;
  title: string;
}

export interface BreadcrumbsProps {
  parent: BreadcrumbsElement;

  child?: Partial<BreadcrumbsElement>;
}

const isMobile = window.innerWidth <= 768;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ parent, child }) => {
  return (
    <nav className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <a href="/">
              {isMobile ? <i className="bi bi-house"></i> : "Home"}
            </a>
          </li>
          <li className={!child ? "current" : ""}>
            {!child ? parent.title : <a href={parent.link}>{parent.title}</a>}
          </li>
          {child && <li className={"current"}>{child.title}</li>}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
