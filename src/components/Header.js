import React from 'react'
import {Dropdown} from 'react-bootstrap';
function Header(){
    const axbecherLink = 'https://raw.githubusercontent.com/axbecher/memory-game/main/public'; 

    return (

        <div className="myHeader btn-group">
        
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Axbecher.com
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="https://axbecher.com/">Home</Dropdown.Item>
                <Dropdown.Item href="https://axbecher.com/about/">About</Dropdown.Item>
                <Dropdown.Item href="https://axbecher.com/portfolio/">Portfolio</Dropdown.Item>
                <Dropdown.Item href="https://axbecher.com/contact/">Contact</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Memory Game Info
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item target="_blank" href="https://www.epicgames.com/store/en-US/">  <img src={axbecherLink+"/img/epicGames.png"} alt="Epic Games"></img> Epic Games</Dropdown.Item>
                <Dropdown.Item href="https://inthekillhouse.com/"> <img src={axbecherLink+"/img/killHouseGames.png"} alt="KillHouse Games"></img> KillHouse Games</Dropdown.Item>
                <Dropdown.Item href="https://www.minecraft.net/en-us"> <img src={axbecherLink+"/img/mojang.png"} alt="Mojang"></img> Mojang</Dropdown.Item>
                <Dropdown.Item href="https://www.riotgames.com/en"> <img src={axbecherLink+"/img/riot-games.png"} alt="Riot Games"></img> Riot Games</Dropdown.Item>
                <Dropdown.Item href="https://www.rockstargames.com/"> <img src={axbecherLink+"/img/rockstarGames.png"} alt="Rockstar Games"></img> Rockstar Games</Dropdown.Item>
                <Dropdown.Item href="https://twitter.com/tweetssaber"> <img src={axbecherLink+"/img/saberInteractive.png"} alt="Saber Interactive"></img> Saber Interactive</Dropdown.Item>
                <Dropdown.Item href="https://store.steampowered.com/"> <img src={axbecherLink+"/img/steam.png"} alt="Steam"></img> Steam</Dropdown.Item>
                <Dropdown.Item href="https://www.ubisoft.com/en-gb/"> <img src={axbecherLink+"/img/ubisoftToronto.png"} alt="Ubisoft Toronto"></img> Ubisoft Toronto</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
        
        
    )
}

export default Header;