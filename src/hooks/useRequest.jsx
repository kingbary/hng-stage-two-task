import axios from "axios";
import { useState } from "react";

export default function useRequest({ url, method, body, onSuccess }) {
  const [errors, setErrors] = useState(null);
  const [response, setResponse] = useState([]);

  async function sendRequest() {
    try {
      const { data } = await axios[method](url, body);
      setResponse(data.results);
    } catch (error) {
      setErrors(error.message);
    }
  }
  if (onSuccess) {
    onSuccess(response);
  }
  return { sendRequest, response, errors };
}
