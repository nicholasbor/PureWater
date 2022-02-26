from auth import *
import json
from server import app
from flask import request
from dotenv import load_dotenv
load_dotenv()

SECRET_KEY = os.environ.get("SECRET_KEY")

@app.route('/auth/signup', methods=['POST'])
def signup():
    req = json.loads(request.data)
    res = user_signup(req['email'], req['full_name'], req['password'])
    if res is not {}:
        return json.dumps(res)
    else:
        return ''

@app.route('/auth/login', methods=['POST'])
def login():
    req = request.get_json()
    res = user_login(req['email'], req['password'])
    if res is not {}:
        return json.dumps(res)
    else:
        return ''

@app.route('/auth/verify', methods=['GET'])
def verify():
    token = request.headers.get('token')
    if not token:
        return False
    try:
        jwt.decode(token, SECRET_KEY, algorithms="HS256")
        return json.dumps(True)
    except jwt.ExpiredSignatureError:
        return ''
    except jwt.DecodeError:
        return ''