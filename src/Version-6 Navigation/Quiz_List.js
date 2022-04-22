import React, { useState } from 'react'
import './style.css';
import Card from './Card';
import Search from './Search';
import './card.css'
const quiz_list = [
    {
        img: '../quiz_images/img1.png',
        point: 'language',
        catagory: "Language"
    },
    {
        img: '../quiz_images/img4.jpg',
        point: "mathematics",
        catagory: "Mathematics"
    },
    {
        img: '../quiz_images/img2.jpg',
        point: 'music',
        catagory: "Music"
    },
    {
        img: '../quiz_images/img3.jpg',
        point: 'geography',
        catagory: "Geography"
    }, {
        img: '../quiz_images/img5.jpg',
        point: 'entertainment',
        catagory: "Entertainment"
    }, {
        img: '../quiz_images/img6.jpg',
        point: 'general',
        catagory: "General Knowledge"
    }

]

function Quiz_List() {
    const [search, setSearch] = useState();

    const mainList = quiz_list.filter((x) => {
        return x.point.startsWith(search)
    })
    const mainQuiz = quiz_list.map((x, y) => {
        return <Card key={y} point={x.point} image={x.img} subject={x.catagory} />
    })
    const result = mainList.map((x, y) => {
        return <Card key={y} point={x.point} image={x.img} subject={x.catagory} />
    })


    return (
        <div>
            <Search handlechange={(e) => setSearch(e.target.value)} />
            <div className="cardContainer">
                {result.length === 0 ? mainQuiz : result}
            </div>
        </div >
    )
}

export default Quiz_List
