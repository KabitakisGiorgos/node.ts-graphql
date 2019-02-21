
# Node.ts / GraphQL Server Example 

An example project with node typescript and GraphQL.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need to have installed:
>node.js (tested with v10.14.2)
>mongodb
### Installing

npm i (to install the dependencies)
## Running the project

Open a terminal and run mongodb with command **mongod**

Hit at a console in the project directory **npm run start** and you are ready to go.
Visit [localhost:4000/graphql  ](localohost:4000/graphql) to see the graphql qui in order to make requests to the server


### Examples
**Create a thing**

    mutation{
     createThing(thingInput: {
        name: "TestName",
        info: "Some Info",
      	active:true
      })
      {
        id,
        name,
        info,
        active
      }
    }

**Retrieve a thing by id**

      query{thing(id:"-id here-"){
    	  id,
    	  name,
          active
          info
        }}

**Retrieve all things**

    query{things{
      id,
      name,
      active
      info
    }}

**Delete a thing by id**

    mutation{deleteThing(id:"-id here-"){
      id,
      name,
      info,
	  active
    }}

**Delete a thing by id**

   

     mutation{updateThing(id:"-id here-",thingInput:{
          name:"test",
        }){
          id,
          name,
          info,
	     active
	 }}
