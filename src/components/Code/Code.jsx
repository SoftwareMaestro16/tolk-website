import { useEffect } from "react";
import styles from "./Code.module.scss";
import Prism from "prismjs";
import "./CodePrism.css";
import "prismjs/components/prism-c"; 
import "prismjs/components/prism-typescript";

function Code() {

    useEffect(() => {
        Prism.highlightAll(); 
      }, []);

    return (
        <>
        <div className={styles.codeContainer}>
          <div className={styles.codeExample}>
            <h3>Tolk Code</h3>
            <pre>
              <code className="language-typescript">
                {
                `import "storage.tolk"

fun loadData() {
    ctxCounter = getContractData().beginParse().loadUint(32);
}

fun onInternalMessage(msgValue: int, msgFull: cell, msgBody: slice) {
    var cs = msgFull.beginParse();
    var flags = cs.loadMessageFlags();
    if (isMessageBounced(flags)) {
        return;
    }
    ...
}

get currentCounter(): int {
    loadData(); 
    return ctxCounter;
}`
                  }
              </code>
            </pre>
          </div>

          <div className={styles.codeExample}>
            <h3>FunC Code</h3>
            <pre>
              <code className="language-c">
                {
                `#include "storage.fc";

() load_data() impure {
  slice cs = get_data().begin_parse();
  ctx_counter = cs~load_uint(32);
}

() recv_internal(int msg_value, cell msg_full, slice msg_body) impure {
  slice cs = msg_full.begin_parse();
  int flags = cs.load_uint(4);
  if (flags & 1) {
    return ();
  }
  ...
}

int currentCounter() method_id {
  load_data(); 
  return ctx_counter;
}`
                  }
              </code>
            </pre>
          </div>
        </div>
        </>
    );
}

export default Code;