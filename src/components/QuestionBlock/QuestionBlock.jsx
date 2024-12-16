import styles from "./QuestionBlock.module.scss";
import questions from "../../utils/questions";

function QuestionBlock() {

    return (
        <>
            {questions.map((value) => (
                <div className={styles.questionsList}>
                    <div key={value.id} className={styles.question}>
                        <h1>{value.question}</h1>
                        <h2>{value.answer}</h2>
                    </div>
                </div>
            ))}
        </> 
    );
}

export default QuestionBlock;