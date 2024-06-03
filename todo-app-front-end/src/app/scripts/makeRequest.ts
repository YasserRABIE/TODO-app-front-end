interface response<T> {
   status: number;
   success: boolean;
   data: T;
   error?: string;
}

export async function MakeRequest<T>(endpoint: string, method: string, body?: object, headers = {}) {
   const options: RequestInit = {
      method: method,
      headers: {
         "Content-Type": "application/json",
         "ngrok-skip-browser-warning": "true",
         ...headers,
      },
   };

   if (method === "POST" && body) {
      options.body = JSON.stringify(body);
   }

   const response = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint, options);

   const jsonData = (await response.json()) as response<T>;
   return { response: jsonData };
}
