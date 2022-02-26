from server import db

db.metadata.clear()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    full_name = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __init__(self, email, full_name, password):
        self.email = email
        self.full_name = full_name
        self.password = password