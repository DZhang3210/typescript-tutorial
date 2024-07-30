'use client'
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Button setCount={setCount}>Click Me</Button>
    </div>
  );
}
