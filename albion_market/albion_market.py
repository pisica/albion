from flask import Flask, render_template, request, jsonify

class MarketServer:

    app = Flask(__name__)

    @app.route('/')
    def index():
        return render_template('index.html', text='my json')

    def run(self):
        self.app.run(debug=True, host='0.0.0.0', port=5001)

server = MarketServer()
server.run()
