import styles from "./QuestionBlock.module.scss";
import questions from "../../utils/questions";

function QuestionBlock() {

    return (
        <>
            <div className={styles.questionsList}>
                {questions.map((value) => (
                    <div key={value.id} className={styles.question}>
                        <h1>{value.question}</h1>
                        <h2>{value.answer}</h2>
                    </div>
                ))}
            </div>
        </> 
    );
}

export default QuestionBlock;