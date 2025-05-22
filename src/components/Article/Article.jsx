import { withHighlight } from '../WithHighlight';

function Article({ title, views }) {
  return (
    <div className="item item-article">
      <h3><a href="#">{title}</a></h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
}

export const HighlightedArticle = withHighlight(Article);
