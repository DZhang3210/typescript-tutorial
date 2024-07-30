'use client'
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Button countValue="string" countHistory={["1", "2", "3"]}></Button>
    </div>
  );
}
