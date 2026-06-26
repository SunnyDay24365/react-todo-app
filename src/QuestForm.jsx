import { useState } from 'react';

function QuestForm({ onAddQuest }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // ページのリロードを止める
        if (!text.trim()) return; // 空っぽなら何もしない
        onAddQuest(text); // 親（App.jsx）に文字を渡す
        setText(''); // 入力欄を空っぽにする
    }
    return (
        <form>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="新しいクエストを入力..." 
          />
        <button type="submit">追加</button>
    </form>
    );
}

export default QuestForm;