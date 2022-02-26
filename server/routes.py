from auth import *
import json
from server import app
from flask import request

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
