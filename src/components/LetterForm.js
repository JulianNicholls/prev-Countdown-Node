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

    return false;
  };

  reset = event => {
    event.preventDefault();

    this.setState(() => ({ letters: '' }));
    document.getElementById('letters').focus();

    return false;
  };

  render() {
    const { letters } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.getWords}>
          <input
            type="text"
            id="letters"
            value={letters}
            onChange={this.updateLetters}
            autoComplete="off"
          />
          <button type="button" className="small-button" onClick={this.reset}>
            &times;
          </button>
          <button
            type="submit"
            className="big-button"
            disabled={letters.length < 7}
          >
            Countdown
          </button>
        </form>
      </div>
    );
  }
}

export default LetterForm;
