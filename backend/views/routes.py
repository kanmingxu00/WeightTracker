from flask import Blueprint

# Create a Blueprint for the views
main = Blueprint('main', __name__)

@main.route('/')
def home():
    return "Hello, Flask from a different file!"