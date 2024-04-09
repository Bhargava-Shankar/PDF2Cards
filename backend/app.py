import os
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
from werkzeug.datastructures import ImmutableMultiDict 
from flask_cors import CORS

UPLOAD_FOLDER = './files'
ALLOWED_EXTENSIONS = {'pdf'}

app = Flask(__name__)
UPLOAD_FOLDER = os.path.join(".", "files")
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

@app.post('/summarize')
def summarize():
    file = request.files
    pdfFile = file.getlist('files[]')[0]
    file_name = secure_filename(pdfFile.filename)
    pdfFile.save(os.path.join(app.config['UPLOAD_FOLDER'], file_name))

    #code to convert summarize pdf
    return {
        "hello" : "hello"
    }
@app.post('/display')
def display():
    print("hello")
    return {'hello' : 'hello'}