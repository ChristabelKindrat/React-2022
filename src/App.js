// import logo from './logo.svg';
import './App.css';
import Simpsons from "./components/Simpsons";
import Characters from "./components/Characters";

function App() {
    return (
        <div className="wrapper">
            <div className={'Simpsons'}>
                <h1>The Simpsons Family</h1>
                <Simpsons
                    name={'Homer Jay Simpson'}
                    info={'He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he does not. He also serves as the main protagonist of the The Simpsons Movie.'}
                    image={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
                />

                <Simpsons name={'Marge Simpson'}
                          info={'Marge Bouvier was born on in Capital City to Clancy Bouvier, a photographer-turned-steward, and Jacqueline Bouvier. She is the youngest daughter of the Bouvier family. She has a pair of older sisters, the joyless twins, Patty, and Selma, both of whom passionately disapprove of Homer.'}
                          image={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
                />
                <Simpsons name={'Bartholomew JoJo Simpson'}
                          info={'Even at a young age, Bart has accomplished many feats. He has won an award for his Angry Dad web series, he has discovered a new comet which was named after him, and he also has performed in a successful band with Milhouse Van Houten, Nelson Muntz, and Ralph Wiggum.'}
                          image={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
                />
                <Simpsons name={'Lisa Marie Simpson'}
                          info={'Is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}
                          image={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
                />
                <Simpsons name={'Margaret Evelyn Lenny Simpson'}
                          info={'Despite being the only member of the Simpson family who hasn\'t actually learned how to speak, Maggie is in no way one-dimensional and has different personality layers. She appears to be somewhat detached from the rest of her family and is once described as "the forgotten Simpson" by Homer. When she, Bart and Lisa were shipped to a foster home at the Flanders\' after their parents were deemed unfit, Maggie was the quickest to adapt and almost joined them until Marge called for her and Maggie "became a Simpson again."'}
                          image={'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png/revision/latest?cb=20201222215325'}
                />
            </div>
            <div className={'TheRickandMorty'}>
                <h1>The Rick and Morty Characters</h1>
                <Characters
                    id={'1'}
                    name={'Rick Sanchez'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
                />
                <Characters
                    id={'2'}
                    name={'Morty Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
                />
                <Characters
                    id={'3'}
                    name={'Summer Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Female'}
                    image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
                />
                <Characters
                    id={'4'}
                    name={'Beth Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Female'}
                    image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
                />
                <Characters
                    id={'5'}
                    name={'Jerry Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
                />
                <Characters
                    id={'6'}
                    name={'Abadango Cluster Princess'}
                    status={'Alive'}
                    species={'Alien'}
                    gender={'Female'}
                    image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
                />

            </div>

        </div>
    );
}

export default App;
