import logo from './logo.svg';
import './App.css';
import Simpsons from "./components/simpsons/Simpsons";
import RickAndMorty from "./components/rickandmorty/RickAndMorty"

function App() {
    return (
        <div className="App">
            {/*First task*/}
            {/*<Simpsons
                name={'Homer'}
                desc={'Homer Jay Simpson (born May 12, 1956) is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him.'}
                img={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
            />
            <Simpsons
                name={'Marge'}
                desc={'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. Marge is 37 years of age. She and her husband Homer have three children: Bart, Lisa, and Maggie.'}
                img={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
            />
            <Simpsons
                name={'Bart'}
                desc={'Bartholomew "Bart" Jojo Simpson (born April 1 or February 23) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie.'}
                img={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
            />
            <Simpsons
                name={'Lisa'}
                desc={'Lisa Marie Simpson (born May 9) is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}
                img={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
            />
            <Simpsons
                name={'Maggie'}
                desc={'Margaret Evelyn Lenny "Maggie" Simpson (born January 12, 1989) is the 1-year old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons.'}
                img={'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'}
            />*/}
            {/*Second task*/}

            <RickAndMorty
                id = {'43'}
                name = {'Big Morty'}
                status = {'Dead'}
                species = {'Human'}
                gender = {'Male'}
                image = {'https://rickandmortyapi.com/api/character/avatar/43.jpeg'}
            />
            <RickAndMorty
                id = {'2'}
                name = {'Morty Smith'}
                status = {'Alive'}
                species = {'Human'}
                gender = {'Male'}
                image = {'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
            />
            <RickAndMorty
                id = {'19'}
                name = {'Antenna Rick'}
                status = {'unknown'}
                species = {'Human'}
                gender = {'Male'}
                image = {'https://rickandmortyapi.com/api/character/avatar/19.jpeg'}
            />
            <RickAndMorty
                id = {'12'}
                name = {'Alexander'}
                status = {'Dead'}
                species = {'Human'}
                gender = {'Male'}
                image = {'https://rickandmortyapi.com/api/character/avatar/12.jpeg'}
            />
            <RickAndMorty
                id = {'221'}
                name = {'Melissa'}
                status = {'Alive'}
                species = {'Mythological Creature'}
                gender = {'Female'}
                image = {'https://rickandmortyapi.com/api/character/avatar/221.jpeg'}
            /><RickAndMorty
                id = {'751'}
                name = {'Changeformer'}
                status = {'Dead'}
                species = {'Robot'}
                gender = {'Male'}
                image = {'https://rickandmortyapi.com/api/character/avatar/751.jpeg'}
            />
        </div>
    );
}

export default App;
