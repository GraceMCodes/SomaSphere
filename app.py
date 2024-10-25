from flask import Flask, render_template, request, redirect, url_for, session, flash
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # For session management

# mysql configuration.
db = mysql.connector.connect(
    host= 'localhost';,
    user='root';,
    password= '';,#this is where I will put my password
    database ='SomaSphere'
)
cursor = db.cursor()