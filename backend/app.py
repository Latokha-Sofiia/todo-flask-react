from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import time
from datetime import date

app = Flask(__name__)
CORS(app)

client = app.test_client()

todos = [
    [
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
            'title': '123 todo',
            'state': 'open',
            'id': 3
        },
    ],

    [
        {
            'title': '11112 todo',
            'state': 'progress',
            'id': 4
        },
    ],
    [
        {
            'title': '3412412 todo',
            'state': 'done',
            'id': 5
        },
    ]
]

# Роуты
@app.route('/todos', methods=['GET'])
@cross_origin()
def get_todos():
    response = jsonify(todos)
    return response

@app.route('/todos', methods=['POST'])
@cross_origin()
def create_todos():
    new_todo = {
        'title': request.json['title'],
        'state': 'open',
        'id': time.time()
    }
    todos[0].append(new_todo)

    response = jsonify(todos)
    return response

@app.route('/todos/change', methods=['PATCH'])
@cross_origin()
def movr_todos():
    fromIndex = request.json['fromIndex']
    fromColumn = request.json['fromColumn']
    endIndex = request.json['endIndex']
    endColumn = request.json['endColumn']

    copyToDo = todos[fromColumn][fromIndex]
    del todos[fromColumn][fromIndex]
    todos[endColumn].insert(endIndex, copyToDo)

    response = jsonify(todos)
    return response


notes = [
    {
        'title': 'first note',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu slorem ipsum dolor sit amet',
        'date': 'Fri, 19 May 2023',
        'id': 1
    },
    {
        'title': 'first note',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu slorem ipsum dolor sit amet',
        'date': '17 apr 2022',
        'id': 2
    },
]

@app.route('/notes', methods=['GET'])
@cross_origin()
def get_notes():
    response = jsonify(notes)
    return response

@app.route('/notes', methods=['POST'])
@cross_origin()
def create_note():
    new_note = {
        'title': request.json['title'],
        'text': request.json['text'],
        'id': time.time(),
        'date': date.today()
    }
    notes.append(new_note)

    response = jsonify(notes)
    return response




if __name__ == '__main__':
    app.run()