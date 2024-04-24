import React from "react";
import { useState } from "react";

type UserType = {
  name: string;
  email: string;
  phone: string;
};

function LoginCheck() {
  const [user, setUser] = useState<UserType | null>({} as UserType); // ya usertype tipinde olacak yada null olacak dersek hata almayız.
  // ya da boş obje atıp as UserType dersek. Yani user type tipinde boş bir objeyi temsil eder.

  const handleLogin = () => {
    setUser({
      name: "Can",
      email: "ccsxa@gmail.com",
      phone: "55555441",
    });
  };

  const handleLogout = () => {
    setUser({} as UserType); // boş objede hata almamak için as veritipi kullanmalıyız
  };
  return (
    <div>
      <button onClick={handleLogin}>Giriş Yap</button>
      <button onClick={handleLogout}>Çıkış Yap</button>
      <div>
        {/* null'da olabilecğei için ? gelir yani opsiyoneldir */}
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
      </div>
    </div>
  );
}

export default LoginCheck;
