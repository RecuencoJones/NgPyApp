# NgPyApp
This repository contains a Python Flask + AngularJS based project for testing

HTTP methods summary
---------------

| Verb | URI | Method | Definition |
|------------|--------------|-------------|------------|
| __GET__     | /                    | __def__ home()        | Returns index.html file |
| __GET__     | /api/values          | __def__ values()      | Returns a list of stored values |
| __POST__    | /api/add/:__value__  | __def__ add(value)    | Adds a new value to the DB |
| __DELETE__  | /api/del/:__value__  | __def__ delete(value) | Removes a value from the DB |

Wishlist
---------------

- Token based authentication
- User registration

1. Requirements
==============

- Python
- Pip tool
- MongoDB

2. Installation
==============

- run `pip install -r requirements.txt`

This will install all necesary dependencies:

- Flask 0.10.1
- Flask-Cors 1.10.2
- Flask-Pymongo 0.3.0
- Jinja2 2.7.3
- cryptography 0.7.2
- pymongo 2.8

3. Deployment
==============
 Console 1
--------------
- `$> mongod` run MongoDB deamon

Console 2
---------------
- `$> cd <project_folder>` place yourself at the app root directory
- `$> python src/main/python/server.py` run the server
- open [http://localhost:5000](http://localhost:5000) in browser
