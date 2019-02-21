export let Thing = `

"Description About Thing"
type Thing {
    "The identification of the thing"
    id: String!
    "The name of the thing"
    name: String!
    "The info of the thing"
    info: String!
    "The active of the thing"
    active: Boolean
}`;

export let ThingInputData = `
"thing input data"
input ThingInputData{
    name: String!
    info: String!
    active: Boolean
}`;

export let ThingUpdateData = `
input ThingUpdateData{
    name: String
    info: String
    active: Boolean
}`;

export let ThingQueries = `
    "A type that describes the user. Its description might not "
    thing(id: String!): Thing
    things: [Thing]
`;

export let ThingMutations = `
    "Create a thing" 
    createThing( "test" thingInput:  ThingInputData ):Thing!
    "Update a thing"
    updateThing(id:String!,thingInput:ThingUpdateData!):Thing!
    "delete a thing"
    deleteThing(id:String!):Thing
`;


//ADD comments to Introspection