# Telecom Chatbot

A simple AI-powered chatbot for telecom customer support, built using Flask, TensorFlow, and NLTK. The chatbot can respond to common queries related to account balance, data bundles, network issues, and more.

## Features

- **Natural Language Processing**: Uses NLTK for tokenization and lemmatization.
- **Machine Learning Model**: Trained neural network using TensorFlow/Keras for intent classification.
- **Web Interface**: Flask-based web app with a simple HTML/CSS/JS frontend.
- **Intent-Based Responses**: Responds based on predefined intents in `intents.json`.

## Project Structure

- `app.py`: Main Flask application that serves the web interface and handles chatbot responses.
- `chatbot.py`: Core chatbot logic, including model loading, prediction, and response generation.
- `new.py`: Script to train the chatbot model from intents data.
- `intents.json`: JSON file containing intents, patterns, and responses for the chatbot.
- `chatbot_model.keras`: Trained TensorFlow model file.
- `words.pkl` and `classes.pkl`: Pickled data for words and classes used in training.
- `templates/index.html`: HTML template for the web interface.
- `static/style.css` and `static/script.js`: CSS and JavaScript for the frontend.
- `readme.md`: This file.

## Requirements

- Python 3.x
- Flask
- TensorFlow
- NLTK
- NumPy
- Keras

## Installation

1. Clone or download the project.
2. Create a virtual environment (optional but recommended):
   ```
   python -m venv chatbot
   chatbot\Scripts\activate  # On Windows
   ```
3. Install dependencies:
   ```
   pip install flask tensorflow nltk numpy
   ```
4. Download NLTK data (if not already done):
   ```
   python -c "import nltk; nltk.download('punkt'); nltk.download('wordnet')"
   ```

## Usage

### Training the Model (if needed)

Run `new.py` to train the model:
```
python new.py
```
This will generate `chatbot_model.keras`, `words.pkl`, and `classes.pkl`.

### Running the Chatbot

Start the Flask app:
```
python app.py
```
Open your browser and go to `http://127.0.0.1:5000/` to interact with the chatbot.

## How It Works

1. **Training**: `new.py` processes `intents.json` to create training data (bag-of-words vectors) and trains a neural network to classify intents.
2. **Prediction**: `chatbot.py` loads the model and uses it to predict the intent of user messages.
3. **Response**: Based on the predicted intent, a random response is selected from the corresponding responses in `intents.json`.
4. **Web App**: `app.py` provides a web interface where users can type messages and receive responses.

## Customization

- Edit `intents.json` to add new intents, patterns, or responses.
- Retrain the model by running `new.py` after changes.
- Modify the web interface in `templates/index.html`, `static/style.css`, and `static/script.js`.

## License

This project is for educational purposes. Feel free to modify and use as needed.