import {useState, useCallback } from 'react'
// How to use this hook:
// This hook returns three things: isLoading, error, and the sendRequest function.
// call it like this at the top of your component:
// const {isLoading, error, sendRequest} = usehttp();
// Then when you are ready to send the request, you can call the sendRequest function. It takes an object with these parameters:
// sendRequest({
//      url: string,
//      method: string // this means GET, POST, DELETE, etc
//      body: json //these are the values being passed to the backend
//      headers: json // make sure to include { "Content-Type": "application/json" }
// })
const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
      setIsLoading(true);
      setError(null);
      try {
          const response = await fetch(
              requestConfig.url, {
                  method: requestConfig.method ? requestConfig.method : 'GET',
                  headers: requestConfig.headers ? requestConfig.headers : {},
                  body: requestConfig.body? JSON.stringify(requestConfig.body) : null
          }
          );
        
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
          const data = await response.json();
          applyData(data)

      } catch (err) {
          setError(err.message || 'Something went wrong!');
          console.log(err)
      }
      setIsLoading(false);
    }, []);
    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }
}

export default useHttp