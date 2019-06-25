from flask import *
import smtplib, ssl

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/mobile")
def mobile():
    return render_template("mobile/home.html")
