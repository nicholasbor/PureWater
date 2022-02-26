import os
import jwt
from dotenv import load_dotenv
from server import db
from database import User
import re
from datetime import datetime, timedelta
import bcrypt

load_dotenv()

SECRET_KEY = os.environ.get("SECRET_KEY")

VALIDATE_EMAIL= r'^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'

def encode_token(u_id):
    try:
        payload = {
            'exp': datetime.utcnow() + timedelta(hours=12),
            'sub': u_id
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
        return token
    except Exception as e:
        return e

def decode_token(token):
    try:
        payload = jwt.decode(token, SECRET_KEY)
        u_id = payload['sub']
        return u_id
    except Exception as e:
        return e

def bcrypt_password(password):
    saltRound = 10
    salt = bcrypt.gensalt(rounds=saltRound)
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password

def check_hashed_pass(hashed_password, password):
    return bcrypt.checkpw(password, hashed_password)


# =========== USER AUTHENTICATION ===========
def user_signup(email, full_name, password):
    if not re.search(VALIDATE_EMAIL, email):
        return {}
    if User.query.filter_by(email=email).first() is not None:
        return {}

    hashed_password = bcrypt_password(password)
    user = User(email, full_name, hashed_password)
    db.session.add(user)
    db.session.commit()
    token = encode_token(user.id)
    return {
        'token': token
    }
    
def user_login(email, password):
    if not re.search(VALIDATE_EMAIL, email):
        return {}
    user = User.query.filter_by(email=email).first()
    if user is None:
        return {}

    if check_hashed_pass(user.password, password.encode('utf-8')):
        token = encode_token(user.id)
        return {
            'token': token
        }
    else:
        return {}


    