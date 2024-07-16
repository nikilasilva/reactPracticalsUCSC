import React from 'react'
import Card from './card'

const CardList = ({ cards }) => {
    return (
        <div style={styles.CardList}>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} content={card.content}/>
            ))}
        </div>
    );
};

const styles = {
    cardList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
};

export default CardList;