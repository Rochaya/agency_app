import React from 'react'
import { Link } from 'react-router-dom';
import studyData from '../data/data.json'

export default function Works() {
  return (
    <div className='flex items-center flex-col w-full'>
        {studyData.map((data, index) => (
            <div key={index}>
                <h1 className=''>{data.client}</h1>
                <h2>{data.title}</h2>
                <Link to={`/works/${data.url}`}>Lire l'etude</Link>
            </div>
        ))}
    </div>
  );
}
