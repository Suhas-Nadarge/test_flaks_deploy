from flask_mail import Message
from flaskapp import mail


#https://pythonhosted.org/Flask-Mail/
def send_email():

    users = ['shubham.patne1625@gmail.com','nadargesuhas@gmail.com']

    with mail.connect() as conn:
        for user in users:
            message = f"Hello , Sending Mail to {user} ... Through Flask API"
            subject = f"hello, {user}   .... Testing Subject"
            msg = Message(recipients=[user],
                        body=message,
                        subject=subject)

            
            conn.send(msg)