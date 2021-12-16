from flask_mail import Message, smtplib
from flaskapp import mail, db
from flaskapp.models import User_history
from flask_login import current_user
import os

#https://pythonhosted.org/Flask-Mail/
def send_email(subject,content,recipients):


    with mail.connect() as conn:
        for user in recipients:

            html_message = content
            subject = content
            msg = Message(recipients=[user],
                        html=html_message,
                        subject=subject)

            sender = os.environ.get('EMAIL_ID')
            user_history = User_history(sender_email_id=sender,recipient_email_id=user,subject=subject,content=content)

            try:
                conn.send(msg)
                user_history.status = 'Success'

            except smtplib.SMTPRecipientsRefused as e:
                pass
            finally:
                db.session.add(user_history)
                db.session.commit()