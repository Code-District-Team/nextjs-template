import K from "@/constants";

export default class NetworkCall {
  static async makeApiCall<T>(
    request: any,
    cacheOptions: any = { cache: "no-store" },
  ) {
    const options: RequestInit = {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        ...request.headers,
      },
      // Include credentials if your API requires it
      // credentials: 'include',
    };

    if (request.body) {
      options.body = JSON.stringify(request.body);
    }

    try {
      let response;
      if (request.method == "get") {
        response = await fetch(request.url, cacheOptions);
      } else {
        response = await fetch(request.url, options);
      }
      await this.handleResponseStatus(response);

      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        return await response.json();
      } else {
        // Handle other content types (e.g., text/plain) here
      }
    } catch (error: any) {
      // Handle network errors or other exceptions
      console.error("Error:", error.message);
      throw error;
    }
  }

  /**
   * Handles different HTTP response statuses.
   * @param {Response} response - The fetch response object.
   */

  private static async handleResponseStatus(response: Response): Promise<void> {
    const statusCode = K.Network.StatusCode;
    const responseStatus = response.status;

    switch (responseStatus) {
      case statusCode.Successful:
        return; // Successful response, no action needed
      case statusCode.BadRequest:
        // Handle bad request
        break;
      case statusCode.Unauthorized:
        // Logout or redirect
        throw new Error("Unauthorized");
      case statusCode.Forbidden:
        // Redirect to Forbidden Fallback UI
        break;
      case statusCode.ServerError:
        console.error("Server error");
        // Redirect to Server Error Fallback UI
        break;
      default:
        throw new Error(`Error: ${responseStatus} - ${response.statusText}`);
    }
  }
}
