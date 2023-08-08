import React from 'react'
import { useParams } from 'react-router-dom'
import studyData from '../data/data.json'


export default function StudyCase() {

    const { studyUrl } = useParams();
    const data = studyData.find(data => data.url === studyUrl);

    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
    )
}
