import { HighlightedVideo } from '../Video';
import { HighlightedArticle } from '../Article';

export function List({ list }) {
  return (
    <>
      {list.map((item) => {
        const key = item.type === 'video' 
          ? `video-${item.url}` 
          : `article-${item.title}`;

        switch (item.type) {
          case 'video':
            return <HighlightedVideo key={key} {...item} />;
          case 'article':
            return <HighlightedArticle key={key} {...item} />;
          default:
            return null;
        }
      })}
    </>
  );
}
