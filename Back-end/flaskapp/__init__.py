from flask import Flask , request
from flask_cors import CORS , cross_origin 
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

# For API
from flask_restful import Api

app = Flask(__name__)
api = Api(app)


CORS(app)

app.config['SECRET_KEY'] = '5792b192471948d429ad8339f6416749'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
# 'mysql://username:password@localhost/db_name'
db = SQLAlchemy(app)

#for passswd hash
bcrypt = Bcrypt(app)

# to handle user login
login_manager = LoginManager(app)
# to tell where to check login view
login_manager.login_view = 'login'


from flaskapp import routes