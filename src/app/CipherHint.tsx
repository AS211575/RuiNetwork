"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

export default function CipherHint() {
  useEffect(() => {
    console.log("想要看图片吗？去寻找 id 为 'cipher-hint' 的元素吧喵~");
  }, []);

  return (
    <div id="cipher-hint" className={styles.hiddenHint}>
      MmlyTUlRNkRVYXdxZlFyRnhKMnFqQT09 &lt;- 这是第一层密文哦 下面还有第二层呢
      https://ruinet.work/photo.html
    </div>
  );
}
