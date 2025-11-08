import { delay } from "../utils";
import type { MemoryGame, MemoryGameCard } from "./MemoryGame";
import { difference, sample } from 'lodash';


export async function play(model: MemoryGame,memoryFaculty: number = 0.5){
    console.log('PLAY CALLED');

    let nonWinningCards = model.getCards().filter(card => !model.isWinningCard(card.blueprint));
    
    if (nonWinningCards.length === 0)   return ;
    
    let memory: MemoryGameCard[] = [];
    //let penalized = false;

    /*model.setEventListeners({
        penalized: async () => {penalized = true;}
    });*/

    while(!model.hasWonGame()){
        let card: MemoryGameCard;

        memory = memory.filter(card => !model.isWinningCard(card.blueprint));
        nonWinningCards = model.getCards().filter(card => !model.isWinningCard(card.blueprint));    //length cannot be 0 if model.hasWonGame is not true
        const nonOpenedCards = nonWinningCards.filter(card => !card.visible);

        if (memory.length === 0){
            card = sample(nonOpenedCards) as MemoryGameCard;
            console.log('Empty, selected random card');
        }
        else{
            const toCompleteBlueprint = (sample(memory) as MemoryGameCard).blueprint;
            const cards = memory.filter(card => card.blueprint === toCompleteBlueprint);
            console.log('Not Empty, selected random blueprint to complete',toCompleteBlueprint);
            for (const card of cards){
                await model.openCard(...card.position);
                await delay(700);
                console.log('Opened blueprint card');
            }
            
            if (model.isWinningCard(toCompleteBlueprint)){
                console.log('Blueprint complete');
                continue;
            }

            console.log('On random card, to complete blueprint');
            card = sample(difference(nonWinningCards,cards)) as MemoryGameCard;
        }

        await delay(1500);
        //penalized = false;
        await model.openCard(...card.position);
        console.log('Random opened');

        console.log('On memorize');
        if (Math.random() < memoryFaculty){
            memory.push(card);
            console.log('Actually memorized');
        }
        console.log('On memorize complete');
    }
}
