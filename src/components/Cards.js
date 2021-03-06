import {useState} from 'react'
import Card from './Card'

function Cards(){
    const axbecherLink = 'https://raw.githubusercontent.com/axbecher/memory-game/main/public';    
    
    const [items, setItems] = useState([
        {id: 1, img: axbecherLink +'/img/epicGames.png', stat: ""},
        {id: 1, img: axbecherLink +'/img/epicGames.png', stat: ""},
        {id: 2, img: axbecherLink +'/img/killHouseGames.png', stat: ""},
        {id: 2, img: axbecherLink +'/img/killHouseGames.png', stat: ""},
        {id: 3, img: axbecherLink +'/img/mojang.png', stat: ""},
        {id: 3, img: axbecherLink +'/img/mojang.png', stat: ""},
        {id: 4, img: axbecherLink +'/img/riot-games.png', stat: ""},
        {id: 4, img: axbecherLink +'/img/riot-games.png', stat: ""},
        {id: 5, img: axbecherLink +'/img/rockstarGames.png', stat: ""},
        {id: 5, img: axbecherLink +'/img/rockstarGames.png', stat: ""},
        {id: 6, img: axbecherLink +'/img/saberInteractive.png', stat: ""},
        {id: 6, img: axbecherLink +'/img/saberInteractive.png', stat: ""},
        {id: 7, img: axbecherLink +'/img/steam.png', stat: ""},
        {id: 7, img: axbecherLink +'/img/steam.png', stat: ""},
        {id: 8, img: axbecherLink +'/img/ubisoftToronto.png', stat: ""},
        {id: 8, img: axbecherLink +'/img/ubisoftToronto.png', stat: ""}
    ].sort(() => Math.random()-0.5))
    

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setPrev(-1)
        }
        else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() =>{
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }   

    return (
        <div className="">
            <div className="">
            <div className="container">
                {items.map((item, index) => (
                        <Card key = {index} item={item} id={index} handleClick={handleClick} />
                    ))
                }
        </div>
            </div>
        </div>
        
    )
}
    

export default Cards