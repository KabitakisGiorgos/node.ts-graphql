import { buildSchema } from "graphql";
import * as thingSchema from './schemas/thing';

module.exports=buildSchema(`
    ${thingSchema.Thing}
    ${thingSchema.ThingInputData}
    ${thingSchema.ThingUpdateData}

    type Query{
        ${thingSchema.ThingQueries}
    }

    type Mutation{
        ${thingSchema.ThingMutations}
    }
    
    schema{
        query:Query
        mutation:Mutation
    }
`);

//Also subscriptions exist in order to set up realtime connection via Websocket

//We have POST ->/graphql route and from there the Type/Query/Mutation/Subscription 
//definitions => resolvers(contain server-side logic)