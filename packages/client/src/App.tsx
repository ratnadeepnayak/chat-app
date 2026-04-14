
import { useEffect, useState } from "react"
import "./index.css"
import { Button } from "@base-ui/react";


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
  
    <div className="p-4">
  <p className="font-bold">{message}</p>

 <Button>Click Me</Button>
  </div>)

  }

export default App