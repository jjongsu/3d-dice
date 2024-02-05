import { Dice } from './components/diceBox.js';
import './App.css';

Dice.init().then(() => {
    console.log('load');
    Dice.show().roll(['2d20', '1d6']);
    // clear dice on click anywhere on the screen
    document.addEventListener('mousedown', () => {
        const diceBoxCanvas = document.getElementById('dice-canvas');
        if (diceBoxCanvas && diceBoxCanvas.getAttribute('display') !== 'none') {
            Dice.hide().clear();
        }
    });
});

function App() {
    const onRoll = () => {
        // 2d20 : 주사위 2개, 면 20개
        // 1d6 : 주사위 1개, 면 6개
        Dice.show().roll(['2d20', '1d6']);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Dice.onRollComplete = (results: any) => {
        console.log(results);
    };

    return (
        <div className='app'>
            <h1>3d 주사위 굴리기</h1>
            <button onClick={onRoll}>roll dice</button>
        </div>
    );
}

export default App;
