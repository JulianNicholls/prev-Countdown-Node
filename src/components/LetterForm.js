import React from 'react';

class LetterForm extends React.Component {
  state = {
    letters: '',
  };

  updateLetters = evt => {
    this.setState({ letters: evt.target.value });
  };

  getWords = event => {
    event.preventDefault();

    this.props.getWords(this.state.letters);

    return false;
  };

  render() {
    const { letters } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.getWords}>
          <input
            type="search"
            id="letters"
            value={letters}
            onChange={this.updateLetters}
            autoComplete="off"
            autoCorrect="off"
          />
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
