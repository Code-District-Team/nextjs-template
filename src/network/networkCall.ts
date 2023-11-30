export default class NetworkCall {
  static async makeApiCall<T>(request: any): Promise<T> {
    const options: RequestInit = {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed
      },
      // Include credentials if your API requires it
      // credentials: 'include',
    };

    if (request.data) {
      options.body = JSON.stringify(request.data);
    }

    try {
      const response = await fetch(request.url, options);

      if (!response.ok) {
        // Handle non-successful responses
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      // Parse and return the response data
      return await response.json();
      // return response;
    } catch (error: any) {
      // Handle network errors or other exceptions
      console.error("Error:", error.message);
      throw error;
    }
  }
}
