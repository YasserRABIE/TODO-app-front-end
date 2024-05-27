const url = "http://localhost:3000/";

interface response<T> {
   status: number;
   success: boolean;
   data: T;
}

export async function makeRequest<T>(endpoint: string, method: string = "GET", body?: object) {
   const options: RequestInit = {
      method: method,
      headers: {
         "Content-Type": "application/json",
      },
   };

   if (method !== "GET" && body) {
      options.body = JSON.stringify(body);
   }

   try {
      const response = await fetch(url + endpoint, options);

      if (!response.ok) {
         throw new Error("Failed to fetch data");
      }

      const jsonData = (await response.json()) as response<T>;
      return { response: jsonData };
   } catch (error) {
      return { error: "some err" };
   }
}
