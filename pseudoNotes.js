//methods needed: 
    //Create a New Deck
    //Open a Deck
    //Draw a Card

//******************************************************************** */
//create a new deck: 
//******************************************************************** */

    // provide an endpoint that would create the standard 52 card deck of French playing cards
        //all 13 ranks in each of the four suits. 
            //spades(), clubs(), diamonds(), and hearts()
        //NO JOKER

    //Allow a way to shuffle the created deck.
    
    
    //ability to CREATE a SHORT deck
        //32 cards
            // remove ranks with all suits 2 through 6 




    // REQUEST: 
        // the request should allow the following specifications for the deck:
// {
//     `type`: `full`,
//     `shuffled`: true,
// }


    // RESPONSE:

        // The response should include the following: 
            //DECK ID (UUID)
            //Deck type: FULL/SHORT (STRING)
            //Deck properties like shuffled (BOOLEAN)
            //Total Cards remaining in the deck(Integer)

    // {
    //     'deckId': 'uniqueIdHere',
    //     'type': 'FULL'
    //     'Shuffled': true,
    //     'remaining': 52
    // }

//******************************************************************** */
 // OPEN A DECK:
//******************************************************************** */
   
        // return a given deck that matches the specidified UUID. The method will 'open the deck'
            //list all cards by the order they were added to the deck, the shuffling should remain consistent and not change with each call/ open

        // the response needs to return a JSON that included: 
            //deckID: UUID (string)
            // deckType: FULL/SHORT (string)
                // could convert this to a boolean as well

            // shuffled state(boolean)

            // total cards remaining in deck(integer)
            // ALL the remaining cards (card object)

                //clarify last two points and the differences?

            
                // {
                //     "deckId": "521b0293-01f7-44c2-9990-27079eb2352d",
                //     "type": "FULL",
                //     "shuffled": true,
                //     "remaining": 3,
                //     "cards": [
                //     {
                //     "value": "ACE",
                //     "suit": "SPADES",
                //     "code": "AS"
                //     },
                //     {
                //     "value": "KING",
                //     "suit": "HEARTS",
                //     "code": "KH"
                //     },
                //     {
                //     "value": "10",
                //     "suit": "SPADES",
                //     "code": "10S"
                //     },
                //     {
                //     "value": "8",
                //     "suit": "CLUBS",
                //     "code": "8C"
                //     }
                //     ]
                //    }
    

//******************************************************************** */
 // Draw a Card:
//******************************************************************** */

    // draw a card from a given deck. 
    // throw error if not deck given. 
    // count paramater needs to be provided to define how many cards to draw from the deck.
    //the cards should be drawn from top.
    // response needs to include

        //all the drawn cards (card object):
             
        // {
        //     "cards": [
        //     {
        //     "value": "ACE",
        //     "suit": "SPADES",
        //     "code": "AS"
        //     },
        //     {
        //     "value": "KING",
        //     "suit": "HEARTS",
        //     "code": "KH"
        //     },
        //     ]
        //    }



//******************************************************************** */
 // Bonus Points:
//******************************************************************** */
    //Use docker 
    //Use any DB 
    //Provide unit and integration tests 




