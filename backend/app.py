from flask import Flask
from views.routes import main
from flask_cors import CORS
from database.user_manager import create_database

app = Flask(__name__)
cors = CORS(app, origins=['http://localhost:3000'])
app.config['CORS_HEADERS'] = 'Content-Type'

# Register the blueprint
app.register_blueprint(main)

if __name__ == '__main__':
    print("Creating database1...")  
    create_database()
    app.run(debug=True)
