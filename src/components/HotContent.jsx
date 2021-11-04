import React from 'react'
import ListHotContent from './ListHotContent'
import "../styles/hotcontent.css"

const HotContent = () => {
    return (
        <section className="container">
            <div className="hotcontent">
                <ListHotContent />
                <ListHotContent />
            </div>
        </section>
    )
}

export default HotContent
