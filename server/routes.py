from auth import *
import json
from server import app
from flask import request

@app.route('/signup', methods=['POST'])
def user_signup():
    req = request.get_json()
    res = user_signup(req['email'], req['full_name'], req['password'])
    if res is not {}:
        return json.dumps(res)
    else:
        return ''



    
