from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import time

app = Flask(__name__)
CORS(app)

client = app.test_client()

todos = [
    {
        'title': 'бэкенд',
        'state': 'open',
        'id': 1
    },
    {
        'title': '12 todo',
        'state': 'open',
        'id': 2
    },
    {
        'title': '11112 todo',
        'state': 'progress',
        'id': 3
    },
    {
        'title': '3412412 todo',
        'state': 'done',
        'id': 4
    },
    {
        'title': '123 todo',
        'state': 'open',
        'id': 5
    },
]

# Роуты
@app.route('/todos', methods=['GET'])
def get_todos():
    response = jsonify(todos)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/todos', methods=['POST'])
@cross_origin()
def create_todos():
    new_todo = {
        'title': request.json['title'],
        'state': 'open',
        'id': time.time()
    }
    todos.append(new_todo)

    response = jsonify(todos)
    return response




if __name__ == '__main__':
    app.run()