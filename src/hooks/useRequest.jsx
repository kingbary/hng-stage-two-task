import axios from "axios";
import { useState } from "react";

export default function useRequest({ url, method, body, onSuccess }) {
  const [isLoading, setIsLoading] = useState(null);
  const [errors, setErrors] = useState(null);
  const [response, setResponse] = useState(null);

  async function sendRequest() {
    setIsLoading(true);
    try {
      const { data } = await axios[method](url, body);
      setResponse(data);
    } catch (error) {
      setErrors(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  if (onSuccess) {
    onSuccess(response);
  }
  return { sendRequest, response, errors, isLoading };
}
