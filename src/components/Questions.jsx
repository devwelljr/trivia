import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPIQuestion } from '../redux/actions';

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      // questions: [],
      idQuestion: 0,
    };
    this.findQuestion = this.findQuestion.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
  }

  componentDidMount() {
    this.findQuestion();
  }

  async findQuestion() {
    const { getQuestions } = this.props;
    const tokenApi = localStorage.getItem('token');
    const response = await getQuestions(tokenApi);
    // this.setState({
    //   questions: response,
    // });
    return response;
  }

  renderQuestion() {
    const { idQuestion } = this.state;
    const { questions } = this.props;
    const { results } = questions;
    const {
      category,
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswer,
      type,
    } = results[idQuestion];
    return (
      <div>
        <h4 data-testid="question-category">{ category }</h4>
        <h3 data-testid="question-text">{ question }</h3>
        {
          type === 'boolean'
            ? (
              <button
                data-testid="wrong-answer-0"
                type="button"
              >
                { incorrectAnswer }
              </button>)

            : incorrectAnswer.map((answer, index) => (
              <button
                data-testid={ `wrong-answer-${index}` }
                key={ index }
                type="button"
                value={ answer }
              >
                { answer }
              </button>
            ))
        }
        <button data-testid="correct-answer" type="button">{ correctAnswer }</button>
      </div>
    );
  }

  render() {
    const { questions } = this.props;
    const { results } = questions;
    return (
      <div>
        {
          results ? this.renderQuestion() : null
        }
      </div>
    );
  }
}

Questions.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  questions: PropTypes.shape({
    results: PropTypes.shape({
      category: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired,
      incorrect_answers: PropTypes.objectOf(PropTypes.string),
      type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
  name: state.loginReducer.name,
  questions: state.questionsReducer.questions,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (questions) => dispatch(fetchAPIQuestion(questions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
