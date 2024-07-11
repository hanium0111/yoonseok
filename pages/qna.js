import Header from "./components/Header";
import QnaBox from "./components/qnaBox";
import styles from "../styles/Wrap.module.css";

export default function qna() {
  return (
    <div className={styles.wrap}>
      <Header />
      <QnaBox />
    </div>
  );
}
