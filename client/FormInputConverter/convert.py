from flask import Flask, request, jsonify,render_template
app=Flask(__name__)
def index():
    return render_template('/signup.html')
app.route('/api/consumer',methods=['POST'])
def process_json():
    content_type=request.headers('Content-Type')
    if(content_type=='application/json'):
        data=request.json
        print(data)
        return jsonify(data)
    