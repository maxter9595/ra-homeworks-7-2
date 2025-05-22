import { useState } from 'react';
import { List } from './components/List';
import videoData from './data/videos.json';

export default function App() {
  const [list] = useState(videoData);
  return <List list={list} />;
}
