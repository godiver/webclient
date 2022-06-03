import React, { useState } from "react";

export const SignUp = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  return(
    <>
      <h1>アカウント作成</h1>
      <form>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </>
  )
};