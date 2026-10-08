import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const Breadcrumb = ({ items, label }) => (
  <nav aria-label={label} className="wrap pt-8" data-testid="breadcrumb">
    <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm font-semibold text-mut">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <Fragment key={item.path}>
            <li className="inline-flex min-h-[44px] items-center">
              {last ? (
                <span aria-current="page" className="text-ink">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="link-sweep transition-colors duration-200 hover:text-brand">
                  {item.name}
                </Link>
              )}
            </li>
            {!last && (
              <li aria-hidden="true" className="inline-flex items-center">
                <ChevronRight size={14} />
              </li>
            )}
          </Fragment>
        );
      })}
    </ol>
  </nav>
);
