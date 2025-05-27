import {useLocation } from 'react-router-dom';

export default function HashWatcher() {
  const location = useLocation();
  const hash = location.hash; // включает `#`

  return hash.replace('#', '');
}