from flask import Blueprint, request

from database.user_manager import addOrUpdateUserWeight, createUser, getUserWeights

# Create a Blueprint for the views
main = Blueprint('main', __name__)

@main.route('/')
def home():
    return "Hello, Flask from a different file!"

@main.route('/users', methods = ['GET'])
def getUsers():
    rows = getUserWeights()
    response = {}
    for row in rows:
        print(row)
        response[row[0]] = row[1] if len(row) == 2 else 0
    return response, 200

@main.route('/users', methods = ['POST'])
def addUser():
    data = request.get_json()
    username = data.get("username")
    createUser(username)
    # create
    response = {
        'user': username
    }
    return response, 200

@main.route('/addWeight/<username>', methods = ['PUT'])
def addWeight(username):
    data = request.get_json()
    weight = data.get("weight")
    addOrUpdateUserWeight(username, weight)
    response = {
        'user': username,
        'weight': weight
    }
    return response, 200

@main.route('/users/<username>', methods = ['DELETE'])
def deleteUser(username):
    deleteUser(username)
    response = {
        'user': username,
    }
    return response, 200
