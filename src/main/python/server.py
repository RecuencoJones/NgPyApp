from flask import Flask, jsonify, render_template
from flask.ext.cors import CORS
from flask.ext.pymongo import PyMongo
from bson.json_util import dumps

app = Flask(__name__, static_url_path='')
cors = CORS(app, resources=r'/api/*', allow_headers='Content-Type')
mongo = PyMongo(app)

@app.route("/", methods=['GET'])
def home():
    return render_template('index.html')


@app.route("/api/values", methods=['GET'])
def values():
    values_list = mongo.db.values.find({})  # cursor
    return dumps(values_list)


@app.route("/api/add/<value>", methods=['POST'])
def add(value):
    mongo.db.values.insert({"id": value})
    return jsonify(result={"id": value})

@app.route("/api/del/<value>", methods=['DELETE'])
def delete(value):
    mongo.db.values.remove({"id": value})
    return jsonify(result="done")

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def internal_error(e):
    return render_template('500.html'), 500


if __name__ == "__main__":
    app.run(debug=True)