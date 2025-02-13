import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, 
    ${props => `${props.theme.colors.primary}40`}, 
    ${props => `${props.theme.colors.secondary}40`}
  );
`;

const QuizContainer = styled.div`
  background: white;
  padding: 4rem;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Question = styled.div`
  margin-bottom: 2rem;
  max-width: 800px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  
  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 2px solid ${props => props.theme.colors.primary}40;
  border-radius: 0.5rem;
  background: white;
  cursor: pointer;
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  outline: none;
  transition: all 0.3s ease;

  &:hover, &:focus {
    border-color: ${props => props.theme.colors.primary};
  }

  option {
    padding: 0.5rem;
  }
`;

const DateSelectGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  ${Select} {
    flex: 1;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  z-index: 1000;
  text-align: center;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      transform: translate(-50%, -40%);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 999;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ErrorTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const SubmitButton = styled.button`
  max-width: 800px;
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const questions = [
  {
    question: "When did we officially restart our relationship?",
    type: "date",
    correctAnswer: {
      month: "September",
      day: "6",
      year: "2020"
    }
  },
  {
    question: "Which of these is Crisbel's hobby?",
    type: "single",
    options: ["Choose an answer", "Drawing", "Singing", "Gaming", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What makes Crisbel special?",
    type: "single",
    options: [
      "Choose an answer",
      "His kindness",
      "His cute face",
      "His intelligence",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  }
];

const months = [
  "Choose month",
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const generateDays = () => {
  const days = ["Choose day"];
  for (let i = 1; i <= 31; i++) {
    days.push(i.toString());
  }
  return days;
};

const generateYears = () => {
  const years = ["Choose year"];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 10; i <= currentYear; i++) {
    years.push(i.toString());
  }
  return years;
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, checkLoginStatus } = useAuth();
  const [answers, setAnswers] = useState({});
  const [showError, setShowError] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (checkLoginStatus()) {
      const from = location.state?.from || '/home';
      navigate(from);
    }
  }, []);

  const handleCloseError = () => {
    setShowError(false);
  };

  const handleOptionSelect = (questionIndex, value, dateType) => {
    if (dateType) {
      setAnswers(prev => ({
        ...prev,
        [questionIndex]: {
          ...prev[questionIndex],
          [dateType]: value
        }
      }));
    } else {
      setAnswers(prev => ({
        ...prev,
        [questionIndex]: value
      }));
    }
  };

  const handleSubmit = () => {
    const allCorrect = questions.every((q, index) => {
      if (q.type === 'date') {
        const dateAnswer = answers[index] || {};
        return (
          dateAnswer.month === q.correctAnswer.month &&
          dateAnswer.day === q.correctAnswer.day &&
          dateAnswer.year === q.correctAnswer.year
        );
      }
      return answers[index] === q.correctAnswer;
    });

    if (allCorrect) {
      login();
      // Reset form
      setAnswers({});
      // Just refresh the page
      window.location.reload();
    } else {
      setShowError(true);
    }
  };

  const allQuestionsAnswered = questions.every((q, index) => {
    if (q.type === 'date') {
      const dateAnswer = answers[index] || {};
      return (
        dateAnswer.month && dateAnswer.month !== "Choose month" &&
        dateAnswer.day && dateAnswer.day !== "Choose day" &&
        dateAnswer.year && dateAnswer.year !== "Choose year"
      );
    }
    return answers[index] && answers[index] !== "Choose an answer";
  });

  const renderQuestion = (q, index) => {
    if (q.type === 'date') {
      return (
        <DateSelectGroup>
          <Select
            value={(answers[index]?.month || '')}
            onChange={(e) => handleOptionSelect(index, e.target.value, 'month')}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </Select>
          <Select
            value={(answers[index]?.day || '')}
            onChange={(e) => handleOptionSelect(index, e.target.value, 'day')}
          >
            {generateDays().map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </Select>
          <Select
            value={(answers[index]?.year || '')}
            onChange={(e) => handleOptionSelect(index, e.target.value, 'year')}
          >
            {generateYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </DateSelectGroup>
      );
    }

    return (
      <Select
        value={answers[index] || ''}
        onChange={(e) => handleOptionSelect(index, e.target.value)}
      >
        {q.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    );
  };

  return (
    <Container>
      <QuizContainer>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          fontSize: '2.5rem',
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto 2rem auto'
        }}>
          Welcome to Sheila's Special Page
        </h2>
        <p style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '1.2rem',
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto 3rem auto'
        }}>
          Please answer these questions correctly to proceed
        </p>
        
        {questions.map((q, index) => (
          <Question key={index}>
            <h3>{q.question}</h3>
            {renderQuestion(q, index)}
          </Question>
        ))}

        <SubmitButton 
          onClick={handleSubmit}
          disabled={!allQuestionsAnswered}
        >
          Submit Answers
        </SubmitButton>

        {showError && (
          <>
            <Overlay onClick={handleCloseError} />
            <Modal>
              <ErrorTitle>❌ Access Denied</ErrorTitle>
              <ErrorMessage>
                <p style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Error 404: Love not Found</p>
                <p style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Sorry, some answers are incorrect. Ibig sabihin, di mo ko love, or hindi ikaw si Sheila. 😡😡😡 </p>
              </ErrorMessage>
              <CloseButton onClick={handleCloseError}>
                Try Again
              </CloseButton>
            </Modal>
          </>
        )}
      </QuizContainer>
    </Container>
  );
};

export default Login;
