import React from 'react';

class LetterForm extends React.Component {
  state = {
    letters: ''
  };

  updateLetters = event => {
    const letters = event.target.value;
    this.setState(() => ({ letters }));
  };

  getWords = event => {
    event.preventDefault();

    this.props.getWords(this.state.letters);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          id="letters"
          value={this.state.letters}
          onChange={this.updateLetters}
        />
        <button
          className="big-button"
          onClick={this.getWords}
          disabled={this.state.letters.length < 8}
        >
          Countdown
        </button>
      </form>
    );
  }
}

export default LetterForm;
