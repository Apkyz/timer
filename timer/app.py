from flask import Flask, render_template

app = Flask(__name__,template_folder='templates', static_folder='statics')


@app.route("/")
def timer():
    return render_template("timer.html")