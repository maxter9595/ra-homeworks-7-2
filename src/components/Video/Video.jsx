import { withHighlight } from '../WithHighlight';

function Video({ url, views }) {
  return (
    <div className="item item-video">
      <iframe 
        src={url} 
        frameBorder="0" 
        allow="autoplay; encrypted-media" 
        allowFullScreen
        title="Video player"
      />
      <p className="views">Просмотров: {views}</p>
    </div>
  );
}

export const HighlightedVideo = withHighlight(Video);
