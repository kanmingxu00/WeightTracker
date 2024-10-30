from flask import Blueprint, request

# Create a Blueprint for the views
main = Blueprint('main', __name__)

@main.route('/')
def home():
    return "Hello, Flask from a different file!"

@main.route('/users', methods = ['GET'])
def getUsers():
    response = {
        'users': ['kan', 'jim']
    }
    return response, 200

@main.route('/users', methods = ['POST'])
def addUser():
    data = request.get_json()
    username = data.get("username")
    # create
    response = {
        'user': 'username'
    }
    return response, 200


# Put path for user's weight on date 
@main.route('/addWeight', methods = ['PUT'])
def addWeight():
    data = request.get_json()
    username = data.get("username")
    weight = data.get("weight")
    date = data.get("date")



