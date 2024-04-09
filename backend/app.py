import os
import torch
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
from werkzeug.datastructures import ImmutableMultiDict 
import google.generativeai as genai
from flask_cors import CORS
from pypdf import PdfReader 
UPLOAD_FOLDER = './files'
ALLOWED_EXTENSIONS = {'pdf'}
from dotenv import load_dotenv
load_dotenv()

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
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file_name)
    pdfFile.save(file_path)
    print(pdfFile)
    #code to summarize pdf
    reader = PdfReader(file_path)
    #creata a file and append the text to it
    with open(f"{file_path[:-4]}.txt","a") as file:
        for page in reader.pages:
            file.write(page.extract_text())
    #get file data and call google api
    with open(f"{file_path[:-4]}.txt","r") as file:
        #call google api here
        api_keu = os.environ["API_KEY"]
        genai.configure(api_key=os.environ['API_KEY'])
        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content('Please summarise this document for last node study purposes: ...'+file.read())
        print(response.text)
        return {
            "response" : response.text
        }

    return {"status": "failure"}

@app.post('/display')
def display():
    print("hello")
    return {'hello' : 'hello'}