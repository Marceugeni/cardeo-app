import Card from './Card'

const CardList = ({ cards }) => {

    return (
        cards.map(card => {
            return <Card /* key={card} */ card={card} />
        })
    )

}

export default CardList;