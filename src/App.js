import React from 'react';
import './App.css';
import Blok from './components/Bloks/Bloks';

export default function App() {
  const comp = [
    { id: 1122, name: 'Мышь A4Tech X-710BK Black USB', price: '1 040', imgUrl: "https://avatars.mds.yandex.net/get-mpic/1522540/img_id4369455899017577509.jpeg/x166_trim", title: "Picture 1", },
    { id: 1123, name: 'Жесткий диск Western Digital WD Blue 1 TB', price: '2 720', imgUrl: "https://avatars.mds.yandex.net/get-mpic/1363210/img_id3651655580325549390.jpeg/x166_trim", title: "Picture 2", },
    { id: 1143, name: 'Ватные Наушники Sennheiser CX 300-II', price: '1 805', imgUrl: "https://avatars.mds.yandex.net/get-mpic/96484/img_id4312372189086290058/x166_trim", title: "Picture 3", },
    { id: 1153, name: 'Материнская плата MSI B450M-A PRO MAX', price: '4 190', imgUrl: "https://avatars.mds.yandex.net/get-mpic/1705137/img_id6098971499742664389.jpeg/x166_trim", title: "Picture 4", },
  ]
  return (
    <div>
      {comp.map(o => <Blok name={o.name} price={o.price} imgUrl={o.imgUrl} title={o.title}/>)}
    </div>
  )
}