export default function() {
  //this.urlPrefix = 'http://localhost:4200';
  //this.namespace = '/';


  this.get('/books', function(db, request) {
    return {
      //Hace el map porque tiene que generar la estructura del JSONAPI con el (type, id y atributtes)
      data: db.books.map(attrs => (
        {type: 'books', id: attrs.id, attributes: attrs }
      ))
    }
  });

  this.get('/books/:id', function (db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'books',
        id: id,
        attributes: db.books.find(id)
      }
    };
  })

  //Aqui proceso el agregar por "UN" libro
  this.post('/books', function (db, request) {
    let attrs = JSON.parse(request.requestBody).data;
    let record = db.books.insert(attrs.attributes);
    return {
      data: {
        type: 'books',
        id: record.id,
        attributes: attrs.attributes
      }
    };
  });
  // These comments are here to help you get started. Feel free to delete them.

  this.patch('/books/:id', function (db, request) {
    let id = request.params.id;
    let attrs = JSON.parse(request.requestBody).data;
    let record = db.books.update(id, attrs.attributes);

    return {
      data: {
        type: 'books',
        id: id,
        attributes: attrs.attributes
      }
    };
  })


  this.del('/books/:id', function (db, request) {
    var id = request.params.id;
    db.books.remove(id);
    return {};
  }, 204);



  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
