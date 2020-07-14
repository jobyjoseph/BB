import React, {useState, useContext} from "react";
import styles from "./style.module.scss";
import QuestionContext from "../QuestionItem/questionContext.js";

function Option(props) {

  const [answerClass, setAnswerClass] = useState(undefined);
  const options = useContext(QuestionContext);


  function optionClickHandler() {
    if(options.optionClicked) {
      return;
    }

    console.log(options.setOptionClicked(true));
    if( props.isAnswer === "yes" ) {
      setAnswerClass(styles.correct);
    } else {
      setAnswerClass(styles.wrong);
    }
  }

  let correctClass = undefined;
  if(options.optionClicked && props.isAnswer === "yes") {
    correctClass = styles.correct;
  }

  return (
    <div className={`${styles.optionContainer} ${answerClass || correctClass}`} onClick={optionClickHandler}>
      {props.children}
    </div>
  );
}

export default Option;
