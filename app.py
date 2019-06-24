from flask import *
import smtplib, ssl

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

