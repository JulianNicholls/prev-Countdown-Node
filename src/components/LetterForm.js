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
    console.log('submit');
    event.preventDefault();

    this.props.getWords(this.state.letters);

    return false;
  };

  reset = event => {
    event.preventDefault();

    this.setState(() => ({ letters: '' }));

    return false;
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.getWords}>
          <input
            type="text"
            id="letters"
            value={this.state.letters}
            onChange={this.updateLetters}
          />
          <button className="small-button" onClick={this.reset}>
            &times;
          </button>
          <button
            type="submit"
            className="big-button"
            disabled={this.state.letters.length < 8}
          >
            Countdown
          </button>
        </form>
      </div>
    );
  }
}

export default LetterForm;
