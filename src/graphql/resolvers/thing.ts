import Thing from '../../api/thing/thing.model';
import { errorName } from '../../utils/errors';

class ThingResolver {
  public thing = function(input, req: Request) {
    let id = input.id;
    return new Promise((resolve, reject) => {
      Thing.findById(id)
        .exec()
        .then(thing => {
          if (!thing) reject(new Error(errorName['404']));
          else resolve(thing);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  public things = function() {
    return Thing.find((err, entities) => {
      return entities;
    });
  };

  public createThing = (input, req: Request) => {
    let payload = input.thingInput;
    return Thing.create(payload);
  };

  public updateThing = (input, req: Request) => {
    let payload = input.thingInput;
    let id = input.id;

    return new Promise((resolve, reject) => {
      Thing.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
        runValidators: true
      })
        .exec()
        .then(thing => {
          resolve(thing);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  public deleteThing = (input, req: Request) => {
    let id = input.id;
    return new Promise((resolve, reject) => {
      Thing.findById(id)
        .exec()
        .then(thing => {
          if (!thing) reject(new Error(errorName['404']));
          else {
            return thing.remove(err => {
              if (err) reject(err);
              else resolve(thing);
            });
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  };
}

export default new ThingResolver();
