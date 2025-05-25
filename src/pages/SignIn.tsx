
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export default function SignIn() {
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (values.email && values.password) {
      toast({ title: "Sign in successful", description: "Welcome back!" });
      setTimeout(() => navigate("/"), 1000);
    }
  }

  return (
    <main className="flex items-center justify-center min-h-[80vh] bg-gradient-to-tl from-primary/40 to-blue-200 font-sans">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl px-8 py-10 min-w-[300px] w-full max-w-sm animate-fade-in">
        <h2 className="text-3xl font-bold text-primary mb-7">Sign In</h2>
        <input
          className="border rounded w-full px-4 py-3 mb-4 outline-primary text-base"
          placeholder="Email"
          type="email"
          name="email"
          required
          value={values.email}
          onChange={handleChange}
        />
        <input
          className="border rounded w-full px-4 py-3 mb-6 outline-primary text-base"
          placeholder="Password"
          type="password"
          name="password"
          required
          value={values.password}
          onChange={handleChange}
        />
        <button className="w-full bg-primary py-3 rounded text-white font-bold hover:bg-primary/90 transition-all">
          Sign In
        </button>
      </form>
    </main>
  );
}
