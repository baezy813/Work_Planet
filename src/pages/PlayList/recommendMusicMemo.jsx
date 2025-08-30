import  { useState } from "react";
import { useMemoStore } from "../../stores/useMusicMemoStore";

export default function MemoPage() {
  const { memos, addMemo, updateMemo, deleteMemo } = useMemoStore();

  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = () => {
    if (editingId && text.trim() !=="") {
      updateMemo(editingId, text);
      setEditingId(null);
    } 
    else if(text.trim()===""){
      alert("메모를 입력해주세요");
      return;
    }else{
      addMemo(text)
    }

    setText("");
  };

  const handleEdit = (memo) => {
    setEditingId(memo.id);
    setText(memo.text);
  };

  return (
    <div>
      <h1>노래 추천 & 코멘트</h1>

      <input
        type="text"
        placeholder="메모 입력"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit} required>
        {editingId ? "수정" : "작성"}
      </button>

      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <strong>{memo.song}:</strong> {memo.text}{" "}
            <button onClick={() => handleEdit(memo)}>수정</button>
            <button onClick={() => deleteMemo(memo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
