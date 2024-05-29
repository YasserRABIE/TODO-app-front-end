interface response<T> {
   status: number;
   success: boolean;
   data: T;
}

export async function MakeRequest<T>(endpoint: string, method: string, body?: object, headers = {}) {
   const options: RequestInit = {
      method: method,
      headers: {
         "Content-Type": "application/json",
         ...headers,
      },
   };

   if (method === "POST" && body) {
      options.body = JSON.stringify(body);
   }

   try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint, options);

      if (!response.ok) {
         throw new Error("Failed to fetch data");
      }

      const jsonData = (await response.json()) as response<T>;
      return { response: jsonData };
   } catch (error) {
      return { error: error };
   }
}
