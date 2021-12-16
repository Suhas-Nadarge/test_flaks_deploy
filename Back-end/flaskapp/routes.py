from flaskapp import app ,db ,bcrypt , api,send_mail
from flask import request
from  flaskapp.models import User
from flask_login import login_user , current_user , logout_user , login_required
from flask_jsonpify import jsonify
from flask_restful import Resource 


@app.route("/")
def index():
    # send_mail.send_email()
    return jsonify({'text':'Home Page'}) 


@app.route("/register",methods=['GET','POST'])
def register():


    data = request.get_json()

    if request.method == 'POST':

        if current_user.is_authenticated:
            return jsonify({'status':'fail','massage':'user is already logged in'}) , 404


        username = data['username']
        email = data['email']
        password = data['password']
        
        user = User.query.filter_by(username=username).first()

        if user:
            return jsonify({'status': 'fail', 'message': 'User already registered.'}), 500
        
        user = User.query.filter_by(email=email).first()

        if user:
            return jsonify({'status': 'fail', 'message': 'User already registered.'}) ,500


        hashed_passwd = bcrypt.generate_password_hash(password).decode('utf-8')

        user = User(username=username,email=email,password=hashed_passwd)
        db.session.add(user)
        db.session.commit()

        massage = f"User {username} successfully added " , 200

        return jsonify({'status': 'success', 'message': massage})

    return jsonify({'data':'something'}) , 500


@app.route("/login",methods=['POST'])
def login():
    

    data = request.get_json()

    if current_user.is_authenticated:
            return jsonify({'status':'fail','massage':'user is already logged in'}) ,500
    
    email = data['email']
    password = data['password']

    user = User.query.filter_by(email=data['email']).first()
    
    if user and bcrypt.check_password_hash(user.password,password):
        login_user(user)
        massage = f"User {username} logged in "
        return jsonify({'status':'success','massage':massage}) ,200
    else:
        return jsonify({'status':'fail','massage':'something went wrong'}), 401

    return jsonify({'data':'something'})

@app.route("/logout",methods=['POST'])
def logout():
    logout_user()
    return  jsonify({'status':'success','massage':'logged out'})


@app.route("/send_email",methods=['GET','POST'])
@login_required
def send_email():
    
    data = request.get_json()

    subject = data['subject']
    email_body = data['email_body']
    recipients = data['recipients']


    send_mail.send_email(subject,email_body,recipients)

    massage = f"Send Email opreation done "

    return jsonify({'status': 'success', 'message': massage})