import React from 'react';
import game_show from "../data/game_show";
import CardThumbnail from './CardThumbnail'
import "../styles/hotcontent.css";

const ListHotContent = () => {

    return (
        <section className="section-hotcontent">
            <h2 className="head-hotcontent">{game_show.title}</h2>
            <h2 className="subhead-hotcontent">{game_show.subtitle}</h2>
            <div className="list-of-hotcontent">
                {
                    game_show.list.map((item, index) => {
                        return <CardThumbnail {...item} index={index} key={index} />
                    })
                }
            </div>

        </section>
    )
}

export default ListHotContent
